# Copyright 2017, OpenCensus Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import logging
import requests

from opencensus.trace import execution_context

log = logging.getLogger(__name__)

MODULE_NAME = 'requests'

REQUESTS_WRAP_METHODS = ['get', 'post', 'put', 'delete', 'head', 'options']
SESSION_WRAP_METHODS = 'request'
SESSION_CLASS_NAME = 'Session'


def trace_integration():
    """Wrap the mysql connector to trace it."""
    log.info('Integrated module: {}'.format(MODULE_NAME))

    # Wrap the requests functions
    for func in REQUESTS_WRAP_METHODS:
        requests_func = getattr(requests, func)
        wrapped = wrap_requests(requests_func)
        setattr(requests, requests_func.__name__, wrapped)

    # Wrap Session class
    setattr(requests, SESSION_CLASS_NAME, TraceSession)


def wrap_requests(requests_func):
    """Wrap the requests function to trace it."""
    def call(url, *args, **kwargs):
        _tracer = execution_context.get_opencensus_tracer()
        _span = _tracer.start_span()
        _span.name = '[requests]{}'.format(requests_func.__name__)

        # Add the requests url to attributes
        _tracer.add_attribute_to_current_span('requests/url', url)

        result = requests_func(url, *args, **kwargs)

        # Add the status code to attributes
        _tracer.add_attribute_to_current_span(
            'requests/status_code', str(result.status_code))

        _tracer.end_span()
        return result

    return call


def wrap_session_request(request_func):
    """Wrap the session function to trace it."""
    def call(method, url, *args, **kwargs):
        _tracer = execution_context.get_opencensus_tracer()
        _span = _tracer.start_span()
        _span.name = '[requests]{}'.format(method)

        # Add the requests url to attributes
        _tracer.add_attribute_to_current_span('requests/url', url)

        result = request_func(method, url, *args, **kwargs)

        # Add the status code to attributes
        _tracer.add_attribute_to_current_span(
            'requests/status_code', str(result.status_code))

        _tracer.end_span()
        return result

    return call


class TraceSession(requests.Session):

    def __init__(self, *args, **kwargs):
        request_func = getattr(self, SESSION_WRAP_METHODS)
        wrapped = wrap_session_request(request_func)
        setattr(self, request_func.__name__, wrapped)

        super(TraceSession, self).__init__(*args, **kwargs)

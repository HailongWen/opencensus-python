Search.setIndex({docnames:["index","trace/api/always_off_sampler","trace/api/always_on_sampler","trace/api/binary_format_propagation","trace/api/context_tracer","trace/api/execution_context","trace/api/file_exporter","trace/api/google_cloud_format_propagation","trace/api/index","trace/api/logging_exporter","trace/api/noop_tracer","trace/api/print_exporter","trace/api/probability_sampler","trace/api/span","trace/api/span_context","trace/api/stackdriver_exporter","trace/api/text_format_propagation","trace/api/trace_context_http_header_format_propagation","trace/api/trace_options","trace/api/tracer","trace/api/zipkin_exporter","trace/index","trace/usage"],envversion:53,filenames:["index.rst","trace/api/always_off_sampler.rst","trace/api/always_on_sampler.rst","trace/api/binary_format_propagation.rst","trace/api/context_tracer.rst","trace/api/execution_context.rst","trace/api/file_exporter.rst","trace/api/google_cloud_format_propagation.rst","trace/api/index.rst","trace/api/logging_exporter.rst","trace/api/noop_tracer.rst","trace/api/print_exporter.rst","trace/api/probability_sampler.rst","trace/api/span.rst","trace/api/span_context.rst","trace/api/stackdriver_exporter.rst","trace/api/text_format_propagation.rst","trace/api/trace_context_http_header_format_propagation.rst","trace/api/trace_options.rst","trace/api/tracer.rst","trace/api/zipkin_exporter.rst","trace/index.rst","trace/usage.rst"],objects:{"opencensus.trace":{execution_context:[5,0,0,"-"],span:[13,0,0,"-"],span_context:[14,0,0,"-"],trace_options:[18,0,0,"-"],tracer:[19,0,0,"-"]},"opencensus.trace.execution_context":{clear:[5,1,1,""],get_opencensus_tracer:[5,1,1,""],set_opencensus_tracer:[5,1,1,""]},"opencensus.trace.exporters":{file_exporter:[6,0,0,"-"],logging_exporter:[9,0,0,"-"],print_exporter:[11,0,0,"-"],stackdriver_exporter:[15,0,0,"-"],zipkin_exporter:[20,0,0,"-"]},"opencensus.trace.exporters.file_exporter":{FileExporter:[6,2,1,""]},"opencensus.trace.exporters.file_exporter.FileExporter":{emit:[6,3,1,""]},"opencensus.trace.exporters.logging_exporter":{LoggingExporter:[9,2,1,""]},"opencensus.trace.exporters.logging_exporter.LoggingExporter":{emit:[9,3,1,""]},"opencensus.trace.exporters.print_exporter":{PrintExporter:[11,2,1,""]},"opencensus.trace.exporters.print_exporter.PrintExporter":{emit:[11,3,1,""]},"opencensus.trace.exporters.stackdriver_exporter":{StackdriverExporter:[15,2,1,""],is_gae_environment:[15,1,1,""],set_attributes:[15,1,1,""],set_gae_attributes:[15,1,1,""]},"opencensus.trace.exporters.stackdriver_exporter.StackdriverExporter":{emit:[15,3,1,""],translate_to_stackdriver:[15,3,1,""]},"opencensus.trace.exporters.zipkin_exporter":{ZipkinExporter:[20,2,1,""]},"opencensus.trace.exporters.zipkin_exporter.ZipkinExporter":{emit:[20,3,1,""],translate_to_zipkin:[20,3,1,""]},"opencensus.trace.propagation":{binary_format:[3,0,0,"-"],google_cloud_format:[7,0,0,"-"],text_format:[16,0,0,"-"],trace_context_http_header_format:[17,0,0,"-"]},"opencensus.trace.propagation.binary_format":{BinaryFormatPropagator:[3,2,1,""],Header:[3,2,1,""]},"opencensus.trace.propagation.binary_format.BinaryFormatPropagator":{from_header:[3,3,1,""],to_header:[3,3,1,""]},"opencensus.trace.propagation.binary_format.Header":{span_id:[3,4,1,""],span_id_field_id:[3,4,1,""],trace_id:[3,4,1,""],trace_id_field_id:[3,4,1,""],trace_option:[3,4,1,""],trace_option_field_id:[3,4,1,""],version_id:[3,4,1,""]},"opencensus.trace.propagation.google_cloud_format":{GoogleCloudFormatPropagator:[7,2,1,""]},"opencensus.trace.propagation.google_cloud_format.GoogleCloudFormatPropagator":{from_header:[7,3,1,""],to_header:[7,3,1,""]},"opencensus.trace.propagation.text_format":{TextFormatPropagator:[16,2,1,""]},"opencensus.trace.propagation.text_format.TextFormatPropagator":{from_carrier:[16,3,1,""],to_carrier:[16,3,1,""]},"opencensus.trace.propagation.trace_context_http_header_format":{TraceContextPropagator:[17,2,1,""]},"opencensus.trace.propagation.trace_context_http_header_format.TraceContextPropagator":{from_header:[17,3,1,""],to_header:[17,3,1,""]},"opencensus.trace.samplers":{always_off:[1,0,0,"-"],always_on:[2,0,0,"-"],probability:[12,0,0,"-"]},"opencensus.trace.samplers.always_off":{AlwaysOffSampler:[1,2,1,""]},"opencensus.trace.samplers.always_off.AlwaysOffSampler":{should_sample:[1,3,1,""]},"opencensus.trace.samplers.always_on":{AlwaysOnSampler:[2,2,1,""]},"opencensus.trace.samplers.always_on.AlwaysOnSampler":{should_sample:[2,3,1,""]},"opencensus.trace.samplers.probability":{ProbabilitySampler:[12,2,1,""],get_lower_long_from_trace_id:[12,1,1,""]},"opencensus.trace.samplers.probability.ProbabilitySampler":{should_sample:[12,3,1,""]},"opencensus.trace.span":{Span:[13,2,1,""],format_span_json:[13,1,1,""]},"opencensus.trace.span.Span":{add_attribute:[13,3,1,""],add_link:[13,3,1,""],add_time_event:[13,3,1,""],children:[13,4,1,""],finish:[13,3,1,""],span:[13,3,1,""],start:[13,3,1,""]},"opencensus.trace.span_context":{SpanContext:[14,2,1,""],generate_span_id:[14,1,1,""],generate_trace_id:[14,1,1,""]},"opencensus.trace.span_context.SpanContext":{check_span_id:[14,3,1,""],check_trace_id:[14,3,1,""]},"opencensus.trace.trace_options":{TraceOptions:[18,2,1,""]},"opencensus.trace.trace_options.TraceOptions":{get_enabled:[18,4,1,""]},"opencensus.trace.tracer":{Tracer:[19,2,1,""]},"opencensus.trace.tracer.Tracer":{add_attribute_to_current_span:[19,3,1,""],current_span:[19,3,1,""],end_span:[19,3,1,""],finish:[19,3,1,""],get_tracer:[19,3,1,""],should_sample:[19,3,1,""],span:[19,3,1,""],store_tracer:[19,3,1,""],trace_decorator:[19,3,1,""]},"opencensus.trace.tracers":{context_tracer:[4,0,0,"-"],noop_tracer:[10,0,0,"-"]},"opencensus.trace.tracers.context_tracer":{ContextTracer:[4,2,1,""]},"opencensus.trace.tracers.context_tracer.ContextTracer":{add_attribute_to_current_span:[4,3,1,""],current_span:[4,3,1,""],end_span:[4,3,1,""],finish:[4,3,1,""],get_trace_json:[4,3,1,""],span:[4,3,1,""],start_span:[4,3,1,""]},"opencensus.trace.tracers.noop_tracer":{NoopTracer:[10,2,1,""]},"opencensus.trace.tracers.noop_tracer.NoopTracer":{add_attribute_to_current_span:[10,3,1,""],current_span:[10,3,1,""],end_span:[10,3,1,""],finish:[10,3,1,""],list_collected_spans:[10,3,1,""],span:[10,3,1,""],start_span:[10,3,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"\u00f5\u00f6u":3,"byte":[3,12,13,18],"class":[1,2,3,4,6,7,9,10,11,12,13,14,15,16,17,18,19,20],"default":[6,9,11,15,19,20,22],"export":[4,8,19],"final":13,"float":12,"function":19,"import":[9,22],"int":[3,7,13,14,20],"long":12,"new":[4,6,9,10,11,15,19,20],"return":[1,2,3,4,7,10,11,12,13,14,15,16,17,18,19,20],"true":[2,3,12,13,15],"try":14,"var":15,And:[16,22],For:22,The:[0,3,4,6,7,9,10,11,12,13,15,16,19,20,22],Then:22,There:22,__name__:22,_ah:22,a0b72ca15c1a4bd18962d0ac59dc90b9:3,abl:0,accept:14,accord:19,activ:22,add:[4,5,7,10,13,19,22],add_attribut:13,add_attribute_to_current_span:[4,10,19],add_link:13,add_time_ev:13,added:13,alia:3,all:[2,4,10,13,19,22],also:[9,13,14,22],altern:22,alwai:[1,2,22],always_off:1,always_on:2,alwaysoffsampl:[8,19,22],alwaysonsampl:[8,19,22],ani:[1,22],annot:[13,20],apach:22,api:[9,14,20,22],app:22,appear:13,append:13,applic:[13,19,22],arg:4,associ:13,assum:12,attach:9,attribut:[4,10,13,15,19],attribute_kei:[4,10,13,19],attribute_valu:[4,10,13,19],autom:22,automat:[14,15,22],avail:22,backgroundthreadtransport:[6,9,11,15,20],base:[1,2,3,4,6,7,9,10,11,12,13,14,15,16,17,18,19,20],basic:16,batchwrit:15,bdist_wheel:22,becaus:[1,2],being:14,belong:13,below:22,between:13,bin:22,binari:[3,7],binary_format:3,binaryencod:3,binaryformatpropag:8,bit:[3,14,18],bitmap:18,blacklist_path:22,blob:3,bool:[3,7,12,13,14,18,19],both:22,bound:12,boundari:13,built:22,call:13,can:[9,13,22],cannot:14,carrier:16,causal:13,censu:[3,22],charact:14,check:[14,22],check_span_id:14,check_trace_id:14,child:[13,14,22],child_span:13,children:13,choos:22,classifi:20,clear:5,client:[9,15],cloud:[0,7,9,15],cloud_handl:9,cloudlogginghandl:9,collect:[6,9,10,11,13,15,22],collector:20,com:[3,15],command:22,common:[13,15],config_integr:22,configur:22,connect:22,connector:22,contain:[3,14,22],context:[3,7,8,9,10,16,17,19,22],context_trac:[4,13,22],contexttrac:[4,13,22],continu:13,convert:[3,7,14,17],creat:[4,6,9,10,11,13,15,16,19,20,22],cross:13,current:[4,10,12,13,14,18,19,22],current_span:[4,10,19],data:[9,13,20],databas:22,decis:[12,19],decor:19,deseri:[3,22],detect:15,determin:19,develop:0,dict:[4,6,9,11,13,15,16,20],dictionari:20,differ:22,digit:14,dist:22,distribut:13,do_something_to_trac:22,doc:15,document:22,doe:13,don:[1,22],driver:22,duplic:22,dure:13,each:13,element:10,els:[12,19],emit:[6,9,11,15,20],enabl:[3,7,10,18,19,22],encapsul:[4,14,19],encod:3,encourag:22,end:[4,10,13,19,22],end_point:20,end_span:[4,10,13,19,22],end_tim:13,endian:12,endpoint:[20,22],engin:22,ensur:14,env:15,environ:[0,15,22],equal:22,event:13,everi:2,everyth:22,exampl:[3,9,22],exclud:22,execut:8,execution_context:5,exit:13,explicitli:22,ext:22,extend:[6,9,11,15,20],extract:[3,7,16,17,22],fail:14,fals:[1,12,14,19],field:[3,14,16,18],file:[8,22],file_export:[6,22],file_nam:[6,22],fileexport:[6,19,22],finish:[4,9,10,13,19],first:14,fix:12,fixedratesampl:19,flag:[13,14],flask_middlewar:22,flaskmiddlewar:22,flexibl:22,follow:[19,22],forc:19,fore:0,form:[13,16],format:[3,4,7,13,14,15,17,20,22],format_span_json:13,from:[3,5,6,7,9,10,11,13,14,15,16,17,18,20,22],from_carri:16,from_head:[3,7,14,17,22],gae:15,gap:13,gcp_exporter_project:22,gener:[3,7,14,16,17,22],generate_span_id:14,generate_trace_id:14,get:[4,5,18,22],get_en:18,get_lower_long_from_trace_id:12,get_opencensus_trac:5,get_trac:19,get_trace_json:4,github:3,given:14,global:[9,18],googl:[0,7,9,15,22],google_cloud_format:[7,22],googlecloudexport:19,googlecloudformatpropag:[8,22],guid:0,handler:9,has:[13,16],have:[13,18,22],header:[3,7,14,17,22],health:22,helper:13,hex:[3,14],highli:[13,22],hold:[13,16],host:20,host_nam:20,how:22,http:[3,7,15,17,20,22],identifi:[13,14],ignor:22,implement:[6,7,9,10,11,15,20],includ:[14,22],inclus:13,indic:[13,14,18],individu:13,inform:[0,4,10,16,19,22],initi:[9,22],inject:16,instal:0,installed_app:22,instanc:19,instead:22,instrument:3,integ:[3,14],interfac:[4,10],interv:13,is_gae_environ:15,its:[13,22],json:[4,6,13,15,22],just:[13,19,22],kei:[4,10,13,19],kilobyt:13,kwarg:4,last:18,later:7,length:3,less:[12,13],librari:[0,22],like:[7,9],line:22,link:13,list:[10,13,20,22],list_collected_span:10,littl:12,local:[5,6],localhost:[20,22],log:[8,14,20,22],logging_export:9,loggingexport:[9,19],lower:12,made:22,make:12,manag:22,master:3,mean:18,measur:22,messag:[13,14],method:[3,10,13,22],middlewar:22,middleware_class:22,more:[0,22],must:[13,14],my_servic:[20,22],name:[4,6,10,13,19,20,22],need:[3,7,13,22],nest:22,node:13,none:[4,9,12,13,14,15,18,19,22],noop:8,noop_trac:10,nooptrac:10,normal:22,nox:22,number:[3,14],object:[3,4,6,7,9,10,11,13,14,15,16,17,18,19,20],offici:22,one:14,onli:[14,18],opencensu:[1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20],opencensus_param:22,opencensus_trac:22,opencensus_trace_param:22,opencensusmiddlewar:22,ops:10,option:[3,6,8,9,11,13,14,15,16,19,20,22],order:12,other:[6,7,9,11,14,15,20,22],out:11,outbound:22,output:6,packag:22,param:[4,10,13,19],paramet:[3,4,6,7,9,10,11,12,13,14,15,16,17,18,19,20,22],parent:[4,13,19],parent_span:13,pars:[3,7],pass:[13,22],path:20,peek:10,per:13,perform:22,pip:[0,22],pipenv:22,platform:0,pleas:0,popular:22,port:20,print:[8,22],print_export:[11,22],printexport:[11,19,22],probabilitysampl:[8,22],probabl:[12,22],process:[13,17],product:22,project:15,project_id:[15,22],propag:[8,14,19],provid:[16,22],psycopg2:22,py2:22,py34:22,py3:22,python:[0,9],python_vers:22,queri:20,random:14,randomli:14,rate:[12,22],receiv:22,recommend:13,refer:[0,15],regardless:22,relat:[15,22],relationship:13,remov:10,report:[10,22],repositori:22,repres:[14,18],request:[1,2,3,4,7,8,12,14,17],requir:13,resourc:22,rest:[15,19],root:13,run:22,same:13,same_process_as_parent_span:13,sampl:[1,2,10,12,19,22],sampler:[8,19],sampling_r:22,save:22,script:22,section:22,see:[3,15,20,22],send:[10,15,19,20,22],serial:[3,22],server:[20,22],servic:20,service_nam:20,set:[0,13,14,15,19,22],set_attribut:15,set_gae_attribut:15,set_opencensus_trac:5,setup:[0,22],share:13,should:[6,9,10,11,15,20],should_sampl:[1,2,12,19],show:22,singl:[13,22],softwar:22,sourc:[1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,22],span1:22,span1_child1:22,span1_child2:22,span2:22,span:[4,6,8,9,10,11,15,16,19,20,22],span_context:[3,4,7,14,16,17,19,22],span_id:[3,4,10,13,14,16,19],span_id_field_id:3,spancontext:[3,4,7,14,16,17,19,22],spanid:14,spec:3,specif:13,specifi:22,stack:[10,13],stack_trac:13,stackdriv:[8,9,14,22],stackdriver_export:[15,22],stackdriverexport:[15,22],start:[4,10,13,22],start_span:[4,10,22],start_tim:13,stat:22,statement:22,statu:[13,22],stdout:22,store_trac:19,str:[4,6,7,10,12,13,14,15,17,18,19,20],string:[3,7,17],suit:22,support:[7,22],sync:[6,9,11,15,20],synctransport:[6,9,11,15,20],system:0,test:5,text_format:16,textformatpropag:[8,22],than:[12,13,14],them:11,thi:[3,7,13,16,19,22],thread:5,thread_loc:19,time:13,time_ev:13,timeev:13,to_carri:16,to_head:[3,7,17,22],tox:22,trace:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20],trace_context_http_header_format:17,trace_decor:19,trace_id:[1,2,3,12,14,16,20],trace_id_field_id:3,trace_integr:22,trace_opt:[3,14,18],trace_option_field_id:3,trace_options_byt:18,tracecontext:10,tracecontextpropag:8,traceid:14,traceopt:[14,18],tracer:[5,8,9,13,22],tracer_modul:22,transfer:13,translat:[15,20],translate_to_stackdriv:15,translate_to_zipkin:20,transport:[6,9,11,15,20],tree:13,tupl:3,turn:22,two:[13,22],type:[3,4,6,7,9,10,11,12,13,14,15,16,17,18,19,20,22],underli:22,uniqu:[13,14],unit:22,unit_test:22,updat:[4,10,19],url:22,use:[9,13,22],used:[5,10],using:[3,4,7,10,13,16,17,19,20,22],util:[16,22],uuid:14,valu:[3,4,7,10,12,13,14,19],variou:22,version:17,version_id:3,want:[1,2,22],warn:14,web:[19,22],webapp2:22,welcom:22,well:22,what:22,when:[9,10,13,20,22],whether:[14,19],which:[3,7,10,13,14,16,17,18,22],whl:22,within:[4,13,14,19,22],wrap:22,write:22,yet:22,you:[13,22],your:[0,22],your_cloud_project:22,your_spans_list:9,zero:14,zipkin:[7,8],zipkin_export:20,zipkin_exporter_host_nam:22,zipkin_exporter_port:22,zipkin_exporter_service_nam:22,zipkinexport:[19,20]},titles:["Welcome to OPENCENSUS's documentation!","Sampler - AlwaysOffSampler","Sampler - AlwaysOnSampler","Propagator - BinaryFormatPropagator","Context Tracer","Execution Context","Exporter - File Exporter","Propagator - GoogleCloudFormatPropagator","API Documentation","Exporter - Logging Exporter","Noop Tracer","Exporter - Print Exporter","Sampler - ProbabilitySampler","Span","Span Context","Exporter - Stackdriver Exporter","Propagator - TextFormatPropagator","Propagator - TraceContextPropagator","Trace Options","Request Tracer","Exporter - Zipkin Exporter","&lt;no title&gt;","OpenCensus Trace for Python"],titleterms:{"export":[6,9,11,15,20,22],alwaysoffsampl:1,alwaysonsampl:2,api:8,basic:22,binaryformatpropag:3,blacklist:22,context:[4,5,14],contribut:22,custom:22,develop:22,disclaim:22,django:22,document:[0,8],execut:5,file:6,flask:22,framework:22,get:0,googlecloudformatpropag:7,instal:22,integr:22,licens:22,log:9,mysql:22,noop:10,opencensu:[0,22],option:18,path:22,postgresql:22,print:11,probabilitysampl:12,propag:[3,7,16,17,22],python:22,request:[19,22],sampler:[1,2,12,22],servic:22,span:[13,14],sqlalchemi:22,stackdriv:15,start:0,test:22,textformatpropag:16,trace:[18,22],tracecontextpropag:17,tracer:[4,10,19],usag:22,welcom:0,zipkin:20}})
"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[3663],{99926:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return s},default:function(){return h}});var r,n=t(63366),i=(t(67294),t(64983)),o=t(20370),l=["components"],s={},m=(r="ThankYou",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),c={_frontmatter:s},p=o.Z;function h(e){var a=e.components,t=(0,n.Z)(e,l);return(0,i.kt)(p,Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"date"},"28th April 2021"),(0,i.kt)("h2",{id:"-new-features",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#-new-features","aria-label":" new features permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🌟 New features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can now monitor the state of all live threads and heap using ",(0,i.kt)("a",{parentName:"li",href:"type://ManagementService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/management/ManagementService.html"},"type://ManagementService"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3463"},"#3463"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Server\nServer.builder()\n      .serviceUnder("/internal/management/", ManagementService.of())\n      ...\n// Client\nWebClient client = ...\nclient.get("/internal/management/jvm/threaddump").aggregate().join();\nclient.get("/internal/management/jvm/heapdump").aggregate().join();\n'))),(0,i.kt)("li",{parentName:"ul"},"You can now set the abbreviated service name that is similar to the abbreviated logger name of\n",(0,i.kt)("a",{parentName:"li",href:"http://logback.qos.ch/manual/layouts.html#ClassicPatternLayout"},"Logback")," via\n",(0,i.kt)("a",{parentName:"li",href:"type://ServiceNaming#shorten(int):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceNaming.html#shorten(int)"},"type://ServiceNaming#shorten(int)"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3453"},"#3453"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Server.builder()\n      .defaultServiceNaming(ServiceNaming.shorten(30))\n      ...\n")))),(0,i.kt)("h2",{id:"️-bug-fixes",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🛠️ Bug fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You no longer see a wrong ",(0,i.kt)("inlineCode",{parentName:"li"},"serviceName")," for annotated services when ",(0,i.kt)("a",{parentName:"li",href:"type://ServiceNaming:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceNaming.html"},"type://ServiceNaming")," is used. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3468"},"#3468"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ServiceRequestContext.config().defaultServiceName()")," no longer returns ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," if a default service name\nis specified."))),(0,i.kt)("li",{parentName:"ul"},"You no longer see a ",(0,i.kt)("a",{parentName:"li",href:"type://ClosedStreamException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/stream/ClosedStreamException.html"},"type://ClosedStreamException")," when a gRPC call is cancelled by a client. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3452"},"#3452")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3455"},"#3455")),(0,i.kt)("li",{parentName:"ul"},"You no longer see the ",(0,i.kt)("inlineCode",{parentName:"li"},"Failed to force-initialize 'io.netty.channel.unix.Socket'")," error message when\nArmeria attempts to load native libraries. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3457"},"#3457")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3485"},"#3485")),(0,i.kt)("li",{parentName:"ul"},"You can now specify an absolute URI using ",(0,i.kt)("a",{parentName:"li",href:"type://WebClient#prepare():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClient.html#prepare()"},"type://WebClient#prepare()"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3479"},"#3479"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can specify a query string both in a path string and via\n",(0,i.kt)("a",{parentName:"li",href:"type://WebClientRequestPreparation#queryParam(String,Object):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClientRequestPreparation.html#queryParam(java.lang.String,java.lang.Object)"},"type://WebClientRequestPreparation#queryParam(String,Object)"),"."))),(0,i.kt)("li",{parentName:"ul"},"You no longer see redundant parameters in ",(0,i.kt)("a",{parentName:"li",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService")," when Kotlin data class is used. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3454"},"#3454")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3461"},"#3461")),(0,i.kt)("li",{parentName:"ul"},"You no longer see an ",(0,i.kt)("inlineCode",{parentName:"li"},"IllegalStateException")," when a ",(0,i.kt)("a",{parentName:"li",href:"type://StreamMessage#of(Path):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/stream/StreamMessage.html#of(java.nio.file.Path)?full"},"type://StreamMessage#of(Path)?full")," or\n",(0,i.kt)("a",{parentName:"li",href:"type://StreamMessage#of(File):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/stream/StreamMessage.html#of(java.io.File)?full"},"type://StreamMessage#of(File)?full")," is used in a client-side. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3450"},"#3450")),(0,i.kt)("li",{parentName:"ul"},"You no longer have to specify a custom ",(0,i.kt)("a",{parentName:"li",href:"type://JacksonRequestConverterFunction:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/JacksonRequestConverterFunction.html"},"type://JacksonRequestConverterFunction")," or\n",(0,i.kt)("a",{parentName:"li",href:"type://JacksonResponseConverterFunction:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/JacksonResponseConverterFunction.html"},"type://JacksonResponseConverterFunction")," for Kotlin data class and Scala case class if you add\n",(0,i.kt)("inlineCode",{parentName:"li"},"com.fasterxml.jackson.module:jackson-module-kotlin")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"com.fasterxml.jackson.module:jackson-module-scala"),"\nas a dependency. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3458"},"#3458")),(0,i.kt)("li",{parentName:"ul"},"You no longer see an ",(0,i.kt)("inlineCode",{parentName:"li"},"EofException")," when writing to a timed-out response stream in ",(0,i.kt)("a",{parentName:"li",href:"type://JettyService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/jetty/JettyService.html"},"type://JettyService"),".\nIt's discarded silently. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3460"},"#3460")),(0,i.kt)("li",{parentName:"ul"},"You no longer see a ",(0,i.kt)("a",{parentName:"li",href:"type://CancellationException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/CancellationException.html"},"type://CancellationException")," when an exception is raised by\na ",(0,i.kt)("a",{parentName:"li",href:"type://FilteredStreamMessage:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/stream/FilteredStreamMessage.html"},"type://FilteredStreamMessage"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3449"},"#3449")),(0,i.kt)("li",{parentName:"ul"},"You no longer see the ",(0,i.kt)("a",{parentName:"li",href:"type://RequestTimeoutException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/RequestTimeoutException.html"},"type://RequestTimeoutException")," log message when a response stream fails due to\ncancellation or timeout. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3459"},"#3459")),(0,i.kt)("li",{parentName:"ul"},"A timeout exception is created only when a request or response is timed out. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3462"},"#3462")),(0,i.kt)("li",{parentName:"ul"},"Armeria now rejects all CONNECT requests explicitly, except HTTP/2 CONNECT requests with a ",(0,i.kt)("inlineCode",{parentName:"li"},":protocol"),"\npseudo header. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3482"},"#3482"))),(0,i.kt)("h2",{id:"-dependencies",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"⛓ Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Caffeine 2.8.8 → 2.9.0"),(0,i.kt)("li",{parentName:"ul"},"Dropwizard 2.0.20 → 2.0.21"),(0,i.kt)("li",{parentName:"ul"},"Dropwizard metrics 4.1.18 → 4.1.20"),(0,i.kt)("li",{parentName:"ul"},"gRPC 1.36.1 → 1.37.0"),(0,i.kt)("li",{parentName:"ul"},"Micrometer 1.6.5 → 1.6.6"),(0,i.kt)("li",{parentName:"ul"},"Jackson 2.12.2 → 2.12.3"),(0,i.kt)("li",{parentName:"ul"},"java-jwt 3.14.0 → 3.15.0"),(0,i.kt)("li",{parentName:"ul"},"Reactor 3.4.4 → 3.4.5"),(0,i.kt)("li",{parentName:"ul"},"RxJava 3.0.11 → 3.0.12"),(0,i.kt)("li",{parentName:"ul"},"scalapb-runtime_2.12 0.11.1 → 0.11.2"),(0,i.kt)("li",{parentName:"ul"},"Spring Boot 2.4.4 → 2.4.5"),(0,i.kt)("li",{parentName:"ul"},"Spring web 5.3.5 → 5.3.6")),(0,i.kt)("h2",{id:"-thank-you",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🙇 Thank you"),(0,i.kt)(m,{usernames:["anuraaga","fclemonschool","heowc","hexoul","ikhoon","minwoox","trustin","Waynefn"],mdxType:"ThankYou"}))}h.isMDXComponent=!0},20370:function(e,a,t){t(88025);var r=t(1923),n=t(25444),i=t(67294),o=t(55746),l=t(8284),s=t(96759),m=t(46731),c=t(9396),p=r.Z.Title,h=Object.keys(l)[0],u=d(h);function d(e){return e.substring(e.lastIndexOf("/")+1)}a.Z=function(e){var a={},t={},r={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(o).forEach((function(e){var t=e[0],r=e[1];a[r]=t})),Object.entries(l).forEach((function(e){var a=e[0],r=e[1];t[r]=a}));var v=(0,c.Z)(e.location),k=e.version||d(v);return k.match(/^[0-9]/)||(k=void 0),i.createElement(m.Z,Object.assign({},e,{candidateMdxNodes:[],index:r,prefix:"release-notes",pageTitle:k?k+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),k&&k!==u?i.createElement(s.Ch,null,"You're seeing the release note of an old version. Check out"," ",i.createElement(n.Link,{to:h},"the latest release note"),"."):"",k?i.createElement(p,{id:"release-notes",level:1},i.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),k," release notes"):"",e.children)}},55746:function(e){e.exports=JSON.parse('{"/news/20230426-newsletter-5":"Armeria Newsletter vol. 5","/news/20220714-newsletter-4":"Armeria Newsletter vol. 4","/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},8284:function(e){e.exports=JSON.parse('{"/release-notes/1.24.3":"v1.24.3","/release-notes/1.24.2":"v1.24.2","/release-notes/1.24.1":"v1.24.1","/release-notes/1.24.0":"v1.24.0","/release-notes/1.23.1":"v1.23.1","/release-notes/1.23.0":"v1.23.0","/release-notes/1.22.1":"v1.22.1","/release-notes/1.22.0":"v1.22.0","/release-notes/1.21.0":"v1.21.0","/release-notes/1.20.3":"v1.20.3","/release-notes/1.20.2":"v1.20.2","/release-notes/1.20.1":"v1.20.1","/release-notes/1.20.0":"v1.20.0","/release-notes/1.19.0":"v1.19.0","/release-notes/1.18.0":"v1.18.0","/release-notes/1.17.2":"v1.17.2"}')}}]);
//# sourceMappingURL=component---src-pages-release-notes-1-7-0-mdx-ab59ac4974b61a79108e.js.map
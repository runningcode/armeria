"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[8108],{22855:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return c}});var n,i=a(63366),r=(a(67294),a(64983)),l=a(20370),s=["components"],o={},p=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),m={_frontmatter:o},u=l.Z;function c(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)(u,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"date"},"30th March 2020"),(0,r.kt)("h2",{id:"-new-features",style:{position:"relative"}},(0,r.kt)("a",{parentName:"h2",href:"#-new-features","aria-label":" new features permalink",className:"anchor before"},(0,r.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🌟 New features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can now make your client connect via a SOCKS 4, SOCKS 5 or HTTP CONNECT proxy server. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2321"},"#2321")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2496"},"#2496"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ClientFactory.builder()\n             .proxyConfig(ProxyConfig.socks4(socksProxyServer.address()))\n             .build();\n"))),(0,r.kt)("li",{parentName:"ul"},"You can now configure to send ",(0,r.kt)("inlineCode",{parentName:"li"},"PING")," on idle HTTP/2 connections. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1263"},"#1263")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2409"},"#2409"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ClientFactory.builder()\n             .http2PingTimeoutMillis(3000)\n             .build();\n"))),(0,r.kt)("li",{parentName:"ul"},"You can now make an alias for the pre-defined MDC key when using ",(0,r.kt)("inlineCode",{parentName:"li"},"RequestContextExportingAppender"),". ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2512"},"#2512")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2531"},"#2531"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<export>request_id=req.id</export> \x3c!-- request_id is an alias for the built-in property. --\x3e\n<export>my_foo_bar=attr:com.example.Foo#ATTR_BAR</export>    \x3c!-- my_foo_bar is an alias. --\x3e\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Please check out ",(0,r.kt)("a",{parentName:"li",href:"http://armeria.dev/docs/advanced-logging#customizing-mdc-keys"},"http://armeria.dev/docs/advanced-logging#customizing-mdc-keys")," for more information."))),(0,r.kt)("li",{parentName:"ul"},"You can now set an example path and queries for ",(0,r.kt)("inlineCode",{parentName:"li"},"DocService"),". ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2195"},"#2195")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2546"},"#2546")),(0,r.kt)("li",{parentName:"ul"},"You can now customize the default log name of a service. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2626"},"#2626"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'sb.route().addRoute(...).defaultLogName("name").build(service);\n'))),(0,r.kt)("li",{parentName:"ul"},"You can now access a parent log from a child log using ",(0,r.kt)("inlineCode",{parentName:"li"},"RequestLogAccess.parent()"),". ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2599"},"#2599")),(0,r.kt)("li",{parentName:"ul"},"gRPC client now supports gRPC ",(0,r.kt)("inlineCode",{parentName:"li"},"CallCredentials"),". ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2619"},"#2619")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2622"},"#2622")),(0,r.kt)("li",{parentName:"ul"},"You can now send customized responses from ",(0,r.kt)("inlineCode",{parentName:"li"},"ThrottlingService")," using ",(0,r.kt)("inlineCode",{parentName:"li"},"ThrottlingAcceptHandler")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ThrottlingRejectHandler"),". ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2482"},"#2482")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2503"},"#2503")),(0,r.kt)("li",{parentName:"ul"},"You can now use advanced throttling algorithm based on Token-Bucket rate-limiting and Bucket4j library. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2566"},"#2566")),(0,r.kt)("li",{parentName:"ul"},"You can now create your own storage to store ",(0,r.kt)("inlineCode",{parentName:"li"},"RequestContext"),". ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2514"},"#2514")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2610"},"#2610"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// You should implement `RequestContextStorageProvider` and use SPI to return the `RequestContextStorage`.\npublic class CustomizedStorageProvider implements RequestContextStorageProvider {\n    @Override\n    public RequestContextStorage newStorage() {\n        return new CustomizedStorage();\n    }\n}\n")))),(0,r.kt)("h2",{id:"-improvements",style:{position:"relative"}},(0,r.kt)("a",{parentName:"h2",href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"},(0,r.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"📈 Improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can now set timeout using ",(0,r.kt)("inlineCode",{parentName:"p"},"TimeoutMode.")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2535"},"#2535")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2571"},"#2571")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Before\nctx.extendResponseTimeoutMillis(10000);\nctx.setResponseTimeoutAfterMillis(10000);\n\n// After\nctx.setResponseTimeoutMillis(TimeoutMode.EXTEND, 10000);\nctx.setResponseTimeoutMillis(TimeoutMode.SET_FROM_NOW, 10000);\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set(Request|Response)Timeout")," is now undeprecated.")))),(0,r.kt)("h2",{id:"️-bug-fixes",style:{position:"relative"}},(0,r.kt)("a",{parentName:"h2",href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"},(0,r.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🛠️ Bug fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DNS resolution is timed out after ",(0,r.kt)("inlineCode",{parentName:"li"},"queryTimeoutMillis"),". ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2623"},"#2623")),(0,r.kt)("li",{parentName:"ul"},"You can now return ",(0,r.kt)("inlineCode",{parentName:"li"},"Single<HttpResponse>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Maybe<HttpResponse>")," in an annotated service. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2624"},"#2624")),(0,r.kt)("li",{parentName:"ul"},"You can now register and monitor Reactor ",(0,r.kt)("inlineCode",{parentName:"li"},"Scheduler")," with Prometheus in Armeria Server. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2612"},"#2612")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RequestLog.name")," and some other properties are copied to the child log in ",(0,r.kt)("inlineCode",{parentName:"li"},"RetyringClient"),". ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2551"},"#2551")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2560"},"#2560")),(0,r.kt)("li",{parentName:"ul"},"You no longer see ",(0,r.kt)("inlineCode",{parentName:"li"},"ClosedStreamException")," due to the stream creation reversal. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2597"},"#2597")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IllegalStateException")," is not raised anymore while building a WebFlux response. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2613"},"#2613")),(0,r.kt)("li",{parentName:"ul"},"Annotated service's log name is always set. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2626"},"#2626"))),(0,r.kt)("h2",{id:"️-deprecations",style:{position:"relative"}},(0,r.kt)("a",{parentName:"h2",href:"#%EF%B8%8F-deprecations","aria-label":"️ deprecations permalink",className:"anchor before"},(0,r.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🏚️ Deprecations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deprecated ",(0,r.kt)("inlineCode",{parentName:"li"},"ZooKeeperUpdatingListener.nodeValueCodec()")," in favor of ",(0,r.kt)("inlineCode",{parentName:"li"},"ZooKeeperUpdatingListener.codec()"),". ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2552"},"#2552"))),(0,r.kt)("h2",{id:"️-breaking-changes",style:{position:"relative"}},(0,r.kt)("a",{parentName:"h2",href:"#%EF%B8%8F-breaking-changes","aria-label":"️ breaking changes permalink",className:"anchor before"},(0,r.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"☢️ Breaking changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Most of the deprecated APIs are gone. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2543"},"#2543")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you have trouble finding APIs to replace, please upgrade to 0.98.7 first and use your IDE's advanced feature to search deprecated APIs. Then, you can easily upgrade to 0.99.0."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"armeria-dropwizard")," is now for Dropwizard 2. If you want to use Dropwizard ",(0,r.kt)("inlineCode",{parentName:"p"},"1.3.x"),", use ",(0,r.kt)("inlineCode",{parentName:"p"},"armeria-dropwizard1"),". ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2556"},"#2556"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"armeria-rxjava")," is now for RxJava 3. If you want to use RxJava 2, use ",(0,r.kt)("inlineCode",{parentName:"p"},"armeria-rxjava2"),". ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2378"},"#2378")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2501"},"#2501"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ClientBuilder.path(path)")," is now gone. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2525"},"#2525")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2538"},"#2538")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you want to specify the path other than ",(0,r.kt)("inlineCode",{parentName:"li"},"/"),", you should specify it when creating ",(0,r.kt)("inlineCode",{parentName:"li"},"ClientBuilder"),".",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// before\nClients.builer(SessionProtocol.HTTP, Endpoint.of("127.0.0.1"))\n       .path("/foo");\n// after\nClients.builer(SessionProtocol.HTTP, Endpoint.of("127.0.0.1"), "/foo");\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ClosedSessionException")," now extends ",(0,r.kt)("inlineCode",{parentName:"p"},"ClosedStreamException"),". ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2596"},"#2596")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2616"},"#2616"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"AuthSuccessHandler<HttpRequest, HttpResponse>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthFailureHandler<HttpRequest, HttpResponse>")," now don't have type parameters.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The meter name ",(0,r.kt)("inlineCode",{parentName:"p"},"armeriaBlockingTaskExecutor")," is now ",(0,r.kt)("inlineCode",{parentName:"p"},"blockingTaskExecutor")," with the prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"armeria.executor"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"RequestContext.set*TimeoutAfter*()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"extend*Timeout*()")," methods have been removed. Call ",(0,r.kt)("inlineCode",{parentName:"p"},"set*Timeout*()")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"TimeoutMode")," specified instead."))),(0,r.kt)("h2",{id:"-dependencies",style:{position:"relative"}},(0,r.kt)("a",{parentName:"h2",href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"},(0,r.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"⛓ Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Brave 5.9.5 -> 5.10.2"),(0,r.kt)("li",{parentName:"ul"},"bucket4j-core 4.10.0"),(0,r.kt)("li",{parentName:"ul"},"Curator 4.2.0 -> 4.3.0"),(0,r.kt)("li",{parentName:"ul"},"java-jwt 3.10.0 -> 3.10.1"),(0,r.kt)("li",{parentName:"ul"},"jetty-alpn-agent 2.0.9 -> 2.10.0"),(0,r.kt)("li",{parentName:"ul"},"Micrometer 1.3.5 -> 1.4.0"),(0,r.kt)("li",{parentName:"ul"},"Netty 4.1.37.Final -> 4.1.48.Final",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"netty-tcnative-boringssl-static 2.0.29.Final -> 2.0.30.Final"))),(0,r.kt)("li",{parentName:"ul"},"Opensaml 3.4.3 -> 3.4.5"),(0,r.kt)("li",{parentName:"ul"},"Reactor 3.3.3.RELEASE -> 3.3.4.RELEASE"),(0,r.kt)("li",{parentName:"ul"},"Retrofit 2.7.2 -> 2.8.0"),(0,r.kt)("li",{parentName:"ul"},"RxJava 3.0.0 -> 3.0.1"),(0,r.kt)("li",{parentName:"ul"},"Spring Boot 2.2.4 -> 2.2.5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Spring2.1 2.1.12.RELEASE -> 2.1.13.RELEASE"))),(0,r.kt)("li",{parentName:"ul"},"Tomcat 9.0.31 -> 9.0.33",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tomcat8.5 8.5.51 -> 8.5.53"))),(0,r.kt)("li",{parentName:"ul"},"Zookeeper 3.5.7 -> 3.6.0")),(0,r.kt)("h2",{id:"-thank-you",style:{position:"relative"}},(0,r.kt)("a",{parentName:"h2",href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"},(0,r.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🙇 Thank you"),(0,r.kt)(p,{usernames:["alex-lx","AmosDoan","andrewom","anuraaga","codefromthecrypt","cricket007","heowc","hexoul","ikhoon","imasahiro","jyblue","joschi","jrhee17","KarboniteKream","kojilin","mauhiz","max904-github","minwoox","rstoyanchev","sivaalli","trustin"],mdxType:"ThankYou"}))}c.isMDXComponent=!0},20370:function(e,t,a){a(88025);var n=a(1923),i=a(25444),r=a(67294),l=a(55746),s=a(8284),o=a(96759),p=a(46731),m=a(9396),u=n.Z.Title,c=Object.keys(s)[0],h=d(c);function d(e){return e.substring(e.lastIndexOf("/")+1)}t.Z=function(e){var t={},a={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(l).forEach((function(e){var a=e[0],n=e[1];t[n]=a})),Object.entries(s).forEach((function(e){var t=e[0],n=e[1];a[n]=t}));var k=(0,m.Z)(e.location),N=e.version||d(k);return N.match(/^[0-9]/)||(N=void 0),r.createElement(p.Z,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:N?N+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),N&&N!==h?r.createElement(o.Ch,null,"You're seeing the release note of an old version. Check out"," ",r.createElement(i.Link,{to:c},"the latest release note"),"."):"",N?r.createElement(u,{id:"release-notes",level:1},r.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},r.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},r.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),N," release notes"):"",e.children)}},55746:function(e){e.exports=JSON.parse('{"/news/20230426-newsletter-5":"Armeria Newsletter vol. 5","/news/20220714-newsletter-4":"Armeria Newsletter vol. 4","/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},8284:function(e){e.exports=JSON.parse('{"/release-notes/1.24.3":"v1.24.3","/release-notes/1.24.2":"v1.24.2","/release-notes/1.24.1":"v1.24.1","/release-notes/1.24.0":"v1.24.0","/release-notes/1.23.1":"v1.23.1","/release-notes/1.23.0":"v1.23.0","/release-notes/1.22.1":"v1.22.1","/release-notes/1.22.0":"v1.22.0","/release-notes/1.21.0":"v1.21.0","/release-notes/1.20.3":"v1.20.3","/release-notes/1.20.2":"v1.20.2","/release-notes/1.20.1":"v1.20.1","/release-notes/1.20.0":"v1.20.0","/release-notes/1.19.0":"v1.19.0","/release-notes/1.18.0":"v1.18.0","/release-notes/1.17.2":"v1.17.2"}')}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-99-0-mdx-c9d05e6001e92a08299d.js.map
"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[8684],{79336:function(e,r,t){t.r(r),t.d(r,{_frontmatter:function(){return p},default:function(){return v},pageTitle:function(){return s}});var a=t(63366),i=(t(67294),t(64983)),o=t(28819),n=["components"],s="Service registration for discovery",p={},c=function(e){return function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",r)}},l=c("RequiredDependencies"),d=c("Tip"),m={pageTitle:s,_frontmatter:p},u=o.Z;function v(e){var r=e.components,t=(0,a.Z)(e,n);return(0,i.kt)(u,Object.assign({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"service-registration-for-discovery",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h1",href:"#service-registration-for-discovery","aria-label":"service registration for discovery permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Service registration for discovery"),(0,i.kt)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#zookeeper-based-service-registration-with-zookeeperupdatinglistener"},"ZooKeeper-based service registration with ZooKeeperUpdatingListener")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#eureka-based-service-registration-with-eurekaupdatinglistener"},"Eureka-based service registration with EurekaUpdatingListener")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#consul-based-service-registration-with-consulupdatinglistener"},"Consul-based service registration with ConsulUpdatingListener"))),(0,i.kt)("p",null,"You can use ",(0,i.kt)("a",{parentName:"p",href:"type://ServerListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerListener.html"},"type://ServerListener")," to register the information of Armeria servers when they start so that\na client uses the information to distribute its requests to the servers autonomously, unlike\ntraditional server-side load balancing where the requests go through a dedicated load balancer such as\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Multilayer_switch#Layer_4%E2%80%937_switch,_web_switch,_or_content_switch"},"L4 and L7 switches"),"."),(0,i.kt)("p",null,"Armeria provides 2 ",(0,i.kt)("a",{parentName:"p",href:"type://ServerListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerListener.html"},"type://ServerListener")," implementations for service registration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"type://ZooKeeperUpdatingListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperUpdatingListener.html"},"type://ZooKeeperUpdatingListener")," which registers to ",(0,i.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/"},"ZooKeeper"),"\nas an ephemeral node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"type://EurekaUpdatingListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/eureka/EurekaUpdatingListener.html"},"type://EurekaUpdatingListener")," which registers to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/eureka/"},"Eureka"),".")),(0,i.kt)("h2",{id:"zookeeper-based-service-registration-with-zookeeperupdatinglistener",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#zookeeper-based-service-registration-with-zookeeperupdatinglistener","aria-label":"zookeeper based service registration with zookeeperupdatinglistener permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"ZooKeeper-based service registration with ",(0,i.kt)("inlineCode",{parentName:"h2"},"ZooKeeperUpdatingListener")),(0,i.kt)("p",null,"First, You need the ",(0,i.kt)("inlineCode",{parentName:"p"},"armeria-zookeeper3")," dependency:"),(0,i.kt)(l,{boms:[{groupId:"com.linecorp.armeria",artifactId:"armeria-bom"}],dependencies:[{groupId:"com.linecorp.armeria",artifactId:"armeria-zookeeper3"}],mdxType:"RequiredDependencies"}),(0,i.kt)("p",null,"Then, use ",(0,i.kt)("a",{parentName:"p",href:"type://ZooKeeperUpdatingListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperUpdatingListener.html"},"type://ZooKeeperUpdatingListener")," and ",(0,i.kt)("a",{parentName:"p",href:"type://ZooKeeperRegistrationSpec:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperRegistrationSpec.html"},"type://ZooKeeperRegistrationSpec")," to register your server\nto a ZooKeeper cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.server.Server;\nimport com.linecorp.armeria.server.zookeeper.ZooKeeperRegistrationSpec;\nimport com.linecorp.armeria.server.zookeeper.ZooKeeperUpdatingListener;\n\nString zkConnectionStr = "myZooKeeperHost:2181";\nString znodePath = "/myProductionEndpoints";\nString serviceName = "catalog";\nZooKeeperRegistrationSpec registrationSpec =\n        ZooKeeperRegistrationSpec.curator(serviceName);\nZooKeeperUpdatingListener listener =\n        ZooKeeperUpdatingListener.builder(zkConnectionStr, znodePath, registrationSpec)\n                                 .sessionTimeoutMillis(10000)\n                                 .build();\nServer server = ...\nserver.addListener(listener);\nserver.start();\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"type://ZooKeeperRegistrationSpec:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperRegistrationSpec.html"},"type://ZooKeeperRegistrationSpec")," is used to convert the information of your server to a binary\nrepresentation. The ",(0,i.kt)("a",{parentName:"p",href:"type://ZooKeeperUpdatingListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperUpdatingListener.html"},"type://ZooKeeperUpdatingListener")," registers the binary representation to the specified\nznode as a member of the cluster when your server starts up. Each server will represent itself as\n",(0,i.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org/doc/r3.4.10/zookeeperOver.html#Nodes+and+ephemeral+nodes"},"an EPHEMERAL node"),",\nwhich means when a server stops or a network partition between your server and ZooKeeper cluster occurs,\nthe node of the server that became unreachable will be deleted automatically by ZooKeeper."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"type://ZooKeeperRegistrationSpec#curator(String):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperRegistrationSpec.html#curator(java.lang.String)"},"type://ZooKeeperRegistrationSpec#curator(String)")," uses the format of\n",(0,i.kt)("a",{parentName:"p",href:"https://curator.apache.org/curator-x-discovery/index.html"},"Curator Service Discovery")," which is compatible\nwith ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.spring.io/spring-cloud-zookeeper/reference/html/"},"Spring Cloud Zookeeper"),".\nYou can use ",(0,i.kt)("a",{parentName:"p",href:"type://ZooKeeperRegistrationSpec#serverSets():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperRegistrationSpec.html#serverSets()"},"type://ZooKeeperRegistrationSpec#serverSets()")," that applies the format of\n",(0,i.kt)("a",{parentName:"p",href:"https://twitter.github.io/finagle/docs/com/twitter/serverset.html"},"Finagle ServerSets"),".\nIf you want to use your own format, you can implement the ",(0,i.kt)("a",{parentName:"p",href:"type://ZooKeeperRegistrationSpec:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperRegistrationSpec.html"},"type://ZooKeeperRegistrationSpec"),"."),(0,i.kt)("p",null,"In the example above, we used the ZooKeeper connection string(",(0,i.kt)("inlineCode",{parentName:"p"},'"myZooKeeperHost:2181"'),") to connect to\nthe ZooKeeper cluster. Instead, you can use an existing\n",(0,i.kt)("a",{parentName:"p",href:"https://curator.apache.org/apidocs/org/apache/curator/framework/CuratorFramework.html"},"CuratorFramework"),"\ninstance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import org.apache.curator.framework.CuratorFramework;\n\nCuratorFramework client = ...\nString znodePath = ...\nZooKeeperRegistrationSpec registrationSpec = ...\nZooKeeperUpdatingListener listener =\n        ZooKeeperUpdatingListener.builder(client, znodePath, registrationSpec)\n                                 .build();\nServer server = ...\nserver.addListener(listener);\nserver.start();\n")),(0,i.kt)("p",null,"For more information, please refer to the API documentation of the\n",(0,i.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/package-summary.html"},"com.linecorp.armeria.server.zookeeper")," package."),(0,i.kt)(d,{mdxType:"Tip"},(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/client-service-discovery#zookeeper-based-service-discovery-with-zookeeperendpointgroup"},"ZooKeeper service discovery"),".")),(0,i.kt)("h2",{id:"eureka-based-service-registration-with-eurekaupdatinglistener",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#eureka-based-service-registration-with-eurekaupdatinglistener","aria-label":"eureka based service registration with eurekaupdatinglistener permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Eureka-based service registration with ",(0,i.kt)("inlineCode",{parentName:"h2"},"EurekaUpdatingListener")),(0,i.kt)("p",null,"First, You need the ",(0,i.kt)("inlineCode",{parentName:"p"},"armeria-eureka")," dependency:"),(0,i.kt)(l,{boms:[{groupId:"com.linecorp.armeria",artifactId:"armeria-bom"}],dependencies:[{groupId:"com.linecorp.armeria",artifactId:"armeria-eureka"}],mdxType:"RequiredDependencies"}),(0,i.kt)("p",null,"Then, use ",(0,i.kt)("a",{parentName:"p",href:"type://EurekaUpdatingListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/eureka/EurekaUpdatingListener.html"},"type://EurekaUpdatingListener")," to register your server to the Eureka:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.server.Server;\nimport com.linecorp.armeria.server.ServerBuilder;\nimport com.linecorp.armeria.server.eureka.EurekaUpdatingListener;\n\nEurekaUpdatingListener listener =\n        EurekaUpdatingListener.of("https://eureka.com:8001/eureka/v2");\n\nServerBuilder sb = Server.builder();\nsb.serverListener(listener);\nsb.build().start();\n')),(0,i.kt)("p",null,"If you want to specify the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Netflix/eureka/wiki/Eureka-REST-operations"},"properties"),"\nof the ",(0,i.kt)("a",{parentName:"p",href:"type://Server:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Server.html"},"type://Server"),", use ",(0,i.kt)("a",{parentName:"p",href:"type://EurekaUpdatingListenerBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/eureka/EurekaUpdatingListenerBuilder.html"},"type://EurekaUpdatingListenerBuilder"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.server.eureka.EurekaUpdatingListenerBuilder;\n\nEurekaUpdatingListenerBuilder builder =\n        EurekaUpdatingListener.builder("https://eureka.com:8001/eureka/v2")\n                              .instanceId("i-00000000")\n                              .hostname("armeria.service.1")\n                              // If ipAddr is not specified, it\'s automatically filled\n                              // using SystemInfo.defaultNonLoopbackIpV4Address().\n                              .ipAddr("192.168.10.10")\n                              .vipAddress("armeria.service.com:8080");\n                              \nEurekaUpdatingListener listener = builder.build();\nServerBuilder sb = Server.builder();\nsb.serverListener(listener);\nsb.build().start();\n')),(0,i.kt)("p",null,"For more information, please refer to the API documentation of the\n",(0,i.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/eureka/package-summary.html"},"com.linecorp.armeria.server.eureka")," package."),(0,i.kt)(d,{mdxType:"Tip"},(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/client-service-discovery#eureka-based-service-discovery-with-eurekaendpointgroup"},"Eureka service discovery"),".")),(0,i.kt)("h2",{id:"consul-based-service-registration-with-consulupdatinglistener",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#consul-based-service-registration-with-consulupdatinglistener","aria-label":"consul based service registration with consulupdatinglistener permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),(0,i.kt)("a",{parentName:"h2",href:"https://www.consul.io"},"Consul"),"-based service registration with ",(0,i.kt)("inlineCode",{parentName:"h2"},"ConsulUpdatingListener")),(0,i.kt)("p",null,"First, You need the ",(0,i.kt)("inlineCode",{parentName:"p"},"armeria-consul")," dependency:"),(0,i.kt)(l,{boms:[{groupId:"com.linecorp.armeria",artifactId:"armeria-bom"}],dependencies:[{groupId:"com.linecorp.armeria",artifactId:"armeria-consul"}],mdxType:"RequiredDependencies"}),(0,i.kt)("p",null,"Then, use ",(0,i.kt)("a",{parentName:"p",href:"type://ConsulUpdatingListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/consul/ConsulUpdatingListener.html"},"type://ConsulUpdatingListener")," to register your server to the Consul:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.server.Server;\nimport com.linecorp.armeria.server.ServerBuilder;\nimport com.linecorp.armeria.server.consul.ConsulUpdatingListener;\n\nConsulUpdatingListener listener =\n    ConsulUpdatingListener.of("http://my-consul.com:8500", "my-service");\n\nServerBuilder sb = Server.builder();\nsb.serverListener(listener);\nsb.build().start();\n')),(0,i.kt)("p",null,"If you want to specify an ",(0,i.kt)("a",{parentName:"p",href:"https://www.consul.io/api/agent/check#http"},"HTTP check")," or\n",(0,i.kt)("a",{parentName:"p",href:"https://www.consul.io/api-docs/agent/service#tags"},"tags")," to the ",(0,i.kt)("a",{parentName:"p",href:"type://Server:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Server.html"},"type://Server"),",\nuse ",(0,i.kt)("a",{parentName:"p",href:"type://ConsulUpdatingListenerBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/consul/ConsulUpdatingListenerBuilder.html"},"type://ConsulUpdatingListenerBuilder"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.server.consul.ConsulUpdatingListenerBuilder;\n\nConsulUpdatingListenerBuilder builder =\n    ConsulUpdatingListener.builder("http://my-consul.com:8500", "my-service")\n                          .check("http://my.hostname.local:8080/internal/l7check")\n                          .tags("production", "v1");\n                              \nConsulUpdatingListener listener = builder.build();\nServerBuilder sb = Server.builder();\nsb.serverListener(listener);\nsb.build().start();\n')),(0,i.kt)("p",null,"For more information, please refer to the API documentation of the\n",(0,i.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/consul/package-summary.html"},"com.linecorp.armeria.server.consul")," package."),(0,i.kt)(d,{mdxType:"Tip"},(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/client-service-discovery#consul-based-service-discovery-with-consulendpointgroup"},"Consul service discovery"),".")))}v.isMDXComponent=!0},28819:function(e,r,t){t.d(r,{Z:function(){return s}});var a=t(25444),i=t(67294),o=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-graphql","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration","server-multipart","server-timeouts"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-kotlin","advanced-scala","advanced-scalapb","advanced-zipkin","advanced-client-interoperability"]}'),n=t(46731),s=function(e){var r=(0,a.useStaticQuery)("1217743243").allMdx.nodes;return i.createElement(n.Z,Object.assign({},e,{candidateMdxNodes:r,index:o,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-server-service-registration-mdx-9783ffe4d1c2623b3395.js.map
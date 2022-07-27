"use strict";(self.webpackChunkdocker_compose_hub=self.webpackChunkdocker_compose_hub||[]).push([[6417],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return r?t.createElement(f,o(o({ref:n},u),{},{components:r})):t.createElement(f,o({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6159:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const s={},o=void 0,l={unversionedId:"dev-environment/redis-cluster/README",id:"dev-environment/redis-cluster/README",title:"README",description:"\u955c\u50cf\u540d Redis \u96c6\u7fa4",source:"@site/docs/dev-environment/redis-cluster/README.md",sourceDirName:"dev-environment/redis-cluster",slug:"/dev-environment/redis-cluster/",permalink:"/docs/dev-environment/redis-cluster/",draft:!1,editUrl:"https://github.com/MoshiCoCo/docker-compose-hub/blob/main/docs/dev-environment/redis-cluster/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/docs/dev-environment/redis/"},next:{title:"rabbitmq",permalink:"/docs/dev-environment/rabbit-mq/"}},i={},c=[{value:"\u955c\u50cf\u540d Redis \u96c6\u7fa4",id:"\u955c\u50cf\u540d-redis-\u96c6\u7fa4",level:2},{value:"\u955c\u50cf\u7528\u9014",id:"\u955c\u50cf\u7528\u9014",level:2},{value:"\u4f7f\u7528\u6b65\u9aa4",id:"\u4f7f\u7528\u6b65\u9aa4",level:2},{value:"\u521b\u5efa\u6a21\u677f\u6587\u4ef6 <code>redis-cluster.tmpl</code>",id:"\u521b\u5efa\u6a21\u677f\u6587\u4ef6-redis-clustertmpl",level:3},{value:"\u901a\u8fc7\u6a21\u677f\u6587\u4ef6\u521d\u59cb\u5316redis\u8282\u70b9\u6587\u4ef6",id:"\u901a\u8fc7\u6a21\u677f\u6587\u4ef6\u521d\u59cb\u5316redis\u8282\u70b9\u6587\u4ef6",level:3},{value:"\u542f\u52a8\u96c6\u7fa4\u5404\u4e2a\u8282\u70b9",id:"\u542f\u52a8\u96c6\u7fa4\u5404\u4e2a\u8282\u70b9",level:3},{value:"\u521b\u5efa\u96c6\u7fa4",id:"\u521b\u5efa\u96c6\u7fa4",level:3},{value:"\u591a\u4e3b\u673a\u8282\u70b9\u96c6\u7fa4",id:"\u591a\u4e3b\u673a\u8282\u70b9\u96c6\u7fa4",level:2},{value:"\u65b9\u68481",id:"\u65b9\u68481",level:3},{value:"\u65b9\u68482",id:"\u65b9\u68482",level:3}],u={toc:c};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u955c\u50cf\u540d-redis-\u96c6\u7fa4"},"\u955c\u50cf\u540d Redis \u96c6\u7fa4"),(0,a.kt)("h2",{id:"\u955c\u50cf\u7528\u9014"},"\u955c\u50cf\u7528\u9014"),(0,a.kt)("p",null,"3\u4e3b3\u4e1b\u7684redis\u5355\u673a\u96c6\u7fa4\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u6b65\u9aa4"},"\u4f7f\u7528\u6b65\u9aa4"),(0,a.kt)("h3",{id:"\u521b\u5efa\u6a21\u677f\u6587\u4ef6-redis-clustertmpl"},"\u521b\u5efa\u6a21\u677f\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"h3"},"redis-cluster.tmpl")),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u6a21\u677f\u6587\u4ef6\u4e2d\u6240\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"${}"),"\u5305\u88f9\u7684\u503c\u5747\u4e3a\u540e\u7eedshell\u547d\u4ee4\u4f20\u9012\u7684\uff0c\u8bf7\u52ff\u5728\u6a21\u677f\u6587\u4ef6\u4e2d\u4fee\u6539\uff0c\u5176\u4ed6\u503c\u5219\u53ef\u5728\u6a21\u677f\u6587\u4ef6\u4e2d\u4fee\u6539\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"# redis\u7aef\u53e3\nport ${PORT}\ndaemonize no\n  # \u5173\u95ed\u4fdd\u62a4\u6a21\u5f0f\nprotected-mode no\n  # \u5f00\u542f\u96c6\u7fa4\ncluster-enabled yes\n  # \u96c6\u7fa4\u8282\u70b9\u914d\u7f6e\ncluster-config-file nodes.conf\n  # \u8d85\u65f6\ncluster-node-timeout 5000\n  # \u96c6\u7fa4\u8282\u70b9IP host\u6a21\u5f0f\u4e3a\u5bbf\u4e3b\u673aIP\ncluster-announce-ip ${HOST}\n\n  # \u96c6\u7fa4\u8282\u70b9\u7aef\u53e3 7001 - 7006\ncluster-announce-port ${PORT}\ncluster-announce-bus-port 1${PORT}\n  # \u5f00\u542f appendonly \u5907\u4efd\u6a21\u5f0f\nappendonly yes\n  # \u6bcf\u79d2\u949f\u5907\u4efd\nappendfsync everysec\n  # \u5bf9aof\u6587\u4ef6\u8fdb\u884c\u538b\u7f29\u65f6\uff0c\u662f\u5426\u6267\u884c\u540c\u6b65\u64cd\u4f5c\nno-appendfsync-on-rewrite no\n  # \u5f53\u76ee\u524daof\u6587\u4ef6\u5927\u5c0f\u8d85\u8fc7\u4e0a\u4e00\u6b21\u91cd\u5199\u65f6\u7684aof\u6587\u4ef6\u5927\u5c0f\u7684100%\u65f6\u4f1a\u518d\u6b21\u8fdb\u884c\u91cd\u5199\nauto-aof-rewrite-percentage 100\n  # \u91cd\u5199\u524dAOF\u6587\u4ef6\u7684\u5927\u5c0f\u6700\u5c0f\u503c \u9ed8\u8ba4 64mb\nauto-aof-rewrite-min-size 64mb\nmasterauth ${masterauth}\nrequirepass ${requirepass}\n")),(0,a.kt)("h3",{id:"\u901a\u8fc7\u6a21\u677f\u6587\u4ef6\u521d\u59cb\u5316redis\u8282\u70b9\u6587\u4ef6"},"\u901a\u8fc7\u6a21\u677f\u6587\u4ef6\u521d\u59cb\u5316redis\u8282\u70b9\u6587\u4ef6"),(0,a.kt)("p",null,"\u521b\u5efaredis-cluster.tmpl \u540e\uff0c\u9700\u8981\u5728run.sh\u9884\u5148\u914d\u7f6emasterauth \u548c requirepass\u503c\uff0c\u4e00\u4e2a\u662f\u96c6\u7fa4\u901a\u4fe1\u8ba4\u8bc1\u5bc6\u7801\uff0c\u4e00\u4e2a\u662fredis\u96c6\u7fa4\u5bc6\u7801\uff0c\u4ee5\u53ca\u5bbf\u4e3b\u673aIP\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'HOST="\u5bbf\u4e3b\u673a\u5730\u5740"\nmasterauth="\u81ea\u5b9a\u4e49\u5bc6\u7801"\nrequirepass="\u81ea\u5b9a\u4e49\u5bc6\u7801"\n\n#\u751f\u6210Redis\u7ed3\u70b9\u6587\u4ef6\nfor port in $(seq 7000 7005); do\n    mkdir -p ./${port}/conf &&\n        PORT=${port}  HOST=${HOST} masterauth=${masterauth} requirepass=${requirepass} envsubst <./redis-cluster.tmpl >./${port}/conf/redis.conf &&\n        mkdir -p ./${port}/data\ndone\n\necho "init redis conf file success "\n')),(0,a.kt)("h3",{id:"\u542f\u52a8\u96c6\u7fa4\u5404\u4e2a\u8282\u70b9"},"\u542f\u52a8\u96c6\u7fa4\u5404\u4e2a\u8282\u70b9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d\n")),(0,a.kt)("h3",{id:"\u521b\u5efa\u96c6\u7fa4"},"\u521b\u5efa\u96c6\u7fa4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'HOST="\u5bbf\u4e3b\u673a\u5730\u5740,\u540c\u4e0a"\nmasterauth="\u81ea\u5b9a\u4e49\u5bc6\u7801\uff0c\u540c\u4e0a"\nrequirepass="\u81ea\u5b9a\u4e49\u5bc6\u7801\uff0c\u540c\u4e0a"\n\nredis-cli --cluster create $HOST:7000 $HOST:7001 $HOST:7002 $HOST:7003 $HOST:7004 $HOST:7005 --cluster-replicas 1  -a ${requirepass}\n')),(0,a.kt)("h2",{id:"\u591a\u4e3b\u673a\u8282\u70b9\u96c6\u7fa4"},"\u591a\u4e3b\u673a\u8282\u70b9\u96c6\u7fa4"),(0,a.kt)("h3",{id:"\u65b9\u68481"},"\u65b9\u68481"),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u6b64\u7f16\u6392\u6587\u4ef6\u9002\u7528\u4e8e\u5355\u673a\u96c6\u7fa4\uff0c\u5982\u679c\u4f60\u9700\u8981\u5c06\u96c6\u7fa4\u90e8\u7f72\u5728\u591a\u53f0\u673a\u5668\u4e0a\uff0c\u8bf7\u4fee\u6539\u751f\u6210\u7684\u8282\u70b9\u914d\u7f6e\u6587\u4ef6\uff0c\u7136\u540e\u5c06\u8282\u70b9\u914d\u7f6e\u6587\u4ef6\u4e0a\u4f20\u5230\u4e0d\u540c\u7684\u670d\u52a1\u5668\u4e0a\u3002\u6ce8\u610f\u4e0d\u540c\u8282\u70b9\u9700\u8981\u914d\u7f6e\u4e0d\u540c\u7684\u4e3b\u673a\u5730\u5740\u548c\u7aef\u53e3\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\u751f\u62107001-7005\u7684\u8282\u70b9\u914d\u7f6e\u6587\u4ef6\uff0c\u53ef\u4ee5\u624b\u52a8\u4fee\u6539\u6bcf\u4e2a\u914d\u7f6e\u6587\u4ef6\u7684\u4e3b\u673a\u5730\u5740\uff0c\u5047\u8bbe3\u53f0\u4e3b\u673a\u7684\u4e3b\u673a\u5730\u5740\u5206\u522b\u4e3a\uff1a"),(0,a.kt)("p",null,"172.123.123.121\n172.123.123.122\n172.123.123.122"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5c067000\u548c7001\u7684\u8282\u70b9\u914d\u7f6e\u6587\u4ef6\u7684\u4e3b\u673a\u5730\u5740\u4fee\u6539\u4e3a172.123.123.121\uff0c7002\u548c7003\u7684\u4e3b\u673a\u5730\u5740\u4fee\u6539\u4e3a172.123.123.122\uff0c7004\u548c7005\u7684\u4e3b\u673a\u5730\u5740\u4fee\u6539\u4e3a172.123.123.123"),(0,a.kt)("p",null,"\u7136\u540e\u5c06docker-compose\u7f16\u6392\u6587\u4ef6\u4e2d\u7684service2\u4e2a\u4e00\u7ec4\uff0c\u91cd\u65b0\u7f16\u6392\u4e3a3\u4e2acompose\u6587\u4ef6\uff0c\u5728\u4e0d\u540c\u7684\u4e3b\u673a\u4e0a\u542f\u52a8\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u4e4b\u540e\u521b\u5efa\u96c6\u7fa4\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"redis-cli --cluster create 172.123.123.121:7000 172.123.123.121:7001 172.123.123.122:7002 172.123.123.122:7003\n172.123.123.123:7004 172.123.123.123:7005 --cluster-replicas 1 -a ${requirepass}\n")),(0,a.kt)("h3",{id:"\u65b9\u68482"},"\u65b9\u68482"),(0,a.kt)("p",null,"\u4f7f\u7528\u5355\u673a\u7248\u672c\u7684redis\u7f16\u6392\u6587\u4ef6\uff0c\u4f7f\u7528\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\uff08\u53ef\u76f4\u63a5\u4f7f\u7528redis-cluster.tmpl\u91cd\u547d\u540d\u4e3aredis.conf\uff09\u65b9\u5f0f\u5728\u4e0d\u540c\u7684\u673a\u5668\u4e0a\u542f\u52a8redis\u5bb9\u5668\u3002\n\uff0c\u5728compose\u6587\u4ef6\u9700\u8981\u66b4\u9732\u96c6\u7fa4\u901a\u8baf\u7aef\u53e3\uff0c\u7136\u540e\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"redis-cli --cluster create"),"\u547d\u4ee4\u521b\u5efa\u96c6\u7fa4\u5373\u53ef\u3002"),(0,a.kt)("p",null,"redis.conf \u6587\u4ef6\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"daemonize no\n  # \u5173\u95ed\u4fdd\u62a4\u6a21\u5f0f\nprotected-mode no\n  # \u5f00\u542f\u96c6\u7fa4\ncluster-enabled yes\n  # \u96c6\u7fa4\u8282\u70b9\u914d\u7f6e\ncluster-config-file nodes.conf\n  # \u8d85\u65f6\ncluster-node-timeout 5000\n\n  # \u5f00\u542f appendonly \u5907\u4efd\u6a21\u5f0f\nappendonly yes\n  # \u6bcf\u79d2\u949f\u5907\u4efd\nappendfsync everysec\n  # \u5bf9aof\u6587\u4ef6\u8fdb\u884c\u538b\u7f29\u65f6\uff0c\u662f\u5426\u6267\u884c\u540c\u6b65\u64cd\u4f5c\nno-appendfsync-on-rewrite no\n  # \u5f53\u76ee\u524daof\u6587\u4ef6\u5927\u5c0f\u8d85\u8fc7\u4e0a\u4e00\u6b21\u91cd\u5199\u65f6\u7684aof\u6587\u4ef6\u5927\u5c0f\u7684100%\u65f6\u4f1a\u518d\u6b21\u8fdb\u884c\u91cd\u5199\nauto-aof-rewrite-percentage 100\n  # \u91cd\u5199\u524dAOF\u6587\u4ef6\u7684\u5927\u5c0f\u6700\u5c0f\u503c \u9ed8\u8ba4 64mb\nauto-aof-rewrite-min-size 64mb\n\n  # \u96c6\u7fa4\u8282\u70b9IP host\u6a21\u5f0f\u4e3a\u5bbf\u4e3b\u673aIP  \u9700\u8981\u914d\u7f6e\u4e3b\u673aIP\ncluster-announce-ip ${HOST}\n  # redis\u7aef\u53e3\nport 6379\n  # \u96c6\u7fa4\u8282\u70b9\u7aef\u53e3 \ncluster-announce-port 6379\ncluster-announce-bus-port 16379\n  #\u9700\u8981\u914d\u7f6e\u5bc6\u7801 \nmasterauth ${masterauth}\n  #\u9700\u8981\u914d\u7f6e\u5bc6\u7801 \nrequirepass ${requirepass}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: \'3\'\nservices:\n  redis:\n    # \u955c\u50cf\u540d\u79f0\u4ee5\u53ca\u7248\u672c\u53f7\n    image: redis\n    # \u5931\u8d25\u540e\u603b\u662f\u91cd\u542f\n    restart: always\n    # \u81ea\u5b9a\u4e49\u5bb9\u5668\u540d\n    container_name: redis-6379\n    # \u6587\u4ef6\u5939\u4ee5\u53ca\u6587\u4ef6\u6620\u5c04\n    volumes:\n      - $PWD/data:/data\n      - $PWD/logs:/logs\n      - $PWD/redis.conf:/usr/local/etc/redis/redis.conf\n    command: [ "redis-server", "/usr/local/etc/redis/redis.conf" ]\n    ports:\n      # \u7aef\u53e3\u53f7\n      - "6379:6379"\n      - "16379:16379"\n')))}p.isMDXComponent=!0}}]);
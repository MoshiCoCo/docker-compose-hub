"use strict";(self.webpackChunkdocker_compose_hub=self.webpackChunkdocker_compose_hub||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),k=n,u=d["".concat(p,".").concat(k)]||d[k]||m[k]||a;return r?o.createElement(u,l(l({ref:t},c),{},{components:r})):o.createElement(u,l({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={title:"Docker-Compose Hub",description:"Docker-Compose Hub",sidebar_position:0},l=void 0,i={unversionedId:"intro",id:"intro",title:"Docker-Compose Hub",description:"Docker-Compose Hub",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/MoshiCoCo/docker-compose-hub/blob/main/docs/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Docker-Compose Hub",description:"Docker-Compose Hub",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Install Docker & Docker Compose",permalink:"/docs/docker/Install-Docker-DockerCompose"}},p={},s=[{value:"\u5173\u4e8e\u4ed3\u5e93",id:"\u5173\u4e8e\u4ed3\u5e93",level:2},{value:"\u76ee\u524d\u652f\u6301\u7684\u955c\u50cf\u5217\u8868",id:"\u76ee\u524d\u652f\u6301\u7684\u955c\u50cf\u5217\u8868",level:2},{value:"\u57fa\u7840\u5f00\u53d1\u73af\u5883",id:"\u57fa\u7840\u5f00\u53d1\u73af\u5883",level:3},{value:"\u5e38\u7528\u5de5\u5177",id:"\u5e38\u7528\u5de5\u5177",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u4f7f\u7528Portainer Stacks\u542f\u52a8\u5bb9\u5668",id:"\u4f7f\u7528portainer-stacks\u542f\u52a8\u5bb9\u5668",level:3},{value:"\u4f7f\u7528docker-compose\u547d\u4ee4\u542f\u52a8\u5bb9\u5668",id:"\u4f7f\u7528docker-compose\u547d\u4ee4\u542f\u52a8\u5bb9\u5668",level:3},{value:"\u4e00\u4e9b\u7ea6\u5b9a",id:"\u4e00\u4e9b\u7ea6\u5b9a",level:2},{value:"\u53c2\u4e0e\u8d21\u732e",id:"\u53c2\u4e0e\u8d21\u732e",level:2},{value:"\u2b50\ufe0fStars",id:"\ufe0fstars",level:2}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("h1",{align:"center"},"Docker Compose Hub")),(0,n.kt)("h2",{id:"\u5173\u4e8e\u4ed3\u5e93"},"\u5173\u4e8e\u4ed3\u5e93"),(0,n.kt)("p",null,"\u672c\u4ed3\u5e93\u63d0\u4f9b\u4e86\u591a\u79cd\u5e38\u89c1Docker\u955c\u50cf\u7684Compose\u5bb9\u5668\u7f16\u6392\u811a\u672c\u548c\u57fa\u672c\u914d\u7f6e\u6587\u4ef6\uff0c\u652f\u6301",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose"),",",(0,n.kt)("inlineCode",{parentName:"p"},"docker run"),",",(0,n.kt)("inlineCode",{parentName:"p"},"portainer"),"\n\u4e00\u952e\u5bfc\u5165\u7b49\u591a\u79cd\u542f\u52a8\u65b9\u5f0f,\u53ef\u4ee5\u534f\u52a9\u4f60\u4f7f\u7528Docker\u5feb\u901f\u5b8c\u6210\u57fa\u7840\u7684\uff08\u5f00\u53d1\uff0c\u5e94\u7528\uff09\u73af\u5883\u642d\u5efa\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u9488\u5bf9\u65e0\u9700\u914d\u7f6e\u7684docker\u5bb9\u5668,\u4f60\u53ef\u4ee5\u5728\u514b\u9686\u4ed3\u5e93\u540e,\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"strong"},"docker-compose up -d")," \u547d\u4ee4\u5feb\u901f\u542f\u52a8")," \u4ee5MySQL\u4e3a\u4f8b:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd docs/mysql && docker-compose up -d \n\n# or\n# \u6b64\u547d\u4ee4\u9700\u8981\u9ad8\u7248\u672cdocker engine \u652f\u6301\n\ncd docs/mysql && docker compose up -d \n")),(0,n.kt)("h2",{id:"\u76ee\u524d\u652f\u6301\u7684\u955c\u50cf\u5217\u8868"},"\u76ee\u524d\u652f\u6301\u7684\u955c\u50cf\u5217\u8868"),(0,n.kt)("p",null,"\u76ee\u524d\u6db5\u76d6\u4e86\u6211\u5e38\u7528\u7684\u5f00\u53d1\u73af\u5883\u548c\u5de5\u5177\u73af\u5883\uff0c\u6587\u6863\u63cf\u8ff0\u6bd4\u8f83\u7c97\u7cd9\uff0c\u540e\u7eed\u4f1a\u6da6\u8272\u3002\u90e8\u5206\u662f docker run \u547d\u4ee4\uff0c\u540e\u7eed\u4f1a\u589e\u52a0 docker-compose.yml \u6587\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Docker \u548c Docker-Compose \u7684\u5b89\u88c5\u8bf7\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/docs/docker/Install-Docker-DockerCompose"},"docker \u548c docker-compose \u7684\u5b89\u88c5"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u60f3\u7b80\u5355\u4fee\u6539 ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," \u6587\u4ef6\u914d\u7f6e\uff0c\u4f46\u662f\u53c8\u4e0d\u61c2 ",(0,n.kt)("inlineCode",{parentName:"p"},"compose"),"\n\u6587\u4ef6\u7684\u914d\u7f6e\u542b\u4e49,\u8bf7\u7b80\u5355\u9605\u8bfb ",(0,n.kt)("a",{parentName:"p",href:"/docs/docker/About-Docker-Compose"},"compose \u6587\u4ef6\u7ed3\u6784\u91ca\u4e49"),"\n\u6216\u8005\u9605\u8bfb",(0,n.kt)("inlineCode",{parentName:"p"},"docker"),"\u5b98\u65b9\u6587\u6863",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/compose-file/"},"Compose file reference")))),(0,n.kt)("h3",{id:"\u57fa\u7840\u5f00\u53d1\u73af\u5883"},"\u57fa\u7840\u5f00\u53d1\u73af\u5883"),(0,n.kt)("p",null,"\u6b64\u5904\u7684\u5bb9\u5668\u4e3a\u5355\u4e2a\u5bb9\u5668\uff0c\u6309\u9700\u6c42\u542f\u52a8\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"docs/dev-environment/portainer/server"},"Portainer"),"  docker\u5bb9\u5668\u7ba1\u7406\u5de5\u5177\uff0c\u5305\u62ecserver\u548cedgeagent"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"docs/dev-environment/mysql"},"MySQL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"docs/dev-environment/redis"},"Redis")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"docs/dev-environment/redis-cluster"},"Redis \u96c6\u7fa4\uff083 \u4e3b 3 \u4ece\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"docs/dev-environment/rabbit-mq"},"Rabbit MQ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"docs/dev-environment/nginx-consul-registrator"},"Nginx Consul Registrator")),(0,n.kt)("li",{parentName:"ul"},"Nacos"),(0,n.kt)("li",{parentName:"ul"},"ShardingSphere-Proxy")),(0,n.kt)("h3",{id:"\u5e38\u7528\u5de5\u5177"},"\u5e38\u7528\u5de5\u5177"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"docs/tool/vaultwarden"},"Vaultwarden")," \u5bc6\u7801\u7ba1\u7406\u5668"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"docs/tool/qinglong"},"Qinglong")," \u811a\u672c\u8fd0\u884c\u670d\u52a1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"docs/tool/bark"},"Bark Server")," \u6d88\u606f\u63a8\u9001\u670d\u52a1\u7aef"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"docs/tool/drawio"},"Drawio")," \u753b\u56fe\u5de5\u5177\uff0c\u6d41\u7a0b\u56fe\uff0cUML \u7b49"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"docs/tool/acme-sh"},"Acme.sh")," \u514d\u8d39 SSL \u751f\u6210\u5de5\u5177"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"docs/tool/halo"},"Halo")," Halo \u535a\u5ba2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"docs/tool/frp"},"Frp")," frp \u4ee3\u7406\u670d\u52a1\u5668"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"docs/tool/netdata"},"Netdata")," Netdata \u7f51\u7edc\u76d1\u63a7\u5de5\u5177"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"docs/tool/wordpress"},"WordPress")," WordPress\u535a\u5ba2")),(0,n.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,n.kt)("h3",{id:"\u4f7f\u7528portainer-stacks\u542f\u52a8\u5bb9\u5668"},"\u4f7f\u7528Portainer Stacks\u542f\u52a8\u5bb9\u5668"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u70b9\u51fbAdd stack\uff0c\u8f93\u5165stackName\u3002build method\u9009\u62e9Git Repository (\u4e5f\u53ef\u4ee5\u9009\u62e9upload\u65b9\u5f0f,\u624b\u52a8\u4e0a\u4f20docker-compose.yml\u6587\u4ef6)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u586b\u5199\u4ed3\u5e93\u4fe1\u606f"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Repository URL: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MoshiCoCo/docker-compose-hub.git"},"https://github.com/MoshiCoCo/docker-compose-hub.git")),(0,n.kt)("li",{parentName:"ul"},"Repository reference :refs/heads/docusaurus"),(0,n.kt)("li",{parentName:"ul"},"Compose path :docker-compose/xxx/docker-compose.yml \uff08\u5176\u4e2dxxx\u586b\u5199\u4f60\u9700\u8981\u7684\u670d\u52a1\u540d\u8def\u5f84\uff0c\u6bd4\u5982mysql\uff09")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u4f7f\u7528Portainer Stacks\u542f\u52a8\u5bb9\u5668",src:r(3494).Z,width:"2644",height:"1074"})),(0,n.kt)("h3",{id:"\u4f7f\u7528docker-compose\u547d\u4ee4\u542f\u52a8\u5bb9\u5668"},"\u4f7f\u7528docker-compose\u547d\u4ee4\u542f\u52a8\u5bb9\u5668"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# 1\ngit clone https://github.com/MoshiCoCo/docker-compose-hub.git\n\n# 2\ncd /docker-compose-hub/docs/mysql && docker-compose up -d \n\n# or\n# \u6b64\u547d\u4ee4\u9700\u8981\u9ad8\u7248\u672cdocker engine \u652f\u6301\n\ncd docs/mysql && docker compose up -d \n")),(0,n.kt)("h2",{id:"\u4e00\u4e9b\u7ea6\u5b9a"},"\u4e00\u4e9b\u7ea6\u5b9a"),(0,n.kt)("p",null,"\u5728 docker-compose.yml \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u6709\u4e9b\u53c2\u6570\u662f\u53ef\u53d8\u7684,\u4ee5redis\u955c\u50cf\u7684docker-compose\u7f16\u6392\u6587\u4ef6\u4e3a\u4f8b:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  redis:\n    image: redis\n    restart: always\n    container_name: redis-6000\n    volumes:\n      - $PWD/data:/data\n      - $PWD/logs:/logs\n    command: redis-server --requirepass <your-redis-connaction-password>\n    ports:\n      - "6000:6379"\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5bc6\u7801\u76f8\u5173")),(0,n.kt)("p",null,"\u6b64\u5904\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"command: redis-server --requirepass <your-password>")," \u662f\u7528\u4e8e\u8bbe\u7f6e\u4e00\u4e2a redis \u8fde\u63a5\u5bc6\u7801\uff0c\u8be5\u5bc6\u7801\u7531\u7528\u6237\u81ea\u5df1\u751f\u6210\u3002\n\u672c\u9879\u76ee\u4e2d\u6b64\u7c7b\u5747\u4ee5",(0,n.kt)("inlineCode",{parentName:"p"},"< some user password or username >"),"\u7684\u5f62\u5f0f\u5c55\u793a\uff0c\u7528\u6237\u5728\u5b9e\u9645\u586b\u5199\u65f6\u8bf7\u52ff\u4fdd\u7559",(0,n.kt)("inlineCode",{parentName:"p"},"< >")," ."),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u7684\u5bc6\u7801\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"wodemimashi123")),(0,n.kt)("p",null,"\u6b63\u786e\u5199\u6cd5\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"command: redis-server --requirepass wodemimashi123")),(0,n.kt)("p",null,"\u9519\u8bef\u5199\u6cd5\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"command: redis-server --requirepass <wodemimashi123>")),(0,n.kt)("h2",{id:"\u53c2\u4e0e\u8d21\u732e"},"\u53c2\u4e0e\u8d21\u732e"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm intsll && npm install -g pnpm && pnpm install\n")),(0,n.kt)("p",null,"\u8bf7\u6309\u7167\u6a21\u677f\u6587\u4ef6",(0,n.kt)("inlineCode",{parentName:"p"},"/template"),"\u7684\u683c\u5f0f\u586b\u5199\uff0c\u5e76\u5c06\u6587\u4ef6\u653e\u7f6e\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"docs/")," \u76ee\u5f55\u4e0b\u5bf9\u5e94\u7684\u7c7b\u522b\u4e2d"),(0,n.kt)("p",null,"\u683c\u5f0f\u68c0\u67e5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm lint\n#\u6216\u8005npm run lint\n")),(0,n.kt)("h2",{id:"\ufe0fstars"},"\u2b50\ufe0fStars"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://starchart.cc/MoshiCoCo/docker-compose-hub"},(0,n.kt)("img",{parentName:"a",src:"https://starchart.cc/MoshiCoCo/docker-compose-hub.svg",alt:"Stargazers over time"}))))}m.isMDXComponent=!0},3494:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/addStack-32044c909a42533f5f82233c4e145bec.png"}}]);
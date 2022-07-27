"use strict";(self.webpackChunkdocker_compose_hub=self.webpackChunkdocker_compose_hub||[]).push([[5313],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,v=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(v,l(l({ref:t},p),{},{components:n})):r.createElement(v,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"vaultwarden",description:"vaultwarden"},l=void 0,i={unversionedId:"tool/vaultwarden/README",id:"tool/vaultwarden/README",title:"vaultwarden",description:"vaultwarden",source:"@site/docs/tool/vaultwarden/README.md",sourceDirName:"tool/vaultwarden",slug:"/tool/vaultwarden/",permalink:"/docs/tool/vaultwarden/",draft:!1,editUrl:"https://github.com/MoshiCoCo/docker-compose-hub/blob/main/docs/tool/vaultwarden/README.md",tags:[],version:"current",frontMatter:{title:"vaultwarden",description:"vaultwarden"},sidebar:"tutorialSidebar",previous:{title:"whyour/qinglong",permalink:"/docs/tool/qinglong/"},next:{title:"finab/bark-server",permalink:"/docs/tool/bark/"}},c={},u=[],p={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u57fa\u4e8ebitwarden\u7684\u4e00\u4e2a\u5bc6\u7801\u7ba1\u7406\u5de5\u5177\u3002"),(0,o.kt)("p",null,"\u76f4\u63a5\u5c06vaultwarden\u914d\u7f6e\u5199\u5728docker-compose.yml\u7684  ",(0,o.kt)("inlineCode",{parentName:"p"},"environment")," \u4e2d\u5373\u53ef\uff0c\u5982\u679c\u9700\u8981\u91c7\u7528\u6307\u5b9a",(0,o.kt)("inlineCode",{parentName:"p"},"env_file"),"\u914d\u7f6e\uff0c\u8bf7\u4fee\u6539\u5f53\u524d\u76ee\u5f55\u4e0b\u7684.env\u6587\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.8'\nservices:\n  vaultwarden:\n    image: vaultwarden/server:latest\n    container_name: vaultwarden-server\n    restart: always\n    env_file:\n      - .env\n    volumes:\n      - /etc/localtime:/etc/localtime:ro\n      - ./vaultwarden-data/:/data/\n    ports:\n      - \"8072:80\"\n    environment:\n      - TZ:Asia/Shanghai\n      ## \u5982\u679c\u91c7\u7528\u6302\u8f7d.env\u7684\u65b9\u5f0f\uff0c\u4ee5\u4e0b\u914d\u7f6e\u53ef\u4ee5\u5220\u9664\uff0c\u5747\u53ef\u5728.env\u4e2d\u914d\u7f6e\n      - SIGNUPS_ALLOWED=false\n      # \u5982\u679c\u4f7f\u7528mysql\u6570\u636e\u5e93\uff0c\u653e\u5f00\u8fd9\u4e24\u884c\u7684\u914d\u7f6e\u5373\u53ef\u3002\u5426\u5219\u9ed8\u8ba4\u4f7f\u7528sqllite\n      # - RUST_BACKTRACE=1\n      # - DATABASE_URL=mysql://DB_USERNAME:DB_USER_PASSWORD@DB_URL:DB_PROT/DB_NAME\n      - ADMIN_TOKEN=xxxxxxx\n\n")))}s.isMDXComponent=!0}}]);
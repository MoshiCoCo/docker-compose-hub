import{_ as s,c as i,o as a,a5 as h}from"./chunks/framework.-Zveb6AF.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"tools/acme-sh/index.md","filePath":"tools/acme-sh/index.md"}'),e={name:"tools/acme-sh/index.md"},n=h(`<h2 id="acme" tabindex="-1">ACME <a class="header-anchor" href="#acme" aria-label="Permalink to &quot;ACME&quot;">​</a></h2><p>申请免费的 SSL 证书，支持 Let‘s Encrypt，ZeroSSL 等免费证书。支持 aliyun，dnspod，cloudfrad 等厂商。</p><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><p>运行 docker-compose 后运行以下命令</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> acme.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">acme.sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --register-account</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youmail@domain.com</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zerossl</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">acme.sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --issue</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dns</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dns_dp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> example.com</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.example.com</span></span></code></pre></div><p>查看<code>./acme.sh/example.com</code>目录</p><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 阿里云域名签发ecc证书</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">acme.sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   --issue</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   --dns</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dns_ali</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yourdomain.com</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.yourdomain.com</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --dnssleep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --keylength</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ec-256</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 腾讯云域名签发ecc证书</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">acme.sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   --issue</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   --dns</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dns_dp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yourdomain.com</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.yourdomain.com</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --dnssleep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 300</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 更新所有证书</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">acme.sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --renew-all</span></span></code></pre></div>`,10),t=[n];function l(p,k,d,r,F,c){return a(),i("div",null,t)}const g=s(e,[["render",l]]);export{C as __pageData,g as default};

import{_ as s,c as a,o as e,aT as i}from"./chunks/framework.CQUEgy21.js";const g=JSON.parse('{"title":"카본 광고","description":"","frontmatter":{},"headers":[],"relativePath":"ko/reference/default-theme-carbon-ads.md","filePath":"ko/reference/default-theme-carbon-ads.md","lastUpdated":1728115014000}'),n={name:"ko/reference/default-theme-carbon-ads.md"},t=i(`<h1 id="carbon-ads" tabindex="-1">카본 광고 <a class="header-anchor" href="#carbon-ads" aria-label="Permalink to &quot;카본 광고 {#carbon-ads}&quot;">​</a></h1><p>VitePress는 <a href="https://www.carbonads.net/" target="_blank" rel="noreferrer">카본 광고</a>에 대한 내장된 네이티브 지원을 제공합니다. config에서 카본 광고 자격증명을 정의함으로써, VitePress는 페이지에 광고를 표시합니다.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    carbonAds: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      code: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;당신의-카본-코드&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      placement: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;당신의-카본-위치&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>이 값들은 아래와 같이 카본 CDN 스크립트를 호출하는 데 사용됩니다.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`//cdn.carbonads.com/carbon.js?serve=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">code</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&amp;placement=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">placement</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span></code></pre></div><p>카본 광고 설정에 대해 자세히 알아보려면, <a href="https://www.carbonads.net/" target="_blank" rel="noreferrer">카본 광고 웹사이트</a>를 방문해 주십시오.</p>`,6),p=[t];function l(h,r,d,c,k,o){return e(),a("div",null,p)}const _=s(n,[["render",l]]);export{g as __pageData,_ as default};

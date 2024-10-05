import{_ as s,c as e,o as i,aT as a}from"./chunks/framework.CQUEgy21.js";const E=JSON.parse('{"title":"Manejo de Assets","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/asset-handling.md","filePath":"es/guide/asset-handling.md","lastUpdated":1728115014000}'),t={name:"es/guide/asset-handling.md"},n=a(`<h1 id="asset-handling" tabindex="-1">Manejo de Assets <a class="header-anchor" href="#asset-handling" aria-label="Permalink to &quot;Manejo de Assets {#asset-handling}&quot;">​</a></h1><h2 id="referencing-static-assets" tabindex="-1">Referenciando Assets Estáticos <a class="header-anchor" href="#referencing-static-assets" aria-label="Permalink to &quot;Referenciando Assets Estáticos {#referencing-static-assets}&quot;">​</a></h2><p>Todos los archivos Markdown son compilados en componentes Vue y procesados por <a href="https://vitejs.dev/guide/assets.html" target="_blank" rel="noreferrer">Vite</a>. Usted puede <strong>y debe</strong> referenciar cualquier asset usando URLs relativas:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Una imagen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">./imagen.png</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Puede referenciar assets estáticos en sus archivos markdown, sus componentes <code>*.vue</code> en el tema, estilos y simples archivos <code>.css</code>, usando paths públicos absolutos (com base en la raiz del projeto) o paths relativos (con base en su sistema de arhivos). Este último es semejante al comportamiento que está acostumbrado se ya usó Vite, Vue CLI o el <code>file-loader</code> de webpack.</p><p>Tipos comunes de archivos de imagen, media y fuente son detectados e incluidos automaticamente como assets.</p><p>Todos los assets referenciados, incluyendo aquellos usando paths absolutos, serán copiados al directorio de salida con un nombre de archivo hash en la compilación de producción. Assets nunca referenciados no serán copiados. Assets de imagen menores que 4KB serán incorporados en base64 - esto puede ser configurado por la opción <a href="./../reference/site-config#vite"><code>vite</code></a> en configuración.</p><p>Todas las referencias de path <strong>estáticas</strong>, incluyendo paths absolutos, deben ser basadas en la estructura de su directorio de trabajo.</p><h2 id="the-public-directory" tabindex="-1">El directorio público <a class="header-anchor" href="#the-public-directory" aria-label="Permalink to &quot;El directorio público {#the-public-directory}&quot;">​</a></h2><p>A veces, puede ser necesario proveer assets estáticos que no son referenciados directamente en ninguno de sus componentes del tema o Markdown, o usted puede querer servir ciertos archivos con el nombre del archivo original. Ejemplos de tales archivos incluyen <code>robots.txt</code>, favicons e iconos PWA.</p><p>Puede colocar esos archivos en el directorio <code>public</code> sobre el <a href="./routing#source-directory">directorio de origen</a>. Por ejemplo, se la raiz de su proyecto fuera <code>./docs</code> y estuviera usando localización por defecto del directorio fuente, entonces el directorio público será <code>./docs/public</code>.</p><p>Los assets colocados en <code>public</code> serán copiados a la raiz del directorio de salida tal como son.</p><p>Observe que usted debe referenciar archivos colocados en <code>public</code> usando e path absoluto de la raiz - por ejemplo, <code>public/icon.png</code> debe siempre ser referenciado en el código fuente como <code>/icon.png</code>.</p><h2 id="base-url" tabindex="-1">URL Base <a class="header-anchor" href="#base-url" aria-label="Permalink to &quot;URL Base {#base-url}&quot;">​</a></h2><p>Si su sitio estuviera implantado en una URL que no sea la raiz, será necesario definir la opción <code>base</code> en <code>.vitepress/config.js</code>. Por ejemplo, se planea implantar su sitio en <code>https://foo.github.io/bar/</code>, entonces <code>base</code> debe ser definido como <code>&#39;/bar/&#39;</code> (siempre debe comenzar y terminar con una barra).</p><p>Todos los paths de sus assets estáticos son procesados automáticamente para ajustarse a los diferentes valores de configuración <code>base</code>. Por ejemplo, se tuviera una referencia absoluta a un asset sobre <code>public</code> en su Markdown:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Una imagen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">/imagen-dentro-de-public.png</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>No</strong> necesita actualizarlo cuando altere el valor de configuración <code>base</code> en ese caso.</p><p>Sin embargo, se estuviera creando un componente de tema que vincula assets dinámicamente, por ejemplo, una imagen cuyo <code>src</code> esta basado en un valor de configuración del tema:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">theme.logoPath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>En este caso, es recomendable complementar el path con el <a href="./../reference/runtime-api#withbase"><code>auxiliar withBase</code></a> proporcionado por VitePress:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { withBase, useData } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withBase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(theme.logoPath)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,22),o=[n];function r(l,d,p,c,h,k){return i(),e("div",null,o)}const g=s(t,[["render",r]]);export{E as __pageData,g as default};

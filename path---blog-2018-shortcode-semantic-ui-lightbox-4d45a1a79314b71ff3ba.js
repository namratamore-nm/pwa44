webpackJsonp([49478866352750],{598:function(a,s){a.exports={data:{blog:{html:'<p>Using just a few lines of jQuery, combined with the Semantic UI Modal component, you can create a pretty simple and effective Lightbox:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/semantic-ui@2.3.1/dist/semantic.min.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>photos<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ui basic segment show<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ui header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Semantic UI Lightbox Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Click any of the cards below to activate the modal-based lightbox. It\'s based off the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://semantic-ui.com/modules/modal.html#basic<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>"basic modal"<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> in Semantic UI.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ui four stackable cards<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>PhotoCard ui card<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://via.placeholder.com/300x250<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ui fluid image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t\tCool pics\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>PhotoCard ui card<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://via.placeholder.com/300x250<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ui fluid image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t\tCool pics\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>PhotoCard ui card<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://via.placeholder.com/300x250<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ui fluid image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t\tCool pics\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>PhotoCard ui card<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://via.placeholder.com/300x250<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ui fluid image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t\tCool pics\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token script language-javascript">\n<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/semantic-ui@2.3.1/dist/semantic.min.js"</span> <span class="token operator">/</span><span class="token operator">></span>\n<span class="token operator">&lt;</span>script<span class="token operator">></span>\n<span class="token comment">// Lightbox for photos using Semantic UI</span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.PhotoCard\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">var</span> image <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token string">\'img\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">\'src\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'body\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">\'&lt;div class="ui basic modal">&lt;div class="content">&lt;img src="\'</span><span class="token operator">+</span>image<span class="token operator">+</span><span class="token string">\'" width="100%" />&lt;/div>&lt;/div>\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        \n\t\t<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.ui.basic.modal\'</span><span class="token punctuation">)</span>\n\t\t\t<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t\t\t<span class="token punctuation">.</span><span class="token function">modal</span><span class="token punctuation">(</span><span class="token string">\'show\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p data-height="265" data-theme-id="light" data-slug-hash="NMEYPO" data-default-tab="html,result" data-user="whoisryosuke" data-embed-version="2" data-pen-title="Semantic UI Lightbox Example" id="codepen" class="codepen">See the Pen <a href="https://codepen.io/whoisryosuke/pen/NMEYPO/">Semantic UI Lightbox Example</a> by Ryosuke (<a href="https://codepen.io/whoisryosuke">@whoisryosuke</a>) on <a href="https://codepen.io">CodePen</a>.</p>\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">🖼🔍 Using <a href="https://twitter.com/semanticui?ref_src=twsrc%5Etfw">@semanticui</a> to create a simple image &quot;Lightbox&quot; popup using their basic modal and a little <a href="https://twitter.com/hashtag/jQuery?src=hash&amp;ref_src=twsrc%5Etfw">#jQuery</a> <a href="https://t.co/Fd5dvMmIkS">https://t.co/Fd5dvMmIkS</a> <a href="https://twitter.com/hashtag/SemanticUI?src=hash&amp;ref_src=twsrc%5Etfw">#SemanticUI</a> <a href="https://twitter.com/hashtag/CSS?src=hash&amp;ref_src=twsrc%5Etfw">#CSS</a> <a href="https://twitter.com/hashtag/Javascript?src=hash&amp;ref_src=twsrc%5Etfw">#Javascript</a> <a href="https://twitter.com/hashtag/CodeSnippets?src=hash&amp;ref_src=twsrc%5Etfw">#CodeSnippets</a> <a href="https://t.co/OIdLWSidzN">pic.twitter.com/OIdLWSidzN</a></p>&mdash; Ryosuke (@whoisryosuke) <a href="https://twitter.com/whoisryosuke/status/997245663195742208?ref_src=twsrc%5Etfw">May 17, 2018</a></blockquote>\n<p>Hope that helps,\nRyo</p>\n<hr>\n<p><strong>References</strong></p>\n<ul>\n<li><a href="https://twitter.com/whoisryosuke/status/1013615808948285441">Original tweet</a></li>\n<li><a href="https://gist.github.com/whoisryosuke/9c49aed1a0b759731f0bc019ec903975">See the code gist</a></li>\n<li><a href="https://www.inmotionhosting.com/support/edu/wordpress/333-add-admin-via-mysql">Add admin via SQL</a></li>\n</ul>',frontmatter:{title:"shortcode - Lightbox using Semantic UI + JQuery 🖼🔍",cover_image:{publicURL:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac.jpg",childImageSharp:{sizes:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='267' viewBox='0 0 400 267' version='1'%3E%3Cpath d='M0 134v133h10c11 0 14-1 14-6l1-1c1 0 3-5 3-9 0-2 0-3 2-3s2-1 2-4v-4h4l4-1h8l5-3 6-4c2 0 2-1 2-4v-4h6c4 0 5 0 5-2s1-2 4-2c4 0 7 2 7 3 0 3 4 5 8 5h5v-12h8v-8h16v-8h4c4 0 4 0 4-2 0-3 0-3 4-3l4-1c0-2 1-2 4-2l4-1c0-2 2-2 8-2 8 0 8 0 8-2 0-3 0-3 4-3 3 0 4 0 4 2l1 2 3-2 3-2 1-3c0-3 2-4 4-2l2 1c2 0 4-3 3-4l3-6 2 3 2 4v-9h8v4l1 4 1-4c0-3 0-4 2-4l1-4c0-3 0-4 2-4l1-1 4-1 8-2c3-2 4-2 4-1 0 2 1 2 4 2l4-1c0-2 1-2 4-2l4-1h2c2 2 2 2 3 0 2-1 2-2-1-3l-8-2-4-1h4l9-1 7-2c4 0 4 0 4-3s0-3 4-3 4 0 4-2c0-3 0-3 4-3l4-1 4-1h4v-4c0-5 0-5 3-4l4-1c2-2 3-4 1-3s-7-1-5-2c1-1 1-1-1-1-2 1-5-4-4-9l1-5c1-3 12-1 12 3h2l1-2 4-4-1 2v1l2-2h4c2-3 1-3-3-3l-4 1-1 1-1-1c0-3 10-3 12 0 1 1 1 1 2-1 1-1 1-1 1 1-1 2 0 3 2 3l2 3 2-1 4-3 4-2v3l2 4c0 2 0 2-1 1l-1-1 1 3v3l1 3 1-5c0-8 1-9 5-9h1c-3 0-2-3 1-2 2 0 2 0 1-1s-1-1 2-1 3 0 2 1l-2 1-1 1 2 1v1l1 2 1 1c0-3 2-2 2 1s0 3 1 1l1-4c1 0 1-1-1-1-1-1-1-1 1-1 3 0 3-2 0-3h-2l2-1 3 1h1l3 2h2l-1-2 3-3c1 1 2 2 2 5v5l1-4c0-4 0-4 1-2v4l1 1 1-2 2-3c1-1 1-1-1-1-2 1-2 0-2-1 0-2 0-2 1-1l4 1 4 1h-2l-1 1 3 1h1c0 2 4 1 5-1l1-2 1-1c0-2 1-2 4-2 4 0 4 0 4-2l1-3 1-4-1-4-1-1c0-2 1-2 4-2s4 0 4 2l4 1h4v93c0 81 1 75 1-40V0H0v134m263-36l-1 3v10c-1 1-1 1-2-2l-2-2h-3c-3-2-3-4-1-4v1l1 1h1v1l1-2v-1c3 1 3-1 1-2-3-1-10 2-10 5 0 2 0 2 1 1l1-1c1 1 2 3 4 3l3 3c-1 3-3 4-6 1l-3-2 1 2v3a1139 1139 0 0 1 9 0c2-1 2-1 2 1s2 0 2-3c1-2 1-2 1 0 0 5 2 3 3-3 0-6 1-8 4-8 2 1 2 1 2 5v8c2 5 4 5 3-1 0-3 0-3 1 0l1 1v-3l-1-5c1-5-2-7-7-7-3 1-4 1-3-1v-5c-1-1-2 0-3 3' fill='lightgray' fill-rule='evenodd'/%3E%3C/svg%3E",src:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg",srcSet:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-7cc04.jpg 310w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-69042.jpg 620w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg 1240w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-50ab1.jpg 1860w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-e738f.jpg 1920w"}}},date:"16 May, 2018",tags:["wordpress","sql","shortcode","code snippet","tips"],section:"blog"},fields:{slug:"/blog/2018/shortcode-semantic-ui-lightbox/"}},relatedPosts:{edges:[{node:{html:'<p>I was approached by Koleto Packaging Solutions to create a landing page for their new brand. They were looking for a professional, yet modern multi-page Wordpress website to exhibit their products and services. I designed the pages and components in Sketch, and then developed a custom Wordpress theme using HTML5 and SASS/CSS3.</p>\n<p>\n    \n  <a class="gatsby-resp-image-link" href="/static/koleto-behance-1-35b52139d0fb5f5edc2b4b6c93c75894-da00f.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 1080px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 41.15432873274781%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAECA//EABYBAQEBAAAAAAAAAAAAAAAAAAIDBP/aAAwDAQACEAMQAAABxgrooGP/xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAEFAn//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPwGn/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Bh//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEABj8Cf//EABgQAQADAQAAAAAAAAAAAAAAAAEAEBFB/9oACAEBAAE/IRO7NK//2gAMAwEAAgADAAAAEIvP/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/EFZP/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/EAbP/8QAGxAAAgEFAAAAAAAAAAAAAAAAAAERITFBUWH/2gAIAQEAAT8Qi5OQPYx3of/Z&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="koleto behance 1" title="" src="/static/koleto-behance-1-35b52139d0fb5f5edc2b4b6c93c75894-918ac.jpg" srcset="/static/koleto-behance-1-35b52139d0fb5f5edc2b4b6c93c75894-2ceef.jpg 270w,\n/static/koleto-behance-1-35b52139d0fb5f5edc2b4b6c93c75894-b59aa.jpg 540w,\n/static/koleto-behance-1-35b52139d0fb5f5edc2b4b6c93c75894-918ac.jpg 1080w,\n/static/koleto-behance-1-35b52139d0fb5f5edc2b4b6c93c75894-419dc.jpg 1620w,\n/static/koleto-behance-1-35b52139d0fb5f5edc2b4b6c93c75894-6e912.jpg 2160w,\n/static/koleto-behance-1-35b52139d0fb5f5edc2b4b6c93c75894-da00f.jpg 2391w" sizes="(max-width: 1080px) 100vw, 1080px">\n    </span>\n  </span>\n  \n  </a>\n    \n    \n  <a class="gatsby-resp-image-link" href="/static/koleto-behance-2-b70bc5c4f323bab881ab2ae1b740a279-da00f.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 1080px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 90.79882894186532%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAECAwQF/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAABq3c17cVdZECsBf/EABsQAAMAAgMAAAAAAAAAAAAAAAECAwAQBBMy/9oACAEBAAEFAlkzYYuNccgLTrpjejv/xAAZEQACAwEAAAAAAAAAAAAAAAABEAIRITH/2gAIAQMBAT8BkdpHq//EABcRAAMBAAAAAAAAAAAAAAAAAAEQETH/2gAIAQIBAT8BpQxf/8QAHBAAAQQDAQAAAAAAAAAAAAAAAQACESIQICGh/9oACAEBAAY/AqiV0e4dLgELgQjp/8QAGxAAAgIDAQAAAAAAAAAAAAAAAREAMRBBUaH/2gAIAQEAAT8hY0IrQH0IQioGnB2ZocTsT0YCsf/aAAwDAQACAAMAAAAQQz8//8QAFxEAAwEAAAAAAAAAAAAAAAAAABARUf/aAAgBAwEBPxCGRGf/xAAXEQEAAwAAAAAAAAAAAAAAAAABABAR/9oACAECAQE/EAptn//EAB4QAQEAAgICAwAAAAAAAAAAAAERACExYSBBUYGh/9oACAEBAAE/EC0gUdhv7xnbUIL+4iIiMTFwYpLcPhzSLwol476wcKIto334D//Z&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="koleto behance 2" title="" src="/static/koleto-behance-2-b70bc5c4f323bab881ab2ae1b740a279-918ac.jpg" srcset="/static/koleto-behance-2-b70bc5c4f323bab881ab2ae1b740a279-2ceef.jpg 270w,\n/static/koleto-behance-2-b70bc5c4f323bab881ab2ae1b740a279-b59aa.jpg 540w,\n/static/koleto-behance-2-b70bc5c4f323bab881ab2ae1b740a279-918ac.jpg 1080w,\n/static/koleto-behance-2-b70bc5c4f323bab881ab2ae1b740a279-419dc.jpg 1620w,\n/static/koleto-behance-2-b70bc5c4f323bab881ab2ae1b740a279-6e912.jpg 2160w,\n/static/koleto-behance-2-b70bc5c4f323bab881ab2ae1b740a279-da00f.jpg 2391w" sizes="(max-width: 1080px) 100vw, 1080px">\n    </span>\n  </span>\n  \n  </a>\n    \n    \n  <a class="gatsby-resp-image-link" href="/static/koleto-behance-3-3a6a42941280fbade587156367e2d899-da00f.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 1080px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 77.16436637390214%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAgP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAAeNBChehU2H/xAAYEAEBAQEBAAAAAAAAAAAAAAACAwABEv/aAAgBAQABBQLTkexY890qAzsyl//EABYRAQEBAAAAAAAAAAAAAAAAAAABAv/aAAgBAwEBPwHaP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABwQAAMAAQUAAAAAAAAAAAAAAAABEQIQEiEicf/aAAgBAQAGPwIu2s5U80Sybp1Z/8QAGhABAQEAAwEAAAAAAAAAAAAAAREAECFRQf/aAAgBAQABPyGXdSu2XSAlLFwcEPL7gKiB93//2gAMAwEAAgADAAAAEJP/AP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxAIaQU1v//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPxBXMIW//8QAGxABAQACAwEAAAAAAAAAAAAAAREAITFBcVH/2gAIAQEAAT8QYXWbmkomKOjkx3n2oOX3N/cfgjQR26yGjtDbV79z/9k=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="koleto behance 3" title="" src="/static/koleto-behance-3-3a6a42941280fbade587156367e2d899-918ac.jpg" srcset="/static/koleto-behance-3-3a6a42941280fbade587156367e2d899-2ceef.jpg 270w,\n/static/koleto-behance-3-3a6a42941280fbade587156367e2d899-b59aa.jpg 540w,\n/static/koleto-behance-3-3a6a42941280fbade587156367e2d899-918ac.jpg 1080w,\n/static/koleto-behance-3-3a6a42941280fbade587156367e2d899-419dc.jpg 1620w,\n/static/koleto-behance-3-3a6a42941280fbade587156367e2d899-6e912.jpg 2160w,\n/static/koleto-behance-3-3a6a42941280fbade587156367e2d899-da00f.jpg 2391w" sizes="(max-width: 1080px) 100vw, 1080px">\n    </span>\n  </span>\n  \n  </a>\n    \n    \n  <a class="gatsby-resp-image-link" href="/static/koleto-behance-4-c70d4080731e9ad64876100a02e017cd-da00f.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 1080px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 86.40736093684652%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAARABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMBAv/EABcBAQEBAQAAAAAAAAAAAAAAAAIAAQT/2gAMAwEAAhADEAAAAawyi6oukwKCz//EABoQAAICAwAAAAAAAAAAAAAAAAECAxASEzH/2gAIAQEAAQUCAXQELmo3wc9v/8QAGREAAQUAAAAAAAAAAAAAAAAAAQACEBFB/9oACAEDAQE/AS04qn//xAAXEQADAQAAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/AUbf/8QAGxAAAQQDAAAAAAAAAAAAAAAAEQABAhASIDH/2gAIAQEABj8CfmSEbOv/xAAdEAACAQQDAAAAAAAAAAAAAAABEQAgITFBUXGB/9oACAEBAAE/ITGZPVEHv3EijqamAsLVoTI8mj//2gAMAwEAAgADAAAAEHPAg//EABcRAQADAAAAAAAAAAAAAAAAAAEAECH/2gAIAQMBAT8QKMGL/8QAFhEAAwAAAAAAAAAAAAAAAAAAAREg/9oACAECAQE/ECUP/8QAHhABAAIBBAMAAAAAAAAAAAAAAREhACAxQaFhcZH/2gAIAQEAAT8QWRbRTkNsiQb08CL7xbRSkcPJ+1iT7ghbmL6yDyJGPbo//9k=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="koleto behance 4" title="" src="/static/koleto-behance-4-c70d4080731e9ad64876100a02e017cd-918ac.jpg" srcset="/static/koleto-behance-4-c70d4080731e9ad64876100a02e017cd-2ceef.jpg 270w,\n/static/koleto-behance-4-c70d4080731e9ad64876100a02e017cd-b59aa.jpg 540w,\n/static/koleto-behance-4-c70d4080731e9ad64876100a02e017cd-918ac.jpg 1080w,\n/static/koleto-behance-4-c70d4080731e9ad64876100a02e017cd-419dc.jpg 1620w,\n/static/koleto-behance-4-c70d4080731e9ad64876100a02e017cd-6e912.jpg 2160w,\n/static/koleto-behance-4-c70d4080731e9ad64876100a02e017cd-da00f.jpg 2391w" sizes="(max-width: 1080px) 100vw, 1080px">\n    </span>\n  </span>\n  \n  </a>\n    \n    \n  <a class="gatsby-resp-image-link" href="/static/koleto-behance-5-db6c10841d7636501fbf13ab2142df4b-da00f.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 1080px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 361.6060225846926%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCABIABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUCAwQB/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAEEAwL/2gAMAwEAAhADEAAAAdsdNxqhLTrZnfh0qdWdHRJlDSpkZIdFbG28wRkgo50O884DP//EACAQAAICAgICAwAAAAAAAAAAAAIDAAEEEhEzEyEUIzL/2gAIAQEAAQUCWobByxEIn2m62mR6ciqtOtTI7luAV+QY69mKTZzU42tWY/TMjurya1xwf6x+m7mRf3C4hH5DIRWRf//EABgRAAMBAQAAAAAAAAAAAAAAAAABAhEQ/9oACAEDAQE/AXbVCordJlYVTJ3BvSbWd//EABgRAAMBAQAAAAAAAAAAAAAAAAABEBES/9oACAECAQE/ATJrHGzlmKf/xAAjEAACAQEHBQAAAAAAAAAAAAAAARECEBIhIjEyQRNhgZGh/9oACAEBAAY/Ak2SlZSZsRwUyacyMppxk59DaL3Bv+DRTYzLejsY9QevkpNGMhG4ln//xAAiEAEAAgECBgMAAAAAAAAAAAABABEhMbFBUWFxgZGhwfD/2gAIAQEAAT8hD6161BVButblwlgHXWGKALgAijGCUq0bPceW+yFfHGQ9gmTD7oOiJXKjngBQMSyzbzm+3ldIfjhpp5kJNL1nWWzcXdN9vKcWdiIeGG2cT8CMmteM/9oADAMBAAIAAwAAABA44T0sMHHzz//EABoRAQEBAQADAAAAAAAAAAAAAAEAESEQQVH/2gAIAQMBAT8QQ9c2VBgVKOvqQpLGdZkE3Ph4/8QAGREAAwEBAQAAAAAAAAAAAAAAAAEhERAx/9oACAECAQE/EBKxpmUwakKGl5eH/8QAIhABAQACAgEEAwEAAAAAAAAAAREAITFB8FFhodFxgZHh/9oACAEBAAE/EHp13cc47Zzy6R9cn0xxQNIvbg4soE7/ALg5CICBoxDBtbpFijfhrjyGvoZvbiO2VcDCo7LX4xZVU5J1iTFjKqvHGFAAQo+83oasSrvj94F13/TKn5XnKLfAYlEQzg+MEUw07zeATjptp1b7YLv8LKa9xQwIHwGFlFSTXxnvP4+s7kWiXP/Z&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="koleto behance 5" title="" src="/static/koleto-behance-5-db6c10841d7636501fbf13ab2142df4b-918ac.jpg" srcset="/static/koleto-behance-5-db6c10841d7636501fbf13ab2142df4b-2ceef.jpg 270w,\n/static/koleto-behance-5-db6c10841d7636501fbf13ab2142df4b-b59aa.jpg 540w,\n/static/koleto-behance-5-db6c10841d7636501fbf13ab2142df4b-918ac.jpg 1080w,\n/static/koleto-behance-5-db6c10841d7636501fbf13ab2142df4b-419dc.jpg 1620w,\n/static/koleto-behance-5-db6c10841d7636501fbf13ab2142df4b-6e912.jpg 2160w,\n/static/koleto-behance-5-db6c10841d7636501fbf13ab2142df4b-da00f.jpg 2391w" sizes="(max-width: 1080px) 100vw, 1080px">\n    </span>\n  </span>\n  \n  </a>\n    \n</p>',frontmatter:{title:"Koleto Packaging Solutions",cover_image:{publicURL:"/static/koleto-behance-1-35b52139d0fb5f5edc2b4b6c93c75894.jpg",childImageSharp:{sizes:{src:"/static/koleto-behance-1-35b52139d0fb5f5edc2b4b6c93c75894-4e8db.jpg",srcSet:"/static/koleto-behance-1-35b52139d0fb5f5edc2b4b6c93c75894-7cc04.jpg 310w,\n/static/koleto-behance-1-35b52139d0fb5f5edc2b4b6c93c75894-69042.jpg 620w,\n/static/koleto-behance-1-35b52139d0fb5f5edc2b4b6c93c75894-4e8db.jpg 1240w,\n/static/koleto-behance-1-35b52139d0fb5f5edc2b4b6c93c75894-50ab1.jpg 1860w,\n/static/koleto-behance-1-35b52139d0fb5f5edc2b4b6c93c75894-6d15c.jpg 2391w"}}},date:"20 August, 2018",tags:["web design","wordpress","sketch","responsive design","css3"]},fields:{slug:"/projects/koleto/"}}},{node:{html:'<p>I recently ran into an issue where I wasn\'t the admin in a Wordpress install, and after running this bit of SQL, I was quickly back in command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code class="language-sql"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">`</span>wp_users<span class="token punctuation">`</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>user_login<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>user_pass<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>user_nicename<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>user_email<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>user_status<span class="token punctuation">`</span><span class="token punctuation">)</span>\n<span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">\'ryo\'</span><span class="token punctuation">,</span> MD5<span class="token punctuation">(</span><span class="token string">\'easy123\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'firstname lastname\'</span><span class="token punctuation">,</span> <span class="token string">\'ryo@example.com\'</span><span class="token punctuation">,</span> <span class="token string">\'0\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">`</span>wp_usermeta<span class="token punctuation">`</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>umeta_id<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>user_id<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>meta_key<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>meta_value<span class="token punctuation">`</span><span class="token punctuation">)</span> \n<span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">Select</span> <span class="token function">max</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">FROM</span> wp_users<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'wp_capabilities\'</span><span class="token punctuation">,</span> <span class="token string">\'a:1:{s:13:"administrator";s:1:"1";}\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">`</span>wp_usermeta<span class="token punctuation">`</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>umeta_id<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>user_id<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>meta_key<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>meta_value<span class="token punctuation">`</span><span class="token punctuation">)</span> \n<span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">Select</span> <span class="token function">max</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">FROM</span> wp_users<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'wp_user_level\'</span><span class="token punctuation">,</span> <span class="token string">\'10\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">❓ Oh I&#39;m not the admin on this <a href="https://twitter.com/hashtag/Wordpress?src=hash&amp;ref_src=twsrc%5Etfw">#Wordpress</a> install? Let me just do a little <a href="https://twitter.com/hashtag/SQL?src=hash&amp;ref_src=twsrc%5Etfw">#SQL</a> here... 🔑⚡️<a href="https://t.co/NZYCKV2xBV">https://t.co/NZYCKV2xBV</a> <a href="https://t.co/c63UawZLqe">pic.twitter.com/c63UawZLqe</a></p>&mdash; Ryosuke (@whoisryosuke) <a href="https://twitter.com/whoisryosuke/status/1013615808948285441?ref_src=twsrc%5Etfw">July 2, 2018</a></blockquote>\n<p>Hope that helps,\nRyo</p>\n<hr>\n<p><strong>References</strong></p>\n<ul>\n<li><a href="https://twitter.com/whoisryosuke/status/1013615808948285441">Original tweet</a></li>\n<li><a href="https://gist.github.com/whoisryosuke/9c49aed1a0b759731f0bc019ec903975">See the code gist</a></li>\n<li><a href="https://www.inmotionhosting.com/support/edu/wordpress/333-add-admin-via-mysql">Add admin via SQL</a></li>\n</ul>',
frontmatter:{title:"shortcode - Make yourself Wordpress admin using SQL 🔑⚡️",cover_image:{publicURL:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac.jpg",childImageSharp:{sizes:{src:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg",srcSet:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-7cc04.jpg 310w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-69042.jpg 620w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg 1240w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-50ab1.jpg 1860w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-e738f.jpg 1920w"}}},date:"08 July, 2018",tags:["wordpress","sql","shortcode","code snippet","tips"]},fields:{slug:"/blog/2018/shortcode-make-yourself-wordpress-admin-using-sql/"}}}]}},pathContext:{tag:"wordpress",slug:"/blog/2018/shortcode-semantic-ui-lightbox/"}}}});
//# sourceMappingURL=path---blog-2018-shortcode-semantic-ui-lightbox-4d45a1a79314b71ff3ba.js.map
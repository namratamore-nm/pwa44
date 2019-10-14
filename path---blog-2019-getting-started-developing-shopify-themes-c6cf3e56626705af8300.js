webpackJsonp([0x9fe48746c1ed],{604:function(e,s){e.exports={data:{blog:{html:'<p>Shopify has exploded over the past few years, becoming a near de-facto decision for any small to mid scale e-commerce project. It\'s become more important than ever to sharpen Shopify skills and get a handle on Liquid.</p>\n<p>I wrote this guide to outline the process of developing on a pre-existing Shopify theme (although you could deploy a new theme using these directions). This documentation <a href="https://help.shopify.com/en/themes/development/getting-started/choosing-an-editor">is available on the Shopify website</a>, but it\'s so disjointed that I opted to aggregate and disseminate the key elements here.</p>\n<blockquote>\n<p>This guide assumes you have already signed up for a Shopify account, created a store, and activated a theme on the site. Please note that free trials of themes cannot be downloaded locally for development, you must purchase a theme before editing it\'s code.</p>\n</blockquote>\n<h2>Why can\'t I just spin up a Shopify dev server? 🤨</h2>\n<p>Shopify theme development doesn\'t work like other platforms, like Wordpress, since it\'s a closed-source cloud-based solution. <strong>There is no way to spin up a local development Shopify server.</strong></p>\n<p>All your changes have to be committed to the live Shopify servers in order to preview it. You don\'t have to push code to production per say, you can update preview themes (or use a staging/development store). But keep in mind, <strong>there\'s no way to develop Shopify themes without an active internet connection.</strong></p>\n<p>In order to edit a Shopify theme\'s code, you have two options:</p>\n<ul>\n<li>You can either edit the code through the browser, inside the Shopify admin (similar to Wordpress).</li>\n<li>Or you can download the theme to your computer, and send/sync changes with the Shopify server.</li>\n</ul>\n<p>Because of this tightly coupled process with the Shopify server, they\'ve developed tools to help simplify the process of transferring code between the Shopify server and your local machine.</p>\n<h2>The Tools 🛠Theme Kit vs Slate</h2>\n<p>Shopify offers two tools to streamline local development of their themes: Theme Kit and Slate.</p>\n<p><strong>Theme Kit</strong> is a CLI, or command-line interface, that allows you to execute standard operations on themes (like downloading or updating theme files) using the command line. Essentially you write commands like <code class="language-text">theme get</code> or <code class="language-text">theme watch</code> to download or start syncing file changes.</p>\n<p><strong>Slate</strong> is a new project that is a wrapper around the Theme Kit CLI. It\'s meant to simplify Shopify development even further for users who prefer against using CLI. It provides you scripts (using Theme Kit) to deploy changes, and it also includes a kind of "starter theme" to help scaffold your new Shopify themes. Because of the inclusion of the starter theme, it makes it difficult to easily use Slate with pre-existing theme (my theme wasn\'t compatible for some reason).</p>\n<h3>Which do you choose? 🧐</h3>\n<ul>\n<li>If you\'re developing an existing theme: <strong>Theme Kit</strong>.</li>\n<li>If you\'re developing a new theme: <strong>A decoupled React/Vue/etc app using the API</strong> or <strong>Slate</strong>.</li>\n</ul>\n<p>I\'ll be moving forward using <strong>Theme Kit</strong>, since it is more flexible to learn (allowing you to use existing theme or even new ones).</p>\n<h2>Starting a project 🎉</h2>\n<p>You can find the instructions <a href="https://shopify.github.io/themekit/">from Shopify on Theme Kit are here</a>. Basically you install a CLI called Theme Kit that Shopify created to interface with their theme API. It makes downloading and deploying changes your theme much simpler than a classic FTP-type setup.</p>\n<p>Generate an API key by creating a "Private App": <a href="https://your-store.myshopify.com/admin/apps/private/new">https://your-store.myshopify.com/admin/apps/private/new</a>. Make sure to enable read and write access on the Theme Assets (you\'ll have to see more since it\'s hidden by default).</p>\n<ol>\n<li>Install Theme Kit CLI</li>\n<li>Navigate to your project directory</li>\n<li>Run the initial configuration script to generate a YML config:</li>\n</ol>\n<p><code class="language-text">theme configure --password=[your-api-password] --store=[your-store.myshopify.com] --themeid=[your-theme-id]</code></p>\n<ol start="4">\n<li>If your theme hasn\'t downloaded, run <code class="language-text">theme get</code></li>\n<li>Add the settings to ignore config (see below)</li>\n<li>Run <code class="language-text">theme watch</code> when you\'re ready to start developing.</li>\n</ol>\n<h2>Avoiding Customizer Conflicts 🙅‍♂️</h2>\n<p>Shopify allows store owners to customize their shop using a "Theme Customizer" in the admin section. Any settings saved in the Customizer, like fonts or colors, are committed to a file called <code class="language-text">settings_data.json</code> in the theme\'s config folder.</p>\n<p>When you\'re developing Shopify themes locally, if you choose to use the <code class="language-text">theme deploy</code> command over <code class="language-text">theme watch</code>, you can accidentally override the Customizer options with your local JSON file. This can be problematic, particularly if you\'re saving changes to the server, and another user is also customizing the site (or you just want to make customizer tweaks while editing source code).</p>\n<h3>The solution 👍</h3>\n<p>Make sure to add the <code class="language-text">settings_data.json</code> config file to your ignore list. This overrides any customizations made in the browser, and can get annoying if you\'re testing colors/modules and accidentally deploy old overrides.</p>\n<div class="gatsby-highlight">\n      <pre class="language-yml"><code class="language-yml">development:\n  password: 4383472319239\n  theme_id: &quot;12359393&quot;\n  store: yourstore.myshopify.com\n  ignore_files:\n  - config/settings_data.json</code></pre>\n      </div>\n<h2>Basic scripts to get started ⚙️</h2>\n<p><code class="language-text">theme watch</code> and <code class="language-text">theme deploy</code> for sending files to server. Watch will send files on save, deploy overrides all files (or specified files/folders).</p>\n<p>You can use the commands directly, but I made a <code class="language-text">package.json</code> to utilize NPM scripts to simplify deployment since some flags like <code class="language-text">-n</code> are almost required -- but not defaults.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  <span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"your-theme"</span><span class="token punctuation">,</span>\n  <span class="token string">"version"</span><span class="token punctuation">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>\n  <span class="token string">"description"</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n  <span class="token string">"main"</span><span class="token punctuation">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span>\n  <span class="token string">"scripts"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"deploy"</span><span class="token punctuation">:</span> <span class="token string">"theme deploy -n"</span><span class="token punctuation">,</span>\n    <span class="token string">"watch"</span><span class="token punctuation">:</span> <span class="token string">"theme watch"</span><span class="token punctuation">,</span>\n    <span class="token string">"test"</span><span class="token punctuation">:</span> <span class="token string">"echo \\"Error: no test specified\\" &amp;&amp; exit 1"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">"author"</span><span class="token punctuation">:</span> <span class="token string">"You"</span><span class="token punctuation">,</span>\n  <span class="token string">"license"</span><span class="token punctuation">:</span> <span class="token string">"MIT"</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Creating customizable sections 🍰</h2>\n<p>One of the benefits of using Shopify is the drag and drop page building functionality provided by the Customizer. Store owners are able to re-order pages like the frontpage and easily do things like change text, colors, etc. Creating customizable "sections" as Shopify calls them is very simple, and only requires you to create a Liquid template with a JSON configuration on the bottom to specify the customizable fields.</p>\n<p>To create a new section, add create a new <code class="language-text">.liquid</code> file in the <code class="language-text">sections</code> folder. Here I created a "quote" section that displays a user-defined quote in a large, quote-like format:</p>\n<div class="gatsby-highlight">\n      <pre class="language-liquid"><code class="language-liquid">{<span class="token operator">%</span> <span class="token keyword">if</span> section.settings.centered <span class="token operator">==</span> true <span class="token operator">%</span>}\n<span class="token operator">&lt;</span>div class<span class="token operator">=</span>"section quote centered n<span class="token operator">-</span>margin relative show<span class="token operator">-</span>on<span class="token operator">-</span>scroll"<span class="token operator">></span>\n{<span class="token operator">%</span> <span class="token keyword">else</span> <span class="token operator">%</span>}\n<span class="token operator">&lt;</span>div class<span class="token operator">=</span>"section quote n<span class="token operator">-</span>margin relative"<span class="token operator">></span>\n{<span class="token operator">%</span> <span class="token keyword">endif</span> <span class="token operator">%</span>}\n    {<span class="token operator">%</span> <span class="token keyword">if</span> section.settings.subtitle <span class="token operator">!=</span> blank <span class="token operator">%</span>}\n        <span class="token operator">&lt;</span>h3 class<span class="token operator">=</span>"subtitle"<span class="token operator">></span>{{ section.settings.subtitle <span class="token operator">|</span> <span class="token function">escape</span> }}<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>\n    {<span class="token operator">%</span> <span class="token keyword">endif</span> <span class="token operator">%</span>}\n    {<span class="token operator">%</span> <span class="token keyword">if</span> section.settings.heading <span class="token operator">!=</span> blank <span class="token operator">%</span>}\n        <span class="token operator">&lt;</span>h1<span class="token operator">></span>{{ section.settings.heading <span class="token operator">|</span> <span class="token function">escape</span> }}<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>\n    {<span class="token operator">%</span> <span class="token keyword">endif</span> <span class="token operator">%</span>}\n<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\n\n{<span class="token operator">%</span> schema <span class="token operator">%</span>}\n{\n    "name"<span class="token operator">:</span> {\n        "de"<span class="token operator">:</span> "Quote",\n        "en"<span class="token operator">:</span> "Quote",\n        "es"<span class="token operator">:</span> "Quote",\n        "fr"<span class="token operator">:</span> "Quote",\n        "it"<span class="token operator">:</span> "Quote",\n        "ja"<span class="token operator">:</span> "Quote",\n        "pt<span class="token operator">-</span>BR"<span class="token operator">:</span> "Quote"\n    },\n    "settings"<span class="token operator">:</span> [\n        {\n            "type"<span class="token operator">:</span> "text",\n            "id"<span class="token operator">:</span> "heading",\n            "label"<span class="token operator">:</span> {\n                "de"<span class="token operator">:</span> "Titel",\n                "en"<span class="token operator">:</span> "Heading",\n                "es"<span class="token operator">:</span> "Título",\n                "fr"<span class="token operator">:</span> "Titre",\n                "it"<span class="token operator">:</span> "Heading",\n                "ja"<span class="token operator">:</span> "見出し",\n                "pt<span class="token operator">-</span>BR"<span class="token operator">:</span> "Título"\n            },\n            "default"<span class="token operator">:</span> {\n                "de"<span class="token operator">:</span> "Explore",\n                "en"<span class="token operator">:</span> "Explore",\n                "es"<span class="token operator">:</span> "Explore",\n                "fr"<span class="token operator">:</span> "Explore",\n                "it"<span class="token operator">:</span> "Explore",\n                "ja"<span class="token operator">:</span> "Explore",\n                "pt<span class="token operator">-</span>BR"<span class="token operator">:</span> "Explore"\n            }\n        },\n        {\n            "type"<span class="token operator">:</span> "checkbox",\n            "id"<span class="token operator">:</span> "centered",\n            "label"<span class="token operator">:</span> "Centered<span class="token operator">?</span>",\n            "default"<span class="token operator">:</span> true,\n            "info"<span class="token operator">:</span> "Centers quote text"\n        },\n        {\n            "type"<span class="token operator">:</span> "text",\n            "id"<span class="token operator">:</span> "subtitle",\n            "label"<span class="token operator">:</span> {\n                "de"<span class="token operator">:</span> "Sub Titel",\n                "en"<span class="token operator">:</span> "Sub<span class="token operator">-</span>heading",\n                "es"<span class="token operator">:</span> "Sub Título",\n                "fr"<span class="token operator">:</span> "Sub Titre",\n                "it"<span class="token operator">:</span> "Sub Heading",\n                "ja"<span class="token operator">:</span> "S見出し",\n                "pt<span class="token operator">-</span>BR"<span class="token operator">:</span> "Sub Título"\n            },\n            "default"<span class="token operator">:</span> {\n                "de"<span class="token operator">:</span> "Vestibulum aliquam hendrerit molestie mauris.",\n                "en"<span class="token operator">:</span> "Vestibulum aliquam hendrerit molestie mauris.",\n                "es"<span class="token operator">:</span> "Vestibulum aliquam hendrerit molestie mauris.",\n                "fr"<span class="token operator">:</span> "Vestibulum aliquam hendrerit molestie mauris.",\n                "it"<span class="token operator">:</span> "Vestibulum aliquam hendrerit molestie mauris.",\n                "ja"<span class="token operator">:</span> "Vestibulum aliquam hendrerit molestie mauris.",\n                "pt<span class="token operator">-</span>BR"<span class="token operator">:</span> "Vestibulum aliquam hendrerit molestie mauris."\n            }\n        }\n    ],\n    "presets"<span class="token operator">:</span> [\n        {\n            "name"<span class="token operator">:</span> {\n                "de"<span class="token operator">:</span> "Quote",\n                "en"<span class="token operator">:</span> "Quote",\n                "es"<span class="token operator">:</span> "Quote",\n                "fr"<span class="token operator">:</span> "Quote",\n                "it"<span class="token operator">:</span> "Quote",\n                "ja"<span class="token operator">:</span> "Quote",\n                "pt<span class="token operator">-</span>BR"<span class="token operator">:</span> "Quote"\n            },\n            "category"<span class="token operator">:</span> {\n                "de"<span class="token operator">:</span> "Text",\n                "en"<span class="token operator">:</span> "Text",\n                "es"<span class="token operator">:</span> "Text",\n                "fr"<span class="token operator">:</span> "Text",\n                "it"<span class="token operator">:</span> "Text",\n                "ja"<span class="token operator">:</span> "Text",\n                "pt<span class="token operator">-</span>BR"<span class="token operator">:</span> "Text"\n            }\n        }\n    ]\n}\n{<span class="token operator">%</span> endschema <span class="token operator">%</span>}\n</code></pre>\n      </div>\n<p>You can see above that I added input fields to the JSON\'s settings section. Each input is a JSON object that contains the input info (name, type, etc), which is inside the settings array.</p>\n<p>We can access these user inputted values from the settings in the theme using the Liquid syntax: <code class="language-text">{{ section.settings.yourinputname }}</code>.</p>\n<p>And similarly we can create conditionals (to check if a value exists or not) by using: <code class="language-text">{% if section.settings.yourinputname == &#39;your value here&#39; %}</code>.</p>\n<p>If you\'re familiar with any sort of templating language (such as Blade or Twig), this should be reminiscent to syntax you\'ve seen.</p>\n<h2>Start coding away! 🚀</h2>\n<p>Run <code class="language-text">theme watch</code> in the project directory, open a file, and save your changes to see your code sent to the live Shopify server. You could use <code class="language-text">theme deploy</code>, but it\'s more tedious, and risks overwriting files you possibly didn\'t sync (or changed since your last edit).</p>\n<blockquote>\n<p>Whenever you pick up a project again, make sure to run <code class="language-text">theme get</code> before getting started. It\'s the equivalent of updating your local git with a remote repo. This way you won\'t override changes someone else might have made since your last development session.</p>\n</blockquote>\n<p>Do you already develop for Shopify? How does your process differ, and what kind of tips can you additionally offer? <a href="http://twitter.com/whoisryosuke">Let me know on Twitter</a> or in the comments below 💬👇</p>\n<hr>\n<p><strong>References:</strong></p>\n<ul>\n<li><a href="https://help.shopify.com/en/themes/development/getting-started/choosing-an-editor">Shopify Development Tools</a></li>\n</ul>',frontmatter:{title:"Getting started developing Shopify themes",cover_image:{publicURL:"/static/getting-started-developing-shopify-themes@0.5x-a012364990dd309c28b4717b9285d168.jpg",childImageSharp:{sizes:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='267' viewBox='0 0 400 267' version='1'%3E%3Cpath d='M0 134v133h40l40-1c0-2 1-2 4-2s4 0 4-2h1c2 3 5 2 6-1s1-3 9-3l8-1-4-1-4-1c0-2 1-2 4-2 4 0 4 0 4-2 0-3 0-3 9-3 8 0 9 0 9-2l2-2 2-2 1-2 1 2c0 2 0 2 5 1 4-2 6-3 4-3l-1-4v-4h11v4c0 3 1 4 3 5 4 3 7 0 7-5 0-3 0-4 2-4l1-3c0-4 2-5 6-5s4 0 4-4v-4h14v-3c0-3 0-3 4-3 3 0 4 0 5-3 3-8 6-5 5 4l1 5 1-7v-7h8v-8h4l4-1-4-1h-5v4c0 3 0 4-2 4s-2-1-2-4c0-6 2-7 10-7 8 1 11-1 11-8l2-5v-2h-5c-2-2-4-2-5-1l-1 1c2 0-1 2-3 2h-2l2-1c1-1 1-1-1-1-3 1-6-3-7-8-1-3 0-4 2-6 3-3 4-4 8-1 3 1 4 1 3 4v4h-5c-5-1-6 0-5 1l1 1 10-1-4 1-5 1c-1 1 1 1 6 1l8-1 2-2c2-1 2-1 0-2l-4 1h-1v-3c-2-4 2-7 8-7h2v-4l1-6c0-8 1-9 5-9l4-1-4-1c-4 0-6-2-2-3l1-3 2-2 2 2 1 1c3 0 5-4 5-8s3-4 3 0l1 3 2-2c2-2 3-3 2-4 0-3 2-5 7-5 3 0 4-1 4-2 1-1 1-1 1 1 0 6 4 0 4-7 0-2 0-3 2-3l1 1 2-1h2l-1 2c-2 1-6 11-7 17-2 8-1 17 2 22l2 5 1 2 1-1 1-1 1 1c-1 1 0 2 1 2h1l5-1 5-1c0-2 1-2 4-2 4 0 4 0 4-3 0-2 0-3 3-2l5-1c1-2 1-2-1-3l-2-1-1-1c-1 0-5-4-7-8-2-3 2-10 7-13 5-2 12-3 16-1 8 3 9 2 11-2l1-7c0-3 4-12 6-15l2-3h-5c-3 0-3 0-3-6v-6h8c6 0 8 0 10-2l4-3 2-1 2-2 2-2 2-3c1-1 2-1 2 4 1 4 1 3 1-4 0-13 2-10 2 5 0 13 1 10 2-6l2 34v11l1-8c0-5 1-7 1-4 0 5 2 7 2 3a4633 4633 0 0 0 4-8c1 1 1-1 1-5 0-5 0-6-2-6s-2-1-2-4 0-4 2-4 2-1 2-8c0-12 1-13 7-10l6 4h3v104l1 105V0H0v134m218-49c0 4 0 4-3 3-5 0-8 3-8 8 0 6 4 10 9 7h2l1 1 1-11-1-11c-1-1-1 0-1 3M38 85c-2 3-2 4-2 8 0 9 4 12 13 11 3-1 3-1 3-6v-5h-4l-4 1 3 1c3 0 3 0 3 3-1 8-13 4-13-4 0-7 5-11 11-9h3c-1-3-10-2-13 0m145 2l-7 1h-4v8l1 8 1-6c0-6 1-8 6-8h3v6c1 7 2 9 6 8 1-1 1-1-1-2-4-1-4-12-1-12l2-1-2-1-2-1-1-2-1 2M57 91c-4 7 0 14 8 13 3-1 3-3-1-2-2 0-4 0-5-2-3-3-3-4 3-4s6 0 4-5c-1-4-7-5-9 0m57-1c-2 1-2 7-1 7l-1 7c-2 3 0 5 4 6 5 0 8-1 9-4 0-3-2-5-6-5-5 0-5-2-1-3s6-3 5-6l1-2 1-1c0-2-10-1-11 1m44-1l3 1c3 0 5 1 5 3l-4 1c-4 1-6 3-6 6 1 3 3 5 7 3h3l1 1V90c-1-2-9-3-9-1m36 1c-6 5-1 15 6 14 4-1 4-3 0-2-3 0-6-1-6-4l1-2c5 1 9 0 9-2 0-6-7-8-10-4M46 120c0 4 0 4-4 3-4 0-7 2-7 7 0 7 2 8 8 8l5 1v-11l-1-11c-1-1-1 0-1 3m114 3c-2 1-2 2-2 5l-1 9c-3 4 0 8 5 8 6 0 7-1 7-5v-4h-4l-5-1c0-1 1-2 3-2 3 0 5-3 5-6l1-3c1-1 1-1-1-1h-8m-106 1c-2 1-3 6-2 9 1 6 6 8 11 4l3-1h-4c-5 1-8 0-8-3-1-2 0-2 5-2s5 0 5-2c0-5-6-8-10-5m26 2c-3 8 1 14 8 13 4-1 4-3 0-3-4 1-7-1-7-4l6-1h5v-3c-2-6-9-7-12-2m23-1c-5 7 2 17 9 13 3-2 3-11 0-13-2-3-8-2-9 0m15 9l1 11 1-4c0-4 0-4 1-3 2 1 8 0 8-2h2c1 0 1-6-1-10-1-3-2-3-7-3h-5v11m-67 18v21h2l3-6c1-8 4-8 4 1 0 4 1 5 3 5 2 1 2 1 2-6 1-8-2-11-8-9-2 0-2 0-2-3l-1-3h-3m64 0c-3 0-4 2-2 2v2l-1 2-1 2 1 1v11c-1 1 0 1 2 1h4v-6c0-5 0-6 2-6s3 1 5 6c2 6 2 9-1 9l-2 2c0 4 8 2 9-2 5-12 7-18 5-19s-3 1-5 6c-1 2-2 4-2 2 0-5-3-8-7-8-3 0-4 0-3-1l2-1 2-1c0-3-3-3-8-2m41 0l1 21 2-5c0-7 0-8 3-8 3-1 5 2 5 7l1 7 1-7c0-8-1-10-7-9-5 1-5-1-2-4l1-2-2-1-3 1m-120 2c-3 4-1 8 4 10 5 3 4 5-2 5-4-1-4-1-4 1 1 5 9 5 13 1 3-3 1-7-4-10-4-2-4-3 0-3 7 0 6-4-1-6-3 0-4 0-6 2m34 6c-3 4-2 10 2 12 6 4 13-1 11-8-1-7-9-9-13-4m16-2v22h3c2 0 2 0 2-4 0-3 0-3 3-3 4 1 7-2 7-7 0-7-2-9-9-9l-6 1m88 2c-2 2-2 3-2 7v4h-1l1 1h3c3 3 10 2 10-2l1-3-2 2c0 3-8 3-9-1-1-1 0-2 5-1 4 0 5-1 5-2l1-3c0-2-2-3-7-4-1-1-3 0-5 2m15-2v16l1-6 1-4v-1c0-2 0-3 2-3 3-1 4 0 4 7l1 8 1-1 1-1 1-5c-1-6 1-9 4-8 1 0 2 8 0 9l-1 2 1 1 2 1c2 2 4 3 4 1l-1-1-1-3 1-3 1-1-1-2-1-2c-1-3-5-5-8-4h-12' fill='lightgray' fill-rule='evenodd'/%3E%3C/svg%3E",src:"/static/getting-started-developing-shopify-themes@0.5x-a012364990dd309c28b4717b9285d168-4e8db.jpg",srcSet:"/static/getting-started-developing-shopify-themes@0.5x-a012364990dd309c28b4717b9285d168-7cc04.jpg 310w,\n/static/getting-started-developing-shopify-themes@0.5x-a012364990dd309c28b4717b9285d168-69042.jpg 620w,\n/static/getting-started-developing-shopify-themes@0.5x-a012364990dd309c28b4717b9285d168-4e8db.jpg 1240w,\n/static/getting-started-developing-shopify-themes@0.5x-a012364990dd309c28b4717b9285d168-50ab1.jpg 1860w,\n/static/getting-started-developing-shopify-themes@0.5x-a012364990dd309c28b4717b9285d168-5e51b.jpg 2480w,\n/static/getting-started-developing-shopify-themes@0.5x-a012364990dd309c28b4717b9285d168-19e99.jpg 3000w"}}},date:"05 June, 2019",tags:["shopify","tutorial","shopify themes"],section:"blog"},fields:{slug:"/blog/2019/getting-started-developing-shopify-themes/"}},relatedPosts:null},pathContext:{tag:"shopify themes",slug:"/blog/2019/getting-started-developing-shopify-themes/"}}}});
//# sourceMappingURL=path---blog-2019-getting-started-developing-shopify-themes-c6cf3e56626705af8300.js.map
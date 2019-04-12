webpackJsonp([0x63205a3b6ee5],{591:function(e,t){e.exports={data:{blog:{html:'<p>As I\'ve been creating more React projects, I\'ve been finding that there\'s a lot of setup to make concocting code as smooth as possible. One of those prerequisites that often peeks around the corner in your project roadmap is the lack of a linting setup. It\'s a small, often stylistic thing, but you\'ll often find yourself removing an empty line here or there, or tabbing code into place -- <strong>when it should be automated on robots.</strong> </p>\n<p>So here\'s my foolproof way to setup ESLint and Prettier on projects (assuming you use VSCode):</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># Install ESLint and Babel ESLint</span>\n<span class="token comment"># Make sure to install at least v5.1.0 of ESLint</span>\n<span class="token function">npm</span> <span class="token function">install</span> --save-dev eslint babel-eslint\n\n<span class="token comment"># Install the Airbnb config</span>\nnpx install-peerdeps --dev eslint-config-airbnb\n\n<span class="token comment"># Install Prettier + ESLint config</span>\n<span class="token function">npm</span> <span class="token function">install</span> --save-dev --save-exact prettier eslint-config-prettier\n</code></pre>\n      </div>\n<p>Add this to a <code class="language-text">.eslintrc.js</code> in your project root:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  parser<span class="token punctuation">:</span> <span class="token string">"babel-eslint"</span><span class="token punctuation">,</span>\n  <span class="token keyword">extends</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"airbnb"</span><span class="token punctuation">,</span> <span class="token string">"prettier"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"react"</span><span class="token punctuation">,</span> <span class="token string">"jsx-a11y"</span><span class="token punctuation">,</span> <span class="token string">"import"</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>In VSCode, <code class="language-text">CTRL + ,</code> to open User Settings and add this to enable auto-prettify on save:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n    <span class="token comment">// Format a file on save. A formatter must be available, the file must not be auto-saved, and editor must not be shutting down.</span>\n    <span class="token string">"editor.formatOnSave"</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token comment">// Enable/disable default JavaScript formatter (For Prettier)</span>\n    <span class="token string">"javascript.format.enable"</span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// Use \'prettier-eslint\' instead of \'prettier\'. Other settings will only be fallbacks in case they could not be inferred from eslint rules.</span>\n    <span class="token string">"prettier.eslintIntegration"</span><span class="token punctuation">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>You can also create a new file called <code class="language-text">.vscode/settings.json</code> for per-project settings, to enforce it across all devs using VSCode.</p>\n</blockquote>\n<p>And if you haven\'t already, install ESLint in VSCode and restart your window:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">code --install-extension dbaeumer.vscode-eslint\n</code></pre>\n      </div>\n<blockquote>\n<p>If you have Prettier installed on your project (in the NPM modules), you don\'t have to install the VSCode extension.</p>\n</blockquote>\n<p>That\'s it! </p>\n<p>Your code will be reformatted automatically when you save. And more importantly, your code will be run against a linter, and check for any issues (formatting, lack of prop types, etc). You can see this in your ESLint debugger in VSCode, <code class="language-text">CTRL + T</code> on Mac to open the Terminal, and go to Problems tab.</p>\n<p>Hope that helps,\nRyo</p>\n<p><strong>References</strong></p>\n<ul>\n<li><a href="https://gist.github.com/whoisryosuke/1bf81f43a79d2f93f5ba45cb4fe3a0a6">Workflow - Adding ESLint + Prettier to projects</a></li>\n<li><a href="https://medium.com/@sgroff04/configure-eslint-prettier-and-flow-in-vs-code-for-react-development-c9d95db07213">Configure ESLint, Prettier, and Flow in VSCode for React Development</a></li>\n<li><a href="https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnb-1">Airbnb ESLint config</a></li>\n</ul>',frontmatter:{title:"Setting up ESLint + Prettier on project 🔏",cover_image:{publicURL:"/static/Setting-up-eslint-prettier-for-projects-1920px-af0a8ef888467bc71b86d521030b0524.jpg",childImageSharp:{sizes:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='267' viewBox='0 0 400 267' version='1'%3E%3Cpath d='M0 134v133h401V0H0v134m31-17v8h17v-17H31v9m99 29c-2 0-2 1-2 9l1 6c0-3 0-3 2-2 7 2 11-9 5-13h-6m-97 34c-1 11 0 12 5 12l5-1c0-1-1-2-3-2s-3 0-3-2c0-1 1-2 3-2 3 0 3-3-1-3-3-1-3-3 0-4 6-1 5-3-1-3h-5v5m14-3c-3 2-2 5 2 8 4 2 4 4-1 4-3-1-3-1-3 1 1 2 9 3 10 1 2-3 1-7-2-9-5-2-5-4-1-4l4-1c0-3-7-3-9 0m86 7c0 7 0 8 2 8 1 0 2-1 1-3 0-3 0-3 2-3 3 0 7-3 7-5 0-4-3-6-8-6h-4v9m72-5c-4 0-5 2-5 6 0 6 1 7 7 7 3 0 4 0 4-2l-2-1c-2 1-4 0-5-1s-1-1 1-1a96 96 0 0 0 6-1c2 0 1-3-1-6l-5-1m-125 7c0 5 0 6 2 6s2-1 2-5c0-3 1-5 2-5 2 0 2 1 2 5s0 5 2 5 2-1 2-6v-6l-6-1h-6v7m79-5c-5 5-1 11 6 11 5-1 5-3 1-3l-4-1 4-1c3 0 3 0 3-3l-1-4c-2-2-7-1-9 1' fill='lightgray' fill-rule='evenodd'/%3E%3C/svg%3E",src:"/static/Setting-up-eslint-prettier-for-projects-1920px-af0a8ef888467bc71b86d521030b0524-4e8db.jpg",srcSet:"/static/Setting-up-eslint-prettier-for-projects-1920px-af0a8ef888467bc71b86d521030b0524-7cc04.jpg 310w,\n/static/Setting-up-eslint-prettier-for-projects-1920px-af0a8ef888467bc71b86d521030b0524-69042.jpg 620w,\n/static/Setting-up-eslint-prettier-for-projects-1920px-af0a8ef888467bc71b86d521030b0524-4e8db.jpg 1240w,\n/static/Setting-up-eslint-prettier-for-projects-1920px-af0a8ef888467bc71b86d521030b0524-50ab1.jpg 1860w,\n/static/Setting-up-eslint-prettier-for-projects-1920px-af0a8ef888467bc71b86d521030b0524-5d231.jpg 1980w"}}},date:"03 September, 2018",tags:["testing","eslint","prettier","react","javascript"],section:"blog"},fields:{slug:"/blog/2018/setting-up-eslint-prettier-on-project/"}},relatedPosts:{edges:[{node:{html:'<p>I recently was exploring different documentation solutions for design systems, and through my experimentation I <strong>created a template to create Gatsby documentation for any React project.</strong></p>\n<p>Write your documentation inline with your components as <a href="http://usejsdoc.org/">docblocks</a>, and add more in-depth descriptions + live examples using <a href="https://github.com/mdx-js/mdx">MDX</a>. Check out the <a href="https://gatsby-documentation-starter.netlify.com">demo here.</a></p>\n\n  <a class="gatsby-resp-image-link" href="/static/screenshot-e991536017bd42e7c1e36696cc0ff3cc-d6e32.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 1080px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 75.03184713375795%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADXUlEQVQ4y2WSWWxUZRTHT+i8OBmCvvlkfHGF4MJQSY2EkLo9CMUwdlNrjaUopVSxGlcWTYwGNUqrCZAgQQyUCGkhICk0xKhERGijM5KZ6Uxnv3dm7mzFWIH255nbMtJwk3/Od7+b+zv/s8ibYtEtaV5TdUmKDZJgvURZJ2FellHaxM9LcpEXxUeL/EGTXKBZzuORX/Vc1hka5Sfq5bTeDSEbFdIlcTpdXtbPHWGda5iOeaqbz7N27lna552l5aafaa46TaNjCI/jpOoETzuOaTxGnWOAuqoBVsoJ1Q9Ih7p5xRGkd8MQ32wdYsdbg2zfeJSe14/yVfdxdr03yLb2ft737GdzwwE21R9g84zsc9N+3l7Rx1NVR6iVw0i7BNRdgL9+i1MsFbk8cRWf9yIXfh8mY2YxjQyZdBbLyt2gbMaiNJ4n+GeKFc5+lksf0qq9WePykUtOAFOUn0hkDK/XSyqVpFQqUSjkbeXzs5XL5bj0d5GgL8WTzj6WybdIkwzTqn0bz1yxYZOTUwpKEQgECYfDxGIxopGoJomSTCbJZi3yuWlY2eX4pQJBb5InnN+xVHYjz8k52lznKKYv28ApNZlOpwmFQowGRwkqOBAI2DGbzVacVYBlhzZwD4/IDqRBflGHZ/4HqsMybGRkhEQiYcPTZtqOZcg1YDleD3zUuZMa6UE8uj/Pu35U4L8zDqcIh8IVYLFYnNWz63UNGPAmWObsoVo+RVbJIE2uUxQqQOxeRaOxG4ZQKBRmwS3LmgHGWer8nAflI+QxGcDjOk7BnKgMJawllwdR/snQcg3TtMtOJlO6KlkMw5wuO1fQKZfwe2PUOD/mPtmCLJfvqXP1U8xMVEpOKCBlGCTUqTEWxozHMLWHht6ZpoHf79epR+ykVj5jA5c4P2SBvIM8LgdZ5TpEzvjHBl69MomhC5tRpc0Mlq6Qpe7K71Z2+i4eTRCLxomMRTVJEt9wiMXOTdwjbyC1so/aOXtZ6z5CW81h1iw5RFv1QV5YvI+W6r08W72HZvduGhftpEm1etEXrHR/wjPu7TS4e6mv/pK6hduYP6ebu+VV5GHZxUPyNW7pZaF8xv2qB3RaC7TB98oHmnUL82Urd8q73KW6TTq4RVZzq7Ryu3SpOlUd+r2TOzT+B4+XfGIpxFYRAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Screenshot of demo documentation site" title="" src="/static/screenshot-e991536017bd42e7c1e36696cc0ff3cc-e2462.png" srcset="/static/screenshot-e991536017bd42e7c1e36696cc0ff3cc-f6591.png 270w,\n/static/screenshot-e991536017bd42e7c1e36696cc0ff3cc-cce5f.png 540w,\n/static/screenshot-e991536017bd42e7c1e36696cc0ff3cc-e2462.png 1080w,\n/static/screenshot-e991536017bd42e7c1e36696cc0ff3cc-d6e32.png 1570w" sizes="(max-width: 1080px) 100vw, 1080px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p>If you\'re code is <em>already</em> documented, and your components are located in <code class="language-text">src/components</code> -- then <strong>you\'re good to go!</strong> Clone this project into your codebase and <em>let it rip!</em> 🚀</p>\n<p>Don\'t have that setup? <em>Don\'t worry!</em> I cover everything below 👇</p>\n<h2>Getting started</h2>\n<p><strong>Install with Netlify</strong></p>\n<ol>\n<li><a href="https://app.netlify.com/start/deploy?repository=https://github.com/whoisryosuke/gatsby-documentation-starter/tree/example"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a></li>\n</ol>\n<p><strong>Install with Gatsby CLI</strong></p>\n<ol>\n<li><code class="language-text">gatsby new docs https://github.com/whoisryosuke/gatsby-documentation-starter/</code></li>\n</ol>\n<p><strong>Install from Github</strong></p>\n<ol>\n<li><code class="language-text">git clone https://github.com/whoisryosuke/gatsby-documentation-starter.git</code></li>\n<li>Update <code class="language-text">gatsby-config.js</code> with the location of your components + MDX <em>(see: "Changing source folder")</em></li>\n<li><code class="language-text">npm install</code> inside project</li>\n<li><code class="language-text">npm run develop</code></li>\n<li>View your documentation: <a href="http://localhost:8000">http://localhost:8000</a></li>\n</ol>\n<h3>Creating documentation</h3>\n<p>Documentation is sourced from two places: component source code and MDX files.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">src\n└── components\n    └── Button\n        ├── Button.js\n        └── Button.mdx</code></pre>\n      </div>\n<p><a href="https://github.com/reactjs/react-docgen"><strong>React-docgen</strong></a> grabs any JS Docblocks you write for your React classes/functions (<code class="language-text">Button.js</code>), as well as the Prop Types. These are displayed on your documentation page, with the props organized in a table.</p>\n<p>Inside your <strong>MDX</strong> file you can write additional documentation with JSX examples (like React components!). You can also specify the page slug here (a <strong>page name</strong> and <strong>category</strong>). Your pages will be generated as <code class="language-text">http://yoursite.com/&lt;category&gt;/&lt;pageName&gt;</code>.</p>\n<p>In order for your component data to show up, you need an MDX file for the component - and the page name and component name in the docblock need to match. </p>\n<blockquote>\n<p>If you don\'t want to create MDX files and generate pages directly from components/JS files -- see the Github docs section: "Creating pages from react-docgen". The reason I chose MDX foremost is the flexibility of the frontmatter, allowing you to create different "sections" for components (if you have elements vs typography for example).</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">/**\n * ComponentTitle\n**/</span>\n<span class="token keyword">class</span> <span class="token class-name">ComponentName</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-md"><code class="language-md">---\nname: ComponentTitle\nmenu: CategoryName\n---</code></pre>\n      </div>\n<blockquote>\n<p>Creates a page for the component located at <a href="http://localhost:8000/categoryname/componentname">http://localhost:8000/categoryname/componentname</a></p>\n</blockquote>\n<h2>How does it work?</h2>\n<p>Gatsby can get pretty complicated if you\'ve never sat down and actually spun up a "Hello World" - and it can get even more complex when building a blog. </p>\n<p>Here\'s how it works on a high-level: </p>\n<ol>\n<li>Gatsby pulls data from your project (JS and MDX files)</li>\n<li>The data gets transformed into a GraphQL data layer</li>\n<li>During the build process, Gatsby generates pages for each component using the MDX files. The pages are React components that query GraphQL for our component\'s documentation + parsed MDX</li>\n</ol>\n<blockquote>\n<p>If you\'re not familiar with how Gatsby works, <a href="http://gatsby.org">check out their website</a> for more info. It\'s basically a static-site generator that uses GraphQL during development to generate static pages from dynamic data sources (APIs, local files, etc). </p>\n</blockquote>\n<h2>A little slower please</h2>\n<p>Gatsby pulls data into GraphQL, transforms the data (like parsing Markdown), then builds pages based off React components.</p>\n<p>Let\'s break each of those parts down.</p>\n<h3>♻️ The Data Part</h3>\n<p>Gatsby works by using "source" plugins to aggregate data into GraphQL. This project is setup with <code class="language-text">gatsby-source-filesystem</code>, which allows you to use the project\'s local filesystem (grabbing any file, from TXT to JS to MDX). This creates a GraphQL endpoint with all imported files. Each queried file, or GraphQL "node", contains auto-generated ID and a stringified version document body. </p>\n<h3>✨ The Transforming Part</h3>\n<p>Then Gatsby uses <strong>"transformer"</strong> plugins to create different GraphQL endpoints structured for specific datasets. If you query GraphQL for the data that the "source" plugin imported, you\'d notice that it\'s pretty barebones. The transformer plugins do just that, <em>transform</em> the data into usable formats. For example, <code class="language-text">gatsby-transformer-json</code> goes through each file, checks if it\'s JSON, then parses the body string back into an object/array.</p>\n<p>This template uses <a href="https://github.com/ChristopherBiscardi/gatsby-mdx/">gatsby-mdx</a> by <a href="https://github.com/ChristopherBiscardi/">@ChristopherBiscardi</a> and <a href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-react-docgen">gatsby-transformer-react-docgen</a> by the Gatsby team. <strong>gatsby-mdx</strong> parses any MDX files and creates cached HTML+JS files that are imported into pages. <strong>gatsby-transformer-react-docgen</strong> uses <a href="https://github.com/reactjs/react-docgen">react-docgen</a>, a CLI tool created by the Facebook team to pull documentation from React components. It runs the CLI on any JS files you import and creates GraphQL endpoints for it.</p>\n<h3>⚙️ The Build Part</h3>\n<p>When Gatsby runs it\'s build process, it creates pages from any JS files we include inside the <code class="language-text">src/pages/</code> directory. </p>\n<p>During the build process, it also executes additional modules we add to <code class="language-text">gatsby-node.js</code>. This allows us to do things like add new nodes to GraphQL endpoints, or create pages from GraphQL queries.</p>\n<p>For this template, I query GraphQL for all MDX files, and create pages from those. The pages are generated from a "template", which is a React component capable of running GraphQL queries. As Gatsby is a framework, it offers an API/methods for all these actions (querying GraphQL, creating pages from React components, passing data to the React components, etc).</p>\n<h2>🎨 The Design Process</h2>\n<p>I wanted to keep the design and actual code pretty lightweight to make it easier to repurpose. The layout of the documentation is 2-column with a header, where the sidebar column disappears on mobile (and a "toggle sidebar" button appears in the header). The snazzy animated mobile button was pulled from Codepen by <a href="https://codepen.io/ainalem/">@ ainalem</a>.</p>\n<h2>🚀 Deploy to Netlify</h2>\n<p>This project is perfect for deploying on Netlify, since it\'s optimized for static-site generators like Gatsby. </p>\n<p>Once your fork your project, just import the Git repo into Netlify and it should handle the rest!</p>\n<h2>What if I don\'t like Gatsby/JS/React/etc?</h2>\n<p>There are plenty of documentation options out there if you\'re looking for a different solution:</p>\n<ul>\n<li><a href="https://github.com/pedronauck/docz/">Docz</a></li>\n<li><a href="https://github.com/styleguidist/react-styleguidist">react-styleguidist</a></li>\n<li><a href="https://docusaurus.io/">Docusaurus</a></li>\n<li><a href="https://vuepress.vuejs.org/">Vuepress</a></li>\n<li><a href="https://www.gitbook.com/">Gitbook</a></li>\n<li><a href="https://github.com/docsifyjs/docsify">docsify</a></li>\n</ul>\n<p>And <a href="https://github.com/topics/documentation">there are plenty more!</a> Don\'t feel limited to one particular stack or setup. Find one that gels with your flow.</p>\n<h2>Document everything!</h2>\n<p>I appreciate great tools that take your hard work slaving over <em>docblocks</em> and <em>proptypes</em>, and in a click of a button -- transform your codebase into a fully functioning and well-designed documentation site. </p>\n<p>I designed this for <strong>design systems</strong> in mind, but it can really work with <strong>any project</strong> that uses React components 🙌</p>\n<p>I\'m always looking to empower my fellow devs and designers with tools that can improve their workflow. If this helped you with your docs, let me know in the comments, or send me a tweet 👍</p>\n<p><a href="https://github.com/whoisryosuke/gatsby-documentation-starter">Clone project on Github</a> | <a href="https://gatsby-documentation-starter.netlify.com">View demo site</a></p>\n<p>Cheers 🍻\nRyo</p>\n<hr>\n<p><strong>References:</strong></p>\n<ul>\n<li><a href="https://github.com/whoisryosuke/gatsby-documentation-starter">gatsby-documentation-starter</a></li>\n<li><a href="https://gatsby-documentation-starter.netlify.com">Demo site</a></li>\n<li><a href="http://gatsby.org">GatsbyJS</a></li>\n<li><a href="https://github.com/ChristopherBiscardi/gatsby-mdx/">gatsby-mdx</a></li>\n<li><a href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-react-docgen">gatsby-transformer-react-docgen</a></li>\n<li><a href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark">gatsby-transformer-remark</a></li>\n<li><a href="http://bradfrost.github.io/style-guide-guide/">Style Guide Guide</a></li>\n<li><a href="https://codepen.io/ainalem/pen/LJYRxz">Mobile Button CSS</a></li>\n</ul>',frontmatter:{title:"Generate documentation for any React project using GatsbyJS",cover_image:{publicURL:"/static/gatsby-documentation-starter-1980px-4ff7e70c088e6077ddbe694f3ac79570.jpg",childImageSharp:{sizes:{src:"/static/gatsby-documentation-starter-1980px-4ff7e70c088e6077ddbe694f3ac79570-4e8db.jpg",srcSet:"/static/gatsby-documentation-starter-1980px-4ff7e70c088e6077ddbe694f3ac79570-7cc04.jpg 310w,\n/static/gatsby-documentation-starter-1980px-4ff7e70c088e6077ddbe694f3ac79570-69042.jpg 620w,\n/static/gatsby-documentation-starter-1980px-4ff7e70c088e6077ddbe694f3ac79570-4e8db.jpg 1240w,\n/static/gatsby-documentation-starter-1980px-4ff7e70c088e6077ddbe694f3ac79570-50ab1.jpg 1860w,\n/static/gatsby-documentation-starter-1980px-4ff7e70c088e6077ddbe694f3ac79570-5d231.jpg 1980w"}}},date:"21 September, 2018",tags:["documentation","boilerplate","react","mdx","javascript","jsx","guide"]},fields:{slug:"/blog/2018/gatsby-documentation-starter/"}}},{node:{html:'<p>As I\'m starting to prepare for delivering talks and presentations, I\'ve decided to upgrade my slideshow game to use React components 📈💁‍♀️</p>\n<p>As a React developer, it\'s only natural to want to include real example of my work inside my presentations, and <a href="https://github.com/mdx-js/mdx">MDX</a> makes that possible using a mix of Markdown and JSX.</p>\n<p>But rather than building my own slideshow framework in React, I decided to utilize <a href="https://github.com/jxnblk/mdx-deck"><strong>mdx-deck</strong></a>, a framework and CLI for creating MDX-powered slideshows. It makes creating slide decks as simple as writing Markdown, and provides indispensable features:</p>\n<ul>\n<li>📝 Write presentations in markdown</li>\n<li>⚛️ Import and use React components</li>\n<li>💅 Customizable themes and components</li>\n<li>0️⃣ Zero-config CLI</li>\n<li>💁 Presenter mode</li>\n<li>📓 Speaker notes</li>\n<li><a href="https://dazzling-kepler-4cc40d.netlify.com/">See the demo site here</a></li>\n</ul>\n<img src="/mdx-deck boilerplate 3-9bdbc1b85f47dc9534799424244ca8df.gif" alt="Example of the slide deck in action">\n<p>To make my presentation as accessible as possible, I opted to use <a href="http://netlify.com"><strong>Netlify</strong></a> to host it. However, the <a href="https://github.com/jxnblk/mdx-deck/blob/master/docs/exporting.md">mdx-deck export docs</a> are missing some key details. To deploy on Netlify, you point it to a distribution folder that all static assets get compiled to. I couldn\'t find that export folder in the docs, and had to <a href="https://github.com/jxnblk/mdx-deck/blob/master/cli.js">hunt it down in the CLI\'s default Webpack configuration.</a></p>\n<p>After a bit of research, I present - Deploying mdx-deck in 4 steps (or less!):</p>\n<h2>📄 Setting up your project</h2>\n<p>I just used the example MDX deck provided by in the mdx-deck repo. I copied it into a new folder, created a new git repo, and pushed it to Github.</p>\n<p>You can clone my project to get started.</p>\n<ol>\n<li>Clone the project and add to your Github</li>\n<li>Add the repo to Netlify</li>\n</ol>\n<p>or</p>\n<ol>\n<li><a href="https://app.netlify.com/start/deploy?repository=https://github.com/whoisryosuke/mdx-deck-netlify">Click deploy here to Netlify</a></li>\n</ol>\n<h2>⚙️ Netlify settings</h2>\n<p>In order to make sure our deck deploys properly using continuous integration, we have to configure Netlify to build and display our app.  </p>\n<p>Go to your Deploy Settings (under the Deploys tab in your Netlify project/repo) and add the following settings:</p>\n<ol>\n<li>Set the build script to <code class="language-text">npm run build</code></li>\n<li>Set the deploy folder to <code class="language-text">dist</code></li>\n</ol>\n<p>We give Netlify a build script to run each time we make a commit to the repo. And the deploy folder is the place where mdx-deck exports the static HTML/JS version, and by pointing Netlify there it displays our deck after building.</p>\n<h2>Why Netlify? 🤨</h2>\n<p>I found myself in a situation where I didn\'t have immediate access to a development environment (Node/NPM specifically). I thought of using something like <a href="http://codesandbox.io">CodeSandbox</a>, but since I was running build scripts and not just importing modules, it wasn\'t suitable for projects like mdx-deck.</p>\n<p>Hosting on Netlify allows me to utilize <a href="http://github.com">Github</a> as an code editor/IDE, make changes to my deck\'s repo, and deploy those to Netlify immediately. It gives me the power of a development environment <em>(on a delay)</em> in the cloud. </p>\n<p>This way, if I need to make quick changes to my talk, I can deploy them easily through web interfaces 👏👌</p>\n<p><a href="https://dazzling-kepler-4cc40d.netlify.com/">See the demo site here</a> | <a href="https://github.com/whoisryosuke/mdx-deck-netlify">Source code</a></p>\n<p>Hope that helps!\nRyo</p>\n<hr>\n<p><strong>References</strong>:</p>\n<ul>\n<li><a href="https://github.com/jxnblk/mdx-deck">mdx-deck</a></li>\n<li><a href="https://github.com/jxnblk/mdx-deck/blob/master/cli.js">mdx-deck CLI (where you find the default export folder)</a></li>\n</ul>',frontmatter:{title:"Deploy MDX-Deck to Netlify 🚀",cover_image:{publicURL:"/static/mdx-deck-on-netlify-1900px-a24f9e73e297b6183318c3e2df10842c.jpg",childImageSharp:{sizes:{src:"/static/mdx-deck-on-netlify-1900px-a24f9e73e297b6183318c3e2df10842c-4e8db.jpg",srcSet:"/static/mdx-deck-on-netlify-1900px-a24f9e73e297b6183318c3e2df10842c-7cc04.jpg 310w,\n/static/mdx-deck-on-netlify-1900px-a24f9e73e297b6183318c3e2df10842c-69042.jpg 620w,\n/static/mdx-deck-on-netlify-1900px-a24f9e73e297b6183318c3e2df10842c-4e8db.jpg 1240w,\n/static/mdx-deck-on-netlify-1900px-a24f9e73e297b6183318c3e2df10842c-50ab1.jpg 1860w,\n/static/mdx-deck-on-netlify-1900px-a24f9e73e297b6183318c3e2df10842c-3a8b6.jpg 1900w"}}},date:"13 September, 2018",tags:["react","mdx","javascript","jsx","guide","tips"]},fields:{slug:"/blog/2018/mdx-deck-on-netlify/"}}}]}},pathContext:{tag:"javascript",slug:"/blog/2018/setting-up-eslint-prettier-on-project/"}}}});
//# sourceMappingURL=path---blog-2018-setting-up-eslint-prettier-on-project-fc5913cc40f76c16db1d.js.map
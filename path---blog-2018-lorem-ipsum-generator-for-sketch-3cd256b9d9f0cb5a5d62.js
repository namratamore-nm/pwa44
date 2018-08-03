webpackJsonp([0xcbfe03706b8b],{520:function(e,t){e.exports={data:{blog:{html:'<p>I was recently working on a quick project in <a href="http://sketchapp.com">Sketch</a> and I needed to insert some Lorem Ipsum text into a few fields. I did a quick search for a plugin on Google and came across <a href="https://github.com/richgong/sketch-lorem-ipsum-2017">this one by @RichardGong on Github</a>. It worked great, but only added a single line of Lorem to each text field, and the same Lorem text. This solution only goes so far if you work on any project with more than a single text field.</p>\n<p>So I forked his project and added <strong>more</strong> Lipsum, cause <em>you know</em>, the more Lipsum the better. </p>\n<h2>How it works</h2>\n<p>I generated 10 paragraphs on <a href="http://lipsum.com">Lipsum.com</a> and added them to an array. The plugin grabs the current selection, loops through each layer, and if it\'s a text field -- adds a paragraph of Lorem Ipsum. I use a variable to keep count of each loop, and once it reaches 10, I reset the count to grab from the top of the list (so you can select 30 fields and it\'ll still fill them all, just repeated 3x).</p>\n<h2>But it over-fills my text fields!</h2>\n<p>Yeah that\'s a thing. I was looking into a way to calculate the length of characters the current text field allows, but the Sketch API doesn\'t make it that simple, making it more than 20-30 lines of code to accomplish. It looks like the <a href="https://github.com/matt-curtis/Sketch-Highlighter/blob/master/Sketch-Highlighter.sketchplugin/Contents/Sketch/script.js">sketch-highlighter</a> plugin has a snippet that I can break down and use as a base. That feature will have to come later when I have the time to add it. </p>\n<h2>Download the plugin</h2>\n<p><a href="https://github.com/whoisryosuke/sketch-lorem-ipsum-2017">Head over to Github and click the "Clone or download" button</a>.</p>\n<p>Let me know if you have any questions!\nRyo</p>\n<hr>\n<p><strong>References</strong></p>\n<ul>\n<li><a href="https://github.com/whoisryosuke/sketch-lorem-ipsum-2017">Lorem Ipsum Generator Sketch Plugin</a></li>\n<li><a href="https://developer.sketchapp.com/guides/plugin-scripts/">Sketch Plugin docs</a></li>\n<li><a href="https://github.com/richgong/sketch-lorem-ipsum-2017">Original plugin by @RichardGong on Github</a></li>\n</ul>',frontmatter:{title:"Lorem Ipsum Generator plugin for Sketch",cover_image:{publicURL:"/static/Lorem-Ipsum-Generator-Sketch-Plugin-8058ac8b5d60c9e88039b2c8702aca36.jpg",childImageSharp:{sizes:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='267' viewBox='0 0 400 267' version='1'%3E%3Cpath d='M0 134v133h401V0H0v134m89-39l-8 2a193 193 0 0 1-15 21l-2 3 4 5a829 829 0 0 0 20 20c0 3 6 11 7 10l-1-3v-1l2 3c0 3 2 6 4 5l1 1c-1 1 0 3 1 4l3 4c1 2 9-7 9-8l3-5a158 158 0 0 0 14-15 10376 10376 0 0 0 17-21l-6-8-8-11-3-5-10-1H89m98 14c-5 5 0 15 6 14 4-1 5-4 5-9 0-6-6-10-11-5m27 0c-3 3-3 9 0 11 2 2 11 3 10 1h-4c-3 0-6-1-6-4 0-2 1-2 5-2 6 0 6-2 3-6-1-3-5-3-8 0m14 6c0 10 1 10 2 1 1-11 7-11 7 0l1 6 1-6c0-6 2-9 5-7 2 0 3 8 2 12l1 1v-13c-1-2-4-3-7-1h-3l-5-1-4 1v7m39 3l1 11 1-4c0-3 0-4 1-3 7 3 12-5 9-12-1-2-2-2-7-2h-5v10m-13 27c-4 0-5 2-1 2 3 0 4 1 4 2 2 2 1 3-3 3s-6 1-6 5c0 3 3 4 7 3h4l1-6c-1-7-2-10-6-9m23 1c-7 4-5 15 3 15 4 0 8-9 5-12-3-4-4-5-8-3m-84 1c-6 6 2 18 9 13 1-1 0-1-3-1s-4-1-5-2c-3-3-2-4 4-4 5 0 6-1 4-5s-6-4-9-1m32 0c-6 6 2 18 9 13 1-1 0-1-3-1-4 0-6-1-6-4 0-2 1-2 5-2 6 0 6-2 3-6-1-3-5-3-8 0' fill='lightgray' fill-rule='evenodd'/%3E%3C/svg%3E",src:"/static/Lorem-Ipsum-Generator-Sketch-Plugin-8058ac8b5d60c9e88039b2c8702aca36-4e8db.jpg",srcSet:"/static/Lorem-Ipsum-Generator-Sketch-Plugin-8058ac8b5d60c9e88039b2c8702aca36-7cc04.jpg 310w,\n/static/Lorem-Ipsum-Generator-Sketch-Plugin-8058ac8b5d60c9e88039b2c8702aca36-69042.jpg 620w,\n/static/Lorem-Ipsum-Generator-Sketch-Plugin-8058ac8b5d60c9e88039b2c8702aca36-4e8db.jpg 1240w,\n/static/Lorem-Ipsum-Generator-Sketch-Plugin-8058ac8b5d60c9e88039b2c8702aca36-50ab1.jpg 1860w,\n/static/Lorem-Ipsum-Generator-Sketch-Plugin-8058ac8b5d60c9e88039b2c8702aca36-e738f.jpg 1920w"}}},date:"09 July, 2018",tags:["sketch","resources","free","download"],section:"blog"},fields:{slug:"/blog/2018/lorem-ipsum-generator-for-sketch/"}},relatedPosts:null},pathContext:{tag:"download",slug:"/blog/2018/lorem-ipsum-generator-for-sketch/"}}}});
//# sourceMappingURL=path---blog-2018-lorem-ipsum-generator-for-sketch-3cd256b9d9f0cb5a5d62.js.map
webpackJsonp([0x63dec1ebaa6c],{286:function(e,t){"use strict";function a(e){return e.charAt(0).toUpperCase()+e.slice(1)}t.__esModule=!0,t.default=a,e.exports=t.default},294:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n),u=a(16),c=l(u),s=a(286),o=l(s),d=a(62),f=l(d),i=function(e){return e.test?r.default.createElement("span",{className:"btn disabled gray"},e.text):r.default.createElement(c.default,{to:e.url,className:"btn"},e.text)},m=function(e){var t=e.data,a=e.pathContext,l=a.group,n=a.index,u=a.first,c=a.last,s=a.pageCount,d=a.pathPrefix,m=n-1==1?"":(n-1).toString(),g=(n+1).toString();return console.log(l),console.log(a),console.log(t),r.default.createElement("div",{className:"BlogArchive"},r.default.createElement("header",{className:"container Title"},r.default.createElement("h1",null,(0,o.default)(d)," archive"),r.default.createElement("h4",{className:"Title__sub"},"Page ",s)),r.default.createElement(f.default,{loop:l}),r.default.createElement("nav",{className:"Pagination container"},r.default.createElement("div",{className:"prev"},r.default.createElement(i,{test:u,url:m,text:"Go to Previous Page"})),r.default.createElement("div",{className:"next"},r.default.createElement(i,{test:c,url:g,text:"Go to Next Page"}))))};t.default=m,e.exports=t.default}});
//# sourceMappingURL=component---src-templates-blog-archive-js-05520b152b931d67f402.js.map
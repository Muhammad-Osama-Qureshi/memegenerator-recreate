(this.webpackJsonpmemegeneratorusinghooks=this.webpackJsonpmemegeneratorusinghooks||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(6),r=n.n(a),s=(n(11),n(12),n(2)),i=n(5),l=n(3),m=n(0);var j=function(){var e=Object(c.useState)({allMemeImgs:[]}),t=Object(l.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)({topText:"",bottomText:""}),r=Object(l.a)(a,2),j=r[0],u=r[1],b=Object(c.useState)("http://i.imgflip.com/1bij.jpg"),h=Object(l.a)(b,2),g=h[0],p=h[1];Object(c.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){var t=e.data.memes;o({allMemeImgs:t})}))}));var x=function(e){u((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(s.a)({},e.target.name,e.target.value))}))},O=function(e){e.preventDefault();var t=Math.floor(Math.random()*n.allMemeImgs.length),c=n.allMemeImgs[t].url;p(c)};return Object(m.jsxs)("div",{children:[Object(m.jsxs)("form",{className:"meme-form",children:[Object(m.jsx)("input",{type:"text",name:"topText",placeholder:"Top Text",value:j.topText,onChange:x}),Object(m.jsx)("input",{type:"text",name:"bottomText",placeholder:"Bottom Text",value:j.bottomText,onChange:x}),Object(m.jsx)("button",{onClick:O,children:"Generate"})]}),Object(m.jsxs)("div",{className:"meme",children:[Object(m.jsx)("img",{src:g,onClick:O,alt:""}),Object(m.jsx)("h2",{className:"top",children:j.topText}),Object(m.jsx)("h2",{className:"bottom",children:j.bottomText})]})]})};var u=function(){return Object(m.jsxs)("header",{children:[Object(m.jsx)("img",{src:"https://www.clipartmax.com/png/full/64-647127_smiley-lol-emoticon-laughter-clip-art-laughing-emoji.png",alt:"Problem?"}),Object(m.jsx)("p",{children:"Meme Generator"})]})};var b=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(u,{}),Object(m.jsx)(j,{})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),a(e),r(e)}))};r.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root")),h()}},[[14,1,2]]]);
//# sourceMappingURL=main.19d27183.chunk.js.map
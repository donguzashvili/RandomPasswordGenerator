(this["webpackJsonppassword-generator"]=this["webpackJsonppassword-generator"]||[]).push([[0],{21:function(e,t,s){},22:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},33:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(8),r=s.n(n),i=(s(21),s(22),s(3)),l=s(4),j=s(6),d=s(5),o=s(13),b=s.n(o),h=s(0),p=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).generatePassword=function(e){e.preventDefault();var t=document.getElementById("LowerCase"),s=document.getElementById("UpperCase"),c=document.getElementById("numbers"),n=document.getElementById("symbol"),r=document.querySelector('input[name="Units"]:checked').value,i="";t.checked&&(i+="abcdefghijklmnopqrstwyz");s.checked&&(i+="ABCDEFGHIJKLMNOPQRSTWYZ"),n.checked&&(i+="!@#$%^&*_-+=");!function(e,t){var s="";if(""===t)a.setState({password:"Please check at least one option"});else{for(var c=0;c<e;c++)s+=t.charAt(Math.floor(Math.random()*t.length));a.setState({password:s})}}(r,c.checked?i+="0123456789":i)},a.state={password:"Generate it"},a}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)("div",{className:"header",children:Object(h.jsx)("h1",{children:"Generate Password"})}),Object(h.jsxs)("div",{className:"passwordGeneratorContainer",children:[Object(h.jsxs)("div",{className:"generatedPassword",children:[Object(h.jsx)("p",{id:"password",children:this.state.password}),Object(h.jsx)(b.a,{className:"copyIcon",onClick:function(){return navigator.clipboard.writeText(e.state.password)}}),Object(h.jsx)("span",{className:"hiddenText",children:"Copy"})]}),Object(h.jsxs)("div",{className:"options",children:[Object(h.jsx)("h2",{children:"Password Length"}),Object(h.jsxs)("form",{onSubmit:this.generatePassword,children:[Object(h.jsxs)("div",{className:"length",children:[Object(h.jsxs)("div",{className:"lengthWrapper",children:[Object(h.jsx)("label",{htmlFor:"8",children:"8 Units"}),Object(h.jsx)("input",{type:"radio",name:"Units",value:"8",id:"8",defaultChecked:!0})]}),Object(h.jsxs)("div",{className:"lengthWrapper",children:[Object(h.jsx)("label",{htmlFor:"10",children:"10 Units"}),Object(h.jsx)("input",{type:"radio",name:"Units",value:"10",id:"10"})]}),Object(h.jsxs)("div",{className:"lengthWrapper",children:[Object(h.jsx)("label",{htmlFor:"12",children:"12 Units"}),Object(h.jsx)("input",{type:"radio",name:"Units",value:"12",id:"12"})]}),Object(h.jsxs)("div",{className:"lengthWrapper",children:[Object(h.jsx)("label",{htmlFor:"14",children:"14 Units"}),Object(h.jsx)("input",{type:"radio",name:"Units",value:"14",id:"14"})]})]}),Object(h.jsxs)("div",{className:"checkBoxs",children:[Object(h.jsxs)("div",{className:"lengthWrapper",children:[Object(h.jsx)("label",{htmlFor:"UpperCase",children:"UpperCase"}),Object(h.jsx)("input",{type:"checkbox",value:"UpperCase",id:"UpperCase"})]}),Object(h.jsxs)("div",{className:"lengthWrapper",children:[Object(h.jsx)("label",{htmlFor:"LowerCase",children:"LowerCase"}),Object(h.jsx)("input",{type:"checkbox",value:"LowerCase",id:"LowerCase"})]}),Object(h.jsxs)("div",{className:"lengthWrapper",children:[Object(h.jsx)("label",{htmlFor:"Symbol",children:"Symbol"}),Object(h.jsx)("input",{type:"checkbox",value:"Symbol",id:"symbol"})]}),Object(h.jsxs)("div",{className:"lengthWrapper",children:[Object(h.jsx)("label",{htmlFor:"Numbers",children:"Numbers"}),Object(h.jsx)("input",{type:"checkbox",value:"Numbers",id:"numbers"})]})]}),Object(h.jsx)("div",{className:"btnContainer",children:Object(h.jsx)("button",{children:"Generate"})})]})]})]})]})}}]),s}(c.a.Component),u=(s(29),s.p+"static/media/sound.66885ca6.mp3");function m(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"rain"}),Object(h.jsx)("audio",{controls:!0,children:Object(h.jsx)("source",{src:u,type:"audio/mpeg"})})]})}s(30);var O=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"WalkingMan",children:Object(h.jsxs)("div",{id:"ManBody",children:[Object(h.jsxs)("div",{className:"body",children:[Object(h.jsx)("span",{id:"Manhead"}),Object(h.jsx)("span",{className:"Middlepart"}),Object(h.jsx)("span",{className:"Lhand"}),Object(h.jsx)("span",{className:"Rhand"})]}),Object(h.jsx)("span",{className:"LLeg"}),Object(h.jsx)("span",{className:"RLeg"})]})})})}}]),s}(c.a.Component),x=(s(31),s(15)),v=s.n(x),f=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).facts=function(){fetch("https://uselessfacts.jsph.pl/random.json?language=en").then((function(e){return e.json()})).then((function(e){"en"===e.language?a.setState({text:e.text}):a.setState({text:"click one more time"})}))},a.toggle=function(){var e=document.getElementById("RandomFactsWrapper"),t=document.getElementById("arrow");0===a.state.facts?(e.style.left="0vw",t.style.transform="rotate(180deg)",a.setState({facts:1})):(e.style.left="-90vw",t.style.transform="rotate(0deg)",a.setState({facts:0}))},a.state={text:"click button to generate it",facts:0},a}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{id:"RandomFactsWrapper",children:[Object(h.jsxs)("div",{className:"randomFactsContainer",children:[Object(h.jsx)("h3",{children:"Useless Random Facts"}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{children:Object(h.jsx)("b",{children:"Congrats you're about to waste your time"})}),Object(h.jsx)("p",{className:"factArea",children:this.state.text}),Object(h.jsx)("button",{onClick:this.facts,children:"Generate Random Facts"})]}),Object(h.jsxs)("div",{className:"openFacts",children:[Object(h.jsx)("p",{children:"Click Arrow!"}),Object(h.jsx)(v.a,{id:"arrow",onClick:this.toggle})]})]})}}]),s}(c.a.Component);var g=function(){return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)(p,{}),Object(h.jsx)(f,{}),Object(h.jsx)(m,{}),Object(h.jsx)(O,{})]})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,45)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),n(e),r(e)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),y()}},[[33,1,2]]]);
//# sourceMappingURL=main.6def5dde.chunk.js.map
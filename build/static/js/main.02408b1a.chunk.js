(this.webpackJsonprocksissorpaper=this.webpackJsonprocksissorpaper||[]).push([[0],{13:function(e,c,s){},14:function(e,c,s){},15:function(e,c,s){},16:function(e,c,s){"use strict";s.r(c);var a=s(6),t=s.n(a),r=s(7),n=s(2),i=s(1),j=s.p+"static/media/ic-reset.a995926b.svg",o=s(0);var l=function(e){e.children;var c=e.onClick,s=e.alt;return Object(o.jsx)("img",{src:j,onClick:c,alt:s})},d=s.p+"static/media/rock.24f8e255.svg",b=s.p+"static/media/scissor.6096875e.svg",u=s.p+"static/media/paper.19c16065.svg",p=(s(13),{rock:d,paper:u,scissor:b});var v=function(e){var c=e.value,s=e.className,a=void 0===s?"Hand":s,t=p[c];return Object(o.jsx)("div",{className:a,children:Object(o.jsx)("img",{src:t,alt:c,className:"".concat(a,"-icon")})})};s(14);var O=function(e){var c=e.value,s=e.onClick,a=e.className,t=void 0===a?"":a;return Object(o.jsx)("button",{className:"HandButton",onClick:function(){return s(c)},children:Object(o.jsx)(v,{className:"".concat(t),value:c})})},m=["rock","scissor","paper"],x={rock:"scissor",scissor:"paper",paper:"rock"};function h(e,c){return x[e]===c?1:x[c]===e?-1:0}function N(){var e,c=(e=m.length,Math.floor(Math.random()*e));return m[c]}s(15);var k=function(){var e=Object(i.useState)("rock"),c=Object(n.a)(e,2),s=c[0],a=c[1],t=Object(i.useState)("rock"),j=Object(n.a)(t,2),d=j[0],b=j[1],u=Object(i.useState)([]),p=Object(n.a)(u,2),m=p[0],x=p[1],k=Object(i.useState)(0),f=Object(n.a)(k,2),S=f[0],g=f[1],A=Object(i.useState)(0),C=Object(n.a)(A,2),B=C[0],y=C[1],M=Object(i.useState)(1),w=Object(n.a)(M,2),H=w[0],J=w[1],E=function(e){var c=N(),s=function(e,c){var s=h(e,c);return s>0?"\ub098":s<0?"\ucef4\ud4e8\ud130":"\ubb34\uc2b9\ubd80"}(e,c),t=h(e,c);return a(e),b(c),x([].concat(Object(r.a)(m),[s])),t>0?g(S+H):t<0?y(B+H):void 0};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{className:"App-heading",children:"\uac00\uc704\ubc14\uc704\ubcf4"}),Object(o.jsx)("div",{className:"App-reset",children:Object(o.jsx)(l,{alt:"\ucd08\uae30\ud654",onClick:function(){a("rock"),b("rock"),x([]),g(0),y(0),J(1)}})}),Object(o.jsxs)("div",{className:"App-scores",children:[Object(o.jsxs)("div",{className:"Score",children:[Object(o.jsx)("div",{className:"Score-num",children:S}),Object(o.jsx)("div",{className:"Score-name",children:"\ub098"})]}),Object(o.jsx)("div",{className:"App-versus",children:":"}),Object(o.jsxs)("div",{className:"Score",children:[Object(o.jsx)("div",{className:"Score-num",children:B}),Object(o.jsx)("div",{className:"Score-name",children:"\ucef4\ud4e8\ud130"})]})]}),Object(o.jsx)("div",{className:"Box App-box",children:Object(o.jsxs)("div",{className:"Box-inner",children:[Object(o.jsxs)("div",{className:"App-hands",children:[Object(o.jsx)(v,{value:s}),Object(o.jsx)("div",{className:"App-versus",children:"VS"}),Object(o.jsx)(v,{value:d})]}),Object(o.jsxs)("div",{className:"App-bet",children:[Object(o.jsx)("span",{children:"\uc2b9\ub9ac \ubc30\uc810"}),Object(o.jsx)("input",{type:"number",min:1,max:9,onChange:function(e){var c=Number(e.target.value);c>9&&(c%=10),c<1&&(c=1),c=Math.round(c),J(c)}})]}),Object(o.jsxs)("div",{className:"App-history",children:[Object(o.jsx)("h2",{children:"\uc2b9\ubd80\uae30\ub85d"}),Object(o.jsx)("p",{children:m.join(", ")})]})]})}),Object(o.jsxs)("div",{children:[Object(o.jsx)(O,{value:"rock",onClick:E}),Object(o.jsx)(O,{value:"scissor",onClick:E}),Object(o.jsx)(O,{value:"paper",onClick:E})]})]})};t.a.render(Object(o.jsx)(k,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.02408b1a.chunk.js.map
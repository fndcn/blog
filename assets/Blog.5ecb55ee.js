var l=Object.defineProperty;var n=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var r=(s,a,e)=>a in s?l(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,t=(s,a)=>{for(var e in a||(a={}))i.call(a,e)&&r(s,e,a[e]);if(n)for(var e of n(a))m.call(a,e)&&r(s,e,a[e]);return s};import{j as p,s as g,t as f,i as o,D as d,E as u,G as b,I as c,H as v,J as B,r as I}from"./app.b411a1b0.js";import{S as C}from"./SkipLink.f005c997.js";var k=p({name:"Blog",setup(){const s=g(),a=f();return()=>[o(C),o(I("CommonWrapper"),{sidebar:!1},t({default:()=>s.value.home?o(d):o("main",{class:"page blog",id:"main-content"},o("div",{class:"blog-page-wrapper"},[o(u),o(b,{delay:.16},()=>o(c))])),navScreenBottom:()=>o(v)},a.value?{sidebar:()=>o(B)}:{}))]}});export{k as default};

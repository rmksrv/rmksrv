import{e as c}from"./writeEffect-ad25c0cc.js";import{t as n}from"./onAnimationEnd-c4ef4008.js";import"./typingInterval-b805e32c.js";const m=async({elements:o},t)=>{if(t.cascade)(e=>{e.forEach(a=>a.currentNode.textContent="")})(o);else{const{getLongestTextElement:e}=await import("./index-38d4ea89.js"),a=e(o);n(a,()=>t.dispatch("done"))}for(const e of o)t.cascade?await c(e,t):c(e,t);t.cascade&&t.dispatch("done")};export{m as mode};
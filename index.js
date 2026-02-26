import{a as w,S,i as a}from"./assets/vendor-B5nsgUv9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const v="54810940-a8fef5ec78380d19b5fad47cb",q="https://pixabay.com/api/";async function f(t,r){return(await w.get(q,{params:{key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}const m=document.querySelector(".gallery"),h=document.querySelector(".loader"),y=document.querySelector(".load-more"),E=new S(".gallery a",{captionsData:"alt",captionDelay:250});function p(t){const r=t.map(s=>`
<li class="gallery-item">
<a href="${s.largeImageURL}">
<img class="gallery-img"
src="${s.webformatURL}"
alt="${s.tags}" />
</a>

<div class="info">
<p><b>Likes</b> ${s.likes}</p>
<p><b>Views</b> ${s.views}</p>
<p><b>Comments</b> ${s.comments}</p>
<p><b>Downloads</b> ${s.downloads}</p>
</div>

</li>
`).join("");m.insertAdjacentHTML("beforeend",r),E.refresh()}function B(){m.innerHTML=""}function g(){h.classList.remove("is-hidden")}function L(){h.classList.add("is-hidden")}function b(){y.classList.remove("is-hidden")}function c(){y.classList.add("is-hidden")}const M=document.querySelector(".form"),$=document.querySelector(".load-more");let i="",n=1,d=0;a.settings({position:"topRight",timeout:3e3});M.addEventListener("submit",P);$.addEventListener("click",O);async function P(t){if(t.preventDefault(),i=t.currentTarget.elements["search-text"].value.trim(),!i){a.error({message:"Please enter a search query."});return}n=1,B(),c(),g();try{const r=await f(i,n);if(d=r.totalHits,r.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}p(r.hits),n*15<d?b():(c(),a.info({message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({message:"Something went wrong!"})}finally{L(),t.currentTarget.reset()}}async function O(){n+=1,c(),g();try{const t=await f(i,n);p(t.hits),x(),n*15>=d?(a.info({message:"We're sorry, but you've reached the end of search results."}),c()):b()}catch{a.error({message:"Error loading images"})}finally{L()}}function x(){const t=document.querySelector(".gallery-item");if(!t)return;const r=t.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map

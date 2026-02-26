import{a as m,S as d,i as n}from"./assets/vendor-DQiTczw4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="54810940-a8fef5ec78380d19b5fad47cb",p="https://pixabay.com/api/";function y(o){return m.get(p,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:a,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img class="gallery-img" src="${i}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${t}</p>
          <p class="info-item"><b>Views</b> ${a}</p>
          <p class="info-item"><b>Comments</b> ${u}</p>
          <p class="info-item"><b>Downloads</b> ${f}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){l.innerHTML=""}function S(){c.classList.remove("is-hidden")}function q(){c.classList.add("is-hidden")}const P=document.querySelector(".form");n.settings({position:"topRight",timeout:2500});P.addEventListener("submit",w);function w(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){n.error({message:"Please enter a search query."});return}L(),S(),y(r).then(i=>{const s=i.hits;if(!s||s.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(s)}).catch(()=>{n.error({message:"Something went wrong. Please try again later."})}).finally(()=>{q()}),o.currentTarget.reset()}
//# sourceMappingURL=index.js.map

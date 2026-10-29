import{n as S,t as C}from"./foodcart_hd-BRTMrR1R.js";import"./loader-4gA1zna9.js";var N=[{title:"Order Tracking",url:"track-order.html",category:"Account",keywords:["order","tracking","track","shipment","delivery status","where is my order","status"]},{title:"Delivery Information",url:"delivery.html",category:"Help",keywords:["delivery","shipping","logistics","how long","when will it arrive","shipping fees","lga"]},{title:"Returns & Refunds",url:"returns.html",category:"Help",keywords:["return","refund","exchange","money back","cancel order"]},{title:"Wholesale Enquiry",url:"wholesale.html",category:"Business",keywords:["wholesale","bulk","trade","reseller","b2b","minimum order","moq"]},{title:"Contact Us",url:"contact.html",category:"Support",keywords:["contact","support","help","phone","email","whatsapp","reach us"]},{title:"About Terranova",url:"about.html",category:"Company",keywords:["terranova","about","company","who we are","our story","mission"]},{title:"FAQs",url:"faqs.html",category:"Help",keywords:["faq","questions","answers","help","common questions"]},{title:"Privacy Policy",url:"privacy.html",category:"Legal",keywords:["privacy","data","personal information","policy"]},{title:"Terms & Conditions",url:"terms.html",category:"Legal",keywords:["terms","conditions","legal","rules","agreement"]}];function u(e){return e?String(e).replace(/â„¢/g,"™").replace(/â€™/g,"'").replace(/â€œ/g,'"').replace(/â€/g,'"').replace(/Â/g,"").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim():""}function y(e){const n=u(e);return n?n.split(" ").map(t=>t.replace(/(ies)$/,"y").replace(/(es|s)$/,"")).filter(Boolean):[]}var g={NAME_EXACT:100,NAME_STARTS_WITH:60,NAME_CONTAINS_FULL:45,NAME_ALL_TOKENS:35,NAME_ANY_TOKEN:20,KEYWORD_EXACT:25,KEYWORD_ANY:12,CATEGORY_EXACT:15,CATEGORY_CONTAINS:8,SKU_CONTAINS:10};function w(e,n){const t=u(n);if(!t)return 0;const a=y(n),o=u(e.name||e.title||""),l=u(e.category||""),i=u(e.baseSku||""),r=(e.keywords||[]).map(u);let s=0;o===t&&(s+=g.NAME_EXACT),o.startsWith(t)&&(s+=g.NAME_STARTS_WITH),t.length>=3&&o.includes(t)&&(s+=g.NAME_CONTAINS_FULL);const d=a.filter(m=>o.includes(m));d.length===a.length&&a.length>0?s+=g.NAME_ALL_TOKENS:d.length>0&&(s+=g.NAME_ANY_TOKEN*d.length);for(const m of r){if(m===t){s+=g.KEYWORD_EXACT;break}a.some(_=>m.includes(_))&&(s+=g.KEYWORD_ANY)}return l===t?s+=g.CATEGORY_EXACT:l&&t.includes(l)&&(s+=g.CATEGORY_CONTAINS),i&&i.includes(t)&&(s+=g.SKU_CONTAINS),s}function L(e,n,t={}){const{wholesaleMode:a=!1,limit:o=0}=t;if(!Array.isArray(e)||!n||!n.trim())return[];const l=[];for(const r of e){if(!a&&r.wholesaleOnly)continue;const s=w(r,n);s>0&&l.push({product:r,score:s})}l.sort((r,s)=>{if(s.score!==r.score)return s.score-r.score;const d=u(r.product.name||""),m=u(s.product.name||"");return d.localeCompare(m)});const i=l.map(r=>r.product);return o>0?i.slice(0,o):i}var f={TITLE_EXACT:100,TITLE_STARTS_WITH:60,TITLE_CONTAINS_FULL:45,TITLE_ALL_TOKENS:35,TITLE_ANY_TOKEN:20,KEYWORD_EXACT:25,KEYWORD_ANY:12,CATEGORY_EXACT:15,CATEGORY_CONTAINS:8};function O(e,n){const t=u(n);if(!t)return 0;const a=y(n),o=u(e.title||""),l=u(e.category||""),i=(e.keywords||[]).map(u);let r=0;o===t&&(r+=f.TITLE_EXACT),o.startsWith(t)&&(r+=f.TITLE_STARTS_WITH),t.length>=3&&o.includes(t)&&(r+=f.TITLE_CONTAINS_FULL);const s=a.filter(d=>o.includes(d));s.length===a.length&&a.length>0?r+=f.TITLE_ALL_TOKENS:s.length>0&&(r+=f.TITLE_ANY_TOKEN*s.length);for(const d of i){if(d===t){r+=f.KEYWORD_EXACT;break}a.some(m=>d.includes(m))&&(r+=f.KEYWORD_ANY)}return l===t?r+=f.CATEGORY_EXACT:l&&t.includes(l)&&(r+=f.CATEGORY_CONTAINS),r}function I(e,n,t={}){const{limit:a=0}=t;if(!Array.isArray(e)||!n||!n.trim())return[];const o=[];for(const i of e){const r=O(i,n);r>0&&o.push({page:i,score:r})}o.sort((i,r)=>{if(r.score!==i.score)return r.score-i.score;const s=u(i.page.title||""),d=u(r.page.title||"");return s.localeCompare(d)});const l=o.map(i=>i.page);return a>0?l.slice(0,a):l}var k="q";function R(){return typeof window.isWholesaleActive=="function"?window.isWholesaleActive():localStorage.getItem("wholesaleMode")==="true"}function v(){return(new URLSearchParams(window.location.search).get(k)||"").trim()}function c(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function h(e){return typeof e!="number"||!isFinite(e)?"":"₦"+e.toLocaleString("en-NG")}function W(e,n){const t=e.image||"",a=e.imageAlt||e.name||"",o=e.url||"#",l=e.category||"",i=["product-card","search-card",e.wholesaleOnly?"wholesale":""].filter(Boolean).join(" "),r=e.priceRetail!=null?String(e.priceRetail):"",s=e.priceWholesale!=null?String(e.priceWholesale):"";return`
    <div class="${i}"
         data-base-sku="${c(e.baseSku||"")}"
         data-name="${c(e.name||"")}"
         data-category="${c(l)}"
         data-price-retail="${c(r)}"
         data-price-wholesale="${c(s)}">

      <div class="product-card-header">
        <picture class="product-img">
          <img src="${c(t)}" alt="${c(a)}" loading="lazy">
        </picture>
        <span class="stock-badge in-stock">
          <span class="fas fa-check"></span> In Stock
        </span>
      </div>

      <div class="product-card-body">

        <div class="product-details">

          ${l?`<span class="badge badge-category">${c(l)}</span>`:""}

          <h3 class="title">${c(e.name||e.title||"")}</h3>

          <div class="pricing">
            <p class="price retail"><span>From</span>${c(h(e.priceRetail))}</p>
            <p class="price wholesale"><span>From</span>${c(h(e.priceWholesale))}</p>
            <span class="badge badge-orange price-mode-badge">Retail</span>
          </div>

        </div>

        <div class="call-to-act search-cta">
          <a href="${c(o)}" class="btn btn-primary">View →</a>
        </div>

      </div>

    </div>
  `}function Y(e){return`
    <a href="${c(e.url)}" class="search-page-result">
      <span class="search-page-result__title">${c(e.title)}</span>
      ${e.category?`<span class="search-page-result__category">${c(e.category)}</span>`:""}
    </a>
  `}function p(e,n){const t=document.getElementById("searchStatus");if(t){if(!n){t.textContent="";return}e===0?t.textContent=`No results for "${n}"`:t.textContent=`${e} result${e===1?"":"s"} for "${n}"`}}function $(e){const n=document.getElementById("searchTitle");n&&(n.textContent=e?"Search results":"Search"),document.title=e?`${e} — Search — FoodCart™ Stores`:"Search — FoodCart™ Stores"}function T(e,n){const t=document.getElementById("searchEmpty"),a=document.getElementById("searchEmptyQuery");t&&(t.hidden=!e,a&&(a.textContent=n||""))}function E(){const e=v(),n=R(),t=document.getElementById("searchResults"),a=document.getElementById("searchPages"),o=document.getElementById("searchPagesWrap");if(!t)return;if($(e),!e){t.innerHTML="",t.hidden=!0,a&&(a.innerHTML=""),o&&(o.hidden=!0),p(0,""),T(!1,"");return}const l=L(S,e,{wholesaleMode:n}),i=I(N,e),r=l.length+i.length;p(r,e),T(r===0,e),l.length>0?(t.hidden=!1,t.innerHTML=l.map(s=>W(s,n)).join(""),n&&C(t,!0)):(t.innerHTML="",t.hidden=!0),a&&o&&(i.length>0?(o.hidden=!1,a.innerHTML=i.map(Y).join("")):(a.innerHTML="",o.hidden=!0))}function A(){document.getElementById("searchResults")&&(E(),document.addEventListener("buyerTierChanged",E),console.log("✅ Search page ready."))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",A):A();

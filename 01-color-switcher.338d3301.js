const e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),t=document.querySelector("body");e.style.backgroundColor="#198754",e.style.color="#fff",e.style.borderRadius="15px",e.style.borderColor="green",o.style.backgroundColor="#dc3545",o.style.color="#fff",o.style.borderRadius="15px",o.style.borderColor="red";let r=null;e.addEventListener("click",(function(){e.disabled=!0,r=setInterval((()=>{let e=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.style.backgroundColor=e}),1e3),o.addEventListener("click",(function(){e.disabled=!1,clearInterval(r)}))}));
//# sourceMappingURL=01-color-switcher.338d3301.js.map
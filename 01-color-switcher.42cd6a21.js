!function(){var e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),r=document.querySelector("body");e.style.backgroundColor="#198754",e.style.color="#fff",e.style.borderRadius="15px",e.style.borderColor="green",o.style.backgroundColor="#dc3545",o.style.color="#fff",o.style.borderRadius="15px",o.style.borderColor="red";var t=null;e.addEventListener("click",(function(){e.disabled=!0,t=setInterval((function(){var e="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)));r.style.backgroundColor=e}),1e3),o.addEventListener("click",(function(){e.disabled=!1,clearInterval(t)}))}))}();
//# sourceMappingURL=01-color-switcher.42cd6a21.js.map

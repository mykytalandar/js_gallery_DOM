"use strict";
const gallery = document.querySelector("#thumbs");
const mainImage = document.querySelector("#largeImg");
gallery.addEventListener("click", (e)=>{
    e.preventDefault();
    const link = e.target.closest(".list-item__link");
    if (link) mainImage.src = link.href;
});

//# sourceMappingURL=index.f75de5e1.js.map

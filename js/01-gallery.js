import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const onEcsClick = (e) => {
  e.key === "Escape" ? instance.close() : null;
};

const onImgClick = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== img) {
    return;
  }

  instance.element().querySelector("img").src = e.target.dataset.source;
};

const instance = basicLightbox.create(`<img class="modal-img" src=""/>`, {
  onShow: () => {
    document.addEventListener("keydown", onEcsClick);
  },
  onClose: () => {
    document.addEventListener("keydown", onEcsClick);
  },
});

const listElements = galleryItems
  .map((item) => {
    let str = `<div class="gallery__item"> <a class="gallery__link" href="${item.original}" ><img src="${item.preview}" alt="${item.description}" data-source="${item.original}" /></a> </div>`;

    return str;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", listElements);

gallery.addEventListener("click", onImgClick);

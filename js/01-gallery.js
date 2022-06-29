import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML(
  "afterbegin",
  galleryItems
    .map((item) => {
      let str = `<div class="gallery__item"> <a class="gallery__link" href="${item.original}" ><img src="${item.preview}" data-source="${item.original}" alt="${item.description}" /></a> </div>`;

      return str;
    })
    .join("")
);

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}" />
  `,
    {
      onShow: (instance) => {
        instance.element().onclick = instance.close;
        document.addEventListener("keydown", (e) => {
          e.key === "Escape" ? instance.close() : null;
        });
      },
    }
  );
  instance.show();
});

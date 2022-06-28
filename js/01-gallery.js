import { galleryItems } from "./gallery-items.js";
// Change code below this line

document.querySelector(".gallery").append(
  ...galleryItems.map((item) => {
    // ! div
    const div = document.createElement("div");
    div.className = "gallery__item";

    // ! a
    const a = document.createElement("a");
    a.className = "gallery__link";
    a.href = item.original;

    a.addEventListener("click", (e) => e.preventDefault());

    // ! img
    const img = document.createElement("img");
    img.src = item.preview;
    img.dataset.source = item.original;

    // ! Light Box
    img.addEventListener("click", () => {
      const instance = basicLightbox.create(
        `
        <img src="${item.original}" />
        <p>You can set the content of the lightbox with JS.</p> 
      `,
        {
          onShow: (instance) => {
            instance.element().onclick = instance.close;
          },
        }
      );
      instance.show();
    });
    // img.addEventListener("keypress", (e) =>
      // e.key === "Escape" ? console.log("ecs") : null
      // console.log(e)
    // );

    // ! concatination

    a.append(img);
    div.append(a);

    return a;
  })
);

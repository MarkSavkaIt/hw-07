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

    a.append(img);
    div.append(a);

    return a;
  })
);

let gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox");

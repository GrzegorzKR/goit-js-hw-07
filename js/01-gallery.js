import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const $gallery = document.querySelector("div.gallery");

galleryItems.forEach((element) => {
  const $galleryItem = document.createElement("div");
  $galleryItem.classList.add("gallery__item");

  const $galleryLink = document.createElement("a");
  $galleryLink.classList.add("gallery__link");
  $galleryLink.setAttribute("href", element.original);

  const $galleryImage = document.createElement("img");
  $galleryImage.classList.add("gallery__image");
  $galleryImage.src = element.preview;
  $galleryImage.dataset.source = element.original;
  $galleryImage.alt = element.description;

  $gallery.append($galleryItem);
  $galleryItem.append($galleryLink);
  $galleryLink.append($galleryImage);
});

$gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    const instance = basicLightbox.create(
      `<img src = ${event.target.dataset.source}>`
    );
    instance.show();
    $gallery.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && instance.visible()) {
        console.log("licznik");
        instance.close();
      }
    });
  }
});

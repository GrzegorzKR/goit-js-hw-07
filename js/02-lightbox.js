import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const $gallery = document.querySelector("ul.gallery");

galleryItems.forEach((element) => {
  const $galleryLink = document.createElement("a");
  $galleryLink.classList.add("gallery__item");
  $galleryLink.setAttribute("href", element.original);

  const $galleryImage = document.createElement("img");
  $galleryImage.classList.add("gallery__image");
  $galleryImage.src = element.preview;
  $galleryImage.alt = element.description;

  $gallery.append($galleryLink);
  $galleryLink.append($galleryImage);
});

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});

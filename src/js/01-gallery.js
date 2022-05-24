// Importing SimpleLightBox files 
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Assigning [div class="gallery"] position in variable
const gallery = document.querySelector(".gallery");

// Function for mappping of sourced data, and creating HTML markup for each image
const imagesHTML = (imagesArray) =>
  imagesArray
    .map(
      ({ original, preview, description }) =>
        `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
    )
    .join("");

// Executing function using sourced images data - injecting HTML markup
gallery.insertAdjacentHTML("beforeend", imagesHTML(galleryItems));
console.log(gallery);

// Init of SimpleLightbox library
let lightbox = new SimpleLightbox(".gallery a", {
  // captions: true,
  captionDelay: 250,
  captionsData: "alt",
});

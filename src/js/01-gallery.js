// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css'
// Change code below this line

const gallery = document.querySelector(".gallery");

//Створюємо розмітку
function createGalleryItem(galleryItems) {
      return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"           
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}

//Додаємо елементи img до HTML
const items = createGalleryItem(galleryItems);
gallery.insertAdjacentHTML("beforeend", items);

//Працює бібліотека
const lightboxGallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionsDelay: 250,
})
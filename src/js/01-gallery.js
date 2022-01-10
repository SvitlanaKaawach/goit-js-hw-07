import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector(".gallery");


function galleryContainer(arr) {
    const divEl = arr.map((item) =>
        `
    <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img loading='lazy' class="gallery__image"
            src="${item.preview}"
            data-src="${item.original}"
            alt="${item.desciption}"
            />
        </a>
    </div>
    `).join("");
    return divEl;
};
const imagesList = galleryContainer(galleryItems);

gallery.innerHTML = imagesList;


let instance = basicLightbox.create(
    `<img src="" width="800" height="600">`,
    {
        onShow: instance => {
            window.addEventListener('keydown', handleEscModalClose)
            console.log(instance);
        },
        onClose: instance => {
            window.removeEventListener('keydown', handleEscModalClose)
            console.log(instance);
        },

    });


gallery.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.className === "gallery__image") {
        const srcLink = e.target.dataset.src;
        instance.element().querySelector('img').src = srcLink;
        instance.show();
    }
    return;
});

function handleEscModalClose(e) {

    if (e.code === "Escape") {
        instance.close();
        return;
    }
    console.log(e);
    
}
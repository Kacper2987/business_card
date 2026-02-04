


//const images = [
 // "https://via.placeholder.com/1200x800",
 // "https://via.placeholder.com/1201x801",
 // "https://via.placeholder.com/1202x802"
//];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (gallery) {
  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;

    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = src;
    });

    gallery.appendChild(img);
  });
}

if (lightbox) {
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}

const galleries = {
  agnieszka: [
    'img/agnieszka/1.jpg',
    'img/agnieszka/2.jpg',
    'img/agnieszka/3.jpg'
  ],
  plener: [
    'img/plener/1.jpg',
    'img/plener/2.jpg'
  ]
};

function openGallery(name) {
  const popup = document.getElementById('gallery-popup');
  const container = document.getElementById('popup-gallery');

  container.innerHTML = '';

  galleries[name].forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    container.appendChild(img);
  });

  popup.style.display = 'block';
}

function closeGallery() {
  document.getElementById('gallery-popup').style.display = 'none';
}


const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    document.body.style.overflow = "hidden";
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxImg.src = "";
  document.body.style.overflow = "auto";
});












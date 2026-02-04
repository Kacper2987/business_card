document.addEventListener("DOMContentLoaded", () => {

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const images = document.querySelectorAll(".gallery img");

  const prevBtn = document.querySelector(".lb-prev");
  const nextBtn = document.querySelector(".lb-next");
  const counter = document.querySelector(".lb-counter");

  let currentIndex = 0;

  if (!lightbox || !lightboxImg || images.length === 0) {
    console.warn("Lightbox: brak elementów w DOM");
    return;
  }

  function showImage(index) {
    currentIndex = index;

    lightboxImg.src = images[currentIndex].src;
    counter.textContent = `${currentIndex + 1} / ${images.length}`;

    // ukrywanie strzałek na krańcach
    prevBtn.style.display = currentIndex === 0 ? "none" : "block";
    nextBtn.style.display = currentIndex === images.length - 1 ? "none" : "block";
  }

  // klik w miniaturę
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      document.body.style.overflow = "hidden";
      showImage(index);
    });
  });

  // strzałki
  nextBtn.addEventListener("click", e => {
    e.stopPropagation();
    if (currentIndex < images.length - 1) {
      showImage(currentIndex + 1);
    }
  });

  prevBtn.addEventListener("click", e => {
    e.stopPropagation();
    if (currentIndex > 0) {
      showImage(currentIndex - 1);
    }
  });

  // klawiatura jak na lewyprofil
  document.addEventListener("keydown", e => {
    if (lightbox.style.display !== "flex") return;

    if (e.key === "ArrowRight" && currentIndex < images.length - 1) {
      showImage(currentIndex + 1);
    }

    if (e.key === "ArrowLeft" && currentIndex > 0) {
      showImage(currentIndex - 1);
    }

    if (e.key === "Escape") closeLightbox();
  });

  function closeLightbox() {
    lightbox.style.display = "none";
    lightboxImg.src = "";
    document.body.style.overflow = "auto";
  }

  // klik poza zdjęciem = zamknięcie
  lightbox.addEventListener("click", closeLightbox);

});
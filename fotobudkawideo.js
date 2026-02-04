document.addEventListener("DOMContentLoaded", () => {

  const covers = document.querySelectorAll(".video-cover");

  covers.forEach(cover => {

    const video = cover.querySelector("video");
    const btn = cover.querySelector(".play-btn");
    const indicator = cover.querySelector(".tap-indicator");

    // zawsze standardowa konsola
    video.setAttribute("controls", "true");

    cover.addEventListener("click", (e) => {

      // klik w pasek kontrolek ma działać normalnie
      if (e.target === video) return;

      if (video.paused) {
        video.play();
        btn.style.display = "none";

        indicator.textContent = "▶";
      } else {
        video.pause();
        btn.style.display = "flex";

        indicator.textContent = "❚❚";
      }

      // restart animacji
      indicator.classList.remove("show");
      void indicator.offsetWidth;
      indicator.classList.add("show");

    });

    video.addEventListener("play", () => {
      btn.style.display = "none";
    });

    video.addEventListener("pause", () => {
      btn.style.display = "flex";
    });

    video.addEventListener("ended", () => {
      btn.style.display = "flex";
    });

  });

});

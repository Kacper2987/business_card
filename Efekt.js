document.addEventListener("DOMContentLoaded", () => {

  const overlay = document.querySelector(".page-transition");

  // jeśli nie ma overlay – przerwij
  if (!overlay) return;

  // efekt wejścia
  setTimeout(() => {
    overlay.classList.add("hide");
  }, 100);


  // obsługa kliknięć w linki
  document.querySelectorAll("a[href]").forEach(link => {

    link.addEventListener("click", e => {

      const href = link.getAttribute("href");

      // pomijamy linki specjalne
      if (
        href.startsWith("http") ||
        href.startsWith("#") ||
        href.startsWith("mailto") ||
        href.startsWith("tel")
      ) {
        return;
      }

      e.preventDefault();

      overlay.classList.remove("hide");

      setTimeout(() => {
        window.location.href = href;
      }, 700);

    });

  });

});
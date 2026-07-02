const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const lightbox = document.querySelector("[data-lightbox-modal]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const closeButton = document.querySelector("[data-lightbox-close]");

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 20);
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) {
    return;
  }

  lightbox.hidden = true;
  lightboxImage.removeAttribute("src");
  lightboxImage.removeAttribute("alt");
}

document.querySelectorAll("[data-lightbox]").forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");

    if (!lightbox || !lightboxImage || !image) {
      return;
    }

    lightboxImage.src = button.dataset.lightbox;
    lightboxImage.alt = image.alt;
    lightbox.hidden = false;
  });
});

closeButton?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

if (year) {
  year.textContent = `© ${new Date().getFullYear()}`;
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

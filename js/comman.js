// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const goToTopBtn = document.getElementById("goToTop");
  if (goToTopBtn) {
    goToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // for smooth scrolling
      });
    });
  }
});

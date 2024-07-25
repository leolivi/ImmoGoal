// Scroll down button
const scrollDown = document.getElementById("scroll-down");

scrollDown.addEventListener("click", () => {
  // wenn Bildschirmbreite grösser als 500 oder breiter als 600
  if (window.innerWidth >= 500) {
    window.scrollTo({
      // how far to scroll:
      top: 750,
      behavior: "smooth",
    })
  } else {
    window.scrollTo({
      // how far to scroll wenn Bildschirm kleiner als 500:
      top: 700,
      behavior: "smooth",
    })
  }
});
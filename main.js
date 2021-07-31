const karta = document.querySelector('#carouselExampleSlidesOnly');
console.log(karta);

const pauseCarousel = () => {
  karta.className.replace("data-bs-pause");

}

karta.addEventListener("mouseover", pauseCarousel)
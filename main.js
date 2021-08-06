const toTheTopButton = document.querySelector('.scrollTop');

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 500) {
    toTheTopButton.classList.add("active");
  } else {
    toTheTopButton.classList.remove("active");
  }
})

const scrollTop = () => {
  document.documentElement.scrollTop = 0;
}

toTheTopButton.addEventListener('click', scrollTop);
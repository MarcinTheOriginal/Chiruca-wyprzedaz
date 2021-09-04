const toTheTopButton = document.querySelector('.scrollTop');
const filterButton = document.querySelector('.arrowFilters');
const arrowFilter = document.querySelector('.fa-chevron-left')
const filters = document.querySelector('.filters');
// dodać zamykanie filtra po kliknięciu poza nim gdy jest otwarty

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

// Filtry

const toggleFilters = () => {

  filters.classList.toggle('activeFilters');
  arrowFilter.classList.toggle('arrowRotate');
  if (filterButton.classList.contains("arrowRotate")) {

  } else {

  }
}

filterButton.addEventListener('click', toggleFilters);
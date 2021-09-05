const toTheTopButton = document.querySelector('.scrollTop');
const filterButton = document.querySelector('.arrowFilters');
const arrowFilter = document.querySelector('.fa-chevron-down')
const filters = document.querySelector('.filters');
const startFilteringButton = document.querySelector('.startFilteringButton');
const allCards = document.querySelectorAll('.col');

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
}

filterButton.addEventListener('click', toggleFilters);

const checkSelection = () => {
  const gtxon = document.getElementById('gtxon');
  const gtxdefault = document.getElementById('gtxdefault');
  const gtxoff = document.getElementById('gtxoff');
  const vibramon = document.getElementById('vibramon');
  const vibramdefault = document.getElementById('vibramdefault');
  const vibramoff = document.getElementById('vibramoff');

  if (gtxon.checked && vibramon.checked) {
    allCards.forEach((e) => {
      if(e.classList.contains('gtxf') && e.classList.contains('vibramf')) {
        e.classList.remove("d-none");
        e.classList.add("d-flex");
      } else {
        e.classList.remove("d-flex");
        e.classList.add("d-none");
      }
    })
  } else if (gtxon.checked && vibramdefault.checked) {
    allCards.forEach((e) => {
      if(e.classList.contains('gtxf')) {
        e.classList.remove("d-none");
        e.classList.add("d-flex");
      } else {
        e.classList.remove("d-flex");
        e.classList.add("d-none");
      }
    })
  } else if (gtxon.checked && vibramoff.checked) {
    allCards.forEach((e) => {
      if(e.classList.contains('gtxf')) {
        e.classList.remove("d-none");
        e.classList.add("d-flex");
        if (e.classList.contains('d-flex') && e.classList.contains('vibramf')) {
          e.classList.add("d-none");
        }
      } else {
        e.classList.remove("d-flex");
        e.classList.add("d-none");
      }
    })
  } else if (gtxdefault.checked && vibramon.checked) {
    allCards.forEach((e) => {
      if(e.classList.contains('vibramf')) {
        e.classList.remove("d-none");
        e.classList.add("d-flex");
      } else {
        e.classList.remove("d-flex");
        e.classList.add("d-none");
      }
    })
  } else if (gtxdefault.checked && vibramdefault.checked) {
    allCards.forEach((e) => {
      e.classList.remove("d-none");
      e.classList.add("d-flex");
    })
  } else if (gtxdefault.checked && vibramoff.checked) {
    allCards.forEach((e) => {
      if(e.classList.contains('vibramf')) {
        e.classList.remove("d-flex");
        e.classList.add("d-none");
      } else {
        e.classList.remove("d-none");
        e.classList.add("d-flex");
      }
    })
  } else if (gtxoff.checked && vibramon.checked) {
    allCards.forEach((e) => {
      if(e.classList.contains('vibramf')) {
        e.classList.remove("d-none");
        e.classList.add("d-flex");
        if (e.classList.contains('d-flex') && e.classList.contains('gtxf')) {
          e.classList.add("d-none");
        }
      } else {
        e.classList.remove("d-flex");
        e.classList.add("d-none");
      }
    })
  } else if (gtxoff.checked && vibramdefault.checked) {
    allCards.forEach((e) => {
      if(e.classList.contains('gtxf')) {
        e.classList.remove("d-flex");
        e.classList.add("d-none");
      } else {
        e.classList.remove("d-none");
        e.classList.add("d-flex");
      }
    })
  } else if (gtxoff.checked && vibramoff.checked) {
    allCards.forEach((e) => {
      if(e.classList.contains('gtxf')) {
        e.classList.remove("d-flex");
        e.classList.add("d-none");
        if (e.classList.contains('d-flex') && e.classList.contains('vibramf')) {
          e.classList.remove("d-flex");
        }
      } else {
        e.classList.remove("d-none");
        e.classList.add("d-flex");
      }
    })
  }
}

startFilteringButton.addEventListener('click', checkSelection);
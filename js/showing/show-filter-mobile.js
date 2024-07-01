
// function filter panel (mobile)

function showFilterMobile() { 

  const body = document.querySelector('body'); // <body> inizialisation
  
  const filterPanelMobileModal = document.querySelector('.filter__list-mobile-modal'); // filter (mobile) inizialisation

  // const filterItemMobile2 = document.querySelector('#filter-item-mobile-2'); // filter item 2 (mobile) inizialisation

  const filterItemMobile3 = document.querySelector('#filter-item-mobile-3'); // filter item 3 (mobile) inizialisation

  const filterItemMobile4 = document.querySelector('#filter-item-mobile-4'); // filter item 4 (mobile) inizialisation

  const filterTypeMobile1 = document.querySelector('#filter-type-mobile-1'); // filter type 1 (mobile) inizialisation

  const filterTypeMobile2 = document.querySelector('#filter-type-mobile-2'); // filter type 2 (mobile) inizialisation

  const filterTypeMobile3 = document.querySelector('#filter-type-mobile-3'); // filter type 3 (mobile) inizialisation

  const filterTypeMobile4 = document.querySelector('#filter-type-mobile-4'); // filter type 4 (mobile) inizialisation

  const filterTypeMobile5 = document.querySelector('#filter-type-mobile-5'); // filter type 5 (mobile) inizialisation

  const filterTypeMobile6 = document.querySelector('#filter-type-mobile-6'); // filter type 6 (mobile) inizialisation

  const filterTypeMobile7 = document.querySelector('#filter-type-mobile-7'); // filter type 7 (mobile) inizialisation

  const filterTypeMobile8 = document.querySelector('#filter-type-mobile-8'); // filter type 8 (mobile) inizialisation

  const filterTypeMobile9 = document.querySelector('#filter-type-mobile-9'); // filter type 9 (mobile) inizialisation

  const filterMobileBtnClose = document.querySelector('.filter__mobile-btn-close'); // filter (mobile) btn close inizialisation
  
  filterPanelMobileModal.classList.toggle('active'); // filter (mobile) style 

  body.classList.add('body-scroll-off'); // body fixation

  filterMobileBtnClose.addEventListener('click', () => closeFilterMobile()); // filter panel (mobile) close by button

  // filterItemMobile2.addEventListener('click', () => closeFilterMobile()); // filter panel (mobile) close by item 2

  filterItemMobile3.addEventListener('click', () => closeFilterMobile()); // filter panel (mobile) close by item 3

  filterItemMobile4.addEventListener('click', () => closeFilterMobile()); // filter panel (mobile) close by item 4

  filterTypeMobile1.addEventListener('click', () => closeFilterMobile()); // filter panel (mobile) close by type 1

  filterTypeMobile2.addEventListener('click', () => closeFilterMobile()); // filter panel (mobile) close by type 2

  filterTypeMobile3.addEventListener('click', () => closeFilterMobile()); // filter panel (mobile) close by type 3

  filterTypeMobile4.addEventListener('click', () => closeFilterMobile()); // filter panel (mobile) close by type 4

  filterTypeMobile5.addEventListener('click', () => closeFilterMobile()); // filter panel (mobile) close by type 5

  filterTypeMobile6.addEventListener('click', () => closeFilterMobile()); // filter panel (mobile) close by type 6

  filterTypeMobile7.addEventListener('click', () => closeFilterMobile()); // filter panel (mobile) close by type 7

  filterTypeMobile8.addEventListener('click', () => closeFilterMobile()); // filter panel (mobile) close by type 8

  filterTypeMobile9.addEventListener('click', () => closeFilterMobile()); // filter panel (mobile) close by type 9

  function closeFilterMobile() { // close function

    body.classList.remove('body-scroll-off'); // body fixation

    filterPanelMobileModal.classList.remove('active'); // filter (mobile) style 

  }

}

// export functions

export default showFilterMobile; // show filter panel (mobile)

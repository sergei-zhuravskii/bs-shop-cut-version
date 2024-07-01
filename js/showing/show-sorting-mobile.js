
// function sorting panel (mobile)

function showSortingMobile() { 

  const body = document.querySelector('body'); // <body> inizialisation
  
  const sortingPanelMobileModal = document.querySelector('.sorting__list-mobile-modal'); // sorting (mobile) inizialisation

  const sortingItemMobile2 = document.querySelector('#sorting-item-mobile-2'); // sorting item 2 (mobile) inizialisation

  const sortingItemMobile3 = document.querySelector('#sorting-item-mobile-3'); // sorting item 3 (mobile) inizialisation

  const sortingItemMobile4 = document.querySelector('#sorting-item-mobile-4'); // sorting item 4 (mobile) inizialisation

  const sortingItemMobile5 = document.querySelector('#sorting-item-mobile-5'); // sorting item 5 (mobile) inizialisation

  const sortingMobileBtnClose = document.querySelector('.sorting__mobile-btn-close'); // sorting (mobile) btn close inizialisation
  
  sortingPanelMobileModal.classList.toggle('active'); // sorting (mobile) style 

  body.classList.add('body-scroll-off'); // body fixation

  sortingMobileBtnClose.addEventListener('click', () => closeSortingMobile()); // sorting panel (mobile) close by button

  sortingItemMobile2.addEventListener('click', () => closeSortingMobile()); // sorting panel (mobile) close by item 2

  sortingItemMobile3.addEventListener('click', () => closeSortingMobile()); // sorting panel (mobile) close by item 3

  // sortingItemMobile4.addEventListener('click', () => closeSortingMobile()); // sorting panel (mobile) close by item 4

  sortingItemMobile5.addEventListener('click', () => closeSortingMobile()); // sorting panel (mobile) close by item 5  

  function closeSortingMobile() { // close function

    body.classList.remove('body-scroll-off'); // body fixation

    sortingPanelMobileModal.classList.remove('active'); // sorting (mobile) style 

  }

}

// export functions

export default showSortingMobile; // show sorting panel (mobile)

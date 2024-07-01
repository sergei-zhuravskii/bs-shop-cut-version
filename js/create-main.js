
// import array (products)

import products from '/bs-shop-cut-version/js/products.js'; // products

// import functions

import createCards from '/bs-shop-cut-version/js/create-cards.js'; // Create cards

import sortingPriceIncrease from '/bs-shop-cut-version/js/sorting/sorting-price-increase.js'; // sorting (price increase)

import sortingPriceReduction from '/bs-shop-cut-version/js/sorting/sorting-price-reduction.js'; // sorting (price reduction)

import sortingAvailability from '/bs-shop-cut-version/js/sorting/sorting-availability.js'; // sorting (availability)

import sortingTitle from '/bs-shop-cut-version/js/sorting/sorting-title.js'; // sorting (title)

import filterType from '/bs-shop-cut-version/js/filter/filter-type.js'; // filter (type)

import filterAvailability from '/bs-shop-cut-version/js/filter/filter-availability.js'; // filter (availability)

import showMore from '/bs-shop-cut-version/js/showing/show-more.js'; // show more cards

import showFilterMobile from '/bs-shop-cut-version/js/showing/show-filter-mobile.js'; // show filter panel (mobile)

import showFilterTypesMobile from '/bs-shop-cut-version/js/showing/show-filter-types-mobile.js'; // show filter types (mobile)

import showSortingMobile from '/bs-shop-cut-version/js/showing/show-sorting-mobile.js'; // show sorting panel (mobile)

// create <main>

function createMain() {

  const main = document.createElement('main'); // main
  main.classList.add('main');

  const mainContainer = document.createElement('div'); // main container
  mainContainer.classList.add('container', 'main__container');
  main.append(mainContainer);

  // filter panel (desktop)

  const filterPanel = document.createElement('ul'); 
  filterPanel.classList.add('filter__list');
  mainContainer.append(filterPanel);

  const filterItem1 = document.createElement('li');
  filterItem1.classList.add('filter__list-title');
  filterItem1.textContent = 'Фильтровать:';
  filterPanel.append(filterItem1);

  const filterItem2 = document.createElement('li');
  filterItem2.classList.add('filter__item');
  filterItem2.id = 'filter-types';
  filterPanel.append(filterItem2);

  const filterTypesTitle = document.createElement('div');
  filterTypesTitle.classList.add('filter__types-title');
  filterTypesTitle.textContent = 'По типу:';
  filterItem2.append(filterTypesTitle);

  const filterTypesIcon = document.createElement('div');
  filterTypesIcon.classList.add('filter__types-icon');  
  filterItem2.append(filterTypesIcon);

  const filterTypes = document.createElement('ul'); // filter (type)
  filterTypes.classList.add('filter__types-wrapper');
  filterItem2.append(filterTypes);

  const filterType1 = document.createElement('li');
  filterType1.classList.add('filter__type');
  filterType1.textContent = 'Волкеры';
  filterTypes.append(filterType1);

  const filterType2 = document.createElement('li');
  filterType2.classList.add('filter__type');
  filterType2.textContent = 'Глиссеры';
  filterTypes.append(filterType2);

  const filterType3 = document.createElement('li');
  filterType3.classList.add('filter__type');
  filterType3.textContent = 'Джеркбейты';
  filterTypes.append(filterType3);

  const filterType4 = document.createElement('li');
  filterType4.classList.add('filter__type');
  filterType4.textContent = 'Крэнки';
  filterTypes.append(filterType4);

  const filterType5 = document.createElement('li');
  filterType5.classList.add('filter__type');
  filterType5.textContent = 'Минноу';
  filterTypes.append(filterType5);

  const filterType6 = document.createElement('li');
  filterType6.classList.add('filter__type');
  filterType6.textContent = 'Попперы';
  filterTypes.append(filterType6);

  const filterType7 = document.createElement('li');
  filterType7.classList.add('filter__type');
  filterType7.textContent = 'Раттлины';
  filterTypes.append(filterType7);

  const filterType8 = document.createElement('li');
  filterType8.classList.add('filter__type');
  filterType8.textContent = 'Свимбейты';
  filterTypes.append(filterType8);

  const filterType9 = document.createElement('li');
  filterType9.classList.add('filter__type');
  filterType9.textContent = 'Шэды';
  filterTypes.append(filterType9);

  const filterItem3 = document.createElement('li');
  filterItem3.classList.add('filter__item');
  filterItem3.textContent = 'В наличии';
  filterPanel.append(filterItem3);

  const filterItem4 = document.createElement('li');
  filterItem4.classList.add('filter__item');
  filterItem4.textContent = 'Нет в наличии';
  filterPanel.append(filterItem4);

  // filter sorting buttons wrapper (mobile)

  const filterSortingWrapperMobile = document.createElement('div'); 
  filterSortingWrapperMobile.classList.add('filter-sorting__btns-wrapper-mobile');
  mainContainer.append(filterSortingWrapperMobile);

  // filter panel (mobile)

  const filterBtnMobile = document.createElement('div'); 
  filterBtnMobile.classList.add('filter__btn-mobile');
  filterSortingWrapperMobile.append(filterBtnMobile);

  const filterBtnMobileTitle = document.createElement('span'); // filter button title
  filterBtnMobileTitle.classList.add('btn-mobile__title');
  filterBtnMobileTitle.textContent = 'Фильтровать';
  filterBtnMobile.append(filterBtnMobileTitle);

  const filterPanelMobileModal = document.createElement('div'); 
  filterPanelMobileModal.classList.add('filter__list-mobile-modal');
  filterSortingWrapperMobile.append(filterPanelMobileModal);

  const filterPanelMobileWrapper = document.createElement('div'); 
  filterPanelMobileWrapper.classList.add('filter__list-mobile-wrapper');
  filterPanelMobileModal.append(filterPanelMobileWrapper);

  const filterPanelMobile = document.createElement('ul'); 
  filterPanelMobile.classList.add('filter__list-mobile');
  filterPanelMobileWrapper.append(filterPanelMobile);

  const filterItemMobile2 = document.createElement('li');
  filterItemMobile2.classList.add('filter__item-mobile');
  filterItemMobile2.id = 'filter-item-mobile-2';
  filterPanelMobile.append(filterItemMobile2);

  const filterTypesMobileTitle = document.createElement('div');
  filterTypesMobileTitle.classList.add('filter__types-mobile-title');
  filterTypesMobileTitle.textContent = 'По типу:';
  filterItemMobile2.append(filterTypesMobileTitle);

  const filterTypesMobileIcon = document.createElement('div');
  filterTypesMobileIcon.classList.add('filter__types-mobile-icon');  
  filterItemMobile2.append(filterTypesMobileIcon);

  const filterTypesMobile = document.createElement('ul'); // filter (type) - (mobile)
  filterTypesMobile.classList.add('filter__types-mobile-wrapper');
  filterPanelMobile.append(filterTypesMobile);

  const filterTypeMobile1 = document.createElement('li');
  filterTypeMobile1.classList.add('filter__type-mobile');
  filterTypeMobile1.id = 'filter-type-mobile-1';
  filterTypeMobile1.textContent = 'Волкеры';
  filterTypesMobile.append(filterTypeMobile1);

  const filterTypeMobile2 = document.createElement('li');
  filterTypeMobile2.classList.add('filter__type-mobile');
  filterTypeMobile2.id = 'filter-type-mobile-2';
  filterTypeMobile2.textContent = 'Глиссеры';
  filterTypesMobile.append(filterTypeMobile2);

  const filterTypeMobile3 = document.createElement('li');
  filterTypeMobile3.classList.add('filter__type-mobile');
  filterTypeMobile3.id = 'filter-type-mobile-3';
  filterTypeMobile3.textContent = 'Джеркбейты';
  filterTypesMobile.append(filterTypeMobile3);

  const filterTypeMobile4 = document.createElement('li');
  filterTypeMobile4.classList.add('filter__type-mobile');
  filterTypeMobile4.id = 'filter-type-mobile-4';
  filterTypeMobile4.textContent = 'Крэнки';
  filterTypesMobile.append(filterTypeMobile4);

  const filterTypeMobile5 = document.createElement('li');
  filterTypeMobile5.classList.add('filter__type-mobile');
  filterTypeMobile5.id = 'filter-type-mobile-5';
  filterTypeMobile5.textContent = 'Минноу';
  filterTypesMobile.append(filterTypeMobile5);

  const filterTypeMobile6 = document.createElement('li');
  filterTypeMobile6.classList.add('filter__type-mobile');
  filterTypeMobile6.id = 'filter-type-mobile-6';
  filterTypeMobile6.textContent = 'Попперы';
  filterTypesMobile.append(filterTypeMobile6);

  const filterTypeMobile7 = document.createElement('li');  
  filterTypeMobile7.classList.add('filter__type-mobile');
  filterTypeMobile7.id = 'filter-type-mobile-7';
  filterTypeMobile7.textContent = 'Раттлины';
  filterTypesMobile.append(filterTypeMobile7);

  const filterTypeMobile8 = document.createElement('li');
  filterTypeMobile8.classList.add('filter__type-mobile');
  filterTypeMobile8.id = 'filter-type-mobile-8';
  filterTypeMobile8.textContent = 'Свимбейты';
  filterTypesMobile.append(filterTypeMobile8);

  const filterTypeMobile9 = document.createElement('li');
  filterTypeMobile9.classList.add('filter__type-mobile');
  filterTypeMobile9.id = 'filter-type-mobile-9';
  filterTypeMobile9.textContent = 'Шэды';
  filterTypesMobile.append(filterTypeMobile9);

  const filterItemMobile3 = document.createElement('li');
  filterItemMobile3.classList.add('filter__item-mobile'); 
  filterItemMobile3.id = 'filter-item-mobile-3';
  filterItemMobile3.textContent = 'В наличии';
  filterPanelMobile.append(filterItemMobile3);

  const filterItemMobile4 = document.createElement('li');
  filterItemMobile4.classList.add('filter__item-mobile');
  filterItemMobile4.id = 'filter-item-mobile-4';
  filterItemMobile4.textContent = 'Нет в наличии';
  filterPanelMobile.append(filterItemMobile4);
  
  const filterMobileBtnClose = document.createElement('li');
  filterMobileBtnClose.classList.add('filter__mobile-btn-close');
  filterPanelMobile.append(filterMobileBtnClose);

  // filter panel (action) - (desktop)  

  filterType1.addEventListener('click', () => filterType(products, 'Волкер')); // filter (type)

  filterType2.addEventListener('click', () => filterType(products, 'Глиссер')); // filter (type)

  filterType3.addEventListener('click', () => filterType(products, 'Джеркбейт')); // filter (type)

  filterType4.addEventListener('click', () => filterType(products, 'Крэнк')); // filter (type)

  filterType5.addEventListener('click', () => filterType(products, 'Минноу')); // filter (type)

  filterType6.addEventListener('click', () => filterType(products, 'Поппер')); // filter (type)

  filterType7.addEventListener('click', () => filterType(products, 'Раттлин')); // filter (type)

  filterType8.addEventListener('click', () => filterType(products, 'Свимбейт')); // filter (type)

  filterType9.addEventListener('click', () => filterType(products, 'Шэд')); // filter (type)

  filterItem3.addEventListener('click', () => filterAvailability(products, 'Да')); // filter (availability - yes)

  filterItem4.addEventListener('click', () => filterAvailability(products, 'Нет')); // filter (availability - no)

  // filter panel (action) - (mobile)

  filterTypeMobile1.addEventListener('click', () => filterType(products, 'Волкер')); // filter (type) - (mobile)

  filterTypeMobile2.addEventListener('click', () => filterType(products, 'Глиссер')); // filter (type) - (mobile)

  filterTypeMobile3.addEventListener('click', () => filterType(products, 'Джеркбейт')); // filter (type) - (mobile)

  filterTypeMobile4.addEventListener('click', () => filterType(products, 'Крэнк')); // filter (type) - (mobile)

  filterTypeMobile5.addEventListener('click', () => filterType(products, 'Минноу')); // filter (type) - (mobile)

  filterTypeMobile6.addEventListener('click', () => filterType(products, 'Поппер')); // filter (type) - (mobile)

  filterTypeMobile7.addEventListener('click', () => filterType(products, 'Раттлин')); // filter (type) - (mobile)

  filterTypeMobile8.addEventListener('click', () => filterType(products, 'Свимбейт')); // filter (type) - (mobile)

  filterTypeMobile9.addEventListener('click', () => filterType(products, 'Шэд')); // filter (type) - (mobile)

  filterBtnMobile.addEventListener('click', () => showFilterMobile()); // show filter panel (mobile)

  filterItemMobile2.addEventListener('click', () => showFilterTypesMobile()); // show filter types (mobile)

  filterItemMobile3.addEventListener('click', () => filterAvailability(products, 'Да')); // filter (availability - yes) - (mobile)

  filterItemMobile4.addEventListener('click', () => filterAvailability(products, 'Нет')); // filter (availability - no) - (mobile)

  // sorting panel (desktop)

  const sortingPanel = document.createElement('ul'); 
  sortingPanel.classList.add('sorting__list');
  mainContainer.append(sortingPanel);

  const sortingItem1 = document.createElement('li');
  sortingItem1.classList.add('sorting__list-title');
  sortingItem1.textContent = 'Сортировать:';
  sortingPanel.append(sortingItem1);

  const sortingItem2 = document.createElement('li');
  sortingItem2.classList.add('sorting__item');
  sortingItem2.textContent = 'По возрастанию цены';
  sortingPanel.append(sortingItem2);

  const sortingItem3 = document.createElement('li');
  sortingItem3.classList.add('sorting__item');
  sortingItem3.textContent = 'По убыванию цены';
  sortingPanel.append(sortingItem3);

  // const sortingItem4 = document.createElement('li');
  // sortingItem4.classList.add('sorting__item');
  // sortingItem4.textContent = 'По наличию';
  // sortingPanel.append(sortingItem4);

  const sortingItem5 = document.createElement('li');
  sortingItem5.classList.add('sorting__item');
  sortingItem5.textContent = 'По названию (A-Z)';
  sortingPanel.append(sortingItem5);

  // sorting panel (mobile)

  const sortingBtnMobile = document.createElement('div'); 
  sortingBtnMobile.classList.add('sorting__btn-mobile');
  filterSortingWrapperMobile.append(sortingBtnMobile);

  const sortingBtnMobileTitle = document.createElement('span'); // sorting button title
  sortingBtnMobileTitle.classList.add('btn-mobile__title');
  sortingBtnMobileTitle.textContent = 'Сортировать';
  sortingBtnMobile.append(sortingBtnMobileTitle);

  const sortingPanelMobileModal = document.createElement('div'); 
  sortingPanelMobileModal.classList.add('sorting__list-mobile-modal');
  filterSortingWrapperMobile.append(sortingPanelMobileModal);

  const sortingPanelMobileWrapper = document.createElement('div'); 
  sortingPanelMobileWrapper.classList.add('sorting__list-mobile-wrapper');
  sortingPanelMobileModal.append(sortingPanelMobileWrapper);

  const sortingPanelMobile = document.createElement('ul'); 
  sortingPanelMobile.classList.add('sorting__list-mobile');
  sortingPanelMobileWrapper.append(sortingPanelMobile);

  const sortingItemMobile2 = document.createElement('li');
  sortingItemMobile2.classList.add('sorting__item-mobile');
  sortingItemMobile2.id = 'sorting-item-mobile-2';
  sortingItemMobile2.textContent = 'По возрастанию цены';
  sortingPanelMobile.append(sortingItemMobile2);

  const sortingItemMobile3 = document.createElement('li');
  sortingItemMobile3.classList.add('sorting__item-mobile');
  sortingItemMobile3.id = 'sorting-item-mobile-3';
  sortingItemMobile3.textContent = 'По убыванию цены';
  sortingPanelMobile.append(sortingItemMobile3);

  // const sortingItemMobile4 = document.createElement('li');
  // sortingItemMobile4.classList.add('sorting__item-mobile');
  // sortingItemMobile4.id = 'sorting-item-mobile-4';
  // sortingItemMobile4.textContent = 'По наличию';
  // sortingPanelMobile.append(sortingItemMobile4);

  const sortingItemMobile5 = document.createElement('li');
  sortingItemMobile5.classList.add('sorting__item-mobile');
  sortingItemMobile5.id = 'sorting-item-mobile-5';
  sortingItemMobile5.textContent = 'По названию (A-Z)';
  sortingPanelMobile.append(sortingItemMobile5);

  const sortingMobileBtnClose = document.createElement('li');
  sortingMobileBtnClose.classList.add('sorting__mobile-btn-close');
  sortingPanelMobile.append(sortingMobileBtnClose);

  // sorting panel (action) - (desktop)  

  sortingItem2.addEventListener('click', () => sortingPriceIncrease(products)); // price increase

  sortingItem3.addEventListener('click', () => sortingPriceReduction(products)); // price reduction

  // sortingItem4.addEventListener('click', () => sortingAvailability(products)); // availability

  sortingItem5.addEventListener('click', () => sortingTitle(products)); // title

  // sorting panel (action) - (mobile)

  sortingBtnMobile.addEventListener('click', () => showSortingMobile()); // show sorting panel (mobile)

  sortingItemMobile2.addEventListener('click', () => sortingPriceIncrease(products)); // price increase (mobile)

  sortingItemMobile3.addEventListener('click', () => sortingPriceReduction(products)); // price reduction (mobile)

  // sortingItemMobile4.addEventListener('click', () => sortingAvailability(products)); // availability (mobile)

  sortingItemMobile5.addEventListener('click', () => sortingTitle(products)); // title (mobile)

  // cards list of products (default)

  function mixCards(arr) {  // random sorting cards
    arr.sort(() => Math.random() - 0.5);
  }  

  mixCards(products);

  let cards = createCards(products); // call cards function
  sortingPanel.after(cards); // add DOM-element (cards)

  // quantity panel

  const moreBtn = document.createElement('div'); // show more button
  moreBtn.classList.add('quantity__more-btn');
  mainContainer.append(moreBtn);

  const moreBtnTitle = document.createElement('span'); // show more button title
  moreBtnTitle.classList.add('more-btn__title');
  moreBtnTitle.textContent = 'Показать все товары';
  moreBtn.append(moreBtnTitle);

  // show more (action)

  moreBtn.addEventListener('click', () => showMore()); 

  // return

  return main;

}

// export functions

export default createMain;

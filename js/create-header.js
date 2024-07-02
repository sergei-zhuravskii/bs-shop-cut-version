
// import array (products)

import products from '/bs-shop-cut-version/js/products.js'; // products

// import functions

import showNavMobile from '/bs-shop-cut-version/js/showing/show-nav-mobile.js'; // show nav mobile

import siteSearch from '/bs-shop-cut-version/js/searching/site-search.js'; // site search

// create <header>

function createHeader() {

  const header = document.createElement('header'); // header
  header.classList.add('header');

  const headerContainer = document.createElement('div'); // header container
  headerContainer.classList.add('container', 'header__container');
  header.append(headerContainer);

  const headerNavLogoWrapper = document.createElement('div'); // header nav logo wrapper
  headerNavLogoWrapper.classList.add('header__nav-logo-wrapper');
  headerContainer.append(headerNavLogoWrapper);

  const headerNav = document.createElement('nav'); // header nav (desktop)
  headerNav.classList.add('header__nav');
  headerNavLogoWrapper.append(headerNav);

  const headerNavItem1 = document.createElement('div'); // nav item 1
  headerNavItem1.classList.add('header__nav-item');
  headerNav.append(headerNavItem1);

  const headerNavLink1 = document.createElement('a');
  headerNavLink1.classList.add('header__nav-item-link');
  headerNavLink1.href = 'index.html';
  headerNavLink1.textContent = 'Главная';
  headerNavItem1.append(headerNavLink1);  

  const headerNavItem2 = document.createElement('div'); // nav item 2
  headerNavItem2.classList.add('header__nav-item');
  headerNav.append(headerNavItem2);

  const headerNavLink2 = document.createElement('a');
  headerNavLink2.classList.add('header__nav-item-link');
  headerNavLink2.href = 'page-404.html';
  headerNavLink2.textContent = 'О магазине';
  headerNavItem2.append(headerNavLink2);

  const headerNavItem3 = document.createElement('div'); // nav item 3
  headerNavItem3.classList.add('header__nav-item');
  headerNav.append(headerNavItem3);

  const headerNavLink3 = document.createElement('a');
  headerNavLink3.classList.add('header__nav-item-link');
  headerNavLink3.href = 'page-404.html';
  headerNavLink3.textContent = 'Контакты';
  headerNavItem3.append(headerNavLink3);

  const navMobileBtn = document.createElement('div'); // header nav (mobile) (button)
  navMobileBtn.classList.add('header__nav-mobile-btn');
  headerNavLogoWrapper.prepend(navMobileBtn);

  const navMobileBtnSpan1 = document.createElement('span');
  navMobileBtn.append(navMobileBtnSpan1);

  const navMobileBtnSpan2 = document.createElement('span');
  navMobileBtn.append(navMobileBtnSpan2);

  const navMobileBtnSpan3 = document.createElement('span');
  navMobileBtn.append(navMobileBtnSpan3);

  const headerNavMobile = document.createElement('nav'); // header nav (mobile) (menu)
  headerNavMobile.classList.add('header__nav-mobile');
  headerNavLogoWrapper.append(headerNavMobile);

  const navMobileItem1 = document.createElement('div'); // nav mobile item 1
  navMobileItem1.classList.add('nav-mobile__item_main');
  headerNavMobile.append(navMobileItem1);

  const navMobileItemLink1 = document.createElement('a');
  navMobileItemLink1.classList.add('nav-mobile__item-link_main');
  navMobileItemLink1.href = 'index.html';
  navMobileItemLink1.textContent = 'Главная';
  navMobileItem1.append(navMobileItemLink1);  

  const navMobileItem2 = document.createElement('div'); // nav mobile item 2
  navMobileItem2.classList.add('nav-mobile__item_main');
  headerNavMobile.append(navMobileItem2);

  const navMobileItemLink2 = document.createElement('a');
  navMobileItemLink2.classList.add('nav-mobile__item-link_main');
  navMobileItemLink2.href = 'page-404.html';
  navMobileItemLink2.textContent = 'О магазине';
  navMobileItem2.append(navMobileItemLink2);  

  const navMobileItem3 = document.createElement('div'); // nav mobile item 3
  navMobileItem3.classList.add('nav-mobile__item_main');
  headerNavMobile.append(navMobileItem3);

  const navMobileItemLink3 = document.createElement('a');
  navMobileItemLink3.classList.add('nav-mobile__item-link_main');
  navMobileItemLink3.href = 'page-404.html';
  navMobileItemLink3.textContent = 'Контакты';
  navMobileItem3.append(navMobileItemLink3);  

  const navMobileItem4 = document.createElement('div'); // nav mobile item 4
  navMobileItem4.classList.add('nav-mobile__item_secondary');
  headerNavMobile.append(navMobileItem4);

  const navMobileItemLink4 = document.createElement('a');
  navMobileItemLink4.classList.add('nav-mobile__item-link_secondary');
  navMobileItemLink4.href = 'page-404.html';
  navMobileItemLink4.textContent = 'Условия покупки';
  navMobileItem4.append(navMobileItemLink4);  

  const navMobileItem5 = document.createElement('div'); // nav mobile item 5
  navMobileItem5.classList.add('nav-mobile__item_secondary');
  headerNavMobile.append(navMobileItem5);

  const navMobileItemLink5 = document.createElement('a');
  navMobileItemLink5.classList.add('nav-mobile__item-link_secondary');
  navMobileItemLink5.href = 'page-404.html';
  navMobileItemLink5.textContent = 'Политика конфиденциальности';
  navMobileItem5.append(navMobileItemLink5); 
  
  const navMobileItem6 = document.createElement('div'); // nav mobile item 6
  navMobileItem6.classList.add('nav-mobile__item_secondary');
  headerNavMobile.append(navMobileItem6);

  const navMobileItemLink6 = document.createElement('a');
  navMobileItemLink6.classList.add('nav-mobile__item-link_secondary');
  navMobileItemLink6.href = 'page-404.html';
  navMobileItemLink6.textContent = 'Договор-оферта';
  navMobileItem6.append(navMobileItemLink6);  

  const navMobileItem7 = document.createElement('div'); // nav mobile item 7
  navMobileItem7.classList.add('nav-mobile__item_secondary');
  headerNavMobile.append(navMobileItem7);

  const navMobileItemLink7 = document.createElement('a');
  navMobileItemLink7.classList.add('nav-mobile__item-link_secondary');
  navMobileItemLink7.href = 'page-404.html';
  navMobileItemLink7.textContent = 'FAQ';
  navMobileItem7.append(navMobileItemLink7); 
  
  const headerLogo = document.createElement('img'); // header logo
  headerLogo.classList.add('header__logo');
  headerLogo.src = 'icons/logo.png';
  headerLogo.alt = 'Логотип компании';
  headerLogo.title = 'Данный сайт не является коммерческим проектом, а является результатом самостоятельной учебной работы при изучении курса вебразработки. Марка «Bait Store», контактные данные и реквизиты интернет-магазина, условия работы с интернет-магазином, а также все товары, представленные на сайте, носят исключительно информационный характер и являются частью общего вымышленного контента (любые совпадения с реальными лицами, проектами и с прочими обстоятельствами случайны).';
  headerNavLogoWrapper.append(headerLogo);

  const headerCartSearchContainer = document.createElement('div'); // header cart search container
  headerCartSearchContainer.classList.add('header__cart-search-container');
  headerContainer.append(headerCartSearchContainer);

  const headerCart = document.createElement('a'); // header cart
  headerCart.classList.add('header__cart');
  headerCart.href = 'page-404.html';
  headerCartSearchContainer.append(headerCart);

  const headerSearch = document.createElement('div'); // header search
  headerSearch.classList.add('header__search');
  headerCartSearchContainer.append(headerSearch);

  const headerSearchInput = document.createElement('input');
  headerSearchInput.classList.add('header__search-input');
  headerSearchInput.placeholder = 'Поиск по артикулу ...';
  headerSearchInput.maxLength = 20;
  headerSearchInput.type = 'text';
  headerSearch.append(headerSearchInput);

  const headerSearchIcon = document.createElement('div');
  headerSearchIcon.classList.add('header__search-icon');
  headerSearch.append(headerSearchIcon);

  // show nav mobile (action)

  navMobileBtn.addEventListener('click', () => showNavMobile()); // show nav mobile
  
  // site search (action)

  headerSearchIcon.addEventListener('click', () => siteSearch(products)); // site search
  
  // return

  return header;

}

// export functions

export default createHeader;

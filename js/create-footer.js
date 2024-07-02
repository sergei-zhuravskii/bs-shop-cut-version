
// create <footer>

function createFooter() {

  const footer = document.createElement('footer'); // footer
  footer.classList.add('footer');

  const footerContainer = document.createElement('div'); // footer container
  footerContainer.classList.add('container', 'footer__container');
  footer.append(footerContainer);

  const footerNav = document.createElement('nav'); // footer Nav
  footerNav.classList.add('footer__nav');
  footerContainer.append(footerNav);

  const footerNavItem1 = document.createElement('div'); // nav item 1
  footerNavItem1.classList.add('footer__nav-item');
  footerNav.append(footerNavItem1);

  const footerNavLink1 = document.createElement('a');
  footerNavLink1.classList.add('footer__nav-item-link');
  footerNavLink1.href = 'page-404.html';
  footerNavLink1.target = '_blank';
  footerNavLink1.textContent = 'Условия покупки';
  footerNavItem1.append(footerNavLink1); 
  
  const footerNavItem2 = document.createElement('div'); // nav item 2
  footerNavItem2.classList.add('footer__nav-item');
  footerNav.append(footerNavItem2);

  const footerNavLink2 = document.createElement('a');
  footerNavLink2.classList.add('footer__nav-item-link');
  footerNavLink2.href = 'page-404.html';
  footerNavLink2.target = '_blank';
  footerNavLink2.textContent = 'Политика конфиденциальности';
  footerNavItem2.append(footerNavLink2);  

  const footerNavItem3 = document.createElement('div'); // nav item 3
  footerNavItem3.classList.add('footer__nav-item');
  footerNav.append(footerNavItem3);

  const footerNavLink3 = document.createElement('a');
  footerNavLink3.classList.add('footer__nav-item-link');
  footerNavLink3.href = 'page-404.html';
  footerNavLink3.target = '_blank';
  footerNavLink3.textContent = 'Договор-оферта';
  footerNavItem3.append(footerNavLink3);  

  const footerNavItem4 = document.createElement('div'); // nav item 4
  footerNavItem4.classList.add('footer__nav-item');
  footerNav.append(footerNavItem4);

  const footerNavLink4 = document.createElement('a');
  footerNavLink4.classList.add('footer__nav-item-link');
  footerNavLink4.href = 'page-404.html';
  footerNavLink4.target = '_blank';
  footerNavLink4.textContent = 'FAQ';
  footerNavItem4.append(footerNavLink4);  

  return footer;
  
}

// export functions

export default createFooter;

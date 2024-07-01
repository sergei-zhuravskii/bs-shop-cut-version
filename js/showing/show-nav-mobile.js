
// function show nav (mobile)

function showNavMobile() { 

  const body = document.querySelector('body'); // <body> inizialisation

  const navMobileBtn = document.querySelector('.header__nav-mobile-btn'); // nav (mobile) btn inizialisation
  
  const headerNavMobile = document.querySelector('.header__nav-mobile'); // nav (mobile) inizialisation

  navMobileBtn.classList.toggle('active'); // nav (mobile) btn style
  
  headerNavMobile.classList.toggle('active'); // nav (mobile) style 

  body.classList.toggle('body-scroll-off'); // body fixation

}

// export functions

export default showNavMobile; // show nav (mobile)

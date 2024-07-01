
// function show filter types (mobile)

function showFilterTypesMobile() { 

  const filterTypesMobileIcon = document.querySelector('.filter__types-mobile-icon'); // filter types (mobile) icon inizialisation
  
  const filterTypesMobile = document.querySelector('.filter__types-mobile-wrapper'); // filter types wrapper (mobile) inizialisation

  filterTypesMobileIcon.classList.toggle('rotated'); // filter types (mobile) icon style
  
  filterTypesMobile.classList.toggle('active'); // filter types (mobile) style 

}

// export functions

export default showFilterTypesMobile; // show filter panel types (mobile)

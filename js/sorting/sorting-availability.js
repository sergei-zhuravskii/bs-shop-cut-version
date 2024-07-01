
// import functions

import createCards from '/bs-shop-cut-version/js/create-cards.js'; // create cards

// function sorting (availability)

function sortingAvailability(arr) {

  document.querySelector('.quantity__more-btn').classList.add('hidden'); // remove show more button

  document.querySelector('.cards__wrapper').remove(); // remove cards list of products (default)

  arr.sort((a, b) => a.availability.localeCompare(b.availability));

  let cards = createCards(arr); // call cards function
  document.querySelector('.sorting__list').after(cards); // add DOM-element (cards)

  document.querySelectorAll('.cards__card').forEach(item => item.classList.remove('card-showing')); // show all cards

}

// export functions

export default sortingAvailability; // export sorting (availability)

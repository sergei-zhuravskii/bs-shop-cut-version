
// function show more cards

function showMore() {

  document.querySelector('.quantity__more-btn').classList.add('hidden'); // remove show more button

  let cards = document.querySelectorAll('.cards__card'); // choose all cards

  cards.forEach(element => { // change display (none to flex)
    element.style.display = 'flex';
  });

}

// export functions

export default showMore; // export show more cards

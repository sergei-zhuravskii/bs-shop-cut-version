
// function show-notice

function showNotice() { 
  
  const noticeLink = document.querySelector('.notice-link'); // notice-link iniaialisation
  
  noticeLink.addEventListener('click', openModal); // event for click by link
  
  function openModal() {   // function show notice

    const modalContainer = document.querySelector('.notice__modal-container');
    const modalBtn = document.querySelector('.modal__btn');
    const body = document.querySelector('body');

    modalContainer.classList.remove('hidden');
    modalBtn.addEventListener('click', closeModal);
    body.classList.add('body-scroll-off');
    if (window.innerWidth > 770) {
      body.classList.add('body-offset');
    }

    function closeModal() {
      modalContainer.classList.add('hidden');
      body.classList.remove('body-scroll-off');
      if (window.innerWidth > 770) {
        body.classList.remove('body-offset');
      }
    }

  }

}

// export functions

export default showNotice; // show notice

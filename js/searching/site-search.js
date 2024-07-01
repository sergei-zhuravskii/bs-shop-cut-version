
// function site search

function siteSearch(arr) {

  let searchKey = parseInt(document.querySelector('.header__search-input').value); // input inizialisation  

  let numbers = []; // empty array

  for (let i = 0; i < arr.length; i++) { // push numbers to empty array
    numbers[i] = arr[i].number;    
  }

  if (numbers.includes(searchKey)) { // input conditions
    itemCreating ();  
  } else {
      alert('Товар с таким артикулом не существует. Попробуйте снова.')
    }  

  function itemCreating () { // create item function

    // document.querySelector('.filter__list').classList.add('hidden'); // remove filter panel (desktop)

    // document.querySelector('.sorting__list').classList.add('hidden'); // remove sorting panel (desktop)

    // document.querySelector('.filter-sorting__btns-wrapper-mobile').classList.add('hidden'); // remove filter sorting panel (mobile)

    document.querySelector('.quantity__more-btn').classList.add('hidden'); // remove show more button

    document.querySelector('.cards__wrapper').remove(); // remove cards list of products (default)

    let foundItem = arr.find(item => item.number == searchKey); // search (find)

    let cards = document.createElement('ul'); // cards wrapper
    cards.classList.add('cards__wrapper', 'cards__wrapper_search'); 
    document.querySelector('.sorting__list').after(cards);
    
    let card = document.createElement('li'); 
    card.classList.add('cards__card'); 
    cards.append(card);   

    const cardImgWrapper = document.createElement('div'); // card img wrapper
    cardImgWrapper.classList.add('card__img-wrapper');
    card.append(cardImgWrapper);

    const cardImg = document.createElement('img'); // card img
    cardImg.classList.add('card__img');
    cardImg.src = foundItem.img;
    cardImg.alt = 'Изображение товара';
    cardImgWrapper.append(cardImg);

    const cardTitle = document.createElement('p'); // card title
    cardTitle.classList.add('card__title');
    cardTitle.textContent = foundItem.title;
    card.append(cardTitle);

    const cardTypeWrapper = document.createElement('div'); // card type wrapper
    cardTypeWrapper.classList.add('card__description-item');
    card.append(cardTypeWrapper);

    const cardType = document.createElement('p'); // type
    cardType.classList.add('card__description-parametr');
    cardType.textContent = 'Тип:';
    cardTypeWrapper.append(cardType);

    const cardTypeValue = document.createElement('p'); // type value
    cardTypeValue.classList.add('card__description-value');
    cardTypeValue.textContent = foundItem.type;
    cardTypeWrapper.append(cardTypeValue);

    const cardLengthWrapper = document.createElement('div'); // card length wrapper
    cardLengthWrapper.classList.add('card__description-item');
    card.append(cardLengthWrapper);

    const cardLength = document.createElement('p'); // length
    cardLength.classList.add('card__description-parametr');
    cardLength.textContent = 'Длина (мм):';
    cardLengthWrapper.append(cardLength);

    const cardLengthValue = document.createElement('p'); // length value
    cardLengthValue.classList.add('card__description-value');
    cardLengthValue.textContent = foundItem.length;
    cardLengthWrapper.append(cardLengthValue);

    const cardWeightWrapper = document.createElement('div'); // card weight wrapper
    cardWeightWrapper.classList.add('card__description-item');
    card.append(cardWeightWrapper);

    const cardWeight = document.createElement('p'); // weight 
    cardWeight.classList.add('card__description-parametr');
    cardWeight.textContent = 'Вес (г):';
    cardWeightWrapper.append(cardWeight);

    const cardWeightValue = document.createElement('p'); // weight value
    cardWeightValue.classList.add('card__description-value');
    cardWeightValue.textContent = foundItem.weight;
    cardWeightWrapper.append(cardWeightValue);

    const cardAvailabilityWrapper = document.createElement('div'); // card description 4
    cardAvailabilityWrapper.classList.add('card__description-item');
    card.append(cardAvailabilityWrapper);

    const cardAvailability = document.createElement('p'); // availability (parametr)
    cardAvailability.classList.add('card__description-parametr');
    cardAvailability.textContent = 'Наличие:';
    cardAvailabilityWrapper.append(cardAvailability);

    const cardAvailabilityValue = document.createElement('p'); // availability (value)
    cardAvailabilityValue.classList.add('card__description-value');
    cardAvailabilityValue.textContent = foundItem.availability;
    cardAvailabilityWrapper.append(cardAvailabilityValue);

    if (foundItem.availability == 'Да') {   // availability (color of value)
      cardAvailabilityValue.classList.add('availability-yes'); 
    } else {
      cardAvailabilityValue.classList.add('availability-no');
    }

    const cardNumberWrapper = document.createElement('div'); // card description 5
    cardNumberWrapper.classList.add('card__description-item', 'card__description-item_number');
    card.append(cardNumberWrapper);

    const cardNumber = document.createElement('p'); // number (parametr)
    cardNumber.classList.add('card__description-parametr');
    cardNumber.textContent = 'Артикул:';
    cardNumberWrapper.append(cardNumber);

    const cardNumberValue = document.createElement('p'); // number (value)
    cardNumberValue.classList.add('card__description-value');
    cardNumberValue.textContent = foundItem.number;
    cardNumberWrapper.append(cardNumberValue);   

    const cardPriceWrapper = document.createElement('div'); // card description 6
    cardPriceWrapper.classList.add('card__description-item');
    card.append(cardPriceWrapper);

    const cardPrice = document.createElement('p'); // price (parametr)
    cardPrice.classList.add('card__description-parametr');
    cardPrice.textContent = 'Цена (₽):';
    cardPriceWrapper.append(cardPrice);

    const cardPriceValue = document.createElement('p'); // price (value)
    cardPriceValue.classList.add('card__description-value');
    cardPriceValue.textContent = foundItem.price;
    cardPriceWrapper.append(cardPriceValue);   
    
    const cardBtn = document.createElement('div'); // card button
    cardBtn.classList.add('card__btn');
    card.append(cardBtn);

    const btnTitle = document.createElement('span'); // button title
    btnTitle.classList.add('btn__title');
    btnTitle.textContent = 'В корзину';
    cardBtn.append(btnTitle);

    return cards;

  } 

}

// export functions

export default siteSearch; // export site search

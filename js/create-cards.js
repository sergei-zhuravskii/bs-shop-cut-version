
// function create cards

function createCards(arr) {

  let cards = document.createElement('ul'); // cards wrapper
  cards.classList.add('cards__wrapper');  

  for (let key of arr) {

    let card = document.createElement('li'); 
    card.classList.add('cards__card', 'card-showing'); 
    cards.append(card);   

    const cardImgWrapper = document.createElement('div'); // card Img wrapper
    cardImgWrapper.classList.add('card__img-wrapper');
    card.append(cardImgWrapper);

    const cardImg = document.createElement('img'); // card img
    cardImg.classList.add('card__img');
    cardImg.src = key.img;
    cardImg.alt = 'Изображение товара';
    cardImgWrapper.append(cardImg);

    const cardTitle = document.createElement('p'); // card title
    cardTitle.classList.add('card__title');
    cardTitle.textContent = key.title;
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
    cardTypeValue.textContent = key.type;
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
    cardLengthValue.textContent = key.length;
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
    cardWeightValue.textContent = key.weight;
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
    cardAvailabilityValue.textContent = key.availability;
    cardAvailabilityWrapper.append(cardAvailabilityValue);

    if (key.availability == 'Да') {   // availability (color of value)
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
    cardNumberValue.textContent = key.number;
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
    cardPriceValue.textContent = key.price;
    cardPriceWrapper.append(cardPriceValue);   
    
    const cardBtn = document.createElement('div'); // card button
    cardBtn.classList.add('card__btn');
    card.append(cardBtn);

    const btnTitle = document.createElement('span'); // button title
    btnTitle.classList.add('btn__title');
    btnTitle.textContent = 'В корзину';
    cardBtn.append(btnTitle);

  }

  return cards; 

}

// export functions

export default createCards; // create cards

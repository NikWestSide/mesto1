const popupElement = document.querySelector('.popup');
const popupEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popupElement.querySelector('.popup__close');
const username = document.querySelector(".profile__title");
const description = document.querySelector(".profile__subtitle");
let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_job");

const openPopup = function () {
    popupElement.classList.add('popup_opened');
    nameInput.value = username.textContent;
    jobInput.value = description.textContent;
}

const closePopup = function () {
    popupElement.classList.remove('popup_opened');
  }
 

  popupEditButton.addEventListener('click', openPopup);

  popupCloseButton.addEventListener('click', closePopup);


let formElement = document.querySelector(".popup__form");


function handleFormSubmit (evt) {
    evt.preventDefault();

    username.textContent = nameInput.value;
    description.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);

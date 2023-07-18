const popupElement = document.querySelector('.popup');
const popupEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popupElement.querySelector('.popup__close');

const openPopup = function () {
    popupElement.classList.add('popup__edit');
}

const closePopup = function () {
    popupElement.classList.remove('popup__edit');
  }

  const closePopupByClickOnOverlay = function(event) {
    if (event.target === event.currentTarget)
    closePopup();
  }
  

  popupEditButton.addEventListener('click', openPopup);

  popupCloseButton.addEventListener('click', closePopup);

  popupElement.addEventListener('click', closePopupByClickOnOverlay);

let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input_name");
let jobInput = document.querySelector(".popup__input_job");

function handleFormSubmit (evt) {
    evt.preventDefault();

    const nInput = nameInput.value;
    const jInput = jobInput.value;

    const title = document.querySelector(".profile__title");
    const subtitle = document.querySelector(".profile__subtitle");

    title.textContent = nInput;
    subtitle.textContent = jInput;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);

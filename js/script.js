(function indexGlob(){
const placesList = document.querySelector(".places-list");
//const openButton = document.querySelector('.user-info__button');
const closeButton = document.querySelector('.popup__close');
const closeButtonEdit = document.querySelector('.close-edit');
const closeButtonImage = document.querySelector('.close-image');
const popupButtonNewCard = document.querySelector(".popup__button");
const popupButtonEdit = document.querySelector(".popup__button_small");
const popup = document.querySelector('.popup');
//const openEdit = document.querySelector('.user-info__edit');
const popupEdit = document.querySelector('.popup-edit');
const nameInput = document.querySelector('input[name="name"]');
const linkInput = document.querySelector('input[name="link"]');
//const userInfo = document.querySelector(".user-info__data");
const nameInfo = document.querySelector('.user-info__name');
const jobInfo = document.querySelector('.user-info__job');
const nameEditInput = document.querySelector('input[name="name-edit"]');
const myselfEditInput = document.querySelector('input[name="myself-edit"]');
const root = document.querySelector(".root");
const popupImage = document.querySelector(".popup-image");
const bigImage = document.querySelector('.popup__image');
const newCard = document.forms.new;
const edit = document.forms.edit;
const errorInputName = document.querySelector(".popup__error-name");
const errorInputLink = document.querySelector(".popup__error-link");
const errorInputNameEdit = document.querySelector(".popup__error-name-edit");
const errorInputMyselfEdit = document.querySelector(".popup__error-myself-edit");

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
      name: 'Нургуш',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
    },
    {
      name: 'Тулиновка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
    },
    {
      name: 'Остров Желтухина',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
    },
    {
      name: 'Владивосток',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
    }
  ];

const formValidatorClass = new FormValidator(edit);
const userInfoClass = new UserInfo();
const buttonClass = new Button();
const popupClass = new Popup();
const cardClass = new Card();


const cardListClass = new CardList(placesList,initialCards, new Card());


cardListClass.render();
userInfoClass.setUserInfo(nameInfo, jobInfo, nameEditInput, myselfEditInput);
formValidatorClass.setEventListeners(nameEditInput, myselfEditInput, nameInput, linkInput,
    errorInputNameEdit, errorInputMyselfEdit, errorInputName, errorInputLink,
     popupButtonEdit, popupButtonNewCard, edit, newCard, formValidatorClass, buttonClass);

edit.addEventListener('submit', function(){
  userInfoClass.updateUserInfo(nameInfo, jobInfo, nameEditInput, myselfEditInput);
});

root.addEventListener('click',function(){
  popupClass.close(closeButton, closeButtonEdit, closeButtonImage, popupButtonNewCard, popupButtonEdit);
});

root.addEventListener('click', function(){
  popupClass.open(bigImage, popupImage, popup, userInfoClass,
    formValidatorClass, nameEditInput, myselfEditInput, errorInputNameEdit, errorInputMyselfEdit,
    buttonClass, popupButtonEdit,popupEdit,nameInfo, jobInfo, nameInput, errorInputName, linkInput, errorInputLink);
});
root.addEventListener('input', function(){
  formValidatorClass.setEventListeners(nameEditInput, myselfEditInput, nameInput, linkInput,
    errorInputNameEdit, errorInputMyselfEdit, errorInputName, errorInputLink,
     popupButtonEdit, popupButtonNewCard, edit, newCard, formValidatorClass, buttonClass);
});
placesList.addEventListener('click', cardClass.like);
placesList.addEventListener('click', cardClass.remove);
newCard.addEventListener('submit', function(event){
    event.preventDefault();
    cardListClass.addCard(newCard, buttonClass, popupButtonNewCard);
  });

})();


/*REVIEW2.

Структура проекта реорганизована правильным образом.
Валидация формы профиля работает правильно во всех случаях.
Рекомендации учтены.
Задание принято.

*/
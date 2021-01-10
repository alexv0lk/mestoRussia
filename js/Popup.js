class Popup{
    open(bigImage, popupImage, popup, userInfoClass, 
        formValidatorClass, nameEditInput, myselfEditInput, errorInputNameEdit, errorInputMyselfEdit,
        buttonClass, popupButtonEdit,popupEdit, nameInfo, jobInfo, nameInput, errorInputName, linkInput, errorInputLink){
      if(event.target.closest(".place-card__image") && !event.target.closest('.place-card__delete-icon')){
        bigImage.src = event.target.style.backgroundImage.slice(5, -2);
        popupImage.classList.add("popup_is-opened");
      } else if (event.target.closest(".user-info__button")){
        popup.classList.add("popup_is-opened");
        formValidatorClass.checkInputValidity(nameInput, errorInputName, linkInput);
        formValidatorClass.checkInputValidity(linkInput, errorInputLink, linkInput);
      } else if (event.target.closest(".user-info__edit")){
        userInfoClass.setUserInfo(nameInfo, jobInfo, nameEditInput, myselfEditInput);
        formValidatorClass.checkInputValidity(nameEditInput, errorInputNameEdit);
        formValidatorClass.checkInputValidity(myselfEditInput,errorInputMyselfEdit);
        buttonClass.offButton(popupButtonEdit);
        popupEdit.classList.add("popup_is-opened");
      }
    }
    close(closeButton, closeButtonEdit, closeButtonImage, popupButtonNewCard, popupButtonEdit){
      if(event.target === closeButton 
          || event.target === closeButtonEdit 
          || event.target === closeButtonImage 
          || event.target === popupButtonNewCard  
          || event.target === popupButtonEdit ){
          event.target.closest(".popup").classList.toggle("popup_is-opened");}
    }
}


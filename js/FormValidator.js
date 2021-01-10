class FormValidator{
    checkInputValidity(input, error, linkInput){
        const errorEmpty = "Это обязательное поле";
        const errorLength = "Должно быть от 2 до 30 символов";
        const errorUrl = "Здесь должна быть ссылка";
        if(!input.checkValidity() && input != linkInput){
          error.classList.remove('popup__error_none');
          if (input.value === ""){
            error.textContent = errorEmpty;
          }
          if (input.value.length === 1 || input.value.length > 30 ){
            error.textContent = errorLength;
          }
        } else if( input === linkInput && !input.checkValidity()){
            error.classList.remove('popup__error_none');
            if (input.value === ""){
              error.textContent = errorEmpty;
            } else {
              error.textContent = errorUrl;
            }
        } else {
          error.classList.add('popup__error_none');
        }
      
    }
    setSubmitButtonState(button, form, buttonClass){
        if(!form.checkValidity()){
            buttonClass.onButton(button);
          } else if (form.checkValidity()){
            buttonClass.offButton(button);
          }
    }
    setEventListeners(nameEditInput, myselfEditInput, nameInput, linkInput,
       errorInputNameEdit, errorInputMyselfEdit, errorInputName, errorInputLink,
        popupButtonEdit, popupButtonNewCard, edit, newCard, formValidatorClass, buttonClass){
        formValidatorClass.checkInputValidity(nameEditInput, errorInputNameEdit, linkInput);
        formValidatorClass.checkInputValidity(myselfEditInput, errorInputMyselfEdit, linkInput);
        formValidatorClass.setSubmitButtonState(popupButtonEdit, edit, buttonClass);
        formValidatorClass.checkInputValidity(nameInput, errorInputName, linkInput);
        formValidatorClass.checkInputValidity(linkInput, errorInputLink, linkInput);
        formValidatorClass.setSubmitButtonState(popupButtonNewCard, newCard, buttonClass);
    }
}


class Button{
    onButton(button){
        button.classList.remove("popup__button_enabled");
        button.setAttribute('disabled', true);
    }
    offButton(button){
        button.classList.add("popup__button_enabled");
        button.removeAttribute('disabled');
    }
}
  

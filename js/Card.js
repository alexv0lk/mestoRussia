class Card{
  // constructor(){  REVIEW2. Правильно, что в этом классе не надо переопределять конструктор по умолчанию.

   // }
    like(event){
      if(event.target.classList.contains("place-card__like-icon")){
      event.target.classList.toggle('place-card__like-icon_liked');}
    }
    remove(event){
      if(event.target.classList.contains("place-card__delete-icon")){
      event.target.closest('.place-card').remove();}
    }
    create(data){
      const cardElement = document.createElement('div');
      const cardImage = document.createElement('div');
      const cardDescription = document.createElement('div');
      const deleteIcon = document.createElement('button');
      const cardName = document.createElement('h3');
      const likeIkon = document.createElement('button');

      cardName.textContent = data.name;
      cardImage.setAttribute('style', `background-image: url(${data.link})`);

      cardElement.classList.add('place-card');
      cardImage.classList.add('place-card__image');
      cardDescription.classList.add('place-card__description');
      deleteIcon.classList.add('place-card__delete-icon');
      cardName.classList.add('place-card__name');
      likeIkon.classList.add('place-card__like-icon');

      cardElement.appendChild(cardImage);
      cardElement.appendChild(cardDescription);
      cardImage.appendChild(deleteIcon);
      cardDescription.appendChild(cardName);
      cardDescription.appendChild(likeIkon);

      return cardElement;
    }
}

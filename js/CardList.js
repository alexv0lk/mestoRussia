class CardList{
    constructor(cardContainer, cardArray, cardCreater){
      this.container = cardContainer;
      this.array = cardArray;
      this.creater = cardCreater;
    }
    addCard(newCard, buttonClass, popupButtonNewCard){
      event.preventDefault();
      const cardObject = {name: newCard.name.value, link: newCard.link.value};

     // const card = new Card(cardObject);
      this.container.appendChild(this.creater.create(cardObject));
      newCard.reset();
      buttonClass.onButton(popupButtonNewCard);
    }
    render(){
      for(const element of this.array){
       const cardObject = {name: element.name, link: element.link};
       const card = this.creater.create(cardObject);

       this.container.appendChild(card);
      }
    }
}



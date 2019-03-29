import React, {Component} from 'react';
import {arrayFlashCardData} from "../data/array";
import Card from './Card';
import CreateCard from './CreateCard';
import _ from "lodash";

const styles = {
  cardContainer: {
    width: '100%',
  },
};


class CardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: arrayFlashCardData.sort(() => Math.random() - 0.5),
      cardNumber: 0
    };
    this.boundCreateCard = this.setCard.bind(this);
    this.boundShowPrevCard = this.showPrevCard.bind(this);
    this.boundShowNextCard = this.showNextCard.bind(this);
  }

  hideCreateCard = () => {
    this.setState({showModal: false});
  };

  showNextCard() {
    if ((this.state.cardNumber + 1) !== this.state.cards.size) {
      this.setState({cardNumber: this.state.cardNumber += 1});
    }
  }

  showPrevCard() {
    if (this.state.cardNumber !== 0) {
      this.setState({cardNumber: this.state.cardNumber -= 1});
    }
  }

  setCard = (card) => {
    const newCards = this.state.cards.push(card);
    this.setState({cards: newCards});
  };

  generateDots() {
    const times = this.state.cards.size;
    let arr = [];
    _.times(times).forEach((num) => {
      const dotClass = num === this.state.cardNumber ? 'active' : '';
      arr.push(
        <span
          className={`card-container__dot fa fa-circle ${dotClass}`}
          onClick={() => this.setState({cardNumber: num})}
        />
      )
    });
    return arr;
  }

  generateCards() {
    const cards = this.state.cards;
    const cardsList = cards.map((card) => {
      return (
        <Card
          frontContent={card.question}
          backContent={card.description}
          code={card.code}
          total={cards.length}
          destructive={card.destructive}
          showNextCard={this.boundShowNextCard}
          showPrevCard={this.boundShowPrevCard}
          cardNumber={this.state.cardNumber}
        />
      );
    })
    return cardsList[this.state.cardNumber];
  }

  render() {
    return (
      <div style={ styles.cardContainer } className="card-container">
                <span
                  className='card-container__icon  fa fa-plus'
                  onClick={() => this.setState({showModal: !this.state.showModal})}
                />
        {
          this.state.showModal
            ? <CreateCard
              onShadowClick={this.hideCreateCard}
              onCreateCard={this.setCard}
            />
            : ''
        }
        {this.generateCards()}
        <div className='card-container__dots-wrapper'>
          {this.generateDots()}
        </div>
      </div>
    );
  }
}

export default CardContainer;
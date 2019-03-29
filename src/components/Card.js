import React from "react";
import Highlight from "react-highlight";

const styles = {
  textContainer: {
    // width: '80%',
    color: '#10b33d',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'monospace',
  },
  methodText: {
    color: '#10b33d',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'monospace',
  }
};

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      showAnswer: false
    }
  }

  render() {
    const content = this.state.showAnswer ? this.props.backContent : this.props.frontContent;
    const code = this.state.showAnswer ? this.props.code : '';
    const destructive = this.state.showAnswer ? this.props.destructive : '';
    const iconClass = this.state.showAnswer ? 'reply' : 'share';
    const cardClass = this.state.showAnswer ? 'back' : '';
    const contentClass = this.state.showAnswer ? 'back' : 'front';
    const actionClass = this.state.showAnswer ? 'active' : '';

    return (
      <div
        className={`card ${cardClass}`}
        onClick={() => this.setState({showAnswer: !this.state.showAnswer})}
      >
        <span className='card__counter'>{this.props.cardNumber + 1} of {this.props.total}</span>
        <div
          className='card__flip-card'
          onClick={() => this.setState({showAnswer: !this.state.showAnswer})}
        >

          <span className={`fa fa-${iconClass}`}/>
        </div>

        <div className={`card__content--${contentClass}`}>
          <div className={ this.state.showAnswer ? 'method-text' : '' }>
            {content}
          </div>

          {
            (this.state.showAnswer)
            && <div>
              {destructive}
              <Highlight className="javascript">
                {code}
              </Highlight>
            </div>


          }

        </div>

        <div className={`card__actions ${actionClass}`}>
          <div
            className='card__prev-button'
            onClick={() => {
              this.props.showPrevCard();
              this.setState({showAnswer: false});
            }}
          >
            Prev
          </div>
          <div
            className='card__next-button'
            onClick={() => {
              this.props.showNextCard();
              this.setState({showAnswer: false});
            }}
          >
            Next
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
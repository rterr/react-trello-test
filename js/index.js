var React = require('react');
var ReactDOM = require('react-dom');


// var Card = React.createClass({
//   render: function() {
//     return (<div className="card">{this.props.text}</div>);
//   }
// });
//
// export default Card;

var Card = function(props) {
    return (
        <div className="card">
            {props.text}
        </div>
    );
};

var List = function(props) {
    var myCards = [];
    for (var i=0; i<props.cards.length; i++) {
        myCards.push(<Card text={props.cards[i]} key={'card' + i}/>);
    }

    return (
        <div className="list">
          <div className="list-title">{props.title}</div>
          {myCards}
          <form onSubmit={props.onAddSubmit}>
              <input onChange={props.onAddInputChanged} type="text" value={props.value} name="list-input"/>
              <button name="list-button">Push Here</button>
          </form>
        </div>

    );
};

var ListContainer = React.createClass({
    getInitialState: function() {
        return {
          inputText:'',
          cardBox: this.props.initCards
        }

    },
    onAddInputChanged: function (event) {
        this.setState({
          inputText: event.target.value
        });
    },
    onAddSubmit: function(event) {
        event.preventDefault();
        var cardArray = this.state.cardBox.slice();
        cardArray.push(this.state.inputText);
        this.setState({
          cardBox: cardArray,
          inputText: ''
        })
    },
    render: function() {
        return (
            <List value={this.state.inputText} title={this.props.title} cards={this.state.cardBox} onAddSubmit={this.onAddSubmit} onAddInputChanged={this.onAddInputChanged} />
        );
    }
});

var Board = function(props) {
    var myLists = [];
    // lists.push(<List title="List One" />);
    for (var i=0; i<props.lists.length; i++) {
        myLists.push(<ListContainer title={props.lists[i].listTitle} initCards={props.lists[i].listCards} />);

    }

    return (
        <div className="board">
          <div className="board-title">{props.title}</div>
          {myLists}
        </div>
    );
};

var WholeSite = function() {
    let listContent = [
        {
            listTitle: 'fruits',
            listCards: ['apples', 'oranges', 'bananas']
        },
        {
            listTitle: 'veggies',
            listCards: ['celery', 'lettuce', 'carrots']
        },
        {
            listTitle: 'snacks',
            listCards: ['chips', 'cookies', 'popsicles']
        }
    ];

    return(
        <Board title="Welcome to my board" lists={listContent}/>
    );
};


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<WholeSite />, document.getElementById('app'));
});

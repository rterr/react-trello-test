var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('../js/card.js');

var List = function(props) {
    var myCards = [];
    for (var i=0; i<props.cards.length; i++) {
        myCards.push(<Card text={props.cards[i]}/>);
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


module.exports = List;



// document.addEventListener('DOMContentLoaded', function() {
//     ReactDOM.render(<WholeSite />, document.getElementById('app'));
// });

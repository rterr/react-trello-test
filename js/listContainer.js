var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('../js/card.js');
var List = require('../js/list.js');
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


module.exports = ListContainer;
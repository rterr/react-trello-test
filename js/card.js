var React = require('react');
var ReactDOM = require('react-dom');

// import React from 'react';
// import ReactDOM from 'react-dom';

// var Card = React.createClass({
//   render: function() {
//     return (<div className="card">{this.props.text}</div>);
//   }
// });

var Card = function(props) {
    return (
        <div className="card">
            {props.text}
        </div>
    );
};

module.exports = Card;
// module.exports = ListContainer;
// module.exports = Board;


// document.addEventListener('DOMContentLoaded', function() {
//     ReactDOM.render(<WholeSite />, document.getElementById('app'));
// });

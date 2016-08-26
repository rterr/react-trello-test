var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

//import Card from '../my-card.js';
var Card = require('../js/card.js');

describe('Card component', function() {
    it('Renders a card with text',  function() {
        var text = "I am a card";
        //Instance of the renderer:
        var renderer = TestUtils.createRenderer();
        //You then render an Image component:
        renderer.render(<Card text={text} />);
        //This returns the rendered React component
        //Using this you can check out the type and props of the elements rendered by your component:
        var card = renderer.getRenderOutput();
        //console.log("Card: ", card);
        card.props.className.should.equal('card');
        card.props.children.should.equal(text);
    });
});

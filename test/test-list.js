var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../js/card.js');
var List = require('../js/list.js');

describe('List component', function() {
    it('Renders a list with cards',  function() {
        var title = "I am a list";
        var cards = ["I am card 1", "I am card 2"];
        //Instance of the renderer:
        var renderer = TestUtils.createRenderer();
        //You then render an Image component:
        renderer.render(<List title={title} cards={cards} />);
        //This returns the rendered React component
        //Using this you can check out the type and props of the elements rendered by your component:
        var list = renderer.getRenderOutput();
        // console.log("List: ", list.props.children[1][0]);

        list.props.className.should.equal('list');
        list.props.children[0].props.className.should.equal('list-title');
        list.props.children[0].props.children.should.equal('I am a list');
        list.props.children[1][0].props.text.should.equal(cards[0]);
        list.props.children[1][1].props.text.should.equal(cards[1]);
        // card.props.children.should.equal(text);
    });
});

var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../js/card.js');
var List = require('../js/list.js');
var ListContainer = require('../js/listContainer.js');

describe('ListContainer component', function() {
    it('Renders a list with Lists',  function() {
        var title = "Im a List Container";
        var cards = ['apples', 'oranges', 'bananas'];
        // var onAddSubmit = ;
        // var onAddInputChanged = ;
        //Instance of the renderer:
        var renderer = TestUtils.createRenderer();
        //You then render an Image component:
        renderer.render(<ListContainer title={title} initCards={cards} />);
        //This returns the rendered React component
        //Using this you can check out the type and props of the elements rendered by your component:
        var listContainer = renderer.getRenderOutput();
        // console.log("ListContainer: ", listContainer);

        // list.props.className.should.equal('list');
        listContainer.props.title.should.equal(title);
        listContainer.props.cards.should.equal(cards);
        // list.props.children[0].props.children.should.equal('I am a list');
        // list.props.children[1][0].props.text.should.equal(cards[0]);
        // list.props.children[1][1].props.text.should.equal(cards[1]);
        // card.props.children.should.equal(text);
    });
});

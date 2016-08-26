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
        console.log("List: ", list);
    });
});

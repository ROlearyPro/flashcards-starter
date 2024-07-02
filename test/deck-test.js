const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/deck');

describe('deck', function() {
  it('should be a function', function() {
    expect(createDeck).to.be.a('function');
  });

  it('should begin with a specific card as the first value in deck', function() {
    const deck = createDeck(6);
    
    expect(deck[0].id).to.equal(6);
    // expect(deck.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    // expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    // expect(card.correctAnswer).to.equal('object');
  });  

  it('Should get the number of cards in the deck', function(){
    const deck = createDeck(15);
    expect(countCards(deck)).to.equal(15);
  })

});

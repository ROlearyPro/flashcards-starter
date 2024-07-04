const chai = require('chai');
const expect = chai.expect;

const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');
const { createDeck, countCards } = require('../src/deck');

describe('createRound', function () {
    it('should be a function', function () {
        expect(createRound).to.be.a('function');
    });

    // can assume they're all functions
    it('should create round object as expected', function () {
        const deck = createDeck(6);

        const roundTest = createRound(deck);

        expect(roundTest.deck.length).to.equal(6);
        expect(roundTest.currentCard).to.deep.equal(round.deck[0]);
        expect(roundTest.turns).to.equal(0);
        expect(roundTest.incorrectGuesses).to.deep.equal([]);
    });
    //
    it('should take consecutive turns as expected', function () {
        const deck = createDeck(8);

        const round = createRound(deck);

        takeTurn(round.currentCard.correctAnswer, round);
        expect(round.turns).to.equal(1);
        expect(round.currentCard).to.deep.equal(round.deck[1]);
        expect(round.incorrectGuesses).to.deep.equal([]);

        takeTurn('I dunno lol', round);
        expect(round.turns).to.equal(2);
        expect(round.currentCard).to.deep.equal(round.deck[2]);
        expect(round.incorrectGuesses).to.deep.equal([round.deck[1].id]);

    });

    it('Should correctly calculate percentage Correct', function () {
        const deck = createDeck(15);
        const round = createRound(deck);
        var incorrectNum = 0;
        var trueFalseArray = [true, false]

        function getRandomIndex(array) {
            return Math.floor(Math.random() * array.length);
        }

        
        for (var i = 0; i < deck.length; i++)
            {
                if(trueFalseArray[getRandomIndex(trueFalseArray)])
                    {
                        takeTurn(round.currentCard.correctAnswer, round);
                    }
                else{
                    takeTurn('I dunno lol', round);
                    incorrectNum++;

                }
            }
        var percents = 100 * (1 - (incorrectNum/deck.length));
        
        expect(calculatePercentCorrect(round)).to.deep.equal(percents);
        expect(endRound(round)).to.deep.equal(percents);


    })

});

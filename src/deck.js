const { prototypeData } = require("./data");

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function createDeck(sizeOfDeck = 5) {
    var deckSize = sizeOfDeck;
    var deck = [];
    // var usedCards = [];
    if (deckSize) {
        deck[0] = prototypeData[5];
        for (i = 1; i < deckSize; i++) {
            deck.push(prototypeData[getRandomIndex(prototypeData)])
        }
    }

    return deck;
}

function countCards(deck) {
    return deck.length;
}
module.exports = { createDeck, countCards };

const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('./round');
const { createDeck, countCards } = require('./deck');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}
const startTime = Date.now();

function start(){
  const deck = createDeck(20);

  const round = createRound(deck);

  printMessage(deck);

  printQuestion(round);

}

start();

module.exports = { printMessage, printQuestion, start, startTime };

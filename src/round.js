
function createRound(deck) {
  round =
  {
    'deck': deck,
    'currentCard': deck[0],
    'turns': 0,
    'incorrectGuesses': []
  }
  return round;
}
function takeTurn(guess, round) {


  if (guess === round.currentCard.correctAnswer) {
    round.turns++;
    round.currentCard = round.deck[round.turns];
    return "correct!";

  }
  else {
    round.turns++;
    round.currentCard = round.deck[round.turns];
    round.incorrectGuesses.push(round.currentCard.id)
    return "Incorrect!"; 
  }
 
}


function calculatePercentCorrect(round) {
  var percentageCorrect = 100*(1 - (round.incorrectGuesses.length / round.turns));
  return (percentageCorrect);

}

function endRound(round) {
  pC = calculatePercentCorrect(round);
  console.log(`** Round over! ** You answered ${pC}% of the questions correctly!`);
  return pC;
}

module.exports = { createRound, takeTurn, calculatePercentCorrect, endRound }
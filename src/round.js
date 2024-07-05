const startTime = Date.now();
const { prototypeData } = require("./data");

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
    round.incorrectGuesses.push(round.currentCard.id)

    round.turns++;
    round.currentCard = round.deck[round.turns];
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
  var timeTaken = Date.now() - startTime;
  console.log (`Took ${Math.floor(timeTaken/1000)} seconds.`)
  if(pC < 100)
    {
      console.log(round.incorrectGuesses);
      var newDeck = [];
      for (var i = 0; i < round.incorrectGuesses.length; i++)
        {
          newDeck.push(prototypeData.find(({id}) => id === round.incorrectGuesses[i]));
        }
        round.deck = newDeck;
        round.currentCard = round.deck[0];
        round.turns = 0;
        round.incorrectGuesses = [];
        console.log("Alright, let's review the ones you got wrong!"); 
    }

  return pC;
}

module.exports = { createRound, takeTurn, calculatePercentCorrect, endRound }
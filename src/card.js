

function createCard(inputID, question, answers, rightAnswer)
{
    var card = {
        'id': inputID,
        'question': question,
        'answers': answers,
        'correctAnswer': rightAnswer,
    }
    return card;
}

module.exports = { createCard };

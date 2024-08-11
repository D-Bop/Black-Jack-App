alert("This page is still in progress")
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

//  Afunction to get random numbers for the cards
function getRandomCard() {
    let totCard = Math.floor(Math.random() * 7);
    return totCard;
}

//  A function that starts the game and calls the render game button
function startGame() {
    renderGame()
}

//  A function that displays the cards and the messages 
function renderGame() {
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;
}

//  A function that gets a new card upon request 
function newCard () {
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    renderGame();
}


// Global variables
const timer = document.querySelector('#game-timer')
const restartBtn = document.querySelector('.startAgain')
const squares = document.querySelectorAll('.square')

const result = document.querySelector('#result')
const message = document.querySelector('#message')


let firstCard , secondCard;
let selectCard = false;
let cardsMatched = 0;
let time = 0;
let minutes = 0;
let seconds = 59;
const minDiv = document.querySelector('#minutes')
minDiv.innerText = minutes;
const secDiv = document.querySelector('#seconds')
secDiv.innerText = seconds;

//show message if player doesn't make it on time

function displayMessage(message) {
    if (seconds <= 0) {
        clearInterval(timer)
   
    }
}



const playGame = () =>{
    const timer = setInterval(() =>{
        seconds -= 1;
        if (seconds <= 0){
            clearInterval(timer)
        }
        secDiv.innerText = "";
        secDiv.innerText = seconds;
    }, 1000);

// function flip cards
function flipCard(e){
    let chosenCard = e.target; // click event when player click on chosen cards
    chosenCard.classList.add('flip');
    if (chosenCard !== firstCard && !selectCard) {
        chosenCard.classList.add('flip');
        if(!firstCard) {
            return firstCard = chosenCard;
        }

        secondCard = chosenCard;
        selectCard = true;
        let firstCardImg = firstCard.querySelector('img').src,
        secondCardImg = secondCard.querySelector('img').src;
        matchCards(firstCardImg, secondCardImg);
    }

}
// shuffle cards when restart the game
function shuffleCard () {
    cardsMatched = 0;
    firstCard = secondCard = '';
    let imgArr =[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    imgArr.sort(() => Math.random() > 0.5 ? 1 : -1); // get a random num
    squares.forEach((square, i)=>{
        square.classList.remove('flip')
        square.addEventListener('click', flipCard);

        let imgCard = square.querySelector('img')
        imgCard.src = `images/img-${imgArr[i]}.png`;
    });
}
shuffleCard();
//check 2 cards when unmatched, it shakes and flip back
function matchCards (img1, img2) {
    if (img1 === img2){
        cardsMatched++; //increment matching cards value by 1
        if(cardsMatched == 8){ // if 8 images all matched then its flipped n shuffled
            setTimeout(()=> {
                return shuffleCard();
        }, 1200);
    }  
        // when 2 cards are matched remove event listener 
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
        firstCard = secondCard = '';
        return selectCard = false;
    } else {
        setTimeout(() => { // square shake then flip when 2 cards not matched 
            firstCard.classList.add('shake')
            secondCard.classList.add('shake')
        }, 600);
        setTimeout(()=> {
            firstCard.classList.remove('shake', 'flip');
            secondCard.classList.remove('shake', 'flip');
            firstCard = secondCard = '';
            selectCard = false;
        }, 1200);
    }
}

// remove both cards if they're matched
function removeCards () {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    setTimeout(function()  {
        firstCard.style.visibility = secondCard.style.visibility = 'hidden';
    }, 1000);
}

//event listener for each squares turnable when clicks
squares.forEach(square => {
    square.addEventListener('click', flipCard);

})

}
//event listener for button to start the game 
restartBtn.addEventListener('click', playGame);

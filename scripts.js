// Global variables
const timer = document.querySelector('#game-timer')
const restartBtn = document.querySelector('.start-Again')
const squares = document.querySelectorAll('.square')

let firstCard , secondCard;
let selectCard = false;
let cardsMatched = 0;

//let time = 0;
let minutes = 00;
let seconds = 40;
const minDiv = document.querySelector('#minutes')
//console.log(minDiv)
minDiv.innerText = minutes;
const secDiv = document.querySelector('#seconds')
secDiv.innerText = seconds
const timeCount = () => {
    seconds -= 1
    secDiv.innerText = ""
    secDiv.innerText = seconds;
}






//     for(let i = 0; i < squares.length; i++) {
//         squares[i].Math.floor(Math.random()*16) + 1;
//         shuffleCard();
//         squares.forEach((square) => {
//             square.classList.remove('flip')
//             square.addEventListener('click', flipCards)
//         })
// //        console.log(squares)
//     }
// function flip cards
function flipCard(e){
    setTimeout(timeCount, 1000)
    let chosenCard = e.target;
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
    imgArr.sort(() => Math.random() > 0.5 ? 1 : -1);
    squares.forEach((square, i)=>{
        square.classList.remove('flip')
        square.addEventListener('click', flipCard);

        let imgCard = square.querySelector('img')
        imgCard.src = `images/img-${imgArr[i]}.png`;
    });
}
shuffleCard();
// when both matched its 
// function matchCards (img1, img2) {
//     if (img1 === img2){
//         cardsMatched++; //increment matching cards value by 1
//         if(cardsMatched == 8){
//             setTimeout(()=> {
//                 return shuffleCard();

//             }, 1200);
            
//         }
//         firstCard.removeEventListener('click', flipCard)
//         secondCard.removeEventListener('click', flipCard)
//         firstCard = secondCard = '';
//         return selectCard = false;
//     } else {
//         setTimeout(() => {
//             firstCard.classList.add('shake')
//             secondCard.classList.add('shake')
//         }, 500);
//         setTimeout(()=> {
//             firstCard.classList.remove('shake', 'flip');
//             secondCard.classList.remove('shake', 'flip');
//             firstCard = secondCard = '';
//             selectCard = false;
//         }, 1200);
//     }
// }
// removeCards();

// function removeCards() {
//     firstCard.removeEventListener('click', flipCard);
//     secondCard.removeEventListener('click', flipCard);
//     setTimeout(function()  {
//         firstCard.style.visibility = secondCard.style.visibility = 'hidden';
//         resetGame();
//     }, 500);
// }
// function resetGame() {
//     selectCard = false;
//     firstCard = null;
//     secondCard = null;
// }

















//event listener for each squares turnable when clicks
squares.forEach(square => {
    square.addEventListener('click', flipCard);

//square.classList.add('flip')
})
//event listener for button to start the game 
//restartBtn.addEventListener('click', startGame);

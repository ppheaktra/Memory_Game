// Global variables
const timer = document.querySelector('#timer')
const restartBtn = document.querySelector('.startAgain')
const squares = document.querySelectorAll('.square')
const startGame = document.querySelector('.click-here')
const message = document.querySelector('#message')
const clickBtn = document.querySelector('.clickBtn')
//let cardsId = []
// let cardWon = []
// let imgs;
let firstCard, secondCard;
//let stopGame = true;
let selectCard = false;
let cardsMatched = 0;
let minutes = 0;
let seconds = 59;
const minDiv = document.querySelector('#minutes')
minDiv.innerText = minutes;
const secDiv = document.querySelector('#seconds')
secDiv.innerText = seconds;

//show message if player doesn't make it on time
function timeUp (){
    setInterval(() => {
        seconds -= 1; 
        if (seconds <= 0){
        clearInterval()
        document.querySelector("#message").innerHTML = `Time's Up, You Lose.`;
        }
    
    })
}

   

    // if(seconds >= 10){
    //     timer.innerHTML = `00:${seconds}`;
    // } else {
    //     timer.innerHTML = `00:0${seconds}`
    // }

const playGame = () => {
    setInterval(() => {
        seconds -= 1; 
        if (seconds <= 0){
            clearInterval()
            secDiv.innerText = "";
            secDiv.innerText = seconds;
        }
    },1000)

//console.log(playGame)    
// function flip cards
function flipCard(e){
    let chosenCard = e.target; // click event when player click on chosen cards
    //chosenCard.classList.add('flip');
    if (chosenCard !== firstCard && !selectCard) {
        chosenCard.classList.add('flip');
        if(!firstCard) {
            return firstCard = chosenCard;
        }
        secondCard = chosenCard;
        selectCard = true;
        let firstImg = firstCard.querySelector(".after-view img").src,
        secondImg = secondCard.querySelector(".after-view img").src;
        matchCards(firstImg, secondImg);
    }

}
//console.log(flipCard)
// shuffle cards when restart the game
function shuffleCard() {
    cardsMatched = 0;
    firstCard = secondCard = "";
    selectCard = false;
    let imgArr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    imgArr.sort(() => Math.random() > 0.5 ? 1 : -1); // get a random num
    squares.forEach((square, index)=> {
        square.classList.remove('flip');
        let imgCard = square.querySelector('.after-view img');
        imgCard.src = `images/img-${imgArr[index]}.png`;
        square.addEventListener('click', flipCard);

       
    });

}
shuffleCard();
// console.log(shuffleCard)
//shuffleCard();
//check 2 cards when unmatched, it shakes and flip back
// function matchCards () {
//     let images = document.querySelectorAll("img")
//     const firstCard = cardsId[0]
//     const secondCard = cardsId[1]
//     if(selectCard[0] === selectCard[1]){
//     alert('you found a match')
//     images[firstCard].setAttribute("src", "images/img-4.png")
//     images[secondCard].setAttribute("src", "images/img-4.png")
//     cardWon.push.selectCard
// } else {

//     images[firstCard].setAttribute("src", "images/blank.png")
//     images[secondCard].setAttribute("src", "images/blank.png")
//     alert("You lose");



// } 
//matchCards();
// function matchCards (){
//     let imgs = document.querySelectorAll("img")
//     Array.from(imgs).forEach(img => {img.addEventListener("click", flipCard)})
//     let firstCard = cardsId[0]
//     let secondCard = cardsId[1]
//     if (selectCard[0] === selectCard[1] && firstCard !== secondCard){
//         imgs[firstCard].setAttribute("src", "images/img-4.png")
//         imgs[secondCard].setAttribute("src", "images/img-4.png")
//         setTimeout(()=> {
//             return shuffleCard();
//         }, 1200)
//         firstCard.removeEventListener('click', flipCard)
//         secondCard.removeEventListener('click', flipCard)
//         firstCard = secondCard = " ";
//         return selectCard = [];
//     } else {
//         // imgs[firstCard].setAttribute("src", "images/img-4.png")
//         // imgs[secondCard].setAttribute("src", "images/img-4.png")
//         setTimeout(() => { // square shake then flip when 2 cards not matched 
//             firstCard.classList.add('shake')
//             secondCard.classList.add('shake')
//         }, 1000);
//         setTimeout(()=> {
//             firstCard.classList.remove('shake', 'flip');
//             secondCard.classList.remove('shake', 'flip');
//             firstCard = secondCard = '';
//             selectCard = [];
//         }, 1200);
    
// //console.log(cardsId)
//         }  
// //setTimeout();          
// }
// console.log(matchCards)
//matchCards ();
function matchCards (img1, img2) {
    if (img1 === img2){
        cardsMatched++; //increment matching cards value by 1
        if(cardsMatched == 8){ // if 8 images all matched then its flipped n shuffled
            message.innerHTML = "You did it!"
            setTimeout(()=> {
                return shuffleCard();
        }, 1000);
    }
        // when 2 cards are matched
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
        firstCard = secondCard = "";
        return selectCard = false;
    } else {
        setTimeout(() => { // square shake then flip when 2 cards not matched 
            firstCard.classList.add('shake');
            secondCard.classList.add('shake');
        }, 600);
        setTimeout(()=> {
            firstCard.classList.remove('shake', 'flip')
            secondCard.classList.remove('shake', 'flip');
            firstCard = secondCard = "";
            selectCard = false;
        }, 1000);
    }
}
//event listener for each squares turnable when clicks
squares.forEach(square => {
    square.addEventListener('click', flipCard);
})

}
//event listener for button to start the game 
restartBtn.addEventListener('click', playGame);

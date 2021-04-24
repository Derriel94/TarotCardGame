// first we need to create our global variables that we use
// to store our card images
const cardImage1 = document.getElementById('card1');
const cardImage2 = document.getElementById('card2');
const cardImage3 = document.getElementById('card3');
// variable that holds message
const message = document.getElementById('message');
const newMessage = document.createElement('p');
// this will be a reset button to re
//this variable is used to keep track of how many cards have been turned over
let unturnedCards = 3;
// we need these variables so we dont directly change the path of the image
// we want these to act as placeholders for the order of what we want the cards to 
// be.
let unturnedCard1;
let unturnedCard2;
let unturnedCard3;

let currentlyChooseing = true;

//let paths = ['Images/TC1.jpg', 'Images/TC2.jpg', 'Images/TC3.jpg'];

const foolPath ='Images/TC1.jpg';
const sunPath ='Images/TC2.jpg';
const moonPath ='Images/TC3.jpg';
const backPath ='Images/CardBack.jpg';

const randomizeCards = () => {
	let randomNumber = Math.floor(Math.random() * unturnedCards);
	if (randomNumber === 0) {
		unturnedCard1 = sunPath;
		unturnedCard2 = moonPath;
		unturnedCard3 = foolPath;
	} else if (randomNumber === 1) {
		unturnedCard1 = foolPath;
		unturnedCard2 = sunPath;
		unturnedCard3 = moonPath;
	} else if (randomNumber === 2) {
		unturnedCard1 = moonPath;
		unturnedCard2 = foolPath;
		unturnedCard3 = sunPath;
	}
}

const showMessage = (path) => {
		if (path === sunPath) {
			message.innerText = 'You will shine like the Sun!'
		} else if (path === moonPath) {
			message.innerHTML = 'You are brilliant and humble like the moon!';
		} else if (path === foolPath) {
			message.innerHTML = 'You is Boo Boo the Fool!';
		}
}
// this is the click event, what happens the click event happens
cardImage1.onclick = () => {
	cardImage1.src = unturnedCard1;
	cardImage2.src = backPath;
	cardImage3.src = backPath;
	showMessage(unturnedCard1);
	randomizeCards();
}

cardImage2.onclick = () => {
	cardImage1.src = backPath;
	cardImage2.src = unturnedCard2;
	cardImage3.src = backPath;
	showMessage(unturnedCard2);
	randomizeCards();
}

cardImage3.onclick = () => {
	cardImage1.src = backPath;
	cardImage2.src = backPath;
	cardImage3.src = unturnedCard3;
	showMessage(unturnedCard3);
	randomizeCards();
}

randomizeCards();

// App State
let time = 6;
let age = 1;
const pet = [];

// Cached DOM Elements 
const rightside = document.getElementById('rightside');
const hatchButton = document.getElementById('hatch');
const hatchText = document.getElementById('hatchtext');
const foodButton = document.getElementById('feed');
const sleepButton = document.getElementById('sleep');
const playButton = document.getElementById('play');
const submit = document.getElementById('submit');

// -------------- Tamagotchi Class
class Tamagotchi {
	constructor(food, energy, play){
		this.food = food || 10;
		this.energy = energy || 10;
		this.play = play || 10;
	}
}

// -------------- Event Listeners 

// Hatch Button
hatchButton.addEventListener('click', startCountdown);

// Pet Name
submit.addEventListener('click', addName);

// Feed Button
foodButton.addEventListener('click', () => feed(pet[0]));

// Sleep Button
sleepButton.addEventListener('click', () => sleep(pet[0]));

// Play Button 
playButton.addEventListener('click', () => play(pet[0]));



// -------------- Functions Execuded after hatch click

function addName(event){
	let petName = document.querySelector('input').value;
	const namePet = document.getElementById('name');
	namePet.innerText = petName;

	document.querySelector('input').remove();
	document.getElementById('submit').remove();

	hatchPet();	
}


function hatchPet () {
	pet.push(new Tamagotchi());
	const age = document.createElement('h2');
	
	age.innerHTML = `<h2 id="age">Age: 1</h2>`;
	rightside.appendChild(age);

	showIcons();
	ageIncrease();
	levelDecreaseStart(pet[0]);
}

function startCountdown() {
  const timer = setInterval(function () {
    if (time > 1) {
      time--;
      updateCountdown();
    } else {
      clearInterval(timer);
      pageSetup();
      // namePet();
      // hatchPet();
  }
 }, 1000);
} 

function updateCountdown() {
	if (time === 5){
		hatchButton.src = "images/EGG2.png";
	} if (time === 4){
		hatchButton.src = "images/EGG3.png"; 
	} if (time === 3){
		hatchButton.src = "images/EGG4.png";
	} else if (time === 2){
		hatchButton.src = "images/EGG5.png";
	}
}

function pageSetup(){
	hatchButton.remove();
	hatchText.remove();

	document.getElementById('form').style.display = 'flex';
}


// -------------- Create Icons & Buttons

function showIcons(){
	document.getElementById('levels').style.display = 'flex';
	document.getElementById('gameplay').style.display = 'flex';
}


// -------------- Increase Age & Enable Game Ending 
function ageIncrease(){
	const birthday = setInterval(function () {
    if (age < 18) {
      age++;
      updateAge();
    } else {
      clearInterval(birthday);
      gameOverCongrats();
  }
 }, 60000);
} 

function updateAge() {
	document.getElementById('age').innerText = `Age: ${age}`;
}

// Need to update further, revist. 
function gameOverCongrats(){
	window.alert('Your Tamagotchi has been successully raised and graduated! Congratulations!')
}

function gameOver(){
	window.alert('Your Tamagotchi has moved on to another family')
}

// -------------- Pet Levels - Automatic Functions that are called once game starts 

function levelDecreaseStart(pet){
	const level = setInterval(function () {
    if (pet.food > 0 && pet.energy > 0 && pet.play > 0) {
      randomLevel();
    } else {
      clearInterval(level);
      gameOver();
  }
 }, 10000);
} 

const levelsArray = ['h', 'e', 'p']
let randomFunc = '';

function randomLevel(){
	randomFunc = levelsArray[Math.floor(Math.random() * levelsArray.length)];
	if (randomFunc === 'h'){
		hungerLevel(pet[0]);
		console.log('h');
	} else if (randomFunc === 'e'){
		energyLevel(pet[0]);
		console.log('e');
	} else if (randomFunc === 'p'){
		playLevel(pet[0]);
		console.log('p');
	}
}

function hungerLevel(pet){
	const value = (document.getElementById('progress1').value = (pet.food - (Math.floor(Math.random() * 2) + 1)));
	pet.food = value;
}

function energyLevel(pet){
	const value = document.getElementById('progress2').value = (pet.energy - (Math.floor(Math.random() * 2) + 1));
	pet.energy = value;
}

function playLevel(pet){
	const value = document.getElementById('progress3').value = (pet.play - (Math.floor(Math.random() * 2) + 1));
	pet.play = value;
}


// -------------- Game Play - User controlled


function feed(pet){
	if (pet.food < 10){
		const value = (document.getElementById('progress1').value = (pet.food + (Math.floor(Math.random() * 2) + 1)));
		pet.food = value;
	} else {
		window.alert(`Your pet is full!`)
	}
}


function sleep(pet){
	if (pet.energy < 10){
		const value = (document.getElementById('progress2').value = (pet.energy + (Math.floor(Math.random() * 2) + 1)));
		pet.energy = value;
	} else {
		window.alert(`Your pet isn't tired!`)
	}
}

function play(pet){
	if (pet.play < 10){
		const value = (document.getElementById('progress3').value = (pet.play + (Math.floor(Math.random() * 2) + 1)));
		pet.play = value;
	} else {
		window.alert(`Your pet doesn't want to play`)
	}
}
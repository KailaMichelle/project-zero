// App State
let time = 2;
let age = 1;
const pet = [];

// Cached DOM Elements 
const rightside = document.getElementById('rightside');
const hatchButton = document.getElementById('hatch');
const foodButton = document.getElementById('feed');
const sleepButton = document.getElementById('sleep');
const playButton = document.getElementById('play');

// -------------- Tamagotchi Class
class Tamagotchi {
	constructor(id, food, energy, play){
		this.id = id;
		this.food = food || 10;
		this.energy = energy || 10;
		this.play = play || 10;
	}
}

// -------------- Event Listeners 

// Hatch Button
hatchButton.addEventListener('click', startCountdown);

// Feed Button
foodButton.addEventListener('click', () => feed(pet[0]));

// Sleep Button
sleepButton.addEventListener('click', () => sleep(pet[0]));

// Play Button 
playButton.addEventListener('click', () => play(pet[0]));



// -------------- Functions Execuded after hatch click
function hatchPet () {
	pet.push(new Tamagotchi('Cat'));
	pageSetup();
	// createButtons();
}

function startCountdown() {
  const timer = setInterval(function () {
    if (time > 0) {
      time--;
      updateCountdown();
    } else {
      clearInterval(timer);
      hatchPet();
  }
 }, 1000);
} 

function updateCountdown() {
  document.getElementById('countdown').innerText = `${time}s`;
}

function pageSetup(){
	hatchButton.remove(hatchButton);

	document.getElementById('countdown').remove();

	const age = document.createElement('p');
	age.innerHTML = `<p id="age">1</p>`;
	rightside.appendChild(age);

	createIcons();
	ageIncrease();
	levelDecreaseStart(pet[0]);

}


// -------------- Create Icons & Buttons

function createIcons(){
	const icon1 = document.createElement('icon');
	const icon2 = document.createElement('icon');
	const icon3 = document.createElement('icon');

	const iconSection = document.querySelector('section');

  	icon1.innerHTML = `<i id="foodlevel" class="fas fa-utensils">
		<progress id='progress1' value='10' max='10'></progress></i>`;
	icon2.innerHTML = `<i id="energylevel" class="fas fa-sun"><progress id='progress2' value='10' max='10'></progress></i>`;
	icon3.innerHTML = `<i id="playlevel" class="far fa-laugh-beam"><progress id='progress3' value='10' max='10'></progress></i>`;
  	
  	iconSection.appendChild(icon1);
  	iconSection.appendChild(icon2);
  	iconSection.appendChild(icon3);
}

// function createButtons(){
// 	const b1 = document.createElement('button');
// 	const b2 = document.createElement('button');
// 	const b3 = document.createElement('button');

// 	b1.innerHTML = `<button id="feed">FEED</button>`;
// 	b2.innerHTML = `<button id="sleep">SLEEP</button>`;
// 	b3.innerHTML = `<button id="play">PLAY</button>`;

// 	const buttonSection = document.getElementById('gameplay');

// 	buttonSection.appendChild(b1);
// 	buttonSection.appendChild(b2);
// 	buttonSection.appendChild(b3);
// }

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
 }, 10000);
} 

function updateAge() {
	document.getElementById('age').innerText = `${age}`;
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
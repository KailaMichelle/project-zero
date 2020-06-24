// ----------------- Code Organization -----------------

// 1) 3rd Party Libraries (tools we are installing)(like jQuery)
// 2) Constants (source of arguments)
// 3) App State (Global scoped Variables - everything application need to know)
// 4) Cached DOM Elements 
// 5 or 6) Event Listeners 
// 5 or 6) Functions 
	// (functions will have to come first if it's an expression)


// ----- FIRST STEPS ------
// START GAME ACTION
// Select Element (button)
// Save Button in variable
// Add click event listener to button


// App State
let time = 10;
// let age = 1;
let foodMeter = 10;
// let sleepMeter = 10;
// let playMeter = 10;

const pet = [];
const rightside = document.getElementById('rightside');

// Cached DOM Elements 
const button = document.getElementById('hatch');

// -------------- Tamagotchi Class
class Tamagotchi {
	constructor(id, food, energy, play, age){
		this.id = id;
		this.food = food || 10;
		this.energy = energy || 10;
		this.play = play || 10;
		this.age = age || 1;
	}
}


// -------------- Feed Class
// class Feed {
// 	constructor(level){
// 		this.level = level;
// 	}
// 	function changeLevel(){

// 	}
// }

// -------------- Sleep Class
// class Sleep extends Feed {
// 	constructor(level){
// 		super(level)
// 	}
// 	function turnOffLight(){

// 	}
// }

// -------------- Play Class
// class Play extends Feed {
// 	constructor(level){
// 		super(level)
// 	}
// }


button.addEventListener('click', startCountdown);


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
	button.remove(button);

	document.getElementById('countdown').remove('countdown');

	const age = document.createElement('p');
	age.innerHTML = `<p id="age">1</p>`;
	rightside.appendChild(age);

	createIcons();
	ageIncrease();
	// hungerLevel(pet[0]);
	// energyLevel(pet[0]);
	// playLevel(pet[0]);
	// levelDecreaseStart();

}


// -------------- Create Icons & Buttons

function createIcons(){
	const icon1 = document.createElement('icon');
	const icon2 = document.createElement('icon');
	const icon3 = document.createElement('icon');

	const iconSection = document.querySelector('section');

  	icon1.innerHTML = `<i id="foodlevel" class="fas fa-utensils">
		<meter id='meter1' value='10'></meter></i>`;
	icon2.innerHTML = `<i id="energylevel" class="fas fa-sun"><meter id='meter2' value='10'></meter></i>`;
	icon3.innerHTML = `<i id="playlevel" class="far fa-laugh-beam"><meter id='meter3' value='10'></meter></i>`;
  	
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
    if (pet.age < 18) {
      pet.age++;
      updateAge();
    } else {
      clearInterval(birthday);
      gameOverCongrats();
  }
 }, 60000);
} 

function updateAge() {
  document.getElementById('age').innerText = `${age}`;
}

// Need to update further, revist. 
// function gameOverCongrats(){
// 	window.alert('Your Tamagotchi has been successully raised and graduated! Congratulations!')
// }

// function gameOver(){
// 	window.alert('Your Tamagotchi has moved on to another family')
// }

// -------------- Pet Levels - Automatic Functions that are called once game starts 
// function levelDecreaseStart(){
//     if (foodlevel > 0 && hungerLevel > 0 && energylevel > 0) {
//       hungerLevel();
//       energyLevel();
//       playLevel();
//     } else {
//       gameOver();
//   }
// }

const levelsArray = [
	function hungerLevel(pet){
		const value = (document.getElementById('meter1').value = (pet.food - (Math.floor(Math.random() * 3) + 1)));
		pet.food = value;
	}

	function energyLevel(pet){
		const value = document.getElementById('meter2').value = (pet.energy - (Math.floor(Math.random() * 3) + 1));
		pet.energy = value;
	}

	function playLevel(pet){
		const value = document.getElementById('meter3').value = (pet.play - (Math.floor(Math.random() * 3) + 1));
		pet.play = value;
	}
]




// -------------- Game Play - User controlled

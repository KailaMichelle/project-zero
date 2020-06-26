// App State
let time = 6;
let age = 1;
const pet = [];

// Cached DOM Elements 
const body = document.querySelector('body');

// Leftside Elements
const levels = document.getElementById('levels');
const awake = document.getElementById('awake');

// Middle elements 
const device =	document.getElementById('device');
const petImage = document.getElementById('pet');
const submit = document.getElementById('submit');
const input = document.querySelector('input');
const gameplay = document.getElementById('gameplay');
const foodButton = document.getElementById('feed');
const sleepButton = document.getElementById('sleep');
const playButton = document.getElementById('play');

// Right Side Elements 
const rightside = document.getElementById('rightside');
const name = document.getElementById('name');
const hatchButton = document.getElementById('hatch');
const hatchText = document.getElementById('hatchtext');
const grow = document.getElementById('grow');


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
sleepButton.addEventListener('click', () => sleepMode(pet[0]));

// Play Button 
playButton.addEventListener('click', () => play(pet[0]));

// Wake Up Button 
awake.addEventListener('click', wakeUp);

// -------------- Functions Execuded after hatch click
function startCountdown() {
  const timer = setInterval(function () {
    if (time > 1) {
      time--;
      updateCountdown();
    } else {
      clearInterval(timer);
      pageSetup();
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

function addName(event){
	let petName = document.querySelector('input').value;
	let petnamed = document.createElement('p');

	petnamed.innerHTML = `<p id="pet-name">${petName}</p>`;
	rightside.appendChild(petnamed);

	name.remove();
	input.remove();
	submit.remove();

	hatchPet();	
}

function hatchPet () {
	pet.push(new Tamagotchi());
	const age = document.createElement('p');
	
	age.innerHTML = `<p id="age">Age: 1</p>`;
	rightside.appendChild(age);

	showIcons();
	ageIncrease();
	levelDecreaseStart(pet[0]);
}

// -------------- Show Icons & Buttons

function showIcons(){
	levels.style.display = 'flex';
	gameplay.style.display = 'flex';
	petImage.style.display = 'flex';
}


// -------------- Increase Age & Enable Game Ending 
function ageIncrease(){
	const birthday = setInterval(function () {
    if (age < 18) {
      age++;
      updateAge();
      updatePet();
    } else {
      clearInterval(birthday);
      gameOverCongrats(pet[0]);
  }
 }, 3000); //Actual Game: Age would increase one year per minute.
} 

function updateAge() {
	document.getElementById('age').innerText = `Age: ${age}`;
}

function updatePet() {
	if (age === 4){
		petImage.src = "images/PET2.png";
		foodButton.style.bottom = '340px'
		playButton.style.bottom = '340px'
		sleepButton.style.bottom = '320px'
		grow.style.display = 'flex';
	}if (age === 5){
		grow.style.display = 'none';
	} if (age === 8){
		petImage.src = "images/PET3.png"; 
		foodButton.style.bottom = '320px'
		playButton.style.bottom = '320px'
		sleepButton.style.bottom = '300px'
		grow.style.display = 'flex';
		grow.innerText = 'Your pet is growing up so fast!';
	}if (age === 9){
		grow.style.display = 'none';
	} if (age === 12){
		petImage.src = "images/PET4.png";
		foodButton.style.bottom = '370px'
		playButton.style.bottom = '370px'
		sleepButton.style.bottom = '350px'
		grow.style.display = 'flex';
		grow.innerText = ('Your pet is fully grown!');
	} else if (age === 13){
		grow.style.display = 'none';
	}
}

// -------------- Pet Levels 
// Automatic Functions that are called once game starts 

function levelDecreaseStart(pet){
	const level = setInterval(function () {
    if (pet.food > 0 && pet.energy > 0 && pet.play > 0 && age < 18) {
      randomLevel();
    } else if (pet.food <= 0 || pet.energy <= 0 || pet.play <= 0) {
      clearInterval(level);
      gameOver();
  }
 }, 3000); 
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
	const value = (document.getElementById('progress1').value = (pet.food - (Math.floor(Math.random() * 3) + 1)));
	pet.food = value;
}

function energyLevel(pet){
	const value = document.getElementById('progress2').value = (pet.energy - (Math.floor(Math.random() * 3) + 1));
	pet.energy = value;
}

function playLevel(pet){
	const value = document.getElementById('progress3').value = (pet.play - (Math.floor(Math.random() * 3) + 1));
	pet.play = value;
}


// -------------- Game Play - User controlled


function feed(pet){
	if (pet.food < 10){
		const value = (document.getElementById('progress1').value = (pet.food + (Math.floor(Math.random() * 3) + 1)));
		pet.food = value;
	} else {
		window.alert(`Your pet is full!`)
	}
}

function sleepMode(pet){
	if (pet.energy < 10){
		const value = (document.getElementById('progress2').value = (pet.energy + (Math.floor(Math.random() * 3) + 1)));
		pet.energy = value;
		body.style.backgroundColor = '#687271';
		levels.style.display = 'none';
		gameplay.style.display = 'none';
		device.src = "images/tamagotchiNight.png"
		awake.style.display = 'flex';
	} else {
		window.alert(`Your pet isn't tired!`)
	}  
}

function wakeUp(){
	body.style.backgroundColor = '#DEF2F1';
	levels.style.display = 'flex';
	gameplay.style.display = 'flex';
	device.src = "images/tamagotchi.png"
	awake.style.display = 'none';
}

function play(pet){
	if (pet.play < 10){
		const value = (document.getElementById('progress3').value = (pet.play + (Math.floor(Math.random() * 3) + 1)));
		pet.play = value;
	} else {
		window.alert(`Your pet doesn't want to play`)
	}
}

// -------------- Game Over

function gameOver(){
	age = 20; 
	petImage.remove();
	levels.remove();
	gameplay.remove();
	document.getElementById('pet-name').remove();
	document.getElementById('age').remove();
	document.getElementById('sorry').style.display = 'flex';
}

function gameOverCongrats(pet){
	if(pet.food > 0 && pet.energy > 0 && pet.play > 0){
		levels.remove();
		gameplay.remove();
		document.getElementById('congrats').style.display = 'flex';
	} else {
		gameOver();
	}
}




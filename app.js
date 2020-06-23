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
const hatchPet = [];

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

function startCountdown() {
  const timer = setInterval(function () {
    if (time > 0) {
      time--;
      updateCountdown();
    } else {
      clearInterval(timer);
      newPet();
  }
 }, 1000);
} 

function updateCountdown() {
  document.getElementById('countdown').innerText = `${time}s`;
}

function newPet () {
	hatchPet.push(new Tamagotchi('Cat'));

	button.remove(button);
	document.getElementById('countdown').remove('countdown');
	createIcons();
	// createButtons();
	
	console.log(hatchPet);
}

// -------------- Create Icons & Buttons

function createIcons(){
	const icon1 = document.createElement('icon');
	const icon2 = document.createElement('icon');
	const icon3 = document.createElement('icon');

	const iconSection = document.querySelector('section');

  	icon1.innerHTML = `<i id="foodlevel" class="fas fa-utensils">
		<meter id='m1' value='10'></meter></i>`;
	icon2.innerHTML = `<i id="energylevel" class="fas fa-sun"><meter id='m2' value='10'></meter></i>`;
	icon3.innerHTML = `<i id="playlevel" class="far fa-laugh-beam"><meter id='m3' value='10'></meter></i>`;
  	
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
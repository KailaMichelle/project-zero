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

// const pet = new Tamagotchi('cat');
// console.log(pet);

const hatchPet = [];
const button = document.getElementById('hatch');


button.addEventListener('click', newPet);

function newPet () {
	hatchPet.push(new Tamagotchi('Cat'));

	document.getElementById('hatch').remove('hatch');
	createIcons();
	
	console.log(hatchPet);
}

// -------------- Create Icons

function createIcons(){
	const i1 = document.createElement('icon');
	const i2 = document.createElement('icon');
	const i3 = document.createElement('icon');

	const ls = document.querySelector('section');

  	i1.innerHTML = `<i id="foodlevel" class="fas fa-utensils">
		<meter></meter></i>`;
	i2.innerHTML = `<i id="energylevel" class="fas fa-sun"><meter></meter></i>`;
	i3.innerHTML = `<i id="playlevel" class="far fa-laugh-beam"><meter></meter></i>`;
  	
  	ls.appendChild(i1);
  	ls.appendChild(i2);
  	ls.appendChild(i3);
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
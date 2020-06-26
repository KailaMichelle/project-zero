# Project-Zero

## This is an interactice tamagotchi game that I built for my first project in SEI-12. The game gives the user the ability to raise a pet. Through raising, the pet will morph into different stages. The user should be careful not to neglet the pet.

---
## User Story

1. The user presses start and their tamagatchi will hatch after 5 seconds.

2. The tamagatchi will have their age, hunger, sleepiness, and boredom levels displayed. All start at 10. 

3. The user will be able to feed the pet, turn off the lights, and play with the pet. 
	* Every minute the pets levels will drop by random increments.
	* There will be buttons that will help the user complete the actions to keep their pet alive. 
	* If any of the pet's levels drop below 1 they will get move on to another family. 
	* One click will move the levels up a random increment but not above 10
	* If the pets levels are at 10 a warning will appear. You will not be able to continue clicking the buttons. 

4. Every minute the tomagatchi will age by 1 year. 

5. If the tomagatchi reaches the age of 18 and has all levels above 1 the game is concluded and the user has successfully raised a tamagotchi.

6. User can hatch a new tomagatchi or end game play. 

---
## Wireframe

https://xd.adobe.com/view/8894d8ec-723f-44e8-80b9-347b276210be-ddc7/

---
## Technology and Approach

<p>In order to build this game I used a combination of CSS, HTML, and JS. I wanted the game to feel authenic to the original tamagotchi so I used Illustrator to create some of the graphics.</p>

<br>

<p>To start this game I first worked on the user story and the wireframe to get a layout and a plan for how to proceed. I then did the basic layout of the HTML and CSS in order to be able to see the JS functionality. I then started on the JS and wrote out all the App States and Cached DOM elemets as well as built the class for my tamagotchi. After that I built all the base functions I would need by going through the game step by step. Once I got the basic functionality down I revisted the CSS & HTML in order to get the layout to look how I wanted. Lastly I added in more DOM manipulation to communicate with the user.

<br>

<p>As far as issues go: I ran into problems when working with event listeners with functions that need parameters but I was able to get help in the DOM manipulation review! I have one but at the very end of the game if you don't win that I was unable to figure out. It has to do with a timer and getting it to stop when another function is called. I also was unable to get to include a new game button due to time restrictions. 

<br>
<p>The version I will be showing as a demo is a sped up version of the game. The actual game would last a total of 18 minutes max.</p>
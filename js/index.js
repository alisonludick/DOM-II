// Example of how to add an EventListener:
// element.addEventListener('click', (event) => { event.target.style.backgroundColor = 'blue'; });

// 1. click event listener to change header background color to red
let redHeader = document.querySelector('.nav-container');
redHeader.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
})

// 2. resize window to change background color of Intro
let changeIntro = document.querySelector('.intro');
window.addEventListener('resize', (event) => {
    changeIntro.style.backgroundColor = 'orange';
})

// 3. dblclick event to change background color of text
let contentText = document.querySelector('.text-content');
contentText.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'silver';
})

// 4. and 5. mouseover and mouseout to change image
let imgDestination = document.querySelector('.dest-place');
imgDestination.addEventListener('mouseover', () => {
    imgDestination.src = 'img/destination2.jpg';
})

imgDestination.addEventListener('mouseout', () => {
    imgDestination.src = 'img/destination1.jpg';
})

// 6. give image green dotted outline when dragged 
let imgAdventure = document.querySelector('.img-fluid');
imgAdventure.addEventListener('drag', event => {
    event.target.style.outline = '5px dotted green';
})

// 7. alert message when button is right-clicked , using contextmenu
let funSunButton = document.getElementById('fun-sun');
funSunButton.addEventListener('contextmenu', (event) => {
    alert('Not Available In The Rainy Season!')
})

// 8. mousedown event changes button text, and button text color (works similarly to click)
let mtnExcButton = document.getElementById('mtn-exc');
mtnExcButton.addEventListener('mousedown', (event) => {
    event.target.innerText = "Make Sure You Are Fit!";
    event.target.style.color = 'red';
})

// 9. add extra text to heading when the mouse enters over the text
let gettawayHeading = document.getElementById('honeymoon');
gettawayHeading.addEventListener('mouseenter', event => {
    event.target.innerText += " ~ For NewlyWeds!";
})

// 10. translate heading to Afrikaans when the mouse leaves the heading text
let welcomeHeading = document.getElementById('welcome');
welcomeHeading.addEventListener('mouseleave', event => {
    event.target.textContent = 'Welkom By Die Pret Bus!';
})

// prevent normal button function with stopPropagation 

let contentPick = document.querySelector(".content-pick");
contentPick.addEventListener("click", (event) => {
  event.target.style.backgroundColor="papayawhip";
  console.log("end")
})

let textDestination = document.querySelector(".destination");
textDestination.addEventListener('click', (event) => {
  textDestination.style.backgroundColor="rebeccapurple";
  event.stopPropagation(); // adding this will prevent the first div heading changing to papayawhip
  console.log("beginning")
});

// prevent normal button function with preventDefault

let stopLinks = document.querySelectorAll('.nav-link')
stopLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault() // prevents default action from being navigated away from the website 
    event.stopPropagation()
    event.target.style.color = 'blue'
  })
})

// add button in footer to reveal all the easter eggs
// first declare parent
const parentFooter = document.querySelector('.footer');
console.log('footer for button', parentFooter); 

// then declare child button and appendChild to add it
const eggButton = document.createElement('button'); 
parentFooter.appendChild(eggButton); 
eggButton.textContent = "Reveal The Easter Eggs"; 

// when button is clicked, reveal the eggs
eggButton.addEventListener('click', (event) => {
    alert('The Hidden Gems Are: \n - click the header to change the background colour \n - resize the window to change the background colour of the intro \n - double click the 2nd paragraph to change its background colour \n - mouse over the last image for a cool effect \n - drag 2nd last image and see what happens \n - right click the 1st button \n - hold the mouse down on the 2nd button \n - move mouse over the final paragraph heading \n - move mouse back and forth over the Welcome heading \n - click on the last 3 paragraphs')
})
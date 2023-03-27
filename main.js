/* image slider project*/

// Variables
const images = document.querySelectorAll("img"); // This is an array of the images
let index = 0; // This is the index of the image array that I want to show
const prev = document.querySelector("#prev"); // This is a reference to the [<] button
const next = document.querySelector("#next"); // This is a reference to the [>] button
const active = "active" // 

// Functions
function showImg(i){
  // Function to show images
  
  images.forEach(image => image.classList.remove(active))

  images[i].classList.add(active)
}

// Event handlers
next.addEventListener("click", function(){
  // When the user clicks next I want to add 1 to the index 
  index = (index + 1) % images.length
  // and then call my function to update the active image
  showImg(index);
  pause(); 
})

prev.addEventListener("click", function(){

  index = (index + images.length - 1) % images.length
 
  showImg(index);
 
  pause(); 
})


showImg(index);


// Auto-slideshow //

// Variables
const buffer = 6000; // 
let current = Date.now();

let target = current + buffer;

// Functions
function timeLoop(){

  current = Date.now();
  if(current > target){
    index = (index + 1) % images.length
    showImg(index);
    target = current + buffer;
    
  }
}

function auto(){
  current = Date.now();
  target = current + buffer;
}


// setInterval is a function that is called constantly with a delay
setInterval(timeLoop, 100);

//light/dark//


const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');
function toggleMode() {
body.classList.toggle('dark-mode');

const modeMessage = body.classList.contains('dark-mode') ?
    'Dark Mode'
    : "Light Mode"

modeStatus.innerText = "Currently in " + modeMessage;
  }

modeToggle.addEventListener('click', toggleMode);

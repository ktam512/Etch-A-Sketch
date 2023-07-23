//This line selects the element with the ID "container" and assigns it to the variable container
const container = document.querySelector("#container");

// This function createGrid takes a parameter called size. It's responsible for creating a grid of squares within the container element and adding event listeners to each square.

function createGrid(size){
    // Calculate the total number of squares needed in the grid (total count = pixelSize * pixelSize)
  const gridSize = size * size;
  
  // Loop to create each square and add event listeners to them
  for (let i = 0; i < gridSize; i++) {
    // Create a new div element to represent a square
    const divElement = document.createElement("div");
    
    // Append the divElement to the squareContainer element, adding it to the grid
    container.appendChild(divElement);
    
    // Add a CSS class "square" to the divElement, which may style the square later
    divElement.classList.add("square");
    
    // Add an event listener to the divElement, which listens for "mouseenter" events (when the mouse cursor enters the square)
    // When the mouse enters a square, the function inside the event listener will be executed, which changes the background color of the square to black
    divElement.addEventListener("mouseenter", function () {
      divElement.style.backgroundColor = "black";
    });
    }

    // After creating all the squares, set the CSS grid template columns and rows to create a square grid based on the size value.
   container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
   container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function promptUser() {
    let number = prompt("Choose grid size between 5-64!", 10); 
     if (number >= 5 && number <= 64) {
         createGrid(number);
     }else {
         do {
             number = prompt("Invalid size! Try Again! Make sure your value is between 5-64!");
         }
         while(number < 5 || number > 64);
         createGrid(number);
     }
 }

// This line selects the button with the ID "clear-grid-button" and assigns it to the variable resetButton
const resetButton = document.querySelector("#clear-grid-button");
resetButton.addEventListener('click', function(){
     window.location.reload();
});



 promptUser();


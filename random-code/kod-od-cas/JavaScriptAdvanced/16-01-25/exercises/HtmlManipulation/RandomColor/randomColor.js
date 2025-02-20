// ## Random color page
// Function to generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  // Set random background color and display RGB values
  function setRandomBackground() {
    const randomColor = getRandomColor(); 
    document.body.style.backgroundColor = randomColor; 
    document.getElementById("color-code").textContent = randomColor; 
  }
  

//   window.onload = setRandomBackground;

setRandomBackground(); // works either way, coz the code is executed on start-refresh
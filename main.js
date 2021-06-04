


//  Color generator 

let square = document.getElementsByClassName("square")[0];
console.log(square);
function myColor() {
  
     // Get the value return by color picker
     let color = document.getElementById('colorPicker').value;

     // Set the color as background
     square.style.backgroundColor = color;

     // Take the hex code
     document.getElementById('box').value = color;
 }

 // When user clicks over color picker,
 // myColor() function is called
 document.getElementById('colorPicker')
     .addEventListener('input', myColor);
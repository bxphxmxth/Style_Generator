//BOUTON GRIS
let btnGrey = document.getElementsByClassName("btn-grey")[0];



let changeToGrey = () =>{
     square.style.backgroundColor = "grey";
}

btnGrey.addEventListener("click", changeToGrey);

//BOUTON ROUGE

let btnRed = document.getElementsByClassName("btn-red")[0];


let changeToRed = () =>{
     square.style.backgroundColor = "red";
}

btnRed.addEventListener("click", changeToRed);

//BOUTON VERT

let btnGreen = document.getElementsByClassName("btn-green")[0];


let changeToGreen = () =>{
     square.style.backgroundColor = "green";
}

btnGreen.addEventListener("click", changeToGreen);

//BOUTON BLEU


let btnBlue = document.getElementsByClassName("btn-blue")[0];


let changeToBlue = () =>{
     square.style.backgroundColor = "blue";
}

btnBlue.addEventListener("click", changeToBlue);



// BORDER SOLID

let btnBorderSolid = document.getElementsByClassName("border-solid")[0];

let addBorderSolid = () =>{

     square.style.border = "solid"
}

btnBorderSolid.addEventListener("click", addBorderSolid)

// BORDER DOTTED

let btnBorderDotted= document.getElementsByClassName("border-dotted")[0];

let addBorderDotted = () =>{

     square.style.border = "dotted"
}

btnBorderDotted.addEventListener("click", addBorderDotted)

// BORDER LIGHT

let btnBorderLight= document.getElementsByClassName("border-light")[0];

let addBorderLight = () =>{

     square.style.border = "solid 1px"
}

btnBorderLight.addEventListener("click", addBorderLight)


// BORDER TOPS :

//BORDER TOP LIGHT

let btnTopLight = document.getElementsByClassName("top-light")[0];

let addLightTop = () =>{
     square.style.borderTop = "solid 5px purple"
}

btnTopLight.addEventListener("click",addLightTop)

// BORDER TOP MEDIUM

let btnTopMedium = document.getElementsByClassName("top-medium")[0];

let addMediumTop = () =>{
     square.style.borderTop = "solid 15px purple"
}

btnTopMedium.addEventListener("click",addMediumTop)

// BORDER TOP BOLD

let btnTopBold = document.getElementsByClassName("top-bold")[0];

let addBoldTop = () =>{
     square.style.borderTop = "solid 30px purple"
}

btnTopBold.addEventListener("click",addBoldTop)


// INPUTS:

//ALL BORDERS

let allBorders = document.getElementsByTagName("input")[2];
console.log(allBorders);



let customAllBorders = () =>{

     square.style.border = `solid black ${allBorders.value}px`

}



allBorders.addEventListener("click",customAllBorders)

//BORDER TOP CUSTOM

let borderTopCustom = document.getElementsByTagName("input")[3];

let customTopBorder = () =>{

     square.style.borderTop = `solid black ${borderTopCustom.value}px`

}


borderTopCustom.addEventListener("click",customTopBorder);

// BORDER BOTTOM CUSTOM

let borderBottomCustom = document.getElementsByTagName("input")[4];

let customBottomBorder = () =>{

     square.style.borderBottom = `solid black ${borderBottomCustom.value}px`

}

borderBottomCustom.addEventListener("click",customBottomBorder)



//BORDER RIGHT CUSTOM

let borderRightCustom = document.getElementsByTagName("input")[5];

let customRightBorder = () =>{

     square.style.borderRight = `solid black ${borderRightCustom.value}px`

}


borderRightCustom.addEventListener("click",customRightBorder)

//BORDER LEFT CUSTOM


let borderLeftCustom = document.getElementsByTagName("input")[6];

let customLeftBorder = () =>{

     square.style.borderLeft = `solid black ${borderLeftCustom.value}px`

}


borderLeftCustom.addEventListener("click",customLeftBorder)


// ALL RADIUS

let allRadius = document.getElementsByTagName("input")[7];

let customAllRadius = () =>{

     square.style.borderRadius = ` ${allRadius.value}px`
}

allRadius.addEventListener("click",customAllRadius)


// RADIUS TOP

let topRadius = document.getElementsByTagName("input")[8];

let customTopRadius = () =>{

     square.style.borderRadius = ` ${topRadius.value}px`
}

topRadius.addEventListener("click",customTopRadius)


// RADIUS BOTTOM

let bottomRadius = document.getElementsByTagName("input")[9];

let customBottomRadius = () =>{

     square.style.borderRadius = ` ${bottomRadius.value}px`
}

bottomRadius.addEventListener("click",customBottomRadius);

// RADIUS RIGHT

let rightRadius = document.getElementsByTagName("input")[10];

let customRightRadius = () =>{

     square.style.borderRadius = ` ${rightRadius.value}px`
}

rightRadius.addEventListener("click",customRightRadius);


// RADIUS LEFT

let leftRadius = document.getElementsByTagName("input")[11];

let customLeftRadius = () =>{

     square.style.borderRadius = ` ${leftRadius.value}px`
}

leftRadius.addEventListener("click",customLeftRadius);







//  Color generator 

let square = document.getElementsByClassName("square")[0];
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
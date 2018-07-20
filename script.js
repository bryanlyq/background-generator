var css = document.querySelector("h3#new");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button#generate");
console.log (css);
console.log (css);


// click, mouseenter, keypress

color1.addEventListener("input" , setGradient);
color2.addEventListener("input" , setGradient);
body.onload = setGradient;


function setGradient(){
body.style.background = "linear-gradient(to right,"+ color1.value
 + ","
 + color2.value 
 +")";

css.textContent = body.style.background + ";";
}

button.addEventListener("click" , randomColorGenerator);


function randomColorGenerator(){


console.log("Button Clicked");

var letters = '0123456789ABCDEF';
var color = '#';
var color2 ='#';

for (var i = 0; i<6 ; i++){
color += letters[Math.floor(Math.random()*16)];
// will generate six different letter key to form color based on the 16 possibilities once
// }
}

for (var p = 0; p<6 ; p++){
color2 += letters[Math.floor(Math.random()*16)];
// will generate six different letter key to form color based on the 16 possibilities once
// }
}
console.log(color);
console.log(color2);



// return color;
body.style.background = "linear-gradient(to right,"+ color
 + ","
 + color2
 +")";

css.textContent = body.style.background + ";";





}




// Below you will find the 3 files for the Background Generator. A few things you can try: 

// 1. Write code so that the colour inputs match the background generated on the first page load. 

// 2. Display the initial CSS linear gradient property on page load. (DONE) 

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs. (DONE)

// Good luck!

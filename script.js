var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body =document.getElementById("gradient");
var btn= document.getElementById("btn1");
//displays the gradient on load page
window.onload = setGradient();

function setGradient(){
	body.style.background="linear-gradient(to right,"
	+color1.value
	+","
	+color2.value
	+")";
	css.textContent=body.style.background+";";
}
//code for random color generator
var random = function(){
return "#" + Math.floor(Math.random()*16777215).toString(16); 
};

function randomize() {
body.style.background =
"linear-gradient(to right,"
+ (color1.value = random())
+ ", "
+ (color2.value = random())
+ ")";css.textContent = body.style.background + ";";
}

btn1.addEventListener("click", randomize);
color1.addEventListener("input",setGradient); 
color2.addEventListener("input",setGradient);
/*color1.addEventListener("change",setGradient);does not work on windows!
color2.addEventListener("change",setGradient);*/



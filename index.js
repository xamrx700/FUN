var randomNumber1 = Math.floor(Math.random() * 6)+1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6)+1; //1-6

var randomDiceImage1 = "images/dice" + randomNumber1 +".png";
var randomDiceImage2 = "images/dice" + randomNumber2 +".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML = " 🤸‍♂️ Amr is The WINNER!"
}
else if(randomNumber1 < randomNumber2){
document.querySelector("h1").innerHTML = "Poki is The WINNER!💃"
}
else{
document.querySelector("h1").innerHTML = "DRAW!"
}

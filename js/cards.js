//Cards
const card = document.querySelector(".cardInner");
const button = document.querySelector(".flip");
const buttonBack = document.querySelector(".flipBack");

button.addEventListener("click", function () {
    card.classList.toggle("isFlipped")
});

buttonBack.addEventListener("click", function () {
    card.classList.toggle("isFlipped")
});

//

const card2= document.querySelector(".cardInner2");
const button2 = document.querySelector(".flip2");
const buttonBack2 = document.querySelector(".flipBack2");

button2.addEventListener("click", function () {
    card2.classList.toggle("isFlipped")
});

buttonBack2.addEventListener("click", function () {
    card2.classList.toggle("isFlipped")
});

//
const card3= document.querySelector(".cardInner3");
const button3 = document.querySelector(".flip3");
const buttonBack3 = document.querySelector(".flipBack3");

button3.addEventListener("click", function () {
    card3.classList.toggle("isFlipped")
});
buttonBack3.addEventListener("click", function () {
    card3.classList.toggle("isFlipped")
});

//Select Function

function select(){
    var service = document.getElementById("service");

    service.val("A").trigger("change");
}

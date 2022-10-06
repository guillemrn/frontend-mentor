const ratingCard = document.getElementById("rating")
const thanksCard = document.getElementById("thank-you")

const btn1 = document.getElementById("btn-1")
const btn2 = document.getElementById("btn-2")
const btn3 = document.getElementById("btn-3")
const btn4 = document.getElementById("btn-4")
const btn5 = document.getElementById("btn-5")
const optionSelected = document.getElementById("option-selected")
const label1 = document.getElementById("label1")
const label2 = document.getElementById("label2")
const label3 = document.getElementById("label3")
const label4 = document.getElementById("label4")
const label5 = document.getElementById("label5")



function submitRating() {
  if (btn1.checked === true) {
    optionSelected.innerHTML = "1"
    ratingCard.style.display = "none";
    thanksCard.style.display = "block";
  } else if (btn2.checked === true) {
    optionSelected.innerHTML = "2"
    thanksCard.style.display = "block";
    ratingCard.style.display = "none";
  } else if (btn3.checked === true) {
    optionSelected.innerHTML = "3"
    thanksCard.style.display = "block";
    ratingCard.style.display = "none";
  } else if (btn4.checked === true) {
    optionSelected.innerHTML = "4"
    thanksCard.style.display = "block";
    ratingCard.style.display = "none";
  } else if (btn5.checked === true) {
    optionSelected.innerHTML = "5"
    thanksCard.style.display = "block";
    ratingCard.style.display = "none";
  } else {
    alert("Select an option")
  }
}

function changeColor() {
  if (btn1.checked === true) {
    label1.classList.toggle("card__btn-rating--active")
  } else if (btn2.checked === true) {
    label2.classList.toggle("card__btn-rating--active")
  } else if (btn3.checked === true) {
    label3.classList.toggle("card__btn-rating--active")
  } else if (btn4.checked === true) {
    label4.classList.toggle("card__btn-rating--active")
  } else if (btn5.checked === true) {
    label5.classList.toggle("card__btn-rating--active")
  }
}
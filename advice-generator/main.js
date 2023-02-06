const advice_id = document.getElementById("advice-id")
const advice_text = document.getElementById("advice-text")
const generate_advice = document.getElementById("generate-advice")
const xhr = new XMLHttpRequest();


xhr.open("GET", "https://api.adviceslip.com/advice", true);
xhr.onload = function () {
  let advice = JSON.parse(xhr.responseText);
  let adviceId = advice.slip.id
  let adviceText = advice.slip.advice

  advice_id.append(adviceId.toString())
  advice_text.append(adviceText)

};

function reloadPage() {
  window.location.reload();
}

xhr.send();

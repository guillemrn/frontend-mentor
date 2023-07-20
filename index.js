const cardsContainer = document.getElementById("cards-container")

let cards = []

class Card {
  constructor(title, image, code, demo) {
    this.title = title
    this.image = image
    this.code = code
    this.demo = demo
    this.languages = []
  }
}

let ratingComponent = new Card(
  "Rating component",
  "./images/rating.png",
  "https://github.com/guillemrn/frontend-mentor/tree/main/rating-component",
  "./rating-component/index.html"
  )
let NFTCard = new Card(
  "NFT Card",
  "./images/nft.png",
  "https://github.com/guillemrn/frontend-mentor/tree/main/nft-card",
  "./nft-card/index.html"
)
let adviceGenerator = new Card(
  "Advice generator app",
  "./images/advice.png",
  "https://github.com/guillemrn/frontend-mentor/tree/main/advice-generator",
  "./advice-generator/index.html"
)
let resultSummary = new Card(
  "Result summary",
  "./images/results.png",
  "https://github.com/guillemrn/frontend-mentor/tree/main/results-summary",
  "./results-summary/index.html"
)

ratingComponent.languages.push(
  { html: "HTML" },
  { css: "CSS" },
  { js: "JS" }
)
NFTCard.languages.push(
  { html: "HTML" },
  { css: "CSS" }
)
adviceGenerator.languages.push(
  { html: "HTML" },
  { css: "CSS" },
  { js: "JS" },
  { api: "API" }
)
resultSummary.languages.push(
  { html: "HTML" },
  { css: "CSS" }
)

cards.push(
  ratingComponent,
  NFTCard,
  adviceGenerator,
  resultSummary
)

function newCardProjects() {
  let cardsHTML = ''

  cards.forEach((card) => {
    const newCard = `
    <div class="card">
      <figure><img src=${card.image} alt="${card.title}"></figure>
      <h2 class="card__title">${card.title}</h2>
      <div class="card__lang">
        <p class="card__html">${card.languages[0]?.html || ''}</p>
        <p class="card__css">${card.languages[1]?.css || ''}</p>
        <p class="card__js">${card.languages[2]?.js || ''}</p>
        <p class="card__api">${card.languages[3]?.api || ''}</p>
      </div>
      <div class="buttos-container">
        <a href=${card.code} target="_blank">
          <button class="card__btn card__btn--secondary">View code</button>
        </a>
        <a href=${card.demo} target="_blank">
          <button class="card__btn card__btn--primary">View demo</button>
        </a>
      </div>
    </div>
    `
    cardsHTML += newCard
  })
  cardsContainer.innerHTML += cardsHTML
}

newCardProjects()
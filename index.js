const level = document.querySelector(".level");
const deckBtn = document.querySelector(".deck-button");
const deck = document.querySelector(".deck");
const deckOpen = document.querySelector(".deck-open");
console.log(deckBtn);

level.addEventListener("click", (event) => {
  deckBtn.classList.add("deck-button--visible");
  level.classList.add("level-active");
});

deckBtn.addEventListener("click", (event) => {
  deckBtn.classList.add("deck-button--active");
  deck.classList.add("deck-visible");
});

const deckColor1 = {
  1: "brown",
  2: "green",
  3: "blue",
};

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

deck.addEventListener("click", (event) => {
  deckOpen.classList.add("deck-open--visible");
  const i = getRandomNum(1, 4);
  let randomNum = getRandomNum(1, 12);
  deckOpen.style.backgroundImage = `url(./assets/MythicCards/${deckColor1[i]}/${deckColor1[i]}${randomNum}.png)`;
});

// const cardData = {
//   {
//     id: 'green1',
//     cardFace: greenCardsAssets.green1,
//     difficulty: 'easy',
//     color:'green'
//   },
//   {
//     id: 'green2',
//     cardFace: greenCardsAssets.green2,
//     difficulty: 'hard',
//     color:'green'
//   },
//   {
//     id: 'green3',
//     cardFace: greenCardsAssets.green3,
//     difficulty: 'hard',
//     color:'green'
//   },
//   {
//     id: 'green4',
//     cardFace: greenCardsAssets.green4,
//     difficulty: 'hard',
//     color:'green'
//   },
//   {
//     id: 'green5',
//     cardFace: greenCardsAssets.green5,
//     difficulty: 'hard',
//     color:'green'
//   },

// }

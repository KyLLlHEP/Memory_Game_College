// import {} from "./gameCard.js";
import { createGameCard } from "./gameCard.js";
import { createIconsArray, duplicateArray, shuffle } from "./utils.js";

export const startGame = (difficult) => {
  let firstCard = null;
  let secondCard = null;
  let clickable = true;
  const gameSection = document.querySelector(".game-section__container");
  const gameTable = document.createElement("div");
  const cardsIcons = createIconsArray(difficult);
  const dublicatedCardsIcons = duplicateArray(cardsIcons);
  const restartBtn = document.createElement("button");
  gameSection.innerHTML = "";
  restartBtn.textContent = "Restart";
  gameTable.classList.add("game-table");
  restartBtn.classList.add("restart-btn");
  shuffle(dublicatedCardsIcons);
  dublicatedCardsIcons.forEach((icon) =>
    gameTable.append(createGameCard("question-circle", icon))
  );
  gameSection.append(gameTable, restartBtn);

  const cards = document.querySelectorAll(".game-card");
  cards.forEach((card, index) => card.addEventListener("click", () => {}));
};

export const createGameMenu = () => {
  const title = document.createElement("h2");
  const gameSection = document.querySelector(".game-section__container");
  gameSection.innerHTML = "";
  title.textContent = "Difficulty selection";
  title.classList.add("game-menu__title");
  document.querySelector(".confetti").innerHTML = "";

  const createDifficultButton = (difficult) => {
    const button = document.createElement("button");

    button.classList.add("game-menu__difficult-btn");
    button.textContent = `${difficult} card`;

    button.addEventListener("click", () => {});

    return button;
  };

  gameSection.append(
    title,
    createDifficultButton(10),
    createDifficultButton(12),
    createDifficultButton(14),
    createDifficultButton(16)
  );
};

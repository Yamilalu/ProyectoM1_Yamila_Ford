const generateButton = document.getElementById("generate-btn");
const paletteContainer = document.getElementById("palette");
const feedback = document.getElementById("feedback");

function generateRandomColor() {
    const characters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        color += characters[randomIndex];
    }

    return color;
}

function createColorCard(color) {
    const card = document.createElement("article");
    card.classList.add("color-card");

    card.style.backgroundColor = color;

    const colorCode = document.createElement("p");
    colorCode.textContent = color;
    colorCode.classList.add("color-value");

    card.appendChild(colorCode);

    return card;
}

function generatePalette() {
    const selectedOption = document.querySelector(
        'input[name="color-count"]:checked'
    );

    const colorCount = Number(selectedOption.value);

    paletteContainer.innerHTML = "";

    for (let i = 0; i < colorCount; i++) {
        const color = generateRandomColor();
        const colorCard = createColorCard(color);

        paletteContainer.appendChild(colorCard);
    }

    feedback.textContent = `¡Paleta de ${colorCount} colores generada!`;
}

generateButton.addEventListener("click", generatePalette);



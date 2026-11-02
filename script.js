
const reasons = [
  "Porque sin importar que estas para mi.",
  "Porque me encanta como eres.",
  "Porque a tu lado siento una felicidad que jamas senti.",
  "Porque tu presencia calma todo",
  "Porque admiro la persona que eres.",
  "Porque eres lo que a Dios tanto le pedi.",
  "Porque aparte de mi novia eres mi Mejor Amiga.",
  "Porque eres el sol que ilumina mis dias .",
  "Porque me alegra que fuiste y eres mi coincidencia mas bonita."
];

const finalMessage = `
Mi Nirel:

Hay cosas que no se pueden explicar tan fácilmente, porque son tan profundas que expresarlas llevaría muchísimo tiempo. Pero tan solo quería decirte que te amo con todo mi corazón.

Eres esa luz en mis días que, sin importar cuánta oscuridad haya, me ilumina y no me deja caer. Eres esa persona que, al despertar, se convierte en mi primer pensamiento.

Llevamos algunos meses siendo novios y estamos cerca de cumplir nuestro primer año, pero todo este tiempo que he tenido la dicha de conocerte me ha demostrado que vale la pena seguir construyendo esta relación.

Sé que soy una persona con muchos problemas, pero te aseguro que hago todo lo posible para demostrarte que este amor es sincero y que mi intención es que sea eterno.

Sin más que decir...

TE AMO CON MI ALMA ENTERA, NIREL. ♡
`;

let discovered = [];

const grid = document.getElementById("heartGrid");

function buildGame() {
  grid.innerHTML = "";

  reasons.forEach((reason, index) => {
    const card = document.createElement("button");

    card.className = "heart-card";
    card.innerHTML = `
      <span class="number">REASON ${index + 1}</span>
      <span class="icon">♡</span>
      <span>Descubrir</span>
    `;

    card.addEventListener("click", () => {
      if (discovered.includes(index)) return;

      discovered.push(index);
      card.classList.add("opened");
      card.querySelector(".icon").textContent = "♥";
      card.querySelector("span:last-child").textContent = "Descubierto";

      document.getElementById("count").textContent =
        `${discovered.length} / ${reasons.length}`;

      document.getElementById("progress").style.width =
        `${discovered.length / reasons.length * 100}%`;

      document.getElementById("reasonTitle").textContent =
        `Razón número ${index + 1}`;

      document.getElementById("reasonText").textContent = reason;

      document.getElementById("popup").classList.remove("hidden");
    });
    
    grid.appendChild(card);
  });
}

document.getElementById("start").addEventListener("click", () => {
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
});

document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("popup").classList.add("hidden");

  if (discovered.length === reasons.length) {
    document.getElementById("unlock").classList.remove("hidden");
  }
});

document.getElementById("finalButton").addEventListener("click", () => {
  document.getElementById("game").classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");
  document.getElementById("finalMessage").textContent = finalMessage;
});

document.getElementById("restart").addEventListener("click", () => {
  discovered = [];
  document.getElementById("final").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  document.getElementById("unlock").classList.add("hidden");
  document.getElementById("count").textContent = "0 / 9";
  document.getElementById("progress").style.width = "0%";
  buildGame();
});

function createFloatingHearts() {
  const container = document.getElementById("floatingHearts");

  for (let i = 0; i < 16; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = "♥";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDelay = Math.random() * 12 + "s";
    heart.style.fontSize = (12 + Math.random() * 20) + "px";
    container.appendChild(heart);
  }
}

buildGame();
createFloatingHearts();

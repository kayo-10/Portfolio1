function createCamisas() {
  const container = document.getElementById("camisas-container");

  // Primeiro banner
  const banner1 = document.createElement("div");
  banner1.className = "banner-principal";
  banner1.innerHTML = `
    <img src="https://i.imgur.com/2zGq4Yv.jpeg" alt="Banner 1">
  `;
  container.appendChild(banner1);

  // Segundo banner
  const banner2 = document.createElement("div");
  banner2.className = "banner-principal";
  banner2.innerHTML = `
    <img src="https://i.imgur.com/4r5VlOv.jpeg" alt="Banner 2">
  `;
  container.appendChild(banner2);

  // Cria 30 camisas
  for (let i = 1; i <= 30; i++) {
    const camisa = document.createElement("div");
    camisa.className = "camisa";
    camisa.innerHTML = `
      <img src="https://i.imgur.com/FLu2Nwm.png" alt="Camisa ${i}">
      <p>Camisa ${i}</p>
      <button class="botao-comprar">
        <i class="fas fa-shopping-cart"></i> Comprar agora
      </button>
    `;
    container.appendChild(camisa);
  }
}

createCamisas();

// Fundo animado
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const columns = canvas.width / 20;
const drops = new Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#000";
  for (let i = 0; i < drops.length; i++) {
    const text = "|";
    ctx.fillText(text, i * 20, drops[i] * 20);

    if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(draw, 33);

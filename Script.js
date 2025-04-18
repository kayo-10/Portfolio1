const camisasDestaque = [
  {
    nome: "Camisa Brasil Neymar Junior",
    imagem: "https://acdn-us.mitiendanube.com/stores/001/865/527/products/design-sem-nome-111-4c92090aa4b62e75e416714180944641-640-0.png",
    link: "#"
  },
  {
    nome: "Camisa Al Nassr Cristiano Ronaldo",
    imagem: "https://acdn-us.mitiendanube.com/stores/001/562/869/products/315-camisa-al-nassr-2022-cr7-cristiano-ronaldo-personalizada-numero-7-amarelo-arabia-saudita-nova1-79696338902af1ab4816729193976685-1024-1024.png",
    link: "#"
  },
  {
    nome: "Camisa Argentina Lionel Messi",
    imagem: "https://acdn-us.mitiendanube.com/stores/001/865/527/products/photo5170686599552412318-removebg-preview1-855df5a686afd6d8ad16687986109222-640-0.png",
    link: "#"
  }
];

const outrasCamisas = [
  { nome: "Camisa São Paulo 2024", imagem: "https://newbrasil.vtexassets.com/arquivos/ids/166079-800-auto?v=638427334085130000&width=800&height=auto&aspect=true", link: "#" },
  { nome: "Camisa Grêmio 2024", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYD5Z2g7kTDPa7BeNWhdNsQgfngI2RWJlnxJ-Eg6ZKh_5-vBUHW7cgMvYW&s=10", link: "#" },
  { nome: "Camisa Internacional 2024", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAAFNaAi5aE86x6RnYOH9NbrUiOFy8gb_L7DmHQV4g19l_i_Qe0gUZrI&s=10", link: "#" },
  { nome: "Camisa Vasco 2024", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz5NPCB4yO-XU8rJic-0hOAQavQ7LB59WF76nrUD5IneFNlzTUcbAnk8w&s=10", link: "#" },
  { nome: "Camisa Cruzeiro 2024", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNFjz2bZVOdFGB4ZaF9UCOxs1y5UmDL9MWe5KbLPC02kMHi2YFJXLZ3RvR&s=10", link: "#" },
  { nome: "Camisa Atlético-MG 2024", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWrFy1CzbQ0VBimsHLdgFJy4ads5W9zA_oZ4jKRiBYRrOLfxbhgFhUwH4&s=10", link: "#" },
  { nome: "Camisa Santos 2024", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4Idv7OrfE76e6W4vQoieIQS2K28FTHVDLO-9gMFThAIzN_R0zLqZqbs&s=10", link: "#" },
  { nome: "Camisa Bahia 2024", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRcTIE4m6Am8ftJ3h9VTKhz9ynDkSgpyWKFYrV4IzyD1fCLK4k4-v50Ns&s=10", link: "#" },
  { nome: "Camisa Botafogo 2024", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlP7PKaMKuEQ-Vs7ZzZiR4_fcdM4ebSB8GjdMU0T6PFnc6oiuYhzNTfubW&s=10", link: "#" },
  { nome: "Camisa Fortaleza 2024", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2BvEVvMz9bVcdWSeFxLN_ETBVi_PH9zAEeiUbS0pNNlKY5_HvuMe0WPg&s=10", link: "#" }
];

const container = document.getElementById("camisas-container");

// Inserir camisas destaque
inserirCamisas(camisasDestaque);

// Banner depois das 3 primeiras
const bannerExtra = document.createElement("div");
bannerExtra.classList.add("banner-secundario");
bannerExtra.innerHTML = `
  <img src="https://i.postimg.cc/NM1Gr02L/Black-Red-Minimalist-Fashion-Product-Introduction-Landscape-Banner-20250417-184326-0000.png" alt="Promoção Especial" />
`;
container.appendChild(bannerExtra);

// Inserir outras camisas
inserirCamisas(outrasCamisas);

// Função para inserir camisas
function inserirCamisas(lista) {
  lista.forEach(camisa => {
    const card = document.createElement("div");
    card.classList.add("camisa");
    card.innerHTML = `
      <a href="${camisa.link}" target="_blank">
        <img src="${camisa.imagem}" alt="${camisa.nome}">
        <h3>${camisa.nome}</h3>
      </a>
      <a href="${camisa.link}" target="_blank">
        <button class="botao-comprar">
          <i class="fas fa-shopping-cart"></i> Compre agora
        </button>
      </a>
    `;
    container.appendChild(card);
  });
}

// Fundo animado (linhas caindo)
const canvas = document.createElement("canvas");
canvas.id = "backgroundCanvas";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const numLines = 100;
const lines = [];
for (let i = 0; i < numLines; i++) {
  lines.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * 40 + 10,
    speed: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.3
  });
}

function animateLines() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  lines.forEach(line => {
    ctx.beginPath();
    ctx.strokeStyle = `rgba(0, 0, 0, ${line.opacity})`;
    ctx.lineWidth = 2;
    ctx.moveTo(line.x, line.y);
    ctx.lineTo(line.x, line.y + line.length);
    ctx.stroke();

    line.y += line.speed;
    if (line.y > canvas.height) {
      line.y = -line.length;
      line.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animateLines);
}
animateLines();

const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;
let indiceAtual = 0;
let intervaloAutoplay;

function atualizarSlide() {
  const deslocamento = -indiceAtual * 100;
  slides.style.transform = `translateX(${deslocamento}%)`;
}

function mudarSlide(direcao) {
  indiceAtual += direcao;

  if (indiceAtual < 0) {
    indiceAtual = totalSlides - 1;
  } else if (indiceAtual >= totalSlides) {
    indiceAtual = 0;
  }

  atualizarSlide();
  reiniciarAutoplay(); // Evita que o slide mude logo após o clique do usuário
}

// Inicia o temporizador automático (3000ms = 3 segundos)
function iniciarAutoplay() {
  intervaloAutoplay = setInterval(() => {
    mudarSlide(1);
  }, 3000);
}

// Reseta o tempo se o usuário clicar nas setas manualmente
function reiniciarAutoplay() {
  clearInterval(intervaloAutoplay);
  iniciarAutoplay();
}

// Inicializa o carrossel automático ao carregar a página
iniciarAutoplay();

// Selecionando os dois campos
const servico = document.getElementById("servico");
const profissional = document.getElementById("profissional");

// Lista de profissionais separados por categoria
const profissionais = {

  encanacao: [
    "Lucas - Encanador",
    "Roberto - Encanador"
    
  ],

  mecanica: [
    "João - Mecânico",
    "Carlos - Mecânico",
    "Pedro - Mecânico"
  ],

  eletrica: [
    "Marcos - Eletricista",
    "André - Eletricista" 
  ],

  limpeza: [
    "Ana - Diarista",
    "Maria - Profissional de Limpeza"
  ],

  engenharia: [
    "Paulo - Engenheiro",
    "Ricardo - Engenheiro"
  ],

  borracharia: [
    "José - Borracheiro",
    "Fernando - Borracheiro"
  ],

  construcao: [
    "Bruno - Pedreiro",
    "Rafael - Pedreiro"
  ],

  estetica: [
    "Juliana - Esteticista",
    "Camila - Manicure"
  ],

  tecnologia: [
    "Felipe - Técnico de Informática",
    "Gabriel - Desenvolvedor"
  ]

};

// Quando o usuário escolher um serviço
servico.addEventListener("change", function () {

  // Identifica a categoria selecionada
  const categoria = servico.value;

  // Limpa os profissionais anteriores
  profissional.innerHTML =
    '<option value="">Selecione um Profissional</option>';

  // Verifica se existe uma categoria selecionada
  if (categoria === "") {
    profissional.disabled = true;
    return;
  }

  // Busca os profissionais daquela categoria
  const lista = profissionais[categoria] || [];

  // Adiciona os profissionais ao segundo campo
  lista.forEach(function (nome) {

    const opcao = document.createElement("option");

    opcao.value = nome;
    opcao.textContent = nome;

    profissional.appendChild(opcao);

  });

  // Libera o segundo campo
  profissional.disabled = false;

});

function mostrarProfissionais(categoria) {

    const lista = document.getElementById("lista-profissionais");

    lista.innerHTML = "";

    profissionais[categoria].forEach(nome => {

        const item = document.createElement("p");

        item.textContent = nome;
        item.classList.add("nome-profissional");

        item.onclick = function() {

            if (nome.includes("Marcos - Eletricista")) {
                window.location.href = "perfil-profissional.html";
            }

            else if (nome.includes("André")) {
                window.location.href = "perfil-andre.html";
            }

        };

        lista.appendChild(item);

    });
}
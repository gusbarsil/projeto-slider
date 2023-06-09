const cards = document.querySelectorAll(".card");
const btnAdvance = document.getElementById("btn-advance");
const btnCback = document.getElementById("btn-cback");

let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selected");
    cartaoSelecionado.classList.remove("selected");
  }
  
  function mostrarCartao(indiceCartao) {
    cards[indiceCartao].classList.add("selected");
  }
  
  btnAdvance.addEventListener("click", function () {
    if (cartaoAtual === cards.length - 1) return;
  
    esconderCartaoSelecionado();
  
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
  });
  
  btnCback.addEventListener("click", function () {
    if (cartaoAtual === 0) return;
  
    esconderCartaoSelecionado();
  
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
  });
  


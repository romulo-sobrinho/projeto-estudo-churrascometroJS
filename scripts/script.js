let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");
      
function calcular() {
  console.log("Calculando...");

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let carne = carnePP(duracao);
  let cerveja = cervejaPP(duracao);
  let bebida = bebidaPP(duracao);

  let qtdTotalCarne = (carne * adultos + (carne / 2 * criancas))/1000;
  let qtdTotalCerveja = Math.ceil((cerveja * adultos)/1000);
  let qtdTotalBebida = bebida * adultos + (bebida / 2 * criancas);

  resultado.innerHTML = `<h2>RESULTADO</h2>`;
  resultado.innerHTML += `<p>${qtdTotalCarne} Kg de carne</p>`;
  resultado.innerHTML += `<p>${qtdTotalCerveja} litros de cerveja</p>`;
  resultado.innerHTML += `<p>${qtdTotalBebida}ml de refri e água</p>`;
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPP(duracao) {
  if (duracao <= 2) {
    return 600;
  } else if (duracao <= 4) {
    return 800;
  } else if (duracao <= 6) {
    return 1000;
  } else if (duracao > 6) {
    return 1300;
  }
}

function bebidaPP(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
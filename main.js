// ---------------ESERCIZIO 1----------------------

/*
const stringa = " Javascript é fantastico ";
let oggetto = {};

const analizzaTesto = (testo) => {
  const originale = testo;
  oggetto.originale = originale;

  const minuscolo = testo.toLowerCase();
  oggetto.minuscolo = minuscolo;

  const senzaSpazi = testo.slice(1, -1);
  oggetto.senzaSpazi = senzaSpazi;

  const numeroCaratteri = testo.length - 2;
  oggetto.numeroCaratteri = numeroCaratteri;

  const contieneJS = testo.includes("javascript", "JS"); // DOESN'T WORK PROPERLY
  oggetto.contieneJS = contieneJS;

  const caratteriTesto = testo.split("");
  const reverseTesto = caratteriTesto.reverse();
  const reverse = reverseTesto.join("");
  oggetto.invertita = reverse;
};

analizzaTesto(stringa);
console.log(oggetto);
*/

// ---------------ESERCIZIO 2----------------------

/*

let arrayCasuale = [];
const numeroElementi = 10;
const valoreMinimo = 1;
const valoreMassimo = 30;

const riempiArray = (num, min, max) => {
  for (let i = 0; i < num; i++) {
    let generaNumeri = Math.floor(Math.random() * max + min);
    arrayCasuale.push(generaNumeri);
  }
};

riempiArray(numeroElementi, valoreMinimo, valoreMassimo);
console.log(arrayCasuale);

let pari = 0;
let dispari = 0;
let conteggio = {
  pari: 0,
  dispari: 0,
};

const contaPariDispari = (numeri) => {
  for (let j = 0; j < numeri.length; j++) {
    if (numeri[j] % 2 === 0) {
      pari = pari + 1;
    } else {
      dispari = dispari + 1;
    }
  }

  conteggio.pari = pari;
  conteggio.dispari = dispari;
  console.log(conteggio);
};

contaPariDispari(arrayCasuale);
*/

// ---------------ESERCIZIO 3---------------------

/*
window.addEventListener("load", () => {
  const input = document.getElementById("testoUtente");
  const btn = document.getElementById("bottoneInvio");
  const body = document.body;

  btn.addEventListener("click", () => {
    if (input.value === "") {
      body.innerHTML += `<p>Inserisci del testo prima di inviare!</p>`;
    } else {
      body.innerHTML += `<p>${input.value}</p>`;
    }
  });
});
*/

// ---------------ESERCIZIO 3 CON BOUNS---------------------

window.addEventListener("load", () => {
  const input = document.getElementById("testoUtente");
  const btn = document.getElementById("bottoneInvio");
  const body = document.body;
  let oggetto = {};

  btn.addEventListener("click", () => {
    if (input.value === "") {
      body.innerHTML += `<p>Inserisci del testo prima di inviare!</p>`;
    } else {
      const analizzaTesto = (testo) => {
        const originale = testo;
        oggetto.originale = originale;

        const minuscolo = testo.toLowerCase();
        oggetto.minuscolo = minuscolo;

        const senzaSpazi = testo.slice(1, -1);
        oggetto.senzaSpazi = senzaSpazi;

        const numeroCaratteri = testo.length;
        oggetto.numeroCaratteri = numeroCaratteri;

        const contieneJS = testo.includes("javascript", "JS"); // DOESN'T WORK PROPERLY
        oggetto.contieneJS = contieneJS;

        const caratteriTesto = testo.split("");
        const reverseTesto = caratteriTesto.reverse();
        const reverse = reverseTesto.join("");
        oggetto.invertita = reverse;
      };
      analizzaTesto(input.value);

      body.innerHTML += `<ul>${oggetto}</ul>`;
      console.log(oggetto);
    }
  });
});

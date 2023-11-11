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
let totalePariDispari = {
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

  totalePariDispari.pari = pari;
  totalePariDispari.dispari = dispari;
  console.log(totalePariDispari);
};

contaPariDispari(arrayCasuale);

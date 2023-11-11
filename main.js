const stringa = " Javascrip é fantastico ";
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

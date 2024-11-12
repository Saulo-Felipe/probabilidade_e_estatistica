function gerarEspacoAmostral(hMin: number, hMax: number, passo: number): number[] {
  const espacoAmostral: number[] = [];
  for (let x = hMin; x <= hMax; x += passo) {
      espacoAmostral.push(x);
  }
  return espacoAmostral;
}

function gerarEvento(hMin: number, hMax: number, passo: number, limite: number): number[] {
  const evento: number[] = [];
  for (let x = limite + passo; x <= hMax; x += passo) {
      evento.push(x);
  }
  return evento;
}

const hMin = 0;
const hMax = 200;
const passo = 1;

const espacoAmostral = gerarEspacoAmostral(hMin, hMax, passo);
const evento = gerarEvento(hMin, hMax, passo, 100);

console.log("Espaço Amostral S:", espacoAmostral);
console.log("Evento E (x > 100):", evento);

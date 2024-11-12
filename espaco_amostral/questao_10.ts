function gerarEspacoAmostral(n: number, hMin: number, hMax: number, passo: number): number[][] {
  const espacoAmostral: number[][] = [];
  for (let i = 0; i < n; i++) {
      for (let h = hMin; h <= hMax; h += passo) {
          const vetorAlturas: number[] = Array(n).fill(0);
          vetorAlturas[i] = h;
          espacoAmostral.push(vetorAlturas);
      }
  }
  return espacoAmostral;
}

function gerarEvento(hMin: number, hMax: number, passo: number, n: number, h1Value: number): number[][] {
  const evento: number[][] = [];
  for (let h = hMin; h <= hMax; h += passo) {
      const vetorAlturas: number[] = Array(n).fill(h1Value);
      evento.push(vetorAlturas);
  }
  return evento;
}

const n = 3;
const hMin = 0;
const hMax = 10;
const passo = 1;

const espacoAmostral = gerarEspacoAmostral(n, hMin, hMax, passo);
const evento = gerarEvento(hMin, hMax, passo, n, 0);

console.log("Espaço Amostral S:", espacoAmostral);
console.log("Evento E (h1 = 0):", evento);

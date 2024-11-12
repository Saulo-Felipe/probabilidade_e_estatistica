function gerarEspacoAmostral(vMin: number, vMax: number, passo: number): number[][] {
  const espacoAmostral: number[][] = [];

  for (let v1 = vMin; v1 <= vMax; v1 += passo) {
      for (let v2 = vMin; v2 <= vMax; v2 += passo) {
          for (let v3 = vMin; v3 <= vMax; v3 += passo) {
              espacoAmostral.push([v1, v2, v3]);
          }
      }
  }
  return espacoAmostral;
}

function gerarEvento(vMin: number, vMax: number, passo: number, v1Value: number): number[][] {
  const evento: number[][] = [];
  for (let v2 = vMin; v2 <= vMax; v2 += passo) {
      for (let v3 = vMin; v3 <= vMax; v3 += passo) {
          evento.push([v1Value, v2, v3]);
      }
  }
  return evento;
}

const vMin = -10;
const vMax = 10; 
const passo = 1; 

const espacoAmostral = gerarEspacoAmostral(vMin, vMax, passo);

const evento = gerarEvento(vMin, vMax, passo, 0);

console.log("Espaço Amostral S (valores limitados):", espacoAmostral);
console.log("Evento E (v1 = 0):", evento);

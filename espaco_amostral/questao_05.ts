function gerarEspacoAmostral(n: number): number[] {
  const espacoAmostral: number[] = [];
  for (let i = 0; i <= n; i++) {
    espacoAmostral.push(i);
  }
  return espacoAmostral;
}

function verificarEventoPossivel(espacoAmostral: number[], evento: number[]): boolean {
  return evento.every(num => espacoAmostral.includes(num));
}

const n = 10; 
const espacoAmostral = gerarEspacoAmostral(n);

const evento1 = [1, 2, 3];  
const evento2 = [0, 1, 2, 3, 4];

const evento1Valido = verificarEventoPossivel(espacoAmostral, evento1);
const evento2Valido = verificarEventoPossivel(espacoAmostral, evento2);

console.log("Espaço Amostral S:", espacoAmostral);
console.log("Evento 1 é válido?", evento1Valido);
console.log("Evento 2 é válido?", evento2Valido);

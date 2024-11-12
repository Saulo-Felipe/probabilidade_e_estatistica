function calcularProbabilidadeDefeituosos(): void {
  const n = 100;
  const k = 3;
  const p = 0.02;
  const q = 1 - p;

  function fatorial(x: number): number {
      if (x === 0 || x === 1) return 1;
      let resultado = 1;
      for (let i = 2; i <= x; i++) {
          resultado *= i;
      }
      return resultado;
  }

  const combinacao = fatorial(n) / (fatorial(k) * fatorial(n - k));
  const probabilidade = combinacao * Math.pow(p, k) * Math.pow(q, n - k);

  console.log(`A probabilidade de existir exatamente 3 itens defeituosos é: ${probabilidade.toFixed(4)}`);
}

calcularProbabilidadeDefeituosos();

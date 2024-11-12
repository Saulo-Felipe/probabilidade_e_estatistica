function calcularProbabilidadePoisson(): void {
  const lambda = 5.4;
  const fatorial = (n: number): number => (n === 0 ? 1 : n * fatorial(n - 1));
  const poisson = (k: number, lambda: number): number => (Math.pow(lambda, k) * Math.exp(-lambda)) / fatorial(k);

  const probabilidade = [0, 1, 2, 3, 4].reduce((acc, k) => acc + poisson(k, lambda), 0);

  console.log(`Probabilidade de que a loja não fique sem impressoras no final dos 2 dias: ${probabilidade.toFixed(4)}`);
}

calcularProbabilidadePoisson();

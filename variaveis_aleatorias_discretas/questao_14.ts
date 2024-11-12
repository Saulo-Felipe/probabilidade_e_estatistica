function calcularProbabilidadeVazamentos(): void {
  const lambdaPorKm = 0.5; 
  const lambdaSetor = lambdaPorKm * 3;

  function calcularPoisson(x: number, lambda: number): number {
      return Math.pow(lambda, x) * Math.exp(-lambda) / fatorial(x);
  }

  function fatorial(x: number): number {
      if (x === 0 || x === 1) return 1;
      let resultado = 1;
      for (let i = 2; i <= x; i++) {
          resultado *= i;
      }
      return resultado;
  }

  const pMenosQue3 = calcularPoisson(0, lambdaSetor) + calcularPoisson(1, lambdaSetor) + calcularPoisson(2, lambdaSetor);
  const pPeloMenos3 = 1 - pMenosQue3;

  console.log(`A probabilidade de ocorrer pelo menos 3 vazamentos é: ${pPeloMenos3.toFixed(4)}`);
}

calcularProbabilidadeVazamentos();

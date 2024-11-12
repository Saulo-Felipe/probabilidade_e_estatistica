function calcularProbabilidadeAfogamentos(): void {
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

  const lambdaA = 8;
  const pExatamente5 = calcularPoisson(5, lambdaA);
  console.log(`A probabilidade de ocorrerem exatamente 5 afogamentos em 200.000 habitantes é: ${pExatamente5.toFixed(4)}`);

  const lambdaB = 4.5;
  const pMenosQue3 = calcularPoisson(0, lambdaB) + calcularPoisson(1, lambdaB) + calcularPoisson(2, lambdaB);
  const pPeloMenos3 = 1 - pMenosQue3;
  console.log(`A probabilidade de ocorrerem pelo menos 3 afogamentos em 112.500 habitantes é: ${pPeloMenos3.toFixed(4)}`);
}

calcularProbabilidadeAfogamentos();

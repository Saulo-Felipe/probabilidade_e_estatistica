function calcularLucroPorMuda(): void {
  const custoMuda = 1.20;
  const custoRecuperacao = 0.50;
  const vendaMuda = 3.50;
  const probabilidadeFungo = 0.02;
  const probabilidadeRecuperacao = 0.5;
  const probabilidadeNaoRecuperacao = 0.5;
  
  const lucroRecuperada = vendaMuda - (custoMuda + custoRecuperacao);
  const lucroNaoRecuperada = -custoMuda;
  const lucroNormal = vendaMuda - custoMuda;

  const lucroMedio = (lucroNormal * 0.98) + (lucroRecuperada * probabilidadeFungo * probabilidadeRecuperacao) + (lucroNaoRecuperada * probabilidadeFungo * probabilidadeNaoRecuperacao);

  console.log(`Lucro médio por muda produzida: R$${lucroMedio.toFixed(2)}`);

  const lucroEsperadoPara10kMudas = lucroMedio * 10000;
  console.log(`Lucro esperado para 10.000 mudas: R$${lucroEsperadoPara10kMudas.toFixed(2)}`);
}

calcularLucroPorMuda();

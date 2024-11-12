function calcularProbabilidades() {
  const combinacao = (n: number, r: number): number => {
      const fatorial = (num: number): number => {
          let resultado = 1;
          for (let i = 1; i <= num; i++) {
              resultado *= i;
          }
          return resultado;
      };
      
      return fatorial(n) / (fatorial(r) * fatorial(n - r));
  };

  const totalCombinacoes = combinacao(15, 3);

  const combinacoesNenhumaDefeito = combinacao(10, 3);
  const probabilidadeNenhumaDefeito = combinacoesNenhumaDefeito / totalCombinacoes;

  const combinacoesUmaDefeito = combinacao(5, 1) * combinacao(10, 2);
  const probabilidadeUmaDefeito = combinacoesUmaDefeito / totalCombinacoes;

  const probabilidadePeloMenosUmaDefeito = 1 - probabilidadeNenhumaDefeito;

  return {
      probabilidadeNenhumaDefeito,
      probabilidadeUmaDefeito,
      probabilidadePeloMenosUmaDefeito
  };
}

const probabilidades = calcularProbabilidades();
console.log(`Probabilidade de nenhuma ser defeituosa: ${probabilidades.probabilidadeNenhumaDefeito.toFixed(4)}`);
console.log(`Probabilidade de exatamente uma ser defeituosa: ${probabilidades.probabilidadeUmaDefeito.toFixed(4)}`);
console.log(`Probabilidade de pelo menos uma ser defeituosa: ${probabilidades.probabilidadePeloMenosUmaDefeito.toFixed(4)}`);

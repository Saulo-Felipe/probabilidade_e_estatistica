function normalCDF(z: number): number {
  return (1 + erf(z / Math.sqrt(2))) / 2;
}

function erf(x: number): number {
  const t = 1 / (1 + 0.3275911 * Math.abs(x));
  const tau = t * (0.254829592 + t * (-0.284496736 + t * (1.421413741 + t * (-1.453152027 + t * 1.061405429))));
  const result = 1 - tau * Math.exp(-x * x);
  return x >= 0 ? result : -result;
}

function calcularPorcentagens(): void {
  const media = 1000;
  const desvioPadrao = 10;

  const z1 = (990 - media) / desvioPadrao;
  const porcentagem1 = normalCDF(z1) * 100;

  const z2 = (980 - media) / desvioPadrao;
  const z3 = (1020 - media) / desvioPadrao;
  const porcentagem2 = (normalCDF(z3) - normalCDF(z2)) * 100;

  console.log(`Porcentagem de garrafas com volume menor que 990 cm³: ${porcentagem1.toFixed(2)}%`);
  console.log(`Porcentagem de garrafas com volume dentro de dois desvios padrões: ${porcentagem2.toFixed(2)}%`);
}

calcularPorcentagens();

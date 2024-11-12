function normalCDF(z: number): number {
  return (1 + erf(z / Math.sqrt(2))) / 2;
}

function erf(x: number): number {
  const t = 1 / (1 + 0.3275911 * Math.abs(x));
  const tau = t * (0.254829592 + t * (-0.284496736 + t * (1.421413741 + t * (-1.453152027 + t * 1.061405429))));
  const result = 1 - tau * Math.exp(-x * x);
  return x >= 0 ? result : -result;
}

function calcularProbabilidades(): void {
  const media = 500;
  const desvioPadrao = 100;

  const z1 = (450 - media) / desvioPadrao;
  const z2 = (650 - media) / desvioPadrao;
  const probabilidade1 = normalCDF(z2) - normalCDF(z1);

  const z3 = -1.645;
  const x = media + z3 * desvioPadrao;

  const z4 = 1.96;
  const a = z4 * desvioPadrao;

  console.log(`P(450 <= X <= 650): ${probabilidade1}`);
  console.log(`Valor de x para P(X ≤ x) = 0,05: ${x}`);
  console.log(`Valor de a para P(500 - a <= X <= 500 + a) = 0,95: ${a}`);
}

calcularProbabilidades();

function normalCDF(z: number): number {
  return (1 + erf(z / Math.sqrt(2))) / 2;
}

function erf(x: number): number {
  const t = 1 / (1 + 0.3275911 * Math.abs(x));
  const tau = t * (0.254829592 + t * (-0.284496736 + t * (1.421413741 + t * (-1.453152027 + t * 1.061405429))));
  const result = 1 - tau * Math.exp(-x * x);
  return x >= 0 ? result : -result;
}

function calcularLimitesPeso(): void {
  const media = 5;
  const desvioPadrao = 0.9;

  const z1 = -1.04;
  const pesoPequeno = media + z1 * desvioPadrao;

  const z2 = 0.39;
  const pesoMedioSuperior = media + z2 * desvioPadrao;

  const z3 = 1.04;
  const pesoGrandeSuperior = media + z3 * desvioPadrao;

  const pesoExtraSuperior = pesoGrandeSuperior;

  console.log(`Limite superior para os coelhos pequenos: ${pesoPequeno.toFixed(3)} kg`);
  console.log(`Limite inferior e superior para os coelhos médios: ${pesoPequeno.toFixed(3)} kg - ${pesoMedioSuperior.toFixed(3)} kg`);
  console.log(`Limite inferior e superior para os coelhos grandes: ${pesoMedioSuperior.toFixed(3)} kg - ${pesoGrandeSuperior.toFixed(3)} kg`);
  console.log(`Limite superior para os coelhos extras: Acima de ${pesoGrandeSuperior.toFixed(3)} kg`);
}

calcularLimitesPeso();

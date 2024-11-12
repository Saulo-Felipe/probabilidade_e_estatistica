function erf(x: number): number {
  const t = 1 / (1 + 0.3275911 * Math.abs(x));
  const tau = t * (0.254829592 + t * (-0.284496736 + t * (1.421413741 + t * (-1.453152027 + t * 1.061405429))));
  const result = 1 - tau * Math.exp(-x * x);
  return x >= 0 ? result : -result;
}

function normalCDF(z: number): number {
  return (1 + erf(z / Math.sqrt(2))) / 2;
}

function calcularProbabilidades(): void {
  const resultados = {
    a: normalCDF(1.42) - normalCDF(0),
    b: normalCDF(0) - normalCDF(-0.73),
    c: normalCDF(2.01) - normalCDF(-1.37),
    d: normalCDF(1.26) - normalCDF(0.65),
    e: normalCDF(-0.54) - normalCDF(-1.79),
    f: 1 - normalCDF(1.13),
    g: normalCDF(0.5) - normalCDF(-0.5),
  };

  console.log(`P(0 <= Z <= 1.42): ${resultados.a}`);
  console.log(`P(-0.73 <= Z <= 0): ${resultados.b}`);
  console.log(`P(-1.37 <= Z <= 2.01): ${resultados.c}`);
  console.log(`P(0.65 <= Z <= 1.26): ${resultados.d}`);
  console.log(`P(-1.79 <= Z <= -0.54): ${resultados.e}`);
  console.log(`P(Z >= 1.13): ${resultados.f}`);
  console.log(`P(|Z| <= 0.5): ${resultados.g}`);
}

calcularProbabilidades();

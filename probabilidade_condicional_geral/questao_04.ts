function calcularProbabilidadeMulher(): void {
  const P_W = 0.60;
  const P_H = 0.40;
  const P_A_dado_W = 0.01;
  const P_A_dado_H = 0.04;

  const P_A = (P_A_dado_W * P_W) + (P_A_dado_H * P_H);

  const P_W_dado_A = (P_A_dado_W * P_W) / P_A;

  console.log(`P(W | A) = ${P_W_dado_A}`);
}

calcularProbabilidadeMulher();

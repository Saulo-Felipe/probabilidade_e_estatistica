function calcularProbabilidades(): void {
  const P_M = 0.25;
  const P_Q = 0.15;
  const P_M_inter_Q = 0.10;

  const P_M_dado_Q = P_M_inter_Q / P_Q;
  const P_Q_dado_M = P_M_inter_Q / P_M;
  const P_M_ou_Q = P_M + P_Q - P_M_inter_Q;

  console.log(`P(M | Q) = ${P_M_dado_Q}`);
  console.log(`P(Q | M) = ${P_Q_dado_M}`);
  console.log(`P(M ∪ Q) = ${P_M_ou_Q}`);
}

calcularProbabilidades();

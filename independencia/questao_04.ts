function calcularProbabilidadesDependentes(): void {
  const S = ["CCC", "CCK", "CKC", "KCC", "CKK", "KCK", "KKC", "KKK"];
  
  const P_A_inter_B = 3 / 8;
  const P_A = 7 / 8;
  const P_B = 1 / 2;
  const P_A_inter_C = 1 / 8;
  const P_C = 1 / 4;

  const P_B_inter_C = 1 / 8;
  const P_B_times_C = P_B * P_C;

  const dependenteAB = P_A_inter_B !== P_A * P_B;
  const dependenteAC = P_A_inter_C !== P_A * P_C;
  const independenteBC = P_B_inter_C === P_B_times_C;

  console.log(`(A, B) são dependentes: ${dependenteAB}`);
  console.log(`(A, C) são dependentes: ${dependenteAC}`);
  console.log(`(B, C) são independentes: ${independenteBC}`);
}

calcularProbabilidadesDependentes();

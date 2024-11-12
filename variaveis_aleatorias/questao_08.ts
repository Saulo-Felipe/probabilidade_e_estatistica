function resolverQuestaoVariavelAleatoria(): void {
  const p = (Math.sqrt(17) - 3) / 4;
  const E_Y = (1 * p * p) + (2 * p) + (3 * p) + (4 * p) + (5 * p * p);
  const var_Y = (Math.pow(1, 2) * p * p) + (Math.pow(2, 2) * p) + (Math.pow(3, 2) * p) + (Math.pow(4, 2) * p) + (Math.pow(5, 2) * p * p) - Math.pow(E_Y, 2);

  console.log("Valor de p:", p);
  console.log("Esperança de Y:", E_Y);
  console.log("Variância de Y:", var_Y);
}

resolverQuestaoVariavelAleatoria();

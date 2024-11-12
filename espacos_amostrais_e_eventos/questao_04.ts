function calcularProbabilidades(): void {
  const faces = [1, 2, 3, 4, 5, 6];
  const somaProbabilidades = faces.reduce((acc, face) => acc + face, 0); // Soma de 1 + 2 + 3 + 4 + 5 + 6 = 21

  const probabilidades = faces.map(face => face / somaProbabilidades);

  console.log("Probabilidades de cada face:");
  faces.forEach((face, index) => {
      console.log(`P(${face}) = ${probabilidades[index]}`);
  });

  const eventoA = [2, 4, 6];
  const eventoB = [2, 3, 5];
  const eventoC = [1, 3, 5];

  const pA = eventoA.reduce((acc, face) => acc + probabilidades[faces.indexOf(face)], 0);
  const pB = eventoB.reduce((acc, face) => acc + probabilidades[faces.indexOf(face)], 0);
  const pC = eventoC.reduce((acc, face) => acc + probabilidades[faces.indexOf(face)], 0);

  console.log("\nProbabilidades dos eventos:");
  console.log(`P(A) = ${pA}`);
  console.log(`P(B) = ${pB}`);
  console.log(`P(C) = ${pC}`);
}

calcularProbabilidades();

/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
function combinarDosArrays(arrA, arrB) {
  const combinarArrays = [...arrA, ...arrB];

  const resultados = Array.from(new Set(combinarArrays));

  const resultadosOrdenados = resultados.sort((a, b) => a - b);

  return resultadosOrdenados;
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {nuber[]} el nuevo array de números ordenados
 */
function combinarNArrays(arrs) {
  const combinarArrays = arrs.flat();

  const resultados = Array.from(new Set(combinarArrays));

  const resultadosOrdenados = resultados.sort((a, b) => a - b);

  return resultadosOrdenados;
}

// exportar ambas funciones

export default {
  combinarDosArrays,
  combinarNArrays,
};

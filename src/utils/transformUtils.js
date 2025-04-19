/**
 * separa el string ante cada ocurrencia del separador, y agrega al array resultado siempre que pueda
 * transformar al fragmento de string en numero.
 * @param {string} str
 * @param {string} separador
 * @returns {number[]} array de numeros
 */
function transformarStringEnArrayDeNumeros(str, separador) {
  const separaString = str.split(separador);

  const numeros = separaString.map((fragmento) => Number(fragmento));

  const numerosValido = numeros.filter((numero) => !isNaN(numero));

  return numerosValido;
}

/**
 * concatena todos los numeros entre sí, intercalando un separador entre número y número.
 * @param {number[]} arr
 * @param {string} separador
 * @returns {string} el nuevo string
 */
function transformarArrayDeNumerosAUnSoloString(arr, separador) {
  const resultado = arr.join(separador);

  return resultado;
}

// exportar ambas funciones

export default {
  transformarStringEnArrayDeNumeros,
  transformarArrayDeNumerosAUnSoloString,
};

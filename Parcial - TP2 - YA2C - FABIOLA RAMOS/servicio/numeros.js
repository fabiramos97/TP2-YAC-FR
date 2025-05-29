import NumerosMem from "../model/DAOs/numerosMem.js";

class ServicioNumeros {
  constructor() {
    this.numerosMem = new NumerosMem();
  }

  obtenerNumeros = async () => {
    const numeros = await this.numerosMem.obtenerNumeros();
    return  numeros;
  };

  obtenerPromedio = async () => {
    const numeros = await this.numerosMem.obtenerNumeros();
    const promedio = numeros.reduce((acc,n) => acc + n.numero, 0) / numeros.length;
    return promedio;
  };

  obtenerCantidad = async () => {
    const numeros = await this.numerosMem.obtenerNumeros();
    return numeros.length;
  };

  obtenerMinMax = async () => {
    const numeros = await this.numerosMem.obtenerNumeros();

    const min = numeros.reduce((min, n) => (n.numero < min ? n.numero : min),numeros[0].numero)

    const max = numeros.reduce((max, n) => (n.numero > max ? n.numero : max),numeros[0].numero);

    return { min, max };
  };

  guardarNumero = async (numero) => {
    const numeroGuardado = await this.numerosMem.guardarNumero(numero);
    return numeroGuardado;
  };
}

export default ServicioNumeros;

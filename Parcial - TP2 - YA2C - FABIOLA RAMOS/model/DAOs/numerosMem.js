class NumerosMem {
  constructor() {
    this.numeros = [
      {
        numero: 20,
      },
      {
        numero: 30,
      },
      {
        numero: 40,
      },
      {
        numero: 50,
      },
    ];
  }

  obtenerNumeros = async () => {
    try {
      return this.numeros;
    } catch (error) {
      console.log("error en obtenerNumeros", error);
      return [];
    }
  };

  guardarNumero = async (numero) => {
    try {
    const numeroConvertido = Number(numero.numero);
    const nuevoNumero = { numero: numeroConvertido };
    this.numeros.push(nuevoNumero);
    return nuevoNumero;
  } catch (error) {
    console.log("error en guardarNumero:", error);
    return {};
  }
  };
}

export default NumerosMem;

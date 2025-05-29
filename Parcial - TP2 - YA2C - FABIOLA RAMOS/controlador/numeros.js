import ServicioNumeros from "../servicio/numeros.js";

class ControladorNumeros {
  constructor() {
    this.servicioNumeros = new ServicioNumeros();
  }

  obtenerNumeros = async (req, res) => {
    try {
      const numeros = await this.servicioNumeros.obtenerNumeros();

      res.send(numeros);
    } catch (error) {
      console.log("error obtenerNumeros", error);
    }
  };

  obtenerPromedio = async (req, res) => {
    try {
      const promedio = await this.servicioNumeros.obtenerPromedio();
      res.json({ promedio });
    } catch (error) {
      console.log("error obtenerPromedio", error);
    }
  };

  obtenerCantidad = async (req, res) => {
    try {
      const cantidad = await this.servicioNumeros.obtenerCantidad();
      res.json({ cantidad });
    } catch (error) {
      console.log("error obtenerCantidad", error);
    }
  };

  obtenerMinMax = async (req, res) => {
    try {
      const minMax = await this.servicioNumeros.obtenerMinMax();
      if (minMax) {
        res.json(minMax);
      }
    } catch (error) {
      console.log("error obtenerMinMax", error);
    }
  };

  guardarNumero = async (req, res) => {
    try {
      const numero = req.body;
      const numeroGuardado = await this.servicioNumeros.guardarNumero(numero);

      res.json(numeroGuardado);
    } catch (error) {
      console.log("error guardarNumero", error);
    }
  };
}

export default ControladorNumeros;

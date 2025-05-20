import model from "../model/libros.js";

const obtenerLibros = (id) => {
  if (id) {
    const libro = model.obtenerLibro(id);
    return libro;
  } else {
    const libros = model.obtenerLibros();
    return libros;
  }
};

const guardarLibro = (libro) => {
  const guardarLibro = model.guardarLibro(libro);
  return guardarLibro;
};

const actualizarLibro = (id, libro) => {
  const LibroActualizado = model.actualizarLibro(id, libro);
  return LibroActualizado;
};

const borrarLibro = (id) => {
  const libroEliminado = model.borrarLibro(id);
  return libroEliminado;
};

export default {
  obtenerLibros,
  guardarLibro,
  actualizarLibro,
  borrarLibro,
};

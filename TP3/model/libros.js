const libros = [
  { id: "1", titulo: "El resplandor", autor: "Stephen King", anio: 1977 },
  {
    id: "2",
    titulo: "El silencio de los corderos",
    autor: "Thomas Harris",
    anio: 1988,
  },
  { id: "3", titulo: "Dracula", autor: "Bram Stoker", anio: 1897 },
];

const obtenerLibros = () => libros;

const obtenerLibro = (id) => {
  const libro = libros.find((p) => p.id === id);
  return libro || {};
};

const guardarLibro = (libro) => {
  libro.id = String(parseInt(libros[libros.length - 1]?.id || 0) + 1);
  libros.push(libro);
  return libro;
};

const actualizarLibro = (id, libro) => {
  const index = libros.findIndex((p) => p.id === id);
  if (index != -1) {
    const libroAnt = libros[index];
    const libroAct = { ...libroAnt, ...libro };
    libros.splice(index, 1, libroAct);
    return libroAct;
  } else {
    return null;
  }
};

const borrarLibro = (id) => {
  const index = libros.findIndex((p) => p.id === id);
  if (index != -1) {
    const libro = libros.splice(index, 1)[0];
    return libro;
  } else {
    return null;
  }
};

export default {
  obtenerLibro,
  obtenerLibros,
  guardarLibro,
  actualizarLibro,
  borrarLibro,
};

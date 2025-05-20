import express from 'express'
import controlador from '../controlador/libros.js'


const router = express.Router()

router.get('/:id?', controlador.obtenerLibros)
router.post('/', controlador.guardarLibro)
router.put('/:id', controlador.actualizarLibro)
router.delete('/:id', controlador.borrarLibro)


export default router
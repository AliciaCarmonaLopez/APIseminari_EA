import express from 'express';
import { 
    createSubjectHandler, 
    deleteSubjectHandler, 
    getAllSubjectsHandler, 
    getSubjectByIdHandler, 
    getSubjectStudentsHandler, 
    updateSubjectHandler 
} from './subject_controller.js'; // Ajusta la ruta de importación si es necesario

const router = express.Router();

/**
 * @openapi
 * /api/subject:
 *   post:
 *     summary: Crea una nueva materia
 *     description: Añade los detalles de una nueva materia.
 *     tags:
 *       - Subjects
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *               alumni:
 *                type: string
 *     responses:
 *       201:
 *         description: Materia creada exitosamente
 */
router.post('/subject', createSubjectHandler);

/**
 * @openapi
 * /api/subjects:
 *   get:
 *     summary: Obtiene todas las materias
 *     description: Retorna una lista de todas las materias registradas.
 *     tags:
 *       - Subjects
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 */
router.get('/subjects', getAllSubjectsHandler);

/**
 * @openapi
 * /api/subject/{id}:
 *   get:
 *     summary: Obtiene una materia por ID
 *     description: Retorna los detalles de una materia específica.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *       404:
 *         description: Materia no encontrada
 */
router.get('/subject/:id', getSubjectByIdHandler);

/**
 * @openapi
 * /api/subject/{id}:
 *   put:
 *     summary: Actualiza una materia por ID
 *     description: Modifica los detalles de una materia específica.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Materia actualizada exitosamente
 *       404:
 *         description: Materia no encontrada
 */
router.put('/subject/:id', updateSubjectHandler);

/**
 * @openapi
 * /api/subject/{id}:
 *   delete:
 *     summary: Elimina una materia por ID
 *     description: Elimina una materia específica de la base de datos.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Materia eliminada exitosamente
 *       404:
 *         description: Materia no encontrada
 */
router.delete('/subject/:id', deleteSubjectHandler);

/**
 * @openapi
 * /api/subject/{id}/students:
 *   get:
 *     summary: Obtiene los estudiantes de una materia
 *     description: Retorna una lista de estudiantes inscritos en una materia específica.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *       404:
 *         description: Materia no encontrada o sin estudiantes
 */
router.get('/subject/:id/students', getSubjectStudentsHandler);

export default router;

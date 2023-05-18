import { Router } from 'express';
const router = Router();
import { getAllReservations,getSingleReservation, deleteReservation, updateReservation, createResevation } from '../controllers/reservationController.js';

router.get('/', getAllReservations);
router.post('/', createResevation);
router.put('/:id', updateReservation);
router.delete('/:id', deleteReservation);
router.get('/:id', getSingleReservation)
//router.post("/", addReservation);

export default router;
import { Router } from 'express';
const router = Router();
import { getAllReservations,getSingleReservation, deleteReservation, updateReservation, addReservation } from '../controllers/reservationController.js';

router.get('/', getAllReservations);
//router.post('/', createReservation);
router.put('/:id', updateReservation);
router.delete('/:id', deleteReservation);
router.get('/:id', getSingleReservation);
router.post("/", addReservation);

export default router;
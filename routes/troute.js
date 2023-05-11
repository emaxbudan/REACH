
import express from 'express'
import { getAllTrips, addTrip, deleteTrip, UpdateTrip } from './../controllers/tcontroller.js';

const router = express.Router()

// create new Trip
router.post('/', addTrip);

//delete Trip
router.delete('/:id', deleteTrip);

//get all trips
router.get("/", getAllTrips);

// Update Trip
router.patch("/:id", UpdateTrip);

export default router;


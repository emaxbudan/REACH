
import express from 'express'
import { getAllTrips, createTrip, deleteTrip, UpdateTrip, getSingleTrip } from '../controllers/tripController.js';

const router = express.Router()

// create new Trip
router.post('/', createTrip);

//delete Trip
router.delete('/:id', deleteTrip);

//get all trips
router.get("/", getAllTrips);

// Update Trip
router.patch("/:id", UpdateTrip);

//get single trip
router.get('/:id', getSingleTrip);

export default router;


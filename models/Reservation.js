//reservation.js
//import { Schema as _Schema, reservationSchema as _reservationSchema } from 'mongoose';
//const Schema = _Schema;
import mongoose from "mongoose";


const reservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
},
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  seatNumber: {
    type: Number,
    required: true
  },
  from:{
    type: String,
    required: true
  },
  to: {
    trype: String,
    required: true
  }
});

//Es6 modules is to see how it works 
// Hey try to understand the commenting up

export const reservationModel = mongoose.model('Reservation', reservationSchema)
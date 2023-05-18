//reservation.js
//import { Schema as _Schema, reservationSchema as _reservationSchema } from 'mongoose';
//const Schema = _Schema;
import mongoose from "mongoose";


const reservationSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true
},
  date: {
    type: Date,
  },
  time: {
    type: String,
  },
  seatNumber: {
    type: Number,
  },
  from:{
    type: String,
  },
  to: {
    trype: String,
  }
});

//Es6 modules is to see how it works 
// Hey try to understand the commenting up

export const reservationModel = mongoose.model('Reservation', reservationSchema)
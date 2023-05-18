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

//Es6 methods

export const reservationModel = mongoose.model('Reservation', reservationSchema)
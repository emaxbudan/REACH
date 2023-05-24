//reservation.js
//import { Schema as _Schema, reservationSchema as _reservationSchema } from 'mongoose';
//const Schema = _Schema;
import mongoose from "mongoose";


const reservationSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true
},
 
  // time: {
  //   type: String,
  // },
  // seatNumber: {
  //   type: Number,
  // },
  from:{
    type: String,
  },
  to:{
    type: String,
  },
  date:{
    type: String,
  },
});

//Es6 modules is to see how it works 

export const reservationModel = mongoose.model('Reservation', reservationSchema)
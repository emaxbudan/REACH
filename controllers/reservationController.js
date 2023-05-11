let reservation = [];
//import reservation from "../models/reservation.js";


 //reservationController = {
   //getAllReservations: async (req, res) => {
    //const reservations = await reservations.find({});
   // res.status(200).json({
    //  data: reservations
  //  });
 // },

 
  export function addReservation(req, res){
    reservation = reservation.push({
      ...req.body, id: (reservation.length + 1).toString()

    });
    res.send("Your Reservation as been placed Successfully!!").end;
  }

  export function getAllReservations(req, res) {
    res.satus(reservation).end();
  }

   //function createReservation: async (req, res) => {
   // const reservation = await reservation.create({
   //   name: req.body.name,
   //   date: req.body.date,
   //   time: req.body.time,
   //   guests: req.body.guests
   // });
  //  res.status(200).json({
   //   data: reservation
   // });
 // },

 export function getSingleReservation(req,res){
  const reservation = reservation.find(r => r.id === req.params.reservationby_Id);
  res.send(reservation).end;
 }

   export function updateReservation(req, res) {
     reservation = reservation.findByIdAndUpdate(
      { _id: req.params.id },
     req.body
    );
    res.status(200).json({
      data: reservation
    });
  }

 // deleteReservation: async (req, res) => {
 // },
  
    export function deleteReservation(req, res) {
      reservation = users.filter(r => r.id !== req.params.userId);
       res.send("reservation deleted").end();
    }

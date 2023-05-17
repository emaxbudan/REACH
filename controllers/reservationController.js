import Reservation from "../models/Reservation.js";

 

 
export const createResevation = async (req, res) =>{
  const newReservation  =new Reservation(req.body); 
  try{ 
    const savedReservation = await newReservation.save();
    res.status(200).json({success: true, message: "Your reservation has been placed successfully", data: savedReservation});
    console.log("e work");
  }catch (error){
    console.log(error)
    res.status(500).json({success: false, message: "Failed to place your reservation. Try again"});
  }
};


  //  export function addReservation(req, res){
    
  //    const newReservation = Reservations.create({
  //      ...req.body, id: (newReservation.length + 1).toString()
     
  //    });
  //   res.send("Your Reservation as been placed Successfully!!").end;
  //  }

  //  export async function addReservation(req,res){
  //     try{
  //        let reservation = await Reservations.create({
  //          name: req.body.name,
  //          date: req.body.date,
  //          time: req.body.time,
  //          seatNumer: req.body.seatNumer
  //        })

  //       res.status(200).json(reservation);
  //      }catch(e){
  //        res.status(500).json(e).end()
  //      }
      
  //    }
 
  

  // export function getAllReservations(req, res) {
  //   res.send(Reservations).end();
  // }

export const getAllReservations= async (req,res) =>{
   // For getting pages
   const page = parseInt(req.query.page)
   console.log(page);
  try{
    const reservation = await Reservation.find({});
    res.status(200).json({success: true, message:"Successful", data: reservation});
  }catch(error){
    res.status(500).json({success: false, message: "failed"});
  }
};



export const getSingleReservation = async (req, res) =>{
  const id = req.params.id
  try{
    const singleReservation = await Reservation.findById(id, {$set:req.body}, {new:true});
    res.status(200).json({success: true, message:"Successful", data: singleReservation});
  }catch (error){
    res.status(500).json({success: false, message:"Failed"});
  }
};



   export const updateReservation = async(req, res) => {
    const id = req.params.id
  try{
    const updatedReservation = await Reservation.findByIdAndUpdate(id, {$set:req.body}, {new:true});
      res.status(200).json({success: true, message: "sucessful", data: updatedReservation});
    }catch (error){
      console.log(error)
      res.status(500).json({success: false, message:"failed to update reservation"});
    }
  };

 export const deleteReservation = async (req, res) => {
  try{
    const  deletedReservation = await Reservation.findByIdAndDelete( { _id: req.params.id },
      req.body);
       res.status(200).json({success: true, message:"Deleted", data: deletedReservation});
    }catch (error){
      console.log(error)
    }
 };
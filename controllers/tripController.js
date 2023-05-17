//import Trip from "../models/Trip";

import Trip from '../models/Trip.js'
//let Trip = []


// create new tour

export const createTrip = async (req, res) =>{
    const newTrip = new Trip(req.body);
try{
    const savedTrip= await newTrip.save();
    res.status(200).json({success: true,message:"successfully created" ,data: savedTrip });
} catch(err){
    console.log(err)
    res.status(500).json({success: false, message:" Failed to createTrip" });

}






// export function addTrip(req,res) {

//      Trip.save({
//         ...req.body, 
//         id: (createTrip.length + 1).toString()
//        });
//        res.send("Trip Added Successfully").end();
    // try{
    //     const savedTrip = Trip.save();
    //     res.status(200).json({success:true, message: 'Sucessfully created', data:savedTrip});
    // }catch (err){
    //     res.status(500).json({success:false, message: 'failed to create. Try again'});
    // }
};

// export function getAllTrips(req, res) {
//     res.send(Trip).end();

// }


export const getAllTrips = async(req, res) =>{
     // For getting pages
     const page = parseInt(req.query.page)
     console.log(page);
    try{
        const trips = await Trip.find({});
        res.status(200).json({success: true, message: "Successful", data: trips});
    }catch (error){
        res.status(500).json({success: false, message: "failed"});
    }
};

export const getSingleTrip = async (req, res) => {
    const id = req.params.id;
    try{
        const singleTrip = await Trip.findById(id);
        res.status(200).json({success: true, message:"Successsful", data: singleTrip});
    }catch (error){
        console.log(error)
        res.status(500).json({success: false, message:"Failed"});
    }
};

export const UpdateTrip = async(req, res) => {
   const id = req.params.id;
    try{
     const updatedTrip = await Trip.findByIdAndUpdate(id, {$set:req.body}, {new:true});
     res.status(200).json({success: true, message:"Updated Successfully", data:updatedTrip});
    }catch (error){
     console.log(error)
     res.status(500).json({success:false, message:"Failed to Update"});
    }
};


export const deleteTrip = async(req, res) => {
   const id = req.params.id;
   try{
    const deletedTrip = await Trip.findByIdAndDelete(id);
    res.status(200).json({success:true, message: "deleted Succesfully", data: deletedTrip});
   }catch (error){
   res.status(500).json({success: fales, message:"Failed to delete Trip"});
   }
};
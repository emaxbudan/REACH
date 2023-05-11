//import Trip from "../models/Trip";

//import Trip from '../models/Trip.js'
let Trip = []


// create new tour
export function addTrip(req,res) {

       Trip.push({
        ...req.body, 
        id: (Trip.length + 1).toString()
       });
       res.send("Trip Added Successfully").end();
   // try{
       // const savedTrip = Trip.save();
       // res.status(200).json({success:true, message: 'Sucessfully created', data:savedTrip});
   // }catch (err){
       // res.status(500).json({success:false, message: 'failed to create. Try again'});
  //  }
};

export function getAllTrips(req, res) {
    res.send(Trip).end();

}

export function UpdateTrip(req, res) {
    UpdateTrip = Trip.findByIdAndUpdate(r => {
       if (r.id === req.params.id){
            return{...r, ...req.body};
       }
       return r;
        
        })
    res.send("Trip has been updated Successfully").end();
}


export function deleteTrip(req, res) {
    deleteTrip =Trip.findOneAndDelete(r => r.id !== req.params.id);
    res.send("Trip deleted").end();
}
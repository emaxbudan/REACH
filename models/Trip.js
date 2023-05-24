//const {Schema, model} = require("mongoose");
import mongoose from "mongoose";

const tripSchema = new mongoose.Schema ({
    title: {
        type: String,
        // require: true,
        // unique: true,
    },
    from: {
        type: String,
    },
    to: {
        type: String,
    },
    distance: {
        type: Number,

    },
    photo: {
        type: String,
    },
    vehicle_number: {
        type: Number,
    },
    price: {
        type: Number,
    },
    vehicle_capacity: {
        type: Number,
    },
    bus_type: {
        type: String,
    },
    departure_time: {
        type: String,
    },
    reviews: [
        {
            type:String,
            // type: mongoose.Type.ObjectId,
            ref: "Review",
        }
    ],
    featured: {
        type: Boolean,
        default: false,
    },
})
// },
// {timesstamps: true}
 

export default mongoose.model("Trip", tripSchema);
//module.exports = mongoose('Trip', tripSchema);

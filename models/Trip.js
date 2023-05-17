//const {Schema, model} = require("mongoose");
import mongoose from "mongoose";

const tripSchema = new mongoose.Schema ({
    title: {
        type: String,
        require: true,
        unique: true,
    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        reuired: true,
    },
    distance: {
        type: Number,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    vehicle_number: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    vehicle_capacity: {
        type: Number,
        required: true,
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

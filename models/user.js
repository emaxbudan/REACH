/*const {Schema, model} = require("mongoose");

const userSchema = Schema ({
   name: String,
   username: {
      type: String,
      unique: true
   },
   password: {
      type: String
   },
   role: {
      type:String,
      default: "CHEF",
      enum: ["SOUS_CHEF", "CHEF"]
   }
})

const userModel = model("User", userSchema);
module.exports = {
   userModel
}*/





import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
    },

    role: {
      type: String,
      default: "user",
      enum: ["Admin", "user"],
    },
  },
  { timestamps: true }
)

//  const userModel = model("User", userSchema);
//   module.exports = {
//      userModel
// }

// export default mongoose.userModel("user", userSchema);

export default userSchema;

//module.exports = {
 // userModel
//}
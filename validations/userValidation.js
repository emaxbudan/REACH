import  { z } from "zod";

export const registerValidator = z.object({
    name: z.string().min(6,{message:"username should exceed 6 characters"}),
    email: z.string().email({message: "ensure it is a valid email"}).include("@"),
    role: z.enum(["Admin", "user"]),
    password: z.string().min(6).max(24).trim()
}).required({message:"Fill all the field with the correct details"})

export const updateValidator = z.object({
    name: z.string().min(6,{message:"username should exceed 6 characters"}),
    email: z.string().email({message: "ensure it is a valid email"}).include("@"),
    role: z.string(),
    password: z.string().min(6).max(24).trim()
}).required({message:"Fill all the field with the correct details"})

export const loginValidator = z.object({
    email: z.string().email({message: "ensure it is a valid email"}).include("@"),
    password: z.string().min(6).max(24).trim()

})

// module.exports = {
//     registerValidator,
//     updateValidator,
//     loginValidator
// }

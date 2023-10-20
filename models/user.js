import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        }
    }, 
    { timestamps: true }
);

const User = models.user || mongoose.model('User', userSchema);
export default User;
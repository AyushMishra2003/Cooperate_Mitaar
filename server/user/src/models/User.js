import { model, Schema } from "mongoose";


const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: [true, 'User name is required'],
            unique: true,
            trim: true,
            minlength: [3, 'User name must be at least 3 characters long'],
            maxlength: [30, 'User name must be at most 30 characters long']
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
            index: true,
        },
        password:{
             type:String,
             required:[true,'Password is required'],
             minlength:[6,'Password must be at least 6 characters long'],
             select:false
        },
        isVerified:{
             type:Boolean,
             default:false
        },
        isActive:{
             type:Boolean,
             default:true
        }
    },
    {
        timestamps: true
    }
)


userSchema.index({email: 1});
const User = model('User', userSchema);

export default User;
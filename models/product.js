// import mongoose 
import mongoose from "mongoose";
 
// Buat Schema
const product = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
});
 
// export model
export default mongoose.model('products', product);
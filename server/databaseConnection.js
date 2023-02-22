import mongoose from "mongoose";

const connectToDatabase = () => {
    mongoose.connect("mongodb://localhost:27017/adminPanelEcommerce").then(() => {
        console.log("Database connection successful")
    }).catch((err) => {
        console.log(err)
    })
}

export default connectToDatabase


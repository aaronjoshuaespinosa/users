import mongoose from "mongoose";

const main = async() => {
    await mongoose.connect("mongodb+srv://eyron:jghP7MqrU5RwHOAP@mycluster.pfafe6g.mongodb.net/?retryWrites=true&w=majority")
    console.log("Connection Established.")
}

export default main;
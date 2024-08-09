const mongoose=require('mongoose');
const initData=require("./data.js");
const Listing=require("../models/listing.js");

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27018/wanderlust');
}

main()
.then(()=>{
    console.log("connected to mongoDb");
}).catch((err)=>{
    console.log(err.message);
})


const initDB=async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
}

initDB();

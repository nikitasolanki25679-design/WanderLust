const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

const MONGO_URL='mongodb://127.0.0.1:27017/wanderlust';
async function main(){
    await mongoose.connect(MONGO_URL);
}  
main()
  .then(()=>{ console.log("cunnecting success to db");})
  .catch((err)=>{ console.log(err); });

  const initDB=async()=>{
    await Listing.deleteMany({});  //to delete all extra data
    initData.data=initData.data.map((obj)=>({...obj, owner:"6ac0e2ee56270ca786d7646e"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialize");
  }
  initDB();
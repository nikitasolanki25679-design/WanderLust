const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Review = require("./review.js");

const defaultURL="https://www.google.com/search?q=nature+img&rlz=1C1GCEA_enIN1161IN1161&oq=nature+img&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABixAxiABDIKCAIQABixAxiABDIKCAMQABixAxiABDIKCAQQABixAxiABDIHCAUQABiABDIKCAYQABixAxiABDIHCAcQABiABDIKCAgQABixAxiABDIKCAkQABixAxiABNIBCTkxMzZqMGoxNagCCLACAfEF1X35NawVrsA&sourceid=chrome&source=chrome.rb&ie=UTF-8#sv=CAMSZxowKg43emQtSDJWYU9JX05fTTION3pkLUgyVmFPSV9OX006DkNOTWZhb2xQTkZDcnBNIAQqLwobX3REaURhdlBxQVpDZWh2Y1B6XzZhOFFrXzQ4Eg43emQtSDJWYU9JX05fTRgAMAEYByDdx5muCEoIEAEYASABKAE";
const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
  
    image:{
      url:String,
      filename:String,
        },
    price: Number,
    location:String,
    country:String,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:Review,
        },
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    geometry:{
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
}
});

listingSchema.post("findOneAndDelete",async (listing)=>{
  if(listing){
    await Review.deleteMany({_id:{ $in: listing.reviews}});
  }   
});

const listing=mongoose.model("listing",listingSchema);
module.exports=listing;
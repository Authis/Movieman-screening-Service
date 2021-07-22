const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Screening = new Schema({
 
  movieID: ObjectId,
  theatreID: ObjectId,
  screeningTime:Date,
  ticketPrice:String,
  pocName: String,
  pocNo: String,
  minBids:String,
  maxBids: String,
  totalBids:String,
  insertedDate: Date,
  updatedDate: Date,


});

const screening = mongoose.model("Screening", Screening);

module.exports = screening;

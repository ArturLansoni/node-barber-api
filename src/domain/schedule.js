"use strict";
const Mongoose = require("mongoose");

const schedule = new Mongoose.Schema({
  offersId: { type: Mongoose.Schema.Types.ObjectId, ref: "offers" },
  clientId: { type: Mongoose.Schema.Types.ObjectId, ref: "client" },
  scheduledFor: { type: String },
  paymentType: { type: String },
  isCanceled: { type: Boolean },
});

module.exports = Mongoose.model("schedule", schedule);

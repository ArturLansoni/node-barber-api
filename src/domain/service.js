"use strict";
const Mongoose = require("mongoose");

const service = new Mongoose.Schema({
  price: { type: Number },
  description: { type: String },
  image: { type: String },
  estimatedTime: { type: Number },
});

module.exports = Mongoose.model("service", service);

const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  item_name: {
    type: String,
    required: true,
  },
  imgs: {
    type: Array,
    required: true,
  },
  order_date: {
    type: Date,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  print: {
    type: String,
    required: true,
  },
  colors: {
    type: String,
    required: true,
  },
  received_date: {
    type: Date,
  },
  suplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "suplier_detail",
  },
  created_by: {
    type: String,
  },
  created_time: {
    type: Date,
    default: Date.now,
  },
  last_updated_by: {
    type: String,
  },
  last_updated_time: {
    type: Date,
    default: Date.now,
  },
});

const orderCollection = new mongoose.model("order_details", orderSchema);
module.exports = orderCollection;

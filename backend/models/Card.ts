const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
},{timeStamp: true});

export const Card = mongoose.models.cardSchema || mongoose.model("Card", cardSchema);
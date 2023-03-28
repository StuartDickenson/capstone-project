import mongoose from 'mongoose'

const footprintSchema = new mongoose.Schema({
  title: { type: String, required: true },
  provider: String,
  rating: String,
  CO2e: Number,
})

const Footprint = mongoose.model('Footprint', footprintSchema)

export default Footprint

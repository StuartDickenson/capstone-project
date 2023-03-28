import mongoose from 'mongoose'
import { DB_URI } from '../config/environment.js'

export function connectDb() {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  return mongoose.connect(DB_URI, opts)
}

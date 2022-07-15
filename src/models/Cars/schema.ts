import { Schema, Document, model } from 'mongoose';
import { CarSchema } from '../../types/models/Cars';

const collection = 'autos';

export interface CarSchemaWithDocument extends CarSchema, Document {
  // add more field
}

const carSchema = new Schema<CarSchemaWithDocument>({
  name: {
    type: String,
    required: true
  },
  maker: {
    type: String
  },
  car_type:{
    type: String
  },
  price_mxn:{
    type: Number
  },
  price_usd:{
    type: Number
  },
  description_es:{
    type: String
  },
  description_en:{
    type: String
  },
  models:{
    type: [String],
  }
}, {
  collection,
  versionKey: false,
  timestamps: true,
})

export default model(collection, carSchema)
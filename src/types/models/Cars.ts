import { Types } from 'mongoose';

export interface CarSchema {
  name: string;
  maker: string;
  car_type: string;
  price_mxn: number;
  price_usd: number;
  description_es: string;
  description_en: string;
  models: Types.Array<string>,
  selectedColor?: string;
}

export interface CarSchemaId {
  _id: string,
  name: string;
  maker: string;
  car_type: string;
  price_mxn: number;
  price_usd: number;
  description_es: string;
  description_en: string;
  models: Types.Array<string>,
  selectedColor?: string;
}
import { FastifyRequest } from "fastify";
import  Cars from '../models/Cars'

export const handleCar = async () => {
  const cars = await Cars.getCars();
  return cars;
}

export default {
  handleCar
};
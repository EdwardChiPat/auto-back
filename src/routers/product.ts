import { FastifyInstance } from 'fastify';
import { handleCar } from '../controllers/product';

const productRouters = async (app: FastifyInstance) => {
  app.get('/getProducts', handleCar)
}

export default productRouters;
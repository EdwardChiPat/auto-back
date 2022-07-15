import { FastifyInstance } from 'fastify';
import { handlePayment }  from '../controllers/payment';

const paymentRouters = async (app: FastifyInstance) => {
  app.post('/sendPayment', handlePayment)
}

export default paymentRouters;
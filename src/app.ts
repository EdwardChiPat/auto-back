import fastify, { FastifyServerOptions } from 'fastify';
import productRouters from './routers/product';
import paymentRouters from './routers/payment';

const buildApp = (options: FastifyServerOptions) => {
  const app = fastify(options);

  app.get('/', async () => 'OK')
  app.register(productRouters, {prefix: '/car'});
  app.register(paymentRouters, {prefix: '/pay'});

  app.setErrorHandler((error, request, reply) => {
    reply
      .status(error.statusCode || 500)
      .send({
        error: {
          message: error.message,
          code: error.code
        }
      })
  })

  return app;
}

export default buildApp;
import { FastifyRequest } from 'fastify'
import { CarSchemaId } from '../models/Cars';

export type PaymentBodyRequest = FastifyRequest<{
  Body:{
    name: string;
    lastname: string;
    card: number;
    cvv: number;
    year: number;
    month: number;
    advanced: number;
    msi: number;
    product: [CarSchemaId],
    total: number
  }
}>
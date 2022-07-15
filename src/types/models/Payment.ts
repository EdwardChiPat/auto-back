import { CarSchemaId } from './Cars';

export interface MSI {
  month: number;
  pay: number;
};

export interface IPayment {
  name: string;
  lastname: string;
  card: string;
  cvv: string;
  year: string;
  month: string;
  advanced: string;
  msi: string;
  product: CarSchemaId[],
  total: number
}
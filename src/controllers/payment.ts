import Payment from 'payment';
import { PaymentBodyRequest } from '../types/controllers/payment';
import Car from '../models/Cars';
import { MSI } from '../types/models/Payment';
import { validate } from '../types/ajv/payment';

export const handlePayment = async (request: PaymentBodyRequest) => {
  const {name, lastname, card, cvv, year, month, advanced, msi, product, total } = request.body;
  const valid = validate(request.body);
  if(valid.error){
    return valid;
  } else {
    if(Payment.fns.validateCardExpiry(month.toString(), year.toString())){
      if(Payment.fns.validateCardNumber(card.toString()) && Payment.fns.validateCardCVC(cvv.toString())){
        if(product.length > 0){
          let ids: Array<String> = [];
          product.map(item =>
            ids.push(item._id)
          )
          //const { error, message } = await Car.deleteCars(ids);
          /* if( error ){
            return {
              error, message
            }
          } else { */
            let pago = total - advanced;
            pago = pago / msi;
            let pays: Array<MSI> = [];
            for (let index = 1; index <= msi; index++) {
              pays.push({month: index, pay: pago})
            }
            return {
              error: false,
              message: "Felicidades",
              data: {
                success: "Payment",
                name: `${name} ${lastname}`,
                deadlines: pays,
                products: product,
                advanced,
                msi
              }
            }
  
          /* } */
        } else {
          return {
            error: true,
            message: "No hay productos"
          }
        }
      } else {
        return {
          error: true,
          message: "La tarjeta no es correcta"
        }
      }
    } else {
      return {
        error: true,
        message: "La fecha esta vencida"
      }
    }
  }
  return `handlePayment ${name} ${lastname}`
}

export default {
  handlePayment
}
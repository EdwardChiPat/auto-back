import Ajv, { JSONSchemaType } from "ajv";
import { CarSchemaId } from "../models/Cars";
import { IPayment } from "../models/Payment";
const ajv = new Ajv();

const carShema: JSONSchemaType<CarSchemaId[]> = {
  type: "array",
  items: {
    type: 'object',
    properties: {
      _id: {
        type: 'string'
      },
      name: {
        type: 'string'
      },
      maker: {
        type: 'string'
      },
      car_type: {
        type: 'string'
      },
      price_mxn: {
        type: 'number'
      },
      price_usd: {
        type: 'number',
      },
      description_es: {
        type: 'string'
      },
      description_en: {
        type: 'string'
      },
      models: {
        type: 'array',
        items: {
          type: 'string',
          nullable: true
        }
      },
      selectedColor: {
        type: 'string',
        nullable: true
      }
    },
    required: ['_id', 'name', 'maker', 'car_type', 'price_mxn', 'price_usd', 'description_es', 'description_en', 'models']
  },
  minItems: 1,
  maxItems: 3
};

const schema: JSONSchemaType<IPayment> = {
  type: "object",
  properties: {
    name: {
      type: 'string'
    },
    lastname: {
      type: 'string'
    },
    card: {
      type: 'string'
    },
    cvv: {
      type: 'string'
    },
    year: {
      type: 'string'
    },
    month: {
      type: 'string'
    },
    advanced: {
      type: 'string'
    },
    msi: {
      type: 'string'
    },
    product: carShema,
    total: {
      type: 'number'
    },
  },
  required: ['name', 'card', 'cvv', 'year', 'month', 'msi', 'product', 'total']
}

export const validate = (body: {}) => {
  const response = ajv.compile(schema);
  const valid = response(body);
  if(valid){
    return {
      error: false,
      message: "correcto"
    }
  } else {
    return {
      error: true,
      message: response.errors
    }
  }
}
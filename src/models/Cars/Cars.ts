
import Car from './schema';

export const getCars = async () => {
  const cars = await Car.find();
  return cars;
}

export const deleteCars = async (ids: Array<String>) => {
  let deleted: Array<Boolean> = [];
  let errorDeleted: Array<String> = [];
  ids.map(item => 
     Car.deleteOne({_id: item}).then(() =>
        deleted.push(true)
     )
     .catch(() => errorDeleted.push(item))
  )

  if(errorDeleted.length > 0){
    return {
      error: true,
      message: "Ocurrio un error al comprar"
    };
  } else {
    return {
      error: false,
      message: "Felicidades"
    };
  }
}

export default {
  getCars,
  deleteCars
}
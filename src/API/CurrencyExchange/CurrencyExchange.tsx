/**
  Esta es una función de React en TypeScript que utiliza la API de Fixer para convertir moneda de un tipo a otro.
  @param {string} from - El código de la moneda desde la cual se desea realizar la conversión. Por ejemplo,
  "USD" para dólares estadounidenses.
  @param {string} to - El parámetro "to" en la función "currencyExchange" es una cadena que representa el código de la moneda a la cual se debe convertir el monto. Por ejemplo, si el parámetro "from" es "USD" y el parámetro "to" es "EUR", significa que se debe convertir el monto a la moneda euro.
  @param {number} amount - La cantidad de moneda que se va a convertir.
  @returns La función `currencyExchange` devuelve los datos recibidos de la llamada a la API realizada mediante Axios. Los datos devueltos son el monto de la moneda convertida desde la moneda `from` a la moneda `to` para el `amount` dado.
 **/
import axios from 'axios';
import {API_KEY} from '@env';
import {ResultExchange} from './interface';

export const currencyExchange = async (
  from: string,
  to: string,
  amount: number,
): Promise<ResultExchange | false> => {
  try {
    const url = `https://data.fixer.io/api/convert?access_key=${API_KEY}&from=${from}&to=${to}&amount=${amount}`;
    const response = await axios.post(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.log('Error  currencyExchange :::', error);
    return false;
  }
};

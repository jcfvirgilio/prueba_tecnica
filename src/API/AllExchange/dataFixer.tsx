/**
  Esta función obtiene las últimas tasas de cambio de la API de Fixer utilizando una clave de API y devuelve las tasas y la fecha como un objeto.
  @returns Un objeto con dos propiedades: `exchangeRatesResult` y `dateResult`.
  `exchangeRatesResult` es un objeto con pares clave-valor que representan las tasas de cambio para diferentes  monedas, y `dateResult` es una cadena que representa la fecha en la que se obtuvieron las tasas de cambio.
 **/
import axios from 'axios';
import {API_KEY} from '@env';
import {ResultFixer} from './interface';

export const dataFixer = async () => {
  let exchangeRatesResult: {[key: string]: number} = {};
  let dateResult: string = '';

  try {
    const url = `https://data.fixer.io/api/latest?access_key=${API_KEY}&base=MXN`;
    const response = await axios.post<ResultFixer>(url);
    const {rates, date} = response.data;
    exchangeRatesResult = rates;
    dateResult = date;
  } catch (error) {
    return 'error';
  }
  return {exchangeRatesResult, dateResult};
};

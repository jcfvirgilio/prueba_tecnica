/**
 * Esta función obtiene los símbolos de las monedas desde una API fixer utilizando una clave de acceso y los devuelve como datos.
  @returns La función `dataSymbols` devuelve una Promesa que se resuelve en un objeto que contiene los símbolos de las monedas como claves y sus nombres completos correspondientes como valores. El objeto se obtiene realizando una solicitud POST a la API de Fixer con la clave de API proporcionada en las variables de entorno. Si hay un error, la función lo registra en la consola.
 **/
import axios from 'axios';
import {API_KEY} from '@env';

export const dataSymbols = async () => {
  try {
    const url = `https://data.fixer.io/api/symbols?access_key=${API_KEY}`;
    const response = await axios.post(url);
    return response.data.symbols;
  } catch (error) {
    console.log('Error Symbols:::', error);
  }
};

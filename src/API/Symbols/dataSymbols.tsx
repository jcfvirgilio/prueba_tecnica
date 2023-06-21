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

import axios from 'axios';
import {API_KEY} from '@env';

export const currencyExchange = async (
  from: string,
  to: string,
  amount: number,
) => {
  try {
    const url = `https://data.fixer.io/api/convert?access_key=${API_KEY}&from=${from}&to=${to}&amount=${amount}`;
    const response = await axios.post(url);
    return response.data;
  } catch (error) {
    console.log('Error  currencyExchange :::', error);
  }
};

import {useState, useEffect} from 'react';
import axios from 'axios';
import {API_URL, API_KEY} from '@env';
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
    console.log('Error fetching exchange rates:::', error);
  }

  return {exchangeRatesResult, dateResult};
};

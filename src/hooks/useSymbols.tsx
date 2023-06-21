import {useQuery} from '@tanstack/react-query';
import {dataSymbols} from '../API/Symbols/dataSymbols';

const fetchSymbols = async () => {
  const response = await dataSymbols();
  return response;
};

export const useSymbols = () => {
  const data = useQuery(['symbols'], fetchSymbols);

  return data;
};

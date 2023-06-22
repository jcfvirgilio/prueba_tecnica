/**
 Este código exporta un hook personalizado que utiliza el hook useQuery de @tanstack/react-query para obtener
datos desde el API de fixer y devuelve los datos.
@returns La función useSymbols está devolviendo los datos obtenidos desde la función fetchSymbols
utilizando el hook useQuery de la biblioteca @tanstack/react-query. Los datos se devuelven como un objeto con propiedades como data, isLoading, isError, error, isFetching, etc.
 */
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

/* Este código define una interfaz llamada `ResultFixer` que describe la estructura de un objeto
que tiene las siguientes propiedades: */
export interface ResultFixer {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: {[key: string]: number};
}

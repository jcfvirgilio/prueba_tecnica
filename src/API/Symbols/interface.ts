/* Este código está definiendo una interfaz llamada `ResultSymbols` que tiene dos propiedades: `success` de tipo
booleano y `symbols` de tipo objeto con claves de tipo string y valores de tipo string. La interfaz también se exporta,
lo que significa que se puede importar y utilizar en otras partes del código. */
export interface ResultSymbols {
  success: boolean;
  symbols: {[key: string]: string};
}

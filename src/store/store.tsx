/**
 Este es un conjunto de funciones para interactuar con AsyncStorage en una aplicación TypeScript React,
incluyendo guardar, eliminar, obtener y borrar datos.

@param {string} keyName - una cadena que representa la clave bajo la cual se almacenarán/recuperarán/eliminarán los datos en AsyncStorage.

@param {string} value - El valor que se almacenará en AsyncStorage. Puede ser una cadena o cualquier otro tipo de dato que se pueda convertir a cadena.

@returns La función saveItem devuelve una Promise que se resuelve con un valor booleano que indica si el elemento se guardó correctamente o no. La función deleteItem devuelve una Promise que se resuelve con un valor booleano que indica si el elemento se eliminó correctamente o no. La función getItem devuelve una Promise que se resuelve con un valor de cadena o null si no se encuentra el elemento. La función getAllKeys devuelve una Promise que se resuelve con una matriz de claves de todos los elementos almacenados.
**/
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveItem = async (
  keyName: string,
  value: string,
): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(keyName, value.toString());
    return true;
  } catch (error) {
    return false;
  }
};

export const deleteItem = async (key: string): Promise<boolean> => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
};

export const getItem = async (keyName: string): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(keyName);
  } catch (error) {
    return null;
  }
};

export const getAllKeys = async (): Promise<string[]> => {
  try {
    const allKeys = await AsyncStorage.getAllKeys();
    const allData = await AsyncStorage.multiGet(allKeys);
    return allData;
  } catch (error) {
    return [];
  }
};

export const clearAll = async (): Promise<boolean> => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (error) {
    return false;
  }
};

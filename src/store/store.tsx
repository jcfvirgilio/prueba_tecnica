import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveItem = async (
  keyName: string,
  value: string,
): Promise<boolean> => {
  try {
    if (value.trim()) {
      await AsyncStorage.setItem(keyName, value);
      console.log('Datos almacenados correctamente.');
      return true;
    }
    return false;
  } catch (error) {
    console.log('Error al almacenar los datos: ', error);
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
    return allKeys;
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

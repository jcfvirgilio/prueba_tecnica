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

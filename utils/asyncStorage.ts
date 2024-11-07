import AsyncStorage from "@react-native-async-storage/async-storage";

export const getItem = async (name: string) => {
  return await AsyncStorage.getItem(name);
};

export const setItem = async (name: string, value: string) => {
  await AsyncStorage.setItem(name, JSON.stringify(value));
};

export const deleteItem = async (name: string) => {
  await AsyncStorage.removeItem(name);
};

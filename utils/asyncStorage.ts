import AsyncStorage from "@react-native-async-storage/async-storage";

export const getItem = async (name: string) => {
  return await AsyncStorage.getItem(name);
};

export const setItem = async (name: string, value: string) => {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem(name, jsonValue);
};

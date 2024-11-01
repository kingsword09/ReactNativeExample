import {MMKV} from 'react-native-mmkv';
import {StateStorage} from 'zustand/middleware';

export const storage = new MMKV({
  id: 'example-storage',
  encryptionKey: 'example-encryption-key',
});

export const getMMKVItem = <T>(key: string): T => {
  return storage.getString(key) as unknown as T;
};

export const setMMKVItem = <T>(key: string, value: T) => {
  return storage.set(key, value as unknown as string);
};

export const removeMMKVItem = (key: string) => {
  return storage.delete(key);
};

export const mmkvStorage: StateStorage = {
  setItem: <T>(key: string, value: T) => setMMKVItem(key, value),
  getItem: (key: string) => getMMKVItem(key),
  removeItem: (key: string) => removeMMKVItem(key),
};

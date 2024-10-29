import { useEffect, useState } from "react";
import { getLocalStorageItem, setLocalStorageItem } from "../utils/local-storage";

export function usePersistedState<T>(key: string, initialValue: T) {
  const [value, setValue] = useState(() => {
    const item = getLocalStorageItem(key);
    return (item as T) || initialValue
  })

  useEffect(() => {
    setLocalStorageItem(key, value)
  }, [value])
  

  return [value, setValue] as const
}

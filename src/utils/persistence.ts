export function retrieveOrDefault<T>(key: string, defaultValue: T): T {
  const item = localStorage.getItem(key);

  if (item === null) {
    return defaultValue;
  }

  return item as T;
}

export function persist(key: string, value: any) {
  localStorage.setItem(key, value);
}

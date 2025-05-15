
type U = FormDataEntryValue | number | boolean
type ValidT<T> =
  T extends Record<string, U> ? T : never;

export const getData = <T>(form: HTMLFormElement, entity: ValidT<T>) => {
  const formData = new FormData(form);

  const data: Record<string,U > = {
    ...entity,
  };

  for (const [key, value] of formData) {
    if (typeof entity[key as keyof typeof entity] === 'boolean') {
      data[key] = value === 'on';
    } else if (typeof entity[key as keyof typeof entity] === 'number') {
      data[key] = Number(value as string);
    } else {
      data[key] = value;
    }
  }
  return data as T;
};

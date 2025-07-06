import { ObjectSchema } from 'yup';

export const isFormikFieldRequired = (schema: ObjectSchema<any>, key: string) => {
  const fieldSchema = schema?.fields[key];

  // @ts-ignore
  return fieldSchema?.spec?.optional === false;
};

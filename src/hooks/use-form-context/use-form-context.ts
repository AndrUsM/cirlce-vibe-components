import { FormikContextType, useFormikContext } from 'formik';

export function useFormContext<T = unknown>() {
  const formikContext = useFormikContext<T>();

  return formikContext as FormikContextType<T>;
}

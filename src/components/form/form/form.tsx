import React from 'react';

import { Formik, FormikConfig, Form as FormikForm, FormikHelpers } from 'formik';
import { ExtendedReactFunctionalComponent } from 'src/types';

interface FormProps<T = any> extends FormikConfig<T> {
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<any>;
}

export const Form: ExtendedReactFunctionalComponent<FormProps> = ({ children, ...formProps }) => {
  return (
    <Formik {...formProps}>
      {(formikContext) => (
        <FormikForm className="p-1 rounded-1">
          {typeof children === 'function' ? children(formikContext) : children}
        </FormikForm>
      )}
    </Formik>
  );
};

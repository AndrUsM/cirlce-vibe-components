import React from 'react';

import { useField } from "formik";

import { ExtendedReactFunctionalComponent } from "src/types";
import { FieldContextProvider } from "../field-context/field-context-provider";
import { FormControl } from '../form-control/form-control';

interface FormikFormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  formFieldName: string;
  isRequired?: boolean;
}

export const FormikFormControl: ExtendedReactFunctionalComponent<FormikFormGroupProps> = ({
  formFieldName,
  isRequired,
  className,
  children
}) => {
  const [{ value, onBlur }, { touched, error }, { setValue, setTouched, setError }] = useField<unknown>(formFieldName);

  return (
    <FieldContextProvider
      value={{
        value,
        name: formFieldName,
        isRequired,
        errors: error ?? null,
        touched,
        setTouched,
        setValue: (updatedValue) => {
          !touched && setTouched(true);
          setValue(updatedValue);
        },
        onBlur: (e: unknown) => {
          setTouched(true);
          onBlur(e);
        },

        setError: (err) => {
          !touched && setTouched(true);
          setError(err ?? undefined);
        }
      }}
    >
      <FormControl className={className}>{children}</FormControl>
    </FieldContextProvider>
  )
}
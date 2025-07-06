import React from 'react';

import { ExtendedReactFunctionalComponent } from 'src/types';
import { FormikFormControl } from '../formik-form-control';
import { Show } from 'src/components/show';
import { FormControlError } from '../form-control-error';
import { FormControlLabel } from '../form-control-label';

interface FormFieldProps {
  label?: string;
  formFieldName: string;
  isRequired?: boolean;
}

export const FormGroup: ExtendedReactFunctionalComponent<FormFieldProps> = ({
  label,
  formFieldName,
  isRequired,
  children,
}) => {
  return (
    <FormikFormControl isRequired={isRequired} formFieldName={formFieldName}>
      <Show.When isTrue={Boolean(label)}>
        <FormControlLabel>{label}</FormControlLabel>
      </Show.When>

      {children}

      <FormControlError />
    </FormikFormControl>
  );
};

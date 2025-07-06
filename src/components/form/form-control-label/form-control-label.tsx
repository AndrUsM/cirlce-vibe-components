import React, { useContext } from 'react';

import { ExtendedReactFunctionalComponent } from 'src/types';
import { FieldContext } from '../field-context/field-context';
import { Label } from '../label/label';

export const FormControlLabel: ExtendedReactFunctionalComponent = ({ children }) => {
  const { errors, name, isRequired } = useContext(FieldContext);

  return (
    <Label isRequired={isRequired} hasErrors={Boolean(errors?.length)}>
      {children}
    </Label>
  );
};


import React, { useContext } from 'react';

import { ExtendedReactFunctionalComponent } from "src/types";
import { FormError } from "../form-error/form-error";
import { FieldContext } from '../field-context/field-context';
import { getFormikFormControlError } from 'src/utils';

export const FormControlError: ExtendedReactFunctionalComponent = () => {
  const { errors } = useContext(FieldContext);

  return <FormError>{ errors ? getFormikFormControlError(errors) : null }</FormError>
}
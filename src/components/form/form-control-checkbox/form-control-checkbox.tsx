import React, { useContext } from 'react';

import { ExtendedReactFunctionalComponent } from '../../../types/extended-react-functional-component';
import { FieldContext } from '../field-context/field-context';
import { StackLayout } from 'src/components/layout';
import { FormControlError } from '../form-control-error';
import { Checkbox } from '../checkbox';
import { getFormikFormControlValue } from 'src/utils';

export const FormControlCheckbox: ExtendedReactFunctionalComponent<
  React.InputHTMLAttributes<HTMLInputElement>
> = (props) => {
  const { value, setValue, isRequired } = useContext(FieldContext);

  return (
    <StackLayout space="0.25rem">
      <Checkbox
        {...props}
        isRequired={isRequired}
        onChange={(e) => {
          const value = getFormikFormControlValue(e);
          setValue(value as unknown as string);
        }}
        checked={Boolean(value)}
      />

      <FormControlError />
    </StackLayout>
  );
};

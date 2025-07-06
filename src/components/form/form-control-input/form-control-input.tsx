import React, { useContext } from 'react';

import { CustomCssVariables } from '../../../types/custom-css-variables';
import { ExtendedReactFunctionalComponent } from '../../../types/extended-react-functional-component';
import { FieldContext } from '../field-context/field-context';
import { Input } from '../input';
import { getFormikFormControlValue } from 'src/utils';

export type TextInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export const FormControlInput: ExtendedReactFunctionalComponent<
  React.InputHTMLAttributes<HTMLInputElement>
> = (props) => {
  const fieldProvider = useContext(FieldContext);

  return (
    <Input
      {...props}
      {...fieldProvider}
      inputMode={props.inputMode ?? 'text'}
      onChange={(e) => {
        const value = getFormikFormControlValue(e);
        fieldProvider.setValue(value as unknown as string);
      }}
      style={
        {
          '--text-input-border-color':
            (fieldProvider.errors ?? '')?.length > 0
              ? 'var(--text-input-error-border-color)'
              : 'var(--text-input-default-border-color)',
          '--text-input-text-color': `var(${
            (fieldProvider.errors ?? '')?.length > 0
              ? '--text-input-error-text-color'
              : '--text-input-default-text-color'
          })`,
          '--text-input-outline-color':
            (fieldProvider.errors ?? '')?.length > 0
              ? 'var(--text-input-error-outline-color)'
              : 'transparent',
          '--text-input-background': `var(${
            (fieldProvider.errors ?? '')?.length > 0
              ? '--text-input-error-bg-color'
              : '--text-input-default-bg-color'
          })`,
        } as CustomCssVariables
      }
    />
  );
};

import React, { useContext } from 'react';
import { CustomCssVariables } from '../../../types/custom-css-variables';
import { ExtendedReactFunctionalComponent } from '../../../types/extended-react-functional-component';
import { FieldContext } from '../field-context/field-context';
import { getFormikTextreaFormControlValue } from 'src/utils';

import 'src/styles/text-input-generic-styles.scss';

export type TextAreaInputProps = Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>;

export const FormControlTextarea: ExtendedReactFunctionalComponent<
  React.InputHTMLAttributes<HTMLInputElement>
> = (props) => {
  const fieldProvider = useContext(FieldContext);

  return (
    // @ts-ignore
    <textarea
      rows={3}
      {...props}
      {...fieldProvider}
      inputMode={props.inputMode ?? 'text'}
      onChange={(e) => {
        const value = getFormikTextreaFormControlValue(e);
        fieldProvider.setValue(value as unknown as string);
      }}
      className={`text-input-generic-styles ${props.className ?? ''}`}
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

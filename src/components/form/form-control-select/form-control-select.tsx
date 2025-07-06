import React, { useContext } from 'react';

import { CustomCssVariables, ExtendedReactFunctionalComponent } from 'src/types';
import { FieldContext } from '../field-context/field-context';

import 'src/styles/text-input-generic-styles.scss';
import { Select } from '../select';

export const FormControlSelect: ExtendedReactFunctionalComponent<React.HTMLAttributes<HTMLSelectElement>> = ({
  children,
  ...props
}) => {
  const { inputMode, ...fieldProvider } = useContext(FieldContext);

  return (
    <Select
      {...props}
      {...fieldProvider}
      className="text-input-generic-styles"
      onChange={(e) => {
        const value = e.currentTarget.value;
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
    >
      {children}
    </Select>
  );
};

import React from 'react';
import classNames from 'classnames';

import { CenteredVertialLayout } from 'src/components/layout';
import { ExtendedReactFunctionalComponent } from 'src/types';
import { Label } from '../label/label';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isRequired?: boolean;
}

export const Checkbox: ExtendedReactFunctionalComponent<CheckboxProps> = ({
  children,
  isRequired = false,
  ...props
}) => {
  return (
    <label
      className={classNames({
        'cursor-disabled': Boolean(props?.disabled),
        'cursor-pointer': !Boolean(props?.disabled),
      })}
    >
      <CenteredVertialLayout space="0.25rem">
        <input {...props} type="checkbox" />

        <Label isRequired={isRequired}>{children}</Label>
      </CenteredVertialLayout>
    </label>
  );
};

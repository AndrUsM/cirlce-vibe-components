import React from 'react';
import classnames from 'classnames';

import { ExtendedReactFunctionalComponent } from 'src/types';

interface LabelProps {
  hasErrors?: boolean;
  isRequired?: boolean;
}

export const Label: ExtendedReactFunctionalComponent<LabelProps> = ({ children, hasErrors, isRequired }) => {
  return (
    <span
      className={classnames('text-base truncate min-h-3 block', {
        'text-default': !hasErrors,
        'text-error': hasErrors,
      })}
    >
      <span>
        {children}

        {isRequired ? ' *' : ''}
      </span>
    </span>
  );
};

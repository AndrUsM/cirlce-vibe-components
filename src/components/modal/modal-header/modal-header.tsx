import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { CenteredVertialLayout } from 'src/components/layout';
import { ExtendedReactFunctionalComponent } from 'src/types';

import './modal-header.scss';

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  onClose?: VoidFunction;
}

export const ModalHeader: ExtendedReactFunctionalComponent<ModalHeaderProps> = ({
  children,
  className,
  onClose,
  ...rest
}) => {
  return (
    <CenteredVertialLayout
      justifyContent="space-between"
      className={classNames('modal-header', className)}
      {...rest}
    >
      {children}

      <button className="modal-close" onClick={onClose}>
        ×
      </button>
    </CenteredVertialLayout>
  );
};

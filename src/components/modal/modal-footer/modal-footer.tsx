import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { ClusterLayout } from 'src/components/layout';
import { ExtendedReactFunctionalComponent } from 'src/types';

import './modal-footer.scss';

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  onClose?: VoidFunction;
}

export const ModalFooter: ExtendedReactFunctionalComponent<ModalFooterProps> = ({
  children,
  className,
  onClose,
  ...rest
}) => {
  return (
    <ClusterLayout
      alignItems='center'
      space='1rem'
      justifyContent="flex-start"
      className={classNames('modal-footer', className)}
      {...rest}
    >
      {children}
    </ClusterLayout>
  );
};

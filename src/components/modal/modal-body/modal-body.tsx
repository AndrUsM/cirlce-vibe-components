import classNames from "classnames";
import React, { HTMLAttributes } from "react";

import { ExtendedReactFunctionalComponent } from "src/types"

import './modal-body.scss';

export type ModalBodyProps = HTMLAttributes<HTMLDivElement>;

export const ModalBody: ExtendedReactFunctionalComponent<ModalBodyProps> = ({children, className, ...rest}) => {
  return (
    <div className={classNames('modal-body', className)} {...rest}>{children}</div>
  )
}
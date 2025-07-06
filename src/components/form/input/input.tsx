import React, { HTMLAttributes } from 'react';

import { ExtendedReactFunctionalComponent } from 'src/types';

import 'src/styles/text-input-generic-styles.scss';

export const Input: ExtendedReactFunctionalComponent<HTMLAttributes<HTMLInputElement>> = (props) => (
  <input className="text-input-generic-styles" {...props} />
);

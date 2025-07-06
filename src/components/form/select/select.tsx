import React, { HTMLAttributes } from 'react';

import { ExtendedReactFunctionalComponent } from 'src/types';

import 'src/styles/text-input-generic-styles.scss';

export const Select: ExtendedReactFunctionalComponent<HTMLAttributes<HTMLSelectElement>> = (props) => (
  <select className="text-input-generic-styles" {...props} />
);

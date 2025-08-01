import React from 'react';
import classNames from "classnames";
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize";

export type TextareaStyle = Omit<NonNullable<React.CSSProperties>, 'maxHeight' | 'minHeight'> & {
    height?: number;
};

export const Textarea: React.FC<TextareaAutosizeProps> = ({
  className,
  ...props
}) => {
  return <TextareaAutosize className={classNames("p-2 rounded-2 bg-tertiary", className)} {...props} />;
};

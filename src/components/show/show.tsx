import React from 'react';

interface ComponentWithChilren {
  readonly children?: React.ReactNode;
}

interface WhenComponentProps extends ComponentWithChilren {
  readonly isTrue: boolean;
}

export const Show = ({ children }: ComponentWithChilren) => {
  const whenChild = React.Children.toArray(children).find((child) => (child as React.ReactElement)?.type === Show.When);
  const elseChild = React.Children.toArray(children).find((child) => (child as React.ReactElement)?.type === Show.Else);

  return (whenChild as React.ReactElement<WhenComponentProps>)?.props.isTrue ? whenChild : elseChild || null;
};

Show.When = ({ children, isTrue }: WhenComponentProps) => {
  return isTrue ? <>{children}</> : null;
};
Show.Else = ({ children }: ComponentWithChilren) => <>{children}</>;

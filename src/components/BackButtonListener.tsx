import * as React from 'react';

type Props = {
  children: JSX.Element;
};

export const BackButtonListener = ({ children }: Props) => {
  React.useEffect(() => {
    window.onpopstate = () => {
      // window.location.reload();
    };
  });

  return children;
};

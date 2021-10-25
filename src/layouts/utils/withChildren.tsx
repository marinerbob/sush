import React, { FC, ReactElement } from 'react';

export type LayoutProps = {
  children: ReactElement;
};

const withChildren =
  (Component: FC) =>
  ({ children }: LayoutProps) =>
    <Component>{children}</Component>;

export default withChildren;

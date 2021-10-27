import React from 'react';

import { HashRouter as Router } from 'react-router-dom';

import { LayoutProps } from '@sush/layouts/utils/withChildren';

const RouterLayout = ({ children }: LayoutProps) => <Router>{children}</Router>;

export default RouterLayout;

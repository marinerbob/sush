import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { LayoutProps } from '../utils/withChildren';

const RouterLayout = ({ children }: LayoutProps) => <Router>{children}</Router>;

export default RouterLayout;

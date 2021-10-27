import React from 'react';
import Navbar from '@sush/components/navbar';
import Footer from '@sush/components/footer';

import { LayoutProps } from '@sush/layouts/utils/withChildren';

import './_markupLayout.css';

const MarkupLayout = ({ children }: LayoutProps) => (
  <div className="bg-gray-100 min-h-screen">
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default MarkupLayout;

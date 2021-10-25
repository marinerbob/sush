import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

import { LayoutProps } from '../utils/withChildren';

import './_markupLayout.css';

const MarkupLayout = ({ children }: LayoutProps) => (
  <div className="min-h-screen bg-gray-100">
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default MarkupLayout;

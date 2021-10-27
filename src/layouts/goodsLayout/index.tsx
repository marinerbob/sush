import React from 'react';

import GoodsFooter from '@sush/components/footer/goodsFooter';

import { LayoutProps } from '@sush/layouts/utils/withChildren';

const GoodsLayout = ({ children }: LayoutProps) => (
  <main>
    <div className="max-w-7xl mx-auto py-6 px-6 lg:px-8">
      {children}
      <GoodsFooter />
    </div>
  </main>
);

export default GoodsLayout;

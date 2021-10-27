import React from 'react';

import { useParams } from 'react-router-dom';

import GoodsLayout from '@sush/layouts/goodsLayout';

export default () => {
  const mealId = useParams();

  return (
    <GoodsLayout>
      <>{mealId}</>
    </GoodsLayout>
  );
};

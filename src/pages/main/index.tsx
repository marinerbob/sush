import React from 'react';

import GoodsLayout from '@sush/layouts/goodsLayout';
import GoodsCard from './goodsCard';

import './_main.css';

const MainPage = () => (
  <GoodsLayout>
    <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
      <GoodsCard key="Пицца" route="/goods/pizza" name="Пицца" isSoon={false} />
      <GoodsCard key="Суши" route="/goods/sushi" name="Суши" isSoon={false} />
      <GoodsCard key="WOK" route="/goods/wok" name="WOK" isSoon />
      <GoodsCard key="Супы" route="/goods/soups" name="Супы" isSoon />
      <GoodsCard key="Комбо" route="/goods/combo" name="Комбо" isSoon={false} />
      <GoodsCard key="С угрем" route="/goods/eel" name="С угрем" isSoon={false} />
    </div>
  </GoodsLayout>
);

export default MainPage;

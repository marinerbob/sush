import React from 'react';

import GoodsLayout from '@sush/layouts/goodsLayout';
import { useParams } from 'react-router-dom';

import mockImg from '@public/sush-logo.svg';
import GoodCard from './goodCard';

type GoodsParams = {
  goodsId: string;
};

const GoodsPage = () => {
  const { goodsId } = useParams<GoodsParams>();

  return (
    <GoodsLayout>
      <>
        <h1 className="text-center pb-6 font-bold text-2xl">{goodsId}</h1>
        <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
          <GoodCard
            key="Ролл Калифорния"
            name="Ролл Калифорния"
            img={mockImg}
            description="10 кусочков, 150гр."
            price={255}
          />
          <GoodCard
            key="Ролл Калифорния 2"
            name="Ролл Калифорния 2"
            img={mockImg}
            description="10 кусочков, 150гр."
            price={255}
          />
        </div>
      </>
    </GoodsLayout>
  );
};

export default GoodsPage;

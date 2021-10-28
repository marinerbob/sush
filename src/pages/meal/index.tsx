import React from 'react';

import { useParams } from 'react-router-dom';

import GoodsLayout from '@sush/layouts/goodsLayout';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import mockImg from '@public/sush-logo.svg';

type MealParams = {
  mealId: string;
};

export default () => {
  const { mealId } = useParams<MealParams>();

  return (
    <GoodsLayout>
      <>
        <article className="text-xl flex flex-col space-y-3 bg-white rounded-md py-4 px-3">
          <img className="w-full h-64" src={mockImg} alt="Meal img" />
          <h1 className="font-bold text-2xl">{mealId}</h1>
          <p className="text-yellow-500">36 кусочков, 1150гр.</p>
          <div className="w-full flex items-start space-x-4">
            <span className="font-bold text-3xl">1100 Р</span>
            <button
              type="button"
              className="flex-auto px-4 py-2 rounded-md bg-yellow-600 text-white"
            >
              Заказать
            </button>
          </div>
          <div className="space-y-3">
            <h2 className="w-full font-bold text-2xl text-center">Состав сета</h2>
            <Swiper
              className="w-full"
              modules={[Navigation]}
              cssMode
              navigation
              spaceBetween={50}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide className="p-4 h-56 bg-gray-100 flex justify-center items-center">
                1
              </SwiperSlide>
              <SwiperSlide className="h-56 bg-gray-100 flex justify-center items-center">
                2
              </SwiperSlide>
              <SwiperSlide className="h-56 bg-gray-100 flex justify-center items-center">
                3
              </SwiperSlide>
            </Swiper>
          </div>
        </article>
        <div className="space-y-3">
          <h3 className="w-full font-bold text-2xl text-center">Рекомендуем к этому товару</h3>
          <Swiper className="w-full" navigation modules={[Navigation]} spaceBetween={50}>
            <SwiperSlide className="h-56 bg-gray-100 flex justify-center items-center">
              1
            </SwiperSlide>
            <SwiperSlide className="h-56 bg-gray-100 flex justify-center items-center">
              2
            </SwiperSlide>
            <SwiperSlide className="h-56 bg-gray-100 flex justify-center items-center">
              3
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    </GoodsLayout>
  );
};

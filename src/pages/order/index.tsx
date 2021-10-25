import React from 'react';

import './_order.css';

const OrderPage = () => (
  <main>
    <div className="max-w-7xl mx-auto py-6 px-6 lg:px-8">
      <h1 className="text-center pb-6 font-bold text-2xl">Ваши данные</h1>
      <form action="#" method="post">
        <div className="grid grid-cols-2 gap-2">
          <input
            name="surname"
            type="text"
            className="outline-none p-3 border border-transparent focus:ring-yellow-500 focus:border-yellow-500 flex-1 block w-full rounded-md sm:text-sm"
            placeholder="Фамилия"
          />
          <input
            name="name"
            type="text"
            className="outline-none p-3 border border-transparent focus:ring-yellow-500 focus:border-yellow-500 flex-1 block w-full rounded-md sm:text-sm"
            placeholder="Имя"
          />
          <div className="flex overflow-hidden rounded-md bg-white col-span-2">
            <input
              className="hidden"
              type="radio"
              name="delivery-type"
              id="delivery-courier"
              value="courier"
            />
            <label
              className="form-toggle flex justify-center items-center flex-grow-1 w-1/2 h-full p-3 cursor-pointer"
              htmlFor="delivery-courier"
            >
              Курьером
            </label>
            <input
              className="hidden"
              type="radio"
              name="delivery-type"
              id="delivery-self"
              value="self"
              checked
            />
            <label
              className="form-toggle flex justify-center items-center flex-grow-1 w-1/2 h-full p-3 cursor-pointer"
              htmlFor="delivery-self"
            >
              Самовывоз
            </label>
          </div>
          <input
            name="address-street"
            type="text"
            className="col-span-2 outline-none p-3 border border-transparent focus:ring-yellow-500 focus:border-yellow-500 flex-1 block w-full rounded-md sm:text-sm"
            placeholder="Улица"
          />
          <input
            name="address-home"
            type="text"
            className="col-span-2 outline-none p-3 border border-transparent focus:ring-yellow-500 focus:border-yellow-500 flex-1 block w-full rounded-md sm:text-sm"
            placeholder="Дом"
          />
          <input
            name="address-flat"
            type="text"
            className="outline-none p-3 border border-transparent focus:ring-yellow-500 focus:border-yellow-500 flex-1 block w-full rounded-md sm:text-sm"
            placeholder="Кв."
          />
          <input
            name="address-section"
            type="text"
            className="outline-none p-3 border border-transparent focus:ring-yellow-500 focus:border-yellow-500 flex-1 block w-full rounded-md sm:text-sm"
            placeholder="Подъезд"
          />
          <div className="flex overflow-hidden rounded-md bg-white col-span-2">
            <input
              className="hidden"
              type="radio"
              name="payment-type"
              id="payment-card"
              value="card"
            />
            <label
              className="form-toggle flex justify-center items-center flex-grow-1 w-1/2 h-full p-3 cursor-pointer"
              htmlFor="payment-card"
            >
              Картой
            </label>
            <input
              className="hidden"
              type="radio"
              name="payment-type"
              id="payment-cash"
              value="cash"
              checked
            />
            <label
              className="form-toggle flex justify-center items-center flex-grow-1 w-1/2 h-full p-3 cursor-pointer"
              htmlFor="payment-cash"
            >
              Наличными
            </label>
          </div>
          <input
            name="surname"
            type="text"
            className="col-span-2 outline-none p-3 border border-transparent focus:ring-yellow-500 focus:border-yellow-500 flex-1 block w-full rounded-md sm:text-sm"
            placeholder="Email (необязательно)"
          />
          <input
            name="surname"
            type="text"
            className="col-span-2 outline-none p-3 border border-transparent focus:ring-yellow-500 focus:border-yellow-500 flex-1 block w-full rounded-md sm:text-sm"
            placeholder="Комментарий к заказу"
          />
          <div className="flex overflow-hidden rounded-md bg-white col-span-2">
            <input className="hidden" type="radio" name="time-type" id="time-now" value="now" />
            <label
              className="form-toggle flex justify-center items-center flex-grow-1 w-1/2 h-full p-3 cursor-pointer"
              htmlFor="time-now"
            >
              На сейчас
            </label>
            <input
              className="hidden"
              type="radio"
              name="time-type"
              id="time-scheduled"
              value="scheduled"
              checked
            />
            <label
              className="form-toggle flex justify-center items-center flex-grow-1 w-1/2 h-full p-3 cursor-pointer"
              htmlFor="time-scheduled"
            >
              На время
            </label>
          </div>
          <input
            name="surname"
            type="text"
            className="col-span-2 outline-none p-3 border border-transparent focus:ring-yellow-500 focus:border-yellow-500 flex-1 block w-full rounded-md sm:text-sm"
            placeholder="Введите промокод"
          />
          <button type="submit" className="col-span-2 p-3 rounded-md bg-yellow-600 text-white">
            Оформить заказ
          </button>
        </div>
      </form>
    </div>
  </main>
);

export default OrderPage;

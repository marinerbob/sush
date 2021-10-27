import React from 'react';

type GoodCardProps = {
  name: string;
  img: string;
  description: string;
  price: number;
};

const GoodCard = ({ name, img, description, price }: GoodCardProps) => (
  <article className="flex bg-white rounded-md py-4 px-3 space-x-4">
    <img className="w-40 h-auto" src={img} alt="Good Img" />
    <div className="flex flex-col justify-between space-y-3">
      <header>
        <h3 className="font-bold text-lg">{name}</h3>
      </header>
      <p className="text-gray-400">{description}</p>
      <footer className="flex justify-between items-start">
        <span className="font-bold text-3xl">{price} Р</span>
        <button type="button" className="p-2 rounded-md bg-yellow-600 text-white">
          Заказать
        </button>
      </footer>
    </div>
  </article>
);

export default GoodCard;

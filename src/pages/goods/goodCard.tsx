import React from 'react';

import { Link } from 'react-router-dom';

type GoodCardProps = {
  name: string;
  img: string;
  description: string;
  price: number;
};

const GoodCard = ({ name, img, description, price }: GoodCardProps) => (
  <Link to={`/meal/${name}`}>
    <article className="flex bg-white rounded-md py-4 px-3 space-x-4">
      <img className="w-40 h-auto" src={img} alt="Good Img" />
      <div className="w-full flex flex-col justify-between space-y-3">
        <header>
          <h3 className="font-bold text-lg">{name}</h3>
        </header>
        <p className="flex-auto text-gray-400">{description}</p>
        <footer className="w-full flex justify-between items-start">
          <span className="font-bold text-4xl">{price} Р</span>
          <button type="button" className="px-4 py-2 rounded-md bg-yellow-600 text-white">
            Заказать
          </button>
        </footer>
      </div>
    </article>
  </Link>
);

export default GoodCard;

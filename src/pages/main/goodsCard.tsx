import React from 'react';

import { Link } from 'react-router-dom';

type GoodsCardProps = {
  route: string;
  name: string;
  isSoon: boolean;
};

export default ({ route = '/', name, isSoon = false }: GoodsCardProps) => (
  <Link
    to={route}
    className="category-item overflow-hidden relative flex bg-gray-300 rounded-md p-3 h-64 bg-gradient-to-r from-yellow-300 to-red-400"
  >
    <div className="flex justify-between items-center absolute text-white font-bold z-10 top-6 left-6 right-6">
      <span className="text-3xl">{name}</span>
      {isSoon && <span className="leading-4 bg-red-400 px-3 py-2 rounded-2xl">СКОРО</span>}
    </div>
  </Link>
);

import React from 'react';

import './_main.css';

const MainPage = () => (
  <main className="bg-gray-100">
    <div className="max-w-7xl mx-auto py-6 px-6 lg:px-8">
      <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="category-item overflow-hidden relative flex bg-gray-300 rounded-md p-3 h-64 bg-gradient-to-r from-yellow-300 to-red-400">
          <div className="flex justify-between items-center absolute text-white font-bold z-10 top-6 left-6 right-6">
            <span className="text-3xl">Пицца</span>
          </div>
        </div>
        <div className="category-item overflow-hidden relative flex bg-gray-300 rounded-md p-3 h-64 bg-gradient-to-r from-yellow-300 to-red-400">
          <div className="flex justify-between items-center absolute text-white font-bold z-10 top-6 left-6 right-6">
            <span className="text-3xl">WOK</span>
          </div>
        </div>
        <div className="category-item overflow-hidden relative flex bg-gray-300 rounded-md p-3 h-64 bg-gradient-to-r from-yellow-300 to-red-400">
          <div className="flex justify-between items-center absolute text-white font-bold z-10 top-6 left-6 right-6">
            <span className="text-3xl">Супы</span>
            <span className="leading-4 bg-red-400 px-3 py-2 rounded-2xl">СКОРО</span>
          </div>
        </div>
        <div className="category-item overflow-hidden relative flex bg-gray-300 rounded-md p-3 h-64 bg-gradient-to-r from-yellow-300 to-red-400">
          <div className="flex justify-between items-center absolute text-white font-bold z-10 top-6 left-6 right-6">
            <span className="text-3xl">Суши</span>
            <span className="leading-4 bg-red-400 px-3 py-2 rounded-2xl">СКОРО</span>
          </div>
        </div>
        <div className="category-item overflow-hidden relative flex bg-gray-300 md:col-span-2 rounded-md p-3 h-64 bg-gradient-to-r from-yellow-300 to-red-400">
          <div className="flex justify-between items-center absolute text-white font-bold z-10 top-6 left-6 right-6">
            <span className="text-3xl">Комбо</span>
          </div>
        </div>
        <div className="category-item overflow-hidden relative flex bg-gray-300 rounded-md p-3 h-64 bg-gradient-to-r from-yellow-300 to-red-400">
          <div className="flex justify-between items-center absolute text-white font-bold z-10 top-6 left-6 right-6">
            <span className="text-3xl">С угрем</span>
          </div>
        </div>
        <div className="category-item overflow-hidden relative flex bg-gray-300 rounded-md p-3 h-64 bg-gradient-to-r from-yellow-300 to-red-400">
          <div className="flex justify-between items-center absolute text-white font-bold z-10 top-6 left-6 right-6">
            <span className="text-3xl">Чикен</span>
          </div>
        </div>
        <div className="category-item overflow-hidden relative flex bg-gray-300 md:col-span-2 rounded-md p-3 h-64 bg-gradient-to-r from-yellow-300 to-red-400">
          <div className="flex justify-between items-center absolute text-white font-bold z-10 top-6 left-6 right-6">
            <span className="text-3xl">Акции</span>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default MainPage;

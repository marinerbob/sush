import React from 'react';

import './_main.css';

const MainPage = () => (
  <div className="min-h-full">
    <nav className="border-b-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          <div className="flex flex-auto items-center">
            <div className="flex-shrink-0">
              <img className="h-12 w-12" src="/icons/sush-logo.svg" alt="Workflow" />
            </div>
          </div>
          <div className="flex flex-auto md:flex-col items-center justify-center tracking-tighter">
            <div className="leading-5 mr-3 md:mr-0 flex flex-col justify-items-center">
              <span className="font-semibold text-center">Наш телефон</span>
              <span className="font-semibold text-yellow-500">+7(800)555-35-35</span>
              <span className="font-semibold text-yellow-500">+7(800)555-35-35</span>
            </div>
            <div className="flex flex-col md:flex-row items-center md:gap-1">
              <img
                className="h-6 w-6"
                src="https://cryptologos.cc/logos/sushiswap-sushi-logo.svg"
                alt=""
              />
              <span className="text-sm leading-4 text-gray-400">работаем</span>
              <span className="text-sm leading-4 text-gray-400">с 10:00 до 00:00</span>
            </div>
          </div>
          <div className="flex flex-auto items-center justify-end">
            <img
              className="h-10 w-10"
              src="https://cryptologos.cc/logos/sushiswap-sushi-logo.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </nav>
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
    <div className="hidden" />
    <footer className="px-6 lg:px-8 bg-gray-100 text-gray-400">
      <h1 className="pb-4 font-bold text-4xl">Заказать суши</h1>
      <div className="relative">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, repellendus corrupti, quam
          dolorem ipsum perspiciatis hic reprehenderit cupiditate nisi dolor error porro commodi
          doloremque ex deleniti deserunt ab? Minima distinctio nihil, deleniti recusandae obcaecati
          totam sapiente quis dolorum error consequatur libero, quia quibusdam laudantium molestias
          cumque impedit nobis? Est dolore, facere dolorum voluptatum, ipsam culpa dicta nobis
          architecto recusandae, aut ipsum minus tempore iusto sequi quasi. Perspiciatis eum commodi
          rerum nemo sunt dolore cumque ratione voluptatem officia, magni voluptates fugiat tempore
          odio deleniti animi ipsam ea ipsum debitis. Recusandae praesentium aliquam a adipisci
          facere dolorem beatae ex molestias expedita architecto?
        </p>
        <div className="absolute bottom-0 h-24 pb-1 left-0 right-0 flex justify-center items-end text-2xl text-yellow-500 bg-gradient-to-t from-gray-100">
          Подробнее
        </div>
      </div>
      <div className="py-5 px-24 flex flex-col justify-center items-center">
        <h2 className="text-center mb-2">Выберите удобный мессенджер для общения</h2>
        <div className="w-full sm:w-64 flex justify-between items-center">
          <img
            className="h-10 w-10"
            src="https://cryptologos.cc/logos/sushiswap-sushi-logo.svg"
            alt=""
          />
          <img
            className="h-10 w-10"
            src="https://cryptologos.cc/logos/sushiswap-sushi-logo.svg"
            alt=""
          />
          <img
            className="h-10 w-10"
            src="https://cryptologos.cc/logos/sushiswap-sushi-logo.svg"
            alt=""
          />
        </div>
        <div>
          Тел: <span className="underline">+7(800)55-35-35</span>
        </div>
        <div>
          Тел: <span className="underline">+7(800)55-35-35</span>
        </div>
        <div>Адрес: Лентяево 229</div>
      </div>
    </footer>
  </div>
);

export default MainPage;

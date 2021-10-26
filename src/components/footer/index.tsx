import React from 'react';

import siteLogo from '@public/sush-logo.svg';

export default () => (
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
        odio deleniti animi ipsam ea ipsum debitis. Recusandae praesentium aliquam a adipisci facere
        dolorem beatae ex molestias expedita architecto?
      </p>
      <div className="absolute bottom-0 h-24 pb-1 left-0 right-0 flex justify-center items-end text-2xl text-yellow-500 bg-gradient-to-t from-gray-100">
        Подробнее
      </div>
    </div>
    <div className="py-5 px-24 flex flex-col justify-center items-center">
      <h2 className="text-center mb-2">Выберите удобный мессенджер для общения</h2>
      <div className="w-full sm:w-64 flex justify-between items-center">
        <img className="h-10 w-10" src={siteLogo} alt="VK socials button" />
        <img className="h-10 w-10" src={siteLogo} alt="Telegram socials button" />
        <img className="h-10 w-10" src={siteLogo} alt="WhatsUp socials button" />
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
);

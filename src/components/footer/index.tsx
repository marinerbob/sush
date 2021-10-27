import React from 'react';

import siteLogo from '@public/sush-logo.svg';

export default () => (
  <footer className="px-6 lg:px-8 bg-gray-100 text-gray-400">
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

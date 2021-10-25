import React from 'react';

export default () => (
  <nav className="border-b-2">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between py-2">
        <div className="flex flex-auto items-center">
          <div className="flex-shrink-0">
            <img className="h-12 w-12" src="/icons/sush-logo.svg" alt="Sush Logo" />
          </div>
        </div>
        <div className="flex flex-auto md:flex-col items-center justify-center tracking-tighter">
          <div className="leading-5 mr-3 md:mr-0 flex flex-col justify-items-center">
            <span className="font-semibold text-center">Наш телефон</span>
            <span className="font-semibold text-yellow-500">+7(800)555-35-35</span>
            <span className="font-semibold text-yellow-500">+7(800)555-35-35</span>
          </div>
          <div className="flex flex-col md:flex-row items-center md:gap-1">
            <img className="h-6 w-6" src="/icons/sush-logo.svg" alt="Search Logo" />
            <span className="text-sm leading-4 text-gray-400">работаем</span>
            <span className="text-sm leading-4 text-gray-400">с 10:00 до 00:00</span>
          </div>
        </div>
        <div className="flex flex-auto items-center justify-end">
          <img className="h-10 w-10" src="/icons/sush-logo.svg" alt="Clock" />
        </div>
      </div>
    </div>
  </nav>
);

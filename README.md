<img width="90" height="90" src="./public/icons/sush-logo.svg" alt="Project Logo" align="right">

# S U S H [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
> Ccылка на [бэк](https://github.com/eeravich/projectT-back).<br/>
> Ccылка на [задеплоенный фронт](https://marinerbob.github.io/sush/). </br>

Клиентская часть портала по доставке суши

## Установка / начало работы
Для сборки проекта необходимо ввести следующие команды (пока нет Docker-образа)

`npm i && npm run build`

`npm i` - Установка зависимостей

`npm run build` - Команда для продакшн-сборки проекта

## Разработка
### Используемый стек
- Ядро
  - Язык - [TypeScript v4](https://github.com/microsoft/TypeScript)
  - Библиотека рендеринга - [React v17](https://github.com/facebook/react)
  - Стейт-менеджмент - [Mobx v6](https://github.com/mobxjs/mobx)
  - Маршрутизация на клиенте - [React Router v5](https://github.com/remix-run/react-router)
  - Сборка - [Webpack v5](https://github.com/webpack/webpack)
  - Линтинг - [eslint](https://github.com/eslint/eslint)+плагины для TS-кода, [stylelint](https://github.com/stylelint/stylelint) для CSS-кода, [prettier](https://github.com/prettier/prettier)+[.editorconfig](https://editorconfig.org/) для организации работы с редакторами
  - Гит-хуки - [husky](https://github.com/typicode/husky)
- Стилизация
  - [TailwindCSS v2](https://github.com/tailwindlabs/tailwindcss)

### Настройка dev-окружения
Для организации работы производится клонирование + запуск dev-сборки в режиме watch:
```
  git clone https://github.com/marinerbob/sush.git
  cd sush/
  npm i
  npm run watch
```

### Сборка 
Для сборки проекта необходимо ввести следующие команды (пока нет Docker-образа)

`npm i && npm run build`

### Деплой
Фронтовая часть задеплоена на github-pages через github-actions

## Тесты
Запуск тестов на проекте осуществляется с помощью команды `npm run test`, тесты имеют следующее наименование: `<название тестируемого модуля>.spec.ts` и хранятся в совокупности с тестируемым модулем

## Стайл-гайды
### Коммит-политика
В разделе projects репозитория на Github указаны тикеты на канбан-доске. Коммит-сообщение составляется на основе номера тикета и краткого описания того, что реализовано. В desc пишутся подробности изменений. Формат имени коммита:

`№<номер_тикета-фичи>. <краткое_описание_изменений>`

Политика слияния веток - merge без rebase'a
### Написание кода
Конфигурации по написанию кода находятся в файлах:
```
.eslintrc.json
.prettierrc.json
stylelint.config.js
```

## API
Используется Spring-бэк

## База данных
Используется postgreSQL, инкапсулированный в Spring-бэке


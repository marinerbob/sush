import { Product } from './types';
import { productTypes } from './productTypes';

export const productsData: Product[] = [
  {
    id: '1123',
    name: 'Ролл Калифорния',
    portion: 9,
    description: 'Ролл Калифорния',
    price: 350,
    weight: 300,
    components: [
      {
        id: '1',
        name: 'Огурец',
      },
      {
        id: '2',
        name: 'Рис',
      },
      {
        id: '3',
        name: 'Лист нори',
      },
      {
        id: '4',
        name: 'Лосось',
      },
    ],
    discount: {
      id: '1',
      name: 'Осенние скидки',
      start_date: '2021-09-01',
      end_date: '2021-11-30',
      is_active: true,
      percent: 0.3,
      promocode: 'FALLSUSH',
      description: 'Осенние скидки на роллы Калифорния',
    },
    type: productTypes[1],
  },
  {
    id: '1124',
    name: 'Ролл Филадельфия',
    portion: 10,
    description: 'Ролл Филадельфия',
    price: 355,
    weight: 380,
    components: [
      {
        id: '1',
        name: 'Огурец',
      },
      {
        id: '2',
        name: 'Рис',
      },
      {
        id: '3',
        name: 'Лист нори',
      },
      {
        id: '4',
        name: 'Лосось',
      },
      {
        id: '5',
        name: 'Сливочный сыр',
      },
    ],
    type: productTypes[1],
  },
  {
    id: '1125',
    name: 'Пицца Маргарита',
    portion: 1,
    description: 'Пицца Маргарита',
    price: 550,
    weight: 1000,
    type: productTypes[0],
  },
  {
    id: '1126',
    name: 'Пицца четыре сыра',
    portion: 1,
    description: 'Пицца четыре сыра',
    price: 550,
    weight: 1000,
    type: productTypes[0],
  },
];

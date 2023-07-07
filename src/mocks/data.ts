import { Data } from '../types';

export const data: Data = [
  {
    id: '1',
    title: 'Proyecto 1',
    description: 'Acá está la descripción del proyecto.',
    tasks: {
      '1': {
        id: '1',
        title: 'Esta es la task 1',
        description: 'Descripción de la task 1',
      },
      '2': {
        id: '2',
        title: 'Esta es la segunda task',
      },
    },
    taskLists: [
      {
        id: 'column-1',
        title: 'Por hacer',
        tasks: ['1', '2'],
      },
      {
        id: 'column-2',
        title: 'En proceso',
        tasks: [],
      },
      {
        id: 'column-3',
        title: 'Realizadas',
        tasks: [],
      },
    ],
  },
  {
    id: '2',
    title: 'Proyecto 2',
    description: 'Acá está la descripción del proyecto 2.',
    tasks: {
      '1': {
        id: '1',
        title: 'Esta es la task 1',
        description: 'Descripción de la task 1',
      },
      '2': {
        id: '2',
        title: 'Esta es la segunda task',
      },
    },
    taskLists: [
      {
        id: 'column-1',
        title: 'Por hacer',
        tasks: ['1', '2'],
      },
      {
        id: 'column-2',
        title: 'En proceso',
        tasks: [],
      },
      {
        id: 'column-3',
        title: 'Realizadas',
        tasks: [],
      },
    ],
  },
];

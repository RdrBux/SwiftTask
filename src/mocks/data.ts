import { Data } from '../types';

export const data: Data = [
  {
    id: '1',
    title: 'Proyecto 1',
    tasks: [
      {
        id: 'task-1',
        title: 'Por hacer',
        taskList: [
          {
            title: 'Hacer cosas',
            id: 'a',
            description: 'Acá va la descripción',
          },
          { title: 'Hacer otras cosas', id: 'b' },
        ],
      },
      {
        id: 'task-2',
        title: 'En proceso',
        taskList: [{ title: 'Haciendo cosas', id: 'c' }],
      },
      {
        id: 'task-3',
        title: 'Realizadas',
        taskList: [],
      },
    ],
  },
  {
    id: '2',
    title: 'Proyecto 2',
    tasks: [
      {
        id: 'task-1',
        title: 'Por hacer',
        taskList: [
          { title: 'Hacer cosas 2', id: 'd' },
          { title: 'Hacer otras cosas 2', id: 'e' },
        ],
      },
      {
        id: 'task-2',
        title: 'En proceso',
        taskList: [{ title: 'Haciendo cosas', id: 'f' }],
      },
      {
        id: 'task-3',
        title: 'Realizadas',
        taskList: [],
      },
    ],
  },
];

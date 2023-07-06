import { createContext, useState } from 'react';
import { Data } from '../types';
import { data as mockData } from '../mocks/data';

export type DataContextType = {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
};

export const DataContext = createContext<DataContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export const DataProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<Data>(mockData);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

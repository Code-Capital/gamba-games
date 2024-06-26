import { useContext } from 'react';
import { AppContext } from '../context';

export const useAppState = () => {
  return useContext(AppContext);
};

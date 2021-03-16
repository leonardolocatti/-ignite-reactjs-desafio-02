import { useContext } from 'react';
import { GenreContext } from '../contexts/GenreContext';

export function useGenre() {
  const context = useContext(GenreContext);

  return context;
}
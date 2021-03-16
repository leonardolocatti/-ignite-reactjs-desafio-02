import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface GenreProviderProps {
  children: ReactNode
}

interface GenreContextData {
  selectedGenreId: number;
  selectedGenre: GenreResponseProps;
  genres: GenreResponseProps[];
  setSelectedGenreId: (id: number) => void;
}

export const GenreContext = createContext({} as GenreContextData);

export function GenreProvider({ children }: GenreProviderProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <GenreContext.Provider value={{ 
      selectedGenreId, 
      selectedGenre, 
      genres, 
      setSelectedGenreId 
    }}>
      {children}
    </GenreContext.Provider>
  );
}
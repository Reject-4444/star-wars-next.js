import axios from 'axios';
import { API_FILMS, API_HERO, API_HEROES } from './urls';

export const getHeroes = async (page: string) => {
  const response = await axios.get(API_HEROES + page);
  return response.data;
};

export const getHero = async (id: string) => {
  const response = await axios.get(API_HERO + id);
  return response.data;
};

export const getFilms = async() => {
  const response = await axios.get(API_FILMS);
  return response.data.results;
}

export const getFilm = async(id: string) => {
  const response = await axios.get(API_FILMS + id);
  return response.data;
}
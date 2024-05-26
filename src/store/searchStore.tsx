import {create} from 'zustand';

interface Search {
  keyword: string;
  setKeyword: (val: string) => void;
}
export const useSearch = create<Search>(set => ({
  keyword: '',
  setKeyword: val => set({keyword: val}),
}));

import { selector } from 'recoil';
import axios from 'axios';

export const fetchTodosSelector = selector({
  key: 'fetchTodosSelector',
  get: async ({ get }) => {
    const response = await axios.get('https://6721c90e98bbb4d93ca99dcf.mockapi.io/bai1/todo');
    return response.data;
  },
});
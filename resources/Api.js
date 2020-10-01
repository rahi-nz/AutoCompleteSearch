import { baseURL } from '../store/request';

// ****************** search API ****************** //
export const getData = (param) => `${baseURL}/search?q=${param}&index=tournament`;

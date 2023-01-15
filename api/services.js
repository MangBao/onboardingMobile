import axios from 'axios';

const defaultUrl = 'http://127.0.0.1:3000';

export const fetchAllProducts = () => {
  return axios
    .get(`${defaultUrl}/products`)
    .then(response => response.data)
    .catch(err => {
      console.log(err);
    });
};

export const updateFavoriteProducts = (id, data) => {
  return axios
    .patch(`${defaultUrl}/products/${id}`, data)
    .then(response => response.data)
    .catch(err => {
      console.log(err);
    });
};


import axios from 'axios';

const defaultUrl = 'http://10.0.2.2:8000';

export const fetchAllProducts = () => {
  return axios
    .get(`${defaultUrl}/products`)
    .then(response => response.data)
    .catch(err => {
      console.log(err);
    });
};

export const postFavoriteProducts = id => {
  return axios
    .post(`${defaultUrl}/products/${id}`)
    .then(response => response.data)
    .catch(err => {
      console.log(err);
    });
};

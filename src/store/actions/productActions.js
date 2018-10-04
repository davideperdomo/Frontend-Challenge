//TO EDIT
import { FETCH_PRODUCTS } from './types';
import axios from 'axios';

import { DATA_PRODUCTS } from './datainput' ;

const productsAPI = "https://react-shopping-cart-67954.firebaseio.com/products.json";


const compare = {
  'lowestprice': (a, b) => {
    if (a.price < b.price)
      return -1;
    if (a.price > b.price)
      return 1;
    return 0;
  },
  'highestprice': (a, b) => {
    if (a.price > b.price)
      return -1;
    if (a.price < b.price)
      return 1;
    return 0;
  }
}

export const fetchProducts = (filters, sortBy, callback) => dispatch => {
  var dataproducts = DATA_PRODUCTS;

  axios.get(productsAPI)
    .then(res => {
      let { products } = res.data;
      console.log("exproducts:",products);
      console.log("rappiroducts:",dataproducts);

      console.log("filters",filters)
      if(!!filters && filters.length > 0){
        dataproducts = dataproducts.filter( p => filters.find( f => p.availableCategories.find( size => size === f ) ) )
      }

      if(!!sortBy){
        dataproducts = dataproducts.sort(compare[sortBy]);
      }

      if(!!callback) {
        callback();
      }
      
      return dispatch({
        type: FETCH_PRODUCTS,
        payload: dataproducts
      });

    })
    .catch(err => {
      console.log(err);
      throw new Error('Could not fetch products. Try again later.');
    });
}
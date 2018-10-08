//TO EDIT
import { FETCH_PRODUCTS } from './types';
import axios from 'axios';

import { DATA_PRODUCTS } from './datainput' ;


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

      //console.log("rappiroducts:",dataproducts);
      //console.log("filters",filters)
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
}
import data from '../../products.json'
import cate from '../../categories.json';



function updateproduct(){
  
  //console.log('categories',cate.categories)
  for(var i=0;i<data.products.length;i++){
    var categorieslist ;
    for (var j=0;j<cate.categories.length;j++){
      categorieslist = []
      var curcat = cate.categories[i];
      console.log("categori",curcat)
      var found = false; 
      if (curcat != undefined){
      while(curcat.hasOwnProperty('sublevelid')){
        //console.log("namecat",curcat.name)
        if(curcat.id==product.sublevel_id){
          found = true;
          break;
        }  
        categorieslist.push(curcat.name)
      }
      if (found) break ;
      }
    }
    var product = data.products[i];
    
    product.availableSizes= categorieslist;
    product.currencyFormat= "$";
    product.currencyId="COP";
    product.description = "";
    product.id = product.id;
    product.installments= product.quantity;
    product.price= parseInt(product.price.replace("$","").replace(",",""));
    product.sku= product.sublevel_id;
    product.style= "";
    product.title= product.name;
    
    data.products[i] = product;
  }
}
updateproduct();

export const DATA_PRODUCTS = data.products;
import data from '../../products.json'
import cate from '../../categories.json';


function isincat(category, id){
  
  if(category.id == id){
    console.log('id',category.id)
    console.log('idin',id)
    console.log('name',category.name)
    return category.name
  }else{
    if (category.hasOwnProperty('sublevels')){
      for(var i in category.sublevels){
        //console.log('namecat',category.name)
        return isincat(category.sublevels[i],id)
      }
    }else{
      return false
    }
  }
}
function updateproduct(){

  //console.log('categories',cate.categories)
  for(var i=0;i<data.products.length;i++){
    
    var product = data.products[i];
    var categorieslist ;
    var catnam ;
    for (var j in cate.categories){ 
      var currcat =  cate.categories[j]
      catnam =  isincat(currcat,product.sublevel_id);
      if(catnam!=false){
        console.log("res",catnam)
        break;
      }
    }
    if (catnam == false) catnam="Desayunos";
    product.availableSizes= [catnam];
    product.availableCategories= [catnam];
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
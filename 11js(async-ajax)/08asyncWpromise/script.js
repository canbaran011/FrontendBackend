 
var products = [
  { id: 1, name: "Samsung s8", price: 3000 },
  { id: 2, name: "Samsung s7", price: 2900 },
  { id: 3, name: "Samsung s6", price: 2700 }
];


function addProduct(prd, callback) {

    return new Promise(function(resolve,reject){
        setTimeout(() => {
            products.push(prd);
            let added = false;
            if(added){
                resolve();
            }else{
                reject('hata : 400');
            }

        }, 2000);
    });

}

function getProducts() {
  setTimeout(() => {
    products.forEach(p => {
      console.log(p.name);
    });
  }, 1000);
}


addProduct({ id: 4, name: "Samsung s2", price: 500 })
.then(getProducts)
.catch(function(err){
    console.log(err);
});

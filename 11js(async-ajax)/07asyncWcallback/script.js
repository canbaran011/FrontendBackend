/**
 * not callbackle işler karışıyor yerine promise, await,
 * async ile daha basit yapılabilir.
 * 
 */

var products = [
    {id:1,name:'Samsung s8',price:3000},
    {id:2,name:'Samsung s7',price:2900},
    {id:3,name:'Samsung s6',price:2700},

]

let added = false;

function addProduct(prd,callback){

if(added){
    setTimeout(() => {
        products.push(prd);
    
        callback(null,prd); //callback getProduct ı çağıracak
    }, 2000);
}else{
 callback('500',prd);//prd yerine null da olabilir
} 
}

function getProducts(){

setTimeout(() => {
    products.forEach(p=>{
console.log(p.name);
    });
}, 1000);
}


// addProduct({id:4,name:'Samsung s2',price:500},getProducts);
addProduct({id:4,name:'Samsung s2',price:500},
function(err,data){
    if(err){
        console.log('hata :'+err);
    }else{
        console.log(data);
    }
});











































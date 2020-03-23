const products = [
{id:"13259",name : 'samsung s6',price:2999,imageUrl:'1.jpg',description:'iyi' },
{id:"13299",name : 'samsung s5',price:2999,imageUrl:'2.jpg',description:'iyi' },
{id:"83229",name : 'samsung s4',price:2999,imageUrl:'3.jpg',description:'iyi' }
];



module.exports = class Product {
    constructor(name , price , imageUrl, description){
      this.id = (Math.floor(Math.random()*99999)+1).toString;
      this.name = name;
      this.price = price;
      this.imageUrl = imageUrl;
      this.description = description;
    }

    saveProduct(){
        products.push(this);
    }

  static getAll(){

    return products;
  }
  static getById(id){
    const product = products.find(i=>i.id === id);
    return product;
  }

  static Update(product){
    const index = products.findIndex(i =>i.id===product.id);

    products[index].name = product.name;
    products[index].price = product.price;
    products[index].imageUrl = product.imageUrl;
    products[index].description = product.description;

  }

  static DeleteById(id){
    const index = products.findIndex(i=>i.id===id);
    products.splice(index,1);

  }


}


















// const products = Product.getAll();
// const p = new Product('samsung',2599,'2.jpg','good');

// p.saveProduct();

// const p = new Product('Samsung',2000,'2.jpg','iyi');
// const p = new Product('Samsung',2000,'2.jpg','iyi');


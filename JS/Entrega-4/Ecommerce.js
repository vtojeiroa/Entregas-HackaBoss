'use strict';

/* Crear un falso e - commerce.Por un lado tenemos todos los artículos que 
forman el stock de la tienda con una clase item que consta de nombre del
artículo y precio.Tendremos también un usuario que añade cosas a su carrito,
que es privado.Los artículos cuando los metemos al carrito los convertimos
un tipo de dato que guarda las unidades que tiene el usuario de dicho
artículo, lo llamaremos CartItem.La tienda es la encargada de imprimir un 
ticket por la consola cuando se lo ordena el usuario.
Datos de ejemplo para los items */

const itemNames = ['Camisa', 'Pantalon', 'Calcetines'];
const itemPrices = [13, 27, 100];

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  //Crear una lista de items con nombre y precio
  static inventary(names, prices) {
    return names.map((currentvalue, index) => {
      return new Item(currentvalue, prices[index]);
    });
  }
}
// catalogo de items
const myItemList = Item.inventary(itemNames, itemPrices);
console.log(myItemList);
console.log(myItemList[0].name);

class CartItem {
  ammount = 1;
  constructor(item) {
    this.item = item;
  } //incrementar  el item en una unidad
  increase() {
    this.ammount++;
  }
}
const myCartItem = new CartItem();
console.log(myCartItem);
class User {
  #cart = [];
  name;
  constructor(name) {
    this.name = name;
  }
  addToCart(limit, itemList) {
    for (let i = 0; i < limit; i++) {
      const randomItem = Math.round(Math.random() * (itemList.length - 1));
      this.#cart.push(new CartItem(itemList[randomItem]));
    }
  }
  pay() {
    return this.#cart;
  }
}
class Shop {
  constructor(name) {
    this.name = name;
  }
  static checkout(cart) {
    for (const cartItem of cart) {
      console.log(
        `item: ${cartItem.item.name} Units:${cartItem.ammount} Price: ${cartItem.item.price} =  Total ${cartItem.item
          .price * cartItem.ammount}`
      );
    }
    const total = cart.reduce((accumulator, item) => {
      return accumulator + item.ammount * item.item.price;
    });
    console.log(`TOTAL = ${total}`);
  }
}
const myUser = new User('Pedro');
myUser.addToCart(7, myItemList);
console.log(myUser);
const myShopCart = myUser.pay();
console.log(myShopCart);
console.log(myShopCart[0].ammount);
console.log(myShopCart[0].item.name);
console.log(myShopCart[0].item.price);
const myShop = new Shop('Galerias');
const myFinalShop = Shop.checkout(myShopCart);

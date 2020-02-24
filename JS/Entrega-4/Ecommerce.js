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
class User {
  #cart = [];
  name;
  constructor(name) {
    this.name = name;
  }
  addToCart(item) {
    for (let i = 0; i < this.#cart.length; i++) {
      if (item.name === this.#cart[i].item.name) {
        this.#cart[i].increase();
        return;
      }
    }
    this.#cart.push(new CartItem(item));
  }
  fillCart(limit, itemList) {
    for (let i = 0; i < limit; i++) {
      const randomItem = Math.floor(Math.random() * itemList.length);
      this.addToCart(itemList[randomItem]);
    }
  }

  pay(cart) {
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
    }, 0);
    console.log(`TOTAL = ${total}`);
  }
}
const myUser = new User('Pedro');
myUser.fillCart(7, myItemList);
console.log(myUser);
const myShopCart = myUser.pay();
console.log(myShopCart);
const myShop = new Shop('Galerias');
const myFinalShop = Shop.checkout(myShopCart);

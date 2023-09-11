function Hamburger(size) {
  this.size = size;
  this.toppings = [];
}

Hamburger.SIZE_SMALL = {
  price: 100,
  calories: 8888,
};

Hamburger.SIZE_MEDIUM = {
  price: 150,
  calories: 9999,
};

Hamburger.SIZE_LARGE = {
  price: 200,
  calories: 11111,
};

Hamburger.TOPPING_MAYO = {
  price: 20,
  calories: 42,
};

Hamburger.TOPPING_POTATO = {
  price: 15,
  calories: 10,
};

Hamburger.TOPPING_CHEESE = {
  price: 30,
  calories: 50,
};

Hamburger.TOPPING_KETCHUP = {
  price: 15,
  calories: 30,
};

Hamburger.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
};

Hamburger.prototype.getPrice = function () {
  let totalPrice = this.size.price;
  for (const topping of this.toppings) {
    totalPrice += topping.price;
  }
  return totalPrice;
};

Hamburger.prototype.getCalories = function () {
  let totalCalories = this.size.calories;
  for (const topping of this.toppings) {
    totalCalories += topping.calories;
  }
  return totalCalories;
};

const mediumBurger = new Hamburger(Hamburger.SIZE_MEDIUM);
mediumBurger.addTopping(Hamburger.TOPPING_MAYO);
mediumBurger.addTopping(Hamburger.TOPPING_CHEESE);

console.log(mediumBurger.size.name);
console.log(mediumBurger.getPrice());
console.log(mediumBurger.getCalories());

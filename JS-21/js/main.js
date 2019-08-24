const Car = function(wheel, km) {
    this.wheel = wheel;
    this.km = km;
}

Car.prototype.ride = function() {
    this.km++;
    console.log(this.km)
}

const Bas = function(wheel, km, amount) {
    this.wheel = wheel;
    this.km = km;
    this.amount = amount;
}

Bas.prototype.load = function(people) {
    this.amount += people;
}

Bas.prototype.unload = function(people) {
    this.amount -= people;
}

var Citroen = new Car(4, 1000);
Citroen.ride()

var Maz = new Bas(6, 13, 5);
console.log(Maz)
Maz.load(3);
console.log(Maz)

Maz.unload(5);
console.log(Maz)



$(document).ready(function(){
    $('.your-class').slick({
      setting-name: setting-value
    });
  });
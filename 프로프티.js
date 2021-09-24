Food.prototype.smell = function smell() {
    console.log(this.name + "냄새가 난다!");
}

function Food(name) {
  this.name = name;
}

var myFood = new Food("로제 파스타!");
var myFood2 = new Food("청란젓");
myFood.smell();
myFood2.smell();
console.log(myFood.smell === myFood2.smell)
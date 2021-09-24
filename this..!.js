function Food(name) {
    this.name = name;
    this.smell = function() {
      console.log(this.name + "냄새가 난다!");
    }
  }
  
var myFood = new Food("로제 파스타!");
var myFood2 = new Food("청란젓");
  
console.log(myFood.smell === myFood2.smell)
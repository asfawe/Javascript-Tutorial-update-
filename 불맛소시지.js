function Sausage(el1, el2) {
    this.inside1 = el1;
    this.inside2 = el2;
  }
  
  Sausage.prototype.taste = function(){
    return this.inside1+ "와 " + this.inside2+ "맛이 난다!";
  }
  
  var mySausage = new Sausage("돼지고기", "마늘");
  // console.log(mySausage.taste());
  
  function FireSausage(el1, el2, el3){
    this.inside1 = el1;
    this.inside2 = el2;
    this.inside3 = el3;
  }
  
  FireSausage.prototype.taste = function(){
    return this.inside1+ "와 " + this.inside2+ "맛이 난다!";
  }
  
  FireSausage.prototype.flavor = function(){
    return this.inside3+ "의 풍미도 있다!"
  }
  
  var myNewSausage = new FireSausage("돼지고기", "마늘", "불맛");
  
  console.log(myNewSausage.taste());
  console.log(myNewSausage.flavor());
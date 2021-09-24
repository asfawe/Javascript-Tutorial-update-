class Sausage{
    constructor(el1, el2){
      this.inside1 = el1;
      this.inside2 = el2;
    }
    
    taste(){
      return this.inside1+ "와 " + this.inside2+ "맛이 난다!";
    }
  }
  
  var classicSausage = new Sausage("닭고기", "양파");
  console.log(classicSausage.taste());
  
  class FireSausage extends Sausage{
    
  }
  
  var classicFireSausage = new FireSausage("소고기", "파");
  console.log(classicFireSausage.taste());
  console.log(classicFireSausage.inside1);
  console.log(classicFireSausage.inside2);
function menuGlobal(item) {
    console.log("오늘 저녁은 " + item + this.name);
  }
  
  var myDiner = {
    name: "김치찌개"
  };
  
  var yourDiner = {
    name: "된장찌개"
  };
  
  var menuGlobalForMe = menuGlobal.bind(myDiner);
  var menuGlobalForYou = menuGlobal.bind(yourDiner);
  
  console.log(menuGlobalForYou("삽겹살"));
  console.log(menuGlobalForMe("묵은지"));
  
  myDiner.menuMine = menuGlobalForYou;
  myDiner.menuMine("묵은지");
      
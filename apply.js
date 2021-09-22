function menuGlobal(item1, item2) {
    [item1, item2].forEach(function (el) {
      // forEach는 앞에있는 각각에 있는 배열요소에다가 실행을 해준다. item1,item2에다가 forEach값을 넣어주는 것이다.
      console.log("오늘 저녁은 " + el + this.name);
    }, this);
  }
  
  var myDiner = {
    name: "김치찌개"
  };
  
  var yourDiner = {
    name: "된장찌개"
  };
  
  menuGlobal.apply(myDiner, ["묵은지", "삼겹살"]);
  
  menuGlobal.apply(yourDiner, ["두부", "애호박"]);
  
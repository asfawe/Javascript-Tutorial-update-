var outer = function () {
    var a = 1;
  
    var inner = function () {
      var b = 5;
      var c = 6;
  
      a = a + b + c;
      console.log(a);
    };
  
    return inner();
  };
  
  var newInner = outer();
  
  newInner();
  
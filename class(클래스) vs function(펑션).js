class User{
    constructor(name){
      this.name = name;
    }
    sayName(){
      console.log(this.name);
    }
  }
  
  var me = new User("Wade");
  me.sayName();
  
  function UserOld(name){
    this.name = name;
  }
  
  UserOld.prototype.sayName = function() {
    console.log(this.name);
  }
  
  var user = new UserOld("Wade");
  user.sayName();
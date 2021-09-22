var person = (function () {
    var age = 15;
  
    return {
      name: "Wade",
      getAge: function () {
        console.log(age);
        return age;
      },
      setAge: function (val) {
        age = val;
        console.log(age);
      }
    };
  })();
  person.getAge();
  person.setAge(20);
  
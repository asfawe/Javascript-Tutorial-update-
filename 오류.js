console.log(testValue);
console.log(undeclared);

var testValue = 100

////////////////////////////////////////////////////////////////////////////

console.log(testValueVar());

var testValueVar = function testValue() {
  return "hoist test"
}

/////////////////////////////////////////////////////////////////////////////

console.log(test1);
console.log(test2);
console.log(Tester);

let test1 = "let value";
const test2 = "const value";

class Tester{
  constructor(){
    this.name = "test";
  }
}



//apply()
var data = {
  pName: "Macbook",
  price: 94000,
};
function f1(x, y) {
  console.log(x, y);
  console.log(this);
}

//f1(10, 20);

f1.apply(data, [50, 50]); //it is used to change the reference of this keyword

//bind()
var data = {
  pName: "Macbook",
  price: 95000,
};
function f1(x, y) {
  console.log(x, y);
  console.log(this);
}

var x = f1.bind(data, 30, 30); //it is used to change the reference of this keyword
x();




  //call()
  var obj1 = {
    name: "Sagar",
  };
  
  var obj2 = {
    name: "Riya Sharma",
  };
  
  function f1() {
    console.log(this);
  }
  
  f1.call(obj1); //it is used to change the reference of this keyword
  
  f1.call(obj2);





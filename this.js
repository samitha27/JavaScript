console.log(this); // empty object store in this keyword

function f1() {
  console.log(this);//by default global object 
}
f1();


constfn=()=>{
  console.log(this); //in arrow function to display empty object
};
fn();


//this in object
var obj = {         //in object with in function using this keyword to display current object
  name: "Sagar",
  fn: function () {
    console.log(this);
  }, 
};
obj.fn();


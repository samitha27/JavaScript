//object destructuring
var data={
    pname:"macbook",
    price:2700000,
    rating:5.2,
};
var{rating}=data; //technique of unpacking elements from object
console.log(rating);


var obj1 = {
    pname: "Macbook",
    rating: {
      rate: 4.7,
      count: {
        men: 1234,
        women: 2345,
      },
    },
    price: 240000,
  };
  
  var {
    pname,
    rating: {
      count: { men, women },//technique of unpacking elements from object
    },
  } = obj1;
  
  console.log(men, women);



//array destructuring
var arr = [10, 20, 30, 40];

var [x, y, z, name] = arr; //technique of unpacking elements from array

console.log(y);
console.log(z);

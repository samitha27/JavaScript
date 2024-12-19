var user={
    name:"samitha",
    gender:"female",
    phone:"987654321"
};
var name=user.name;//to display specific property
var phone=user.phone;
console.log(name,phone);

user.email="sam@gmail.com";//insert new property
console.log(user);


var obj={
    brand:"apple",
    price:80000,
    rating:4.5
};
console.log(obj);
obj.price="50000";  //to update property value
console.log(obj);


var obj={
    brand:"apple",
    price:80000,
    rating:4.5
}
console.log(obj);
 delete obj.brand;  //to remove/delete property value
console.log(obj);

var obj1={
    name:"sagar",
    city:"hyd",
    gender:"female",
};
var obj2={
    ...obj1,           //it used to copy properties of one object into another object
    phn:9999999999999,
    name:"sam",
};
console.log(obj1);
console.log("...........");
console.log(obj2);


var arr1=[10,20,30,40,50];
var arr2=[
    ...arr1,true,false]; //it used to copy properties of one array into another array
    console.log(arr1);
    console.log("........");
    console.log(arr2);
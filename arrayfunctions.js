var data=[10,20,30,40,50,];
console.log(data);
data.push(true); //to add new element in last position of array
console.log(data);


var data=[10,20,30,40,50,];
console.log(data);
data.pop(); //to remove element in last position of array
console.log(data);


var data=[10,20,30,40,50,];
console.log(data);
data.unshift(true); //to add new element in initial position of array
console.log(data);


var data=[10,20,30,40,50,];
console.log(data);
data.shift(); //to remove element in initial position of array
console.log(data);


var arr=[10,20,30,40,50,60];
arr.splice(1,2); //to remove element, multiple elements from array
console.log(arr);


var arr=[10,20,30,40,50,60];
arr.splice(4,0,"samitha"); //to add element,multiple elements at any position of array
console.log(arr);


var arr=[10,20,30,40,50,60,70,80];
var result=arr.includes(70); //to check element is present or not in array
console.log(result);


var arr = [10, 20, 30, 40, 50, 70, 80, 90, 120, 450];
var num = arr.indexOf(50); //to check element is present to display index num not present to display -1
var numb = arr.indexOf(190);
console.log(num);
console.log(numb);


var arr=[10,20,30,40,50,60];
var newsubarray=arr.slice(1,4+1); //we want to acess part of array
console.log(newsubarray);


var data=["sam","yash","aish","priya","riya"];
data.forEach(function(element,index){    //to access each element of the array
console.log(element,index);
});


var data=[10,20,30,40,50,60,];
var newarray=data.map(function(element,index){ //we can perform some operations on every element of array and result of operation stored in new array
var result=element*10;    //(using arithmetic operators)
return result;
});
console.log(newarray);


var data=[10,20,30,40,50,60];
var filterarray = data.filter(function(element,index){
return element >=30;       //filtered data of array based on some condition(using comparision operators)
});
console.log(filterarray);
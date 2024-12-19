//create a promise object
var promiseobj = new Promise(function(resolve,reject){
});   
console.log(promiseobj);


//promise object using resolve()
var promiseobj = new Promise(function(resolve,reject){
resolve({
name:"samitha",
gender:"female",
});
});
console.log(promiseobj);


//promise object using reject()
var promiseobj = new Promise(function(resolve,reject){
    reject("something is wrong");
    });
    console.log(promiseobj);

//using then() and catch() on promise object
var promiseobj = new Promise(function(resolve,reject){
    resolve("samitha");    //in place of resolve replace reject then catch() can be executed
    });
    console.log(promiseobj);
    promiseobj
    .then(function(successdata){
    console.log("then() executed");
    console.log(successdata);
    })
     .catch(function(errordata){
        console.log("catch() executed");
        console.log(errordata);
     })
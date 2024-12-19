//while loop
var x=10;
while(x<=20){
    console.log(x);
    x++;
}

//do while loop
var y=100;
do{
    console.log(y);
    y++;
}while(y<=110);


//for loop
for(var z=1;z<=10;z++){
    console.log(z);
}


//for of
var arr=["sam","yash","naina",50]
for(var x of arr){
    console.log(x+10);
}


//for in
var obj={
    name:"samitha",
    city:"hyd",
};
for(var x in obj){
    console.log(x); //console.log(obj[x]);
}
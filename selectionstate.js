//if statement
var x=10;
if(x<20){
    console.log("condition is true");
}


//if else statement
var x=20;
if(x>10){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}


//else if statement
x=20;
if(x==10){
    console.log("x is equal to 10");
}
else if(x>10){
    console.log("x greaterthan 10");
}
else if(x<10){
    console.log("x lessthan 10");
}
else{
    console.log("else if statement1");
}



//switch statement
switch(50){
    case 10:
        console.log("10");
    case 50:
        console.log("50");
    case 40:
        console.log("40");
        break;            //break is used in that case stop the condition
    case 20:
        console.log("20"); 
    default:
        console.log("no case matched");
        //break;       
}

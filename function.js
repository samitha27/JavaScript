function samitha(p1,p2 ,p3)//parameters
{
    var x; //variable declaration
    x=p1; //variable assigning
    var y=p2; //variable initialization
    var z=p3;
    console.log(y*x,z);
    console.log(y+x,z);
}
samitha(100,200);//arguments
samitha(300,400);
samitha(600,500);
samitha(100,200);
samitha(500,1000);

//anonymous function
//fuction expression
//named function
//parameterised function
//returned function
//async function

//arrow function
var fn=(p1,p2)=>{
    console.log(value);
    return p1+p2;
};
var value=fn(10,20);
console.log(value);


//high order function(hof)
function f1() {
    var city ="delhi";
    console.log(city);

}
function add(y,x){
    console.log(x,y);
  y();
}

add(f1);

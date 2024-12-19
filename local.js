
//function scope using var
function fn() {
    var gender = "female";
    if (true) {
      var productName = "Acer Laptop";
    }
     while(false){}
    console.log(productName); //Valid
  }



  //function scope using let
  function fn() {
    let gender = "female";
    if (true) {
      let productName = "Acer Laptop";
      var id = 101;
    }
  
    while (false) {
      let rating = 4.5;
      var count = 2345;
    }
  
    console.log(productName); //Invalid
    console.log(id);
  }
  
  console.log(id); //invalid
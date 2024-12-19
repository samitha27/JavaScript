//acesses properties in one class into another class
class Personal{
    name="sam";
    email="sam@gmail.com";
    id=101;
}
class Address extends Personal{
    city="hyd"
    state="TG";
    pincode="232323";
}
var ad1=new Address()
console.log(ad1.city,ad1.state,ad1.pincode,ad1.name,ad1.email);


//private properties and methods in a class(inheritance in oops)
class Employee {
    empName;
    #id;
    designation;
  
    constructor() {
      this.#id = 101;
      this.empName = "Aisha Sharma";
      this.designation = "Project Manager";
    }
  }
  
  class ExperienceInfo extends Employee {
    yearsOfExp;
    currentSalary;
    expectedSalary;
  
    constructor() {
      super();
      this.yearsOfExp = 9;
      this.currentSalary = "60LPA";
      this.expectedSalary = "1.3cr";
    }
  }
  
  var e1 = new ExperienceInfo();
  
  console.log(
    e1.empName,
    //   e1.#id, invalid
    e1.designation,
    e1.expectedSalary,
    e1.currentSalary,
    e1.yearsOfExp
  );
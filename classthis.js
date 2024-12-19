class Products {
    pname="trimmer";
    price="100";
    rating="4.7";

    display() {

        console.log(this.pname,this.price,this.rating);
    }
    changeprice(newprice){

        this.price=newprice;
        this.display();
        return this.price;
    }
}
var p1=new Products();
var p2=new Products();
p2.pname="harddisk";
p1.rating="5";

p1.display();

p2.display();




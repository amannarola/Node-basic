//ECMAScript or ES6 2015
//let,const , templating string,class

//let a=30;
//function abc(){
    //let a=40;
    //console.log(a);
//}
//abc();
//console.log(a);

//const a={
    //"name":"Aman",
    //"age":20
//}
//a.email="aman@gmail.com";
//a.age=19;
//console.log(a);

//var name="Aman";
//var age=20;

//console.log(`Hi ${name} you are ${age} years old`);

class Users{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    getName(){
        this.email="aman@gmail.com";
        return this.name;
    }

    getage(){
        return this.age;
    }

    getemail(){
        return this.email;
    }
}
var user=new Users("Aman",20);
console.log(user.getName());
console.log(user.getemail());
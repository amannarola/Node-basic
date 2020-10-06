function student(){
    this.name="aman";
    this.age=20;
}

student.prototype={
    address:"Surat",
    getName:function(){
        return this.name;
    }
}

var stud=new student();
console.log(stud.getName());
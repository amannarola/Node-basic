var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://aman:12345@cluster0-suffm.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
var conn=mongoose.connection;
var employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    etype: String,
    hourlyrate: Number,
    totalHour: Number,
    total: Number,
  });

//employeeSchema.methods.totalsalary=function(){
   // console.log("Total income of employee: Rs."+this.hourlyrate*this.totalHour);
//}

//employeeSchema.methods.totalsalary1=function(){
    //console.log("Total income of %s: Rs.%d",this.name, this.hourlyrate*this.totalHour);
//}
employeeSchema.methods.totalsalary=function(){
  return this.hourlyrate*this.totalHour;
}

var emplyeeModel = mongoose.model('Employee', employeeSchema);

var employees = new emplyeeModel({name:'aman',
email:'aman@SpeechGrammarList.com',
etype:'hourly',
hourlyrate:10,
totalHour:16,
});

//console.log("Total income of employee: Rs."+employees.hourlyrate*employees.totalHour);
//employees.totalsalary();
//employees.total = employees.totalsalary1();
employees.total = employees.totalsalary();

conn.on("connected",function(){
  console.log("Connected Successfully");
});

conn.on("disconnected",function(){
  console.log("Disconnected Successfully");
});

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {
  employees.save(function(err,res){
    if(err) throw error;
    console.log(res);
    conn.close();

  })
  //emplyeeModel.find({},function(err,data){
      //if(err) throw error;
      //.log(data);
      //conn.close();
    //});
});
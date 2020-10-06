const fs = require("fs");
//console.log(fs);

//fs.readFile(__dirname+"/hello.txt","utf-8",(err,data)=>{
    
    //console.log(data);

//});


try{
    const data=fs.readFileSync(__dirname+"/hello.txt","utf-8");
    console.log(data);
}catch(e){
    console.log(e);
}
console.log("File ended successfully");




//fs.unlink(__dirname+"/hello.txt",(err,data)=>{
    //if(err) throw err;
    //console.log("File Deleted"+data);
//});
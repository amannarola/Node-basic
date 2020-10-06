//--------- callback --------------//

//function show(x){
    //return x+5;
//}
//function display(callback){
    //return callback(4);
//}


//console.log(display(show));


//--------- Promise --------------///


var data=true;
var promise = new Promise(function(resolve,reject){
    if(data)
    resolve('success');
    else
    reject('error');
});

promise.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
});
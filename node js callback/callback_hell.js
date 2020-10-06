//function display(callback){
    
    //setTimeout(function show(){
        //console.log('Show function calling');
    //},5000);

    //console.log('Display Function calling');
   // callback();
//}

//display(function(){
    //console.log('Show');
//});


// ----------- callback hell ---------- //

//addition(5,function(addRes,err){
  //  if(!err){
     //   substract(addRes,function(subRes,err){
         //   if(!err){
           //     multiplication(subRes,function(mulRes,err){
               //     if(!err){
                  //      console.log('Result:' +mulRes);
                   // }
               // });
           // }
        //});
    //}
//});

//function addition(val,callback){
    //return callback(val+5, false);
//}

//function substract(val,callback){
   // return callback(val-3, false);
//}

//function multiplication(val,callback){
    //return callback(val*5, false);
//}


// ----------- callback using promise ---------- //

var promise = new Promise(function(resolve,reject){
    resolve(5);
});

promise.then(addition).then(substract).then(multiplication).then((msg)=>{
    console.log('Result:'+msg);
}).catch((err)=>{
    console.log('error:'+err);
});
    
    function addition(val){
        return val+5;
    }

    function substract(val){
        return val-3;
    }

    function multiplication(val){
        return val*5;
    }
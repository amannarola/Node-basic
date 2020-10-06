const http=require("http");
const server=http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>node js tutorial running</h1>");
    res.write("<h1>nodemon package installed</h1>");
    res.end();
}).listen(3000,()=>console.log("Server running on port 3000"));
/**
 * Created by shaodengke on 2019/1/26.
 */
var http=require("http");
var fs=require("fs");


function onRequest(req,res){
    if(req.url=="/dh22.js") {
        fs.readFile("./dh22.js", function (err, data) {
            res.end(data);
        })
    }
    if(req.url=="/ali_dh22.js") {
        fs.readFile("./ali_dh22.js", function (err, data) {
            res.end(data);
        })
    }
    if(req.url=="/package.json") {
        fs.readFile("./package.json", function (err, data) {
            res.end(data);
        })
    }
};


http.createServer(onRequest).listen(3000);
console.log("server start at 3000 port");
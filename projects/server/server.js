const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(request,response){
response.sendfile(__dirname+"/index.html");
})

app.listen(3000,function(){
    console.log("Started listening");
});

app.post("/index.html",function(request,response){
    var num1=Number(request.body.num1);
    var num2=Number(request.body.num2);
    var result = num1 + num2;
    response.send("The result is:" + result);
})

app.get("/bmi",function(request,response){
    response.sendfile(__dirname+"/bmi.html");
    })

app.post("/bmi",function(request,response){
    var weight=parseFloat(request.body.weight);
    var height=parseFloat(request.body.height);
    var result = weight/(height*height);
    response.send("Your BMI is:" + request.body.height);
})



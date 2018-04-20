var express = require('express');
var app = express();



app.use(express.static(__dirname + '/dist'));


app.listen(4202, function () {
    console.log('running on 4202')
    
})
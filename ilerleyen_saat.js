var http = require('http');
var zaman = require ('./zaman');


http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type' : 'text-html'});

    res.write('<h1>merhabalar efenim!!!</h1>');
    res.write('<p>lorem10</p>');
    res.write('<p id="saat"></p>');

    setInterval(function(){
        res.write("<script>document.getElementById('saat').innerHTML =' " + zaman.Zaman() + " ';</script>");
    },1000);
}).listen(8080);
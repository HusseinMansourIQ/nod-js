var http = require('http');
const port=8888;
const { error } = require('console');
var url = require('url');
var qs = require('querystring');
var postHTML=

    '<!DOCTYPE html>'+
    '<html>'+
    '<title>HTML Tutorial</title>'+
    '<body>'+
    '<form method="POST" action="/">'+
    'firstname: <input type="text" name="g1"> <br>'+
    'lastname: <input type="text" name="g2"><br>'+
    '<input type="submit" id="b" value="yameteeee"/>'+
    '</form>'+
    
    '</body>'+
    '</html>';


   var my_http= http.createServer(function(req,res)
{
    var quiery_string = url.parse(req.url,true)
    res.end(postHTML)
    //console.log("am gay")
    if (req.method=="POST")
    {
        var body = "";
        console.log("you gay")

        req.on('data',function(data)
        {
            body = body+ data;
        });

        req.on('end',function()
        {
            var post = qs.parse(body)
            console.log(post['g2'])
            console.log("wtf")
        })
        
    } 
    else
    {
        console.log("its ok her")
    }

});
my_http.listen(port , function(err)
{
    if (err) {return('some think went wrong'+error)}
    else { return('every thinl its ok'+port) }
    console.log('listen is ok')
});
console.log('whe are listening you bith on http//http://localhost:8888')
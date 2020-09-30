var st = require ("./app")
st.name ;
st.age ;
st.pl_name();
st.pl_age() ;

var mo = require("fs");
mo.readFile("aaa.txt",function(err,data)
{
if (err) return console.error(err);
console.log(data.toString());
});
    





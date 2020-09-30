//الطريقة الاعتيادية
function getname()
{
console.log("hello fucking world");
}

function getage()
{
    console.log("mu age is 15");
}

module.exports.name = getname();
module.exports.age = getage();

//طريقة ال جيسون (json)

module.exports= {

"pl_name":function getplant()
{
console.log("hello fucking mars");
}
,

"pl_age":function getplandage()
{
    console.log("age is 100000 yer");
}
}



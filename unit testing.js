const { strictEqual } = require("assert")
var assert = require("assert")
 
function mul(a,b)
{
    return(a*b)
}
function sub(a,b)
{
    return(a-b)
}
function add(a,b)
{
    return(a+b)
}
var r = add(1,5)
var g = mul(3,2)
var a = [1,,2,3,4]
var b = [2,3,1,4]

assert (g==6,"error the fuction have something wrong")
assert.strictEqual(r,6,"worng")
assert.deepEqual(a,b,"wrong deep")
assert.notDeepEqual(a,b,"not is worng")
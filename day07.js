//java script is a simple scripting language used to impliment complex things on webpages

var a=10// we can use multiple var
var a="Adhiraj"// we can use multiple var
var a=true;// we can use multiple var

let b= 'java Script' //by using let we can detect errors in compile time
b=123
let c="123     "
let e=true;
let f=23.433// js only has number --- that is no double,no float, no short, no byte but has bigint 
console.log(a)
console.log(b)
console.log(b==c)// to strictly check values---while checking it will remove all white spaces and will also remove datatype
console.log(b===c)//to strictly check datatypes and values including whitespaces ---comparator operator thet compares datatype of two variables
console.log(typeof c)// to check data type of variable/identifier
console.log(typeof b)
console.log(typeof e)
console.log(typeof f)// also point number

function validate (name)
{
    if(name=="java Script"){                                  //how to add validations
        console.log("Welcome to the java script batch of jbk");
    }
    else{
        console.log("Not eligible");
    }
}
validate('jbk') //calling a function
validate('java Script')

x="javascript"
 let s="Adhiraj"
function pointgvar()   //answer kay aahe
{
    let x="typescript"
    s="Deshmukh"
    console.log(x)
    console.log(global.x)
    console.log(s)
    console.log(global.s)
    
}
pointgvar();
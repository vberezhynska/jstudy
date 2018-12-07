var myVar = 4;
console.log(myVar);
function b(){
    var myVar = 3;
    console.log(myVar);
}

function a(){
    var myVar = 2;
    console.log(myVar);
    b();
}
var myVar = 1;
console.log(myVar);
a();
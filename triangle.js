// Area of triangle where length of 3 sides are 5, 6, 7


//HTML get element
/*
function qs(el){
    var el = document.getElementById('el');
    var elValue = el.value;
  
}
*/


// HTML get form

var s;
var sideA=5;
var sideB=6;
var sideC=7;
var p;
var square;
/*

function qetSides(){

 var triangleSides = document.getElementById('triangleSides');
    for (var i = 0; i < triangleSides.elements.length; i++) {
       sideA = triangleSides.elements[0].value;
        sideB = triangleSides.elements[1].value;
        sideC = triangleSides.elements[2].value;
        console.log(sideA, sideB, sideC);

    }   
}

*/

p = (sideA+sideB+sideC)/2;
console.log(p);
square = Math.sqrt((p+sideA)+(p+sideB)+(p+sideC));
console.log(square);








       
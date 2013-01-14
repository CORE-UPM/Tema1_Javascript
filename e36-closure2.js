var uniqueInteger = (function() {
    var counter = 0;
    return function() { return counter++; };
}());

uniqueInteger();
console.log(uniqueInteger()) ;

uniqueInteger();
console.log(uniqueInteger()) ;

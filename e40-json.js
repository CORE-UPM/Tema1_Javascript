var x = {a:1, y:{b:[false, null, ""]}};

var y = JSON.stringify(x);

console.log(y);

var z = JSON.parse(y);

console.log(z);

var arr1 = [{name:
    "Aditya"},{name: "Sravani", age: 21}, {name: "Ankit", age: 20},{name: "Shruti", age: 20}];

var nameListTwo = ["Aditya", "Ankit", "Sravani", "Shruti"];
nameListTwo.toString();
var startswithA = arr1.filter(arr1 => arr1.name.startsWith('A'));

var startswithS = nameListTwo.filter(nameListTwo => nameListTwo.startsWith('S'));
console.log(startswithS);
console.log(startswithA);

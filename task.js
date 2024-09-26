// Chapter (Array)

// Questions

// q 01
var empty = [];
console.log(empty);

// q 02
var empty = [];
console.log(empty);

// q 03
var arrString = ["a","b","c","d"]
console.log(arrString);

// q 04
var arrNum = [1,2,3,4,5]
console.log(arrNum);

// q 05
var arrBoolean = [true,false]
console.log(arrBoolean);

// q 06
var mixedArr = ["a","b",1,2,3,true,false]
console.log(mixedArr);

// q 07
var listArr = [`<h1>Qualification</h1>
`,"SSC <br>", "HSC <br>", "BCS <br>","BS <br>","BCOM <br>","MS <br>","M.PHIL <br>","PHD"];
document.write(listArr);

// q 08
var name = ["adnan","rizwan","anwar"];
var score = [320,310,300];


console.log(name[0],score[0] + ` Percentage: ${score[0]/500*100}%`);
console.log(name[1],score[1] + ` Percentage: ${score[1]/500*100}%`);
console.log(name[2],score[2] + ` Percentage: ${score[2]/500*100}%`);

// q 09
var color = ["orange","yellow","pink","green","white"];
document.write(color + "<br>");

var add = prompt("Add Color Start");
color.unshift(add);
document.write(color + "<br>");


var add = prompt("Add Color End");
color.push(add);
document.write(color + "<br>");

color.splice(0,0,"purple","blue");
document.write(color + "<br>");

color.splice(0,1);
document.write(color + "<br>");

color.splice(-1,1);
document.write(color + "<br>");

color.splice(-1,1);
document.write(color + "<br>");

var add = prompt("Add Position/index .");
color.splice(5,0,add)
document.write(color + "<br>");

var add = +prompt("Delete IndexNumber");
color.splice(0,add,);
document.write(color);

// q 10
var score = [320,230,120,480];
console.log(`Student Score is: ${score}`);

score.sort();
console.log(`Ordered Score is: ${score}`);

// q 11
var cities = ["karachi","islamabad","quetta","faislabad","peshawar"];
console.log(cities);

var select = cities.slice(0,3);
console.log(select);

// q 12
var arr = ["This","is","my","cat"];
console.log(arr);

var add = arr.toString()
console.log(add);

// q 13
var arr = [];

arr.push(10);
arr.push(20);
arr.push(30);
console.log(arr);

console.log(arr.shift());
console.log(arr.shift());
console.log(arr.shift());

console.log(arr);

// q 14
var arr = [];

arr.unshift(10);
arr.unshift(20);
arr.unshift(30);
console.log(arr);

console.log(arr.shift());
console.log(arr.shift());
console.log(arr.shift());

console.log(arr);

// q 15
var manufacture = ["nokia","samsung","apple","motorola"];

document.write(`<select> 
    <option disabled selected>maufacture</option>
    <option>${manufacture[0]}</option>
    <option>${manufacture[1]}</option>
    <option>${manufacture[2]}</option>
    <option>${manufacture[3]}</option>
</select>`)












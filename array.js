//ways to create arrays
//1.literalsyntax
const stunames = ["amith","arjun","arya","arun","ashwin"];
//2.objectsyntax
const enames = new Array("arhan","varun","vishwa","vydehi");
//recommended one is literalsyntax

//how to iterate array element
//for-of
for(let sname of stunames){
    console.log(sname);
}
//for-each
stunames.forEach ((value)=>{
    console.log(value);
})
//how to add element into an array
//psuh(),unshift()
stunames.push("ramireddy");
console.log(stunames);
stunames.unshift("aadhya");
console.log(stunames);
stunames.splice(2,0,"marine","satya");
console.log(stunames);
//how to remove elements from an array
//pop(),shift(),splice(),delete
stunames.pop();
console.log(stunames);
stunames.shift();
console.log(stunames);
stunames.splice(1,2);
console.log(stunames);
//delete stunames[2];
//console.log(stunames);
//replace array element
stunames[2]="sumine";
console.log(stunames);
// how to get portion of an array
//slice()
console.log(stunames.slice(2));
console.log(stunames.slice(2,4));//inclusive
console.log(stunames.slice(-4,-2));
//to search index of any array elements
//indexof(),lastindexOf(),includes()
console.log(stunames.indexOf("salima"));
console.log(stunames.lastIndexOf("saryu"));
console.log(stunames.includes("sip"));
//sort array elementsboth in ascending order,descending order
//sort(),reverse()
console.log(stunames.sort());
console.log(stunames.reverse());
//arrray.length
const names = ["harika","aishwarya","amla","amar"];
console.log(names.length);
// array.tostring
const a = ["arjun","akash","surya","nithin"];
console.log(a.toString());
//array.at() it tell aboutnthe index of it
console.log(a.at(1));
// like array at() method  [] this also indicates the same value
//but [] it indicates for array and objects so there are some conflict about this 
//recently they introduced  at () to overcome this problem //
console.log(a[2]);
// join elements joins the array elements into strings
console.log(a.join(" * "));
// to change the element 
a[0]= "aadhya";
console.log(a);
// concatenation of array
const c = ["sur","mur","kar","dum"];
const d = ["sip","sop","swag","site"];
const e = ["sita","swip","sitara"];
console.log(c.concat(d));
// merging two arrays
console.log(c.concat(d,e));
// copywithin()
console.log(a.copyWithin(2,0));
// arrayFlat it indicates the element array of [], it flats the array
const h =[[2,4],[3,6],[5,7]];
console.log(h.flat());
//arrayentries
let s = d.entries();
for(l of s){
    console.log("sweep",l);
}
//keys
const points = [60,71,34,78];
console.log(points.keys(3));



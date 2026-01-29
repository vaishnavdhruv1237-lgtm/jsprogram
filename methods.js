// String methods

// length()
// trim()
// toUpperCase()
// toLowerCase()
// includes()
// indexOf()
// slice()
// substring()
// replace()
// concat()
// split()

let str = " Hello JavaScript World ! "
console.log(str)
console.log("length() : ",str.length)

let trimText = str.trim();
console.log("trim() : ", trimText.length)

console.log("toUpperCase() : ", str.toUpperCase())
console.log("toLowerCase() : ", str.toLowerCase())

console.log("length() : ", str.includes("JavaScript"))

console.log("indexOf() : ", str.indexOf("JavaScript"))

console.log("slice() : ", str.slice(2,7))

console.log("subString() : ", str.substring(2,7))

console.log("replace() : ", str.replace("JavaScript","React"))

let extraRext = " - Hello JS";
console.log("concat : ", str.concat(extraRext))

console.log("split : ", str.split(" "))
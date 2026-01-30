let student = {
    name: "   first name   ",
    email: "USER@GMAIL.COM",
    course: "JavaScript,React,Node",
    marks: [45, 78, 60, 90, 33],
    hobbies: ["Music", "Cricket", "Reading"],
    address: ["India", ["Gujarat", "Ahmedabad"]]
};

// String Operatios

console.log(student.name.trim().toUpperCase())
console.log(student.email.toLowerCase())
console.log(student.course.includes("React"))
console.log(student.course.indexOf("Node"))
console.log(student.course.replace("JavaScript","JS"))
console.log(student.course.split(" "))
console.log(student.name.length)

// Array Operations

student.hobbies.push("swimming");
student.hobbies.pop();

student.hobbies.push("Drawing");
student.hobbies.shift();

console.log("Updated Hobbies Array:", student.hobbies);

let courseArray = student.course.split(",");
let mergedArray = [...student.hobbies, ...courseArray];
console.log("Merged hobbies + course:", mergedArray);


let failedIndex = student.marks.findIndex(mark => mark < 40);
if (failedIndex !== -1) {
  student.marks.splice(failedIndex, 1);
}
console.log("Marks after removing failed:", student.marks);


let bonusMarks = student.marks.map(mark => mark + 5);
console.log("Bonus Marks:", bonusMarks);


let passedMarks = student.marks.filter(mark => mark >= 40);
console.log("Passed Marks:", passedMarks);

let firstAbove80 = student.marks.find(mark => mark > 80);
console.log("First Above 80:", firstAbove80);

let sortedMarks = [...student.marks].sort((a, b) => a - b);
let reversedMarks = [...sortedMarks].reverse();

console.log("Sorted Marks:", sortedMarks);
console.log("Reversed Marks:", reversedMarks);


console.log("Hobbies:");
student.hobbies.forEach(hobby => console.log(hobby));

let flatAddress = student.address.flat();
console.log("Flat Address:", flatAddress);


student.result = student.marks.every(mark => mark >= 40)
  ? "Pass"
  : "Fail";


student.hobbies = student.hobbies.join(", ");

console.log("Final Student Object:", student);
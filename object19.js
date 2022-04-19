
var students={}
for (let step = 0; step <2; step++){
   var name =require("readline-sync").question("Enter your name:");
   var marks=require("readline-sync").questionInt("Enter the marks");
   students[name]=marks;
}
console.log(students);
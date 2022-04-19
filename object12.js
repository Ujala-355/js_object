var n =require("readline-sync").questionInt('How many more times? ');
d = {}
for (let i = 0; i <= n; i++) {
   d[i] = i ** 2
}
console.log(d);
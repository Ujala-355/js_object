var a="My name is kumar, and my friends name is Dhamu"
var m=a.split(" ")
// console.log(m,a);
var c=0;
var i=0;
while (i<m.length){
    if (m[i]==="is"){
        c+=1
    }
    i++
}
console.log(c);

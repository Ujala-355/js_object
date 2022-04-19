var dict={"name":"Raju", "marks":56}
var user=require("readline-sync").question("enter a number");
for (i in dict){
    if (i===user){
        console.log("exists");
        break
    }
    else {
        console.log("not exists");
        break
    }
}
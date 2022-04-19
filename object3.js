var a={
    "b":10,
    c:20,
    "d":30,
    k:40,
    salary:function(){
        return 200;
    },
    fullname:function(){
        return this.k +" "+this.c
    }
}
console.log(a);
console.log(a.salary)
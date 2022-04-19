const list = [{ "first": "1", "second": "2", "third": "1", "four": "5", "five": "5", "six": "9", "seven": "7" }]
let l=[]
for (i of list){
    for (j in i){
        if (!l.includes(i[j])){
            l.push(i[j]);
        }
    }
}
console.log(l)
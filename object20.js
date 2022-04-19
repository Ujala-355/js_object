const l=[]
const w="MISSISSIPPI"
let d={}
for (var i of w){
    if(l.includes(i)){
        d[i]=d[i]+1
    }
    else{
        l.push(i);
        d[i]=1
    }
}
console.log(d)
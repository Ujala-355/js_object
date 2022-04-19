var dict = {
    'a':50,
    'b':58,
    'c':56,
    'd':40,
    'e':100,
    'f':20
}
var max=0;
var second_max=0;
var third_max=0;
for (i in dict){
    if (dict[i]>max){
        max=dict[i]
    }
}
for (j in dict){
    if (dict[j]>second_max && dict[j]<max){
        second_max=dict[j]
    }
}
for (k in dict){
    if (dict[k]>third_max && dict[k]<second_max){
        third_max=dict[k]
    }
}
console.log(max)
console.log(second_max)
console.log(third_max)
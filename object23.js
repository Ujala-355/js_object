function mobile(model_no){
    this.model=model_no;
    this.memory=4;
}
var samsung=new mobile("Galaxy");
var nokia = new mobile("3310");
if (typeof nokia.memory!=="undefined"){
    console.log("exist");
}
else{
    console.log("not exist");
}






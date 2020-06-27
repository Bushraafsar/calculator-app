function getnum(num){
    
    var result=document.getElementById("result");
    result.value+=num;

}
function clearresult(){
    var result=document.getElementById("result");
    result.value="";
}
function getresult(){
    var result=document.getElementById("result");
    result.value=eval(result.value);
}
function back() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}
function root(){
    var result=document.getElementById("result");
    result.value=Math.sqrt(result.value);
}
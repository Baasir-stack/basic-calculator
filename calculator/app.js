
function getValue(num){
    var result=document.getElementById('result')
    result.value+=num;
    

}

function Clear(){
    var clear =document.getElementById('result')
    clear.value='';
}

function show(){
    var result=document.getElementById('result')
    result.value=eval(result.value);
}
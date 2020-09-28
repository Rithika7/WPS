var text;
function cal(){
   var n=document.getElementsByName("arr");
    text="<p>";
    text += "Name : "+ n[0].value + "<br>";
    text += "Price : "+ n[1].value + "<br>";
    text += "Quantity : "+ n[2].value + "<br>";
    text+="Total:"+n[1].value*n[2].value+"</p>";
    document.getElementById("isp").innerHTML = text;
    
}
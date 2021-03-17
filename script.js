function sliderChange(newVal){
    document.getElementById("demo").innerHTML=newVal; //Code to dynamically display value of the slider
    var slider1 = document.getElementById("myRange");
    var demo = document.getElementById("demo");
    demo.innerHTML = slider1.value;
}


function compute()
{
    var slider1 = document.getElementById("myRange");
    var p = document.getElementById("principal").value;
    var y = document.getElementById("years");
    var i = p * y.value * slider1.value / 100
    var dateobj = new Date();
    var b = dateobj.getFullYear();
    var nextyear = parseInt(b) + parseInt(y.value)
    if (p <= 0){
  alert ("Please Enter Positive Number");
  p.focus();
return false;
document.getElementById("principal").focus();}
    document.getElementById("result").innerHTML = "If you deposit  " + p + ", ";
    document.getElementById("result1").innerHTML = "at an intrest rate  " + slider1.value + "%.";
    document.getElementById("result2").innerHTML = "You will receive an amount of " + i;
    document.getElementById("result3").innerHTML = "in the Year  " + nextyear;

}

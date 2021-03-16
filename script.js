function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate");
    var y = document.getElementById("years");
    var interest = p * y * r / 100

    var dateobj = new Date();
    var B = dateobj.getFullYear();
    year = B+y;
    document.getElementById("result").innerHTML = y;
}
function showVal(newVal){
    document.getElementById("demo").innerHTML=newVal;
    var slider1 = document.getElementById("myRange");
    var demo = document.getElementById("demo");
    demo.innerHTML = slider1.value;
}

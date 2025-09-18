function temperature(){
    //To convert celsius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f= (c * 9/5) + 32
    document.getElementById("fahrenheit").value=f;
}

function weight(){
    //To convert Kgs to Pounds
    //Weight (Kgs) * 2.2
    var kg=document.getElementById("kilo").value;
    var po=kg * 2.2
    document.getElementById("pounds").value=po;
}

function distance(){
    //To convert Kms to Miles
    //Distance(Kms) * 0.62137
    var k=document.getElementById("km").value;
    var mi=k * 0.62137
    document.getElementById("miles").value=mi;
}
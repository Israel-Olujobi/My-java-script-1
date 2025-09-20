function compute(){
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var i = p*r*y/100;
    var a = parseInt(p) + parseFloat(i); //parseInt(10.34), output=10; parseFloat(10.34), Output=10.34
    var result = document.getElementById("result");
    var year = new Date().getFullYear() + parseInt(y); //Ensures that input taken in y is converted to an actual year

    if (p <= 0){
        alert("Please enter a positive number");
        document.getElementById("principal").focus();//Once the user clicks on the alert “OK” button, take the user back to the “Principal” input box
    }
    else {
        result.innerHTML = "If you deposit $" + "<mark>" + p + ",\<br>at an interest rate of" + "<mark>" + r + "%.\<br>You will receive an amount of $" + "<mark>" + i + ",\<br>in the year " + "<mark>" + year + "\<br>";
        //Note that when writing < or > within quotation marks, you must instead type \< or \>
        //Highlight by using the <mark> HTML tag around each variable value
    }

}

function updateRate(){
var rateval=document.getElementById("rate").value;
document.getElementById("rate_val").innerText=rateval;
}
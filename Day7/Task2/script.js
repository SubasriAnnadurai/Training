document.getElementById("print").addEventListener('click',()=>{
    let number1 = document.getElementById("input1").value;
    let number2 = document.getElementById("input2").value;
    for(let i=number1;i<=number2;i++)
    {
        document.getElementById("output").innerText = document.getElementById("output").innerText+" "+i;
    }
});
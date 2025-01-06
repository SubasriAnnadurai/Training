document.getElementById("check").addEventListener('click',()=>{
    let number = document.getElementById("input").value;
    if(number%2==0)
    {
        document.getElementById("output").innerText = "even";
    }
    else
    {
        document.getElementById("output").innerText = "odd";
    }
});
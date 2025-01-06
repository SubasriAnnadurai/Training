document.getElementById("sum").addEventListener("click",()=>{
    let sum=0;
    for(let i=1;i<=100;i++)
    {
        sum = sum+i;
    }
    document.getElementById("output").innerText = sum;
})
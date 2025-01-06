document.getElementById("print").addEventListener('click',()=>{
    let number = document.getElementById("input").value;
    for(let i=1;i<=10;i++)
    {
        let output = number*i;
        document.getElementById("output").innerText = document.getElementById("output").innerText+" "+output;
    }
});
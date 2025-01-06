document.getElementById("print").addEventListener("click",()=>{
    let integer = document.getElementById("integer").value;
    let string = "";
    for(let i=0;i<integer;i++)
    {
        for(let j=0;j<=i;j++)
        {
            string += "*"; 
        }
        string += "<br/>";
    }
    document.getElementById("output").innerHTML = string;
})
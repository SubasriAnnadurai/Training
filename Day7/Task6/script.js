document.getElementById("submit").addEventListener("click",()=>{
    let number = document.getElementById("total").value;
    let array = [];
    for(let i=0;i<number;i++)
    {
        let integer = Number(prompt("Enter a number"));
        array.push(integer);
    }
    let max=0;
    for(let j=0;j<array.length;j++)
    {
        if(array[j]>max)
        {
            max = array[j]
        }
    }
    document.getElementById("output").innerText = "Max = "+max;
})
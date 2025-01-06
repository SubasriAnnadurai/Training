document.getElementById("submit").addEventListener("click",()=>{
    let name = document.getElementById("name").value;
    let count = 0;
    for(let i=0;i<name.length;i++)
    {
        if(name.charAt(i)=='a'||name.charAt(i)=='e'||name.charAt(i)=='i'||name.charAt(i)=='o'||name.charAt(i)=='u')
        {
            count++;   
        }
    }
    document.getElementById("result").innerText = count;
})
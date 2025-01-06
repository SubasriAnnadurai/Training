document.getElementById("submit").addEventListener("click",()=>{
    let string = document.getElementById("string").value;
    let reversedString = "";
    for(let i=string.length;i>=0;i--)
    {
        reversedString += string.charAt(i);
    }
    document.getElementById("output").innerText = reversedString;
})
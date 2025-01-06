document.getElementById("check").addEventListener("click",()=>{
    let number = document.getElementById("input").value;
    if(number<=1)
    {
        document.getElementById("output").innerText = "not prime";
    }
    else
    {
        let prime = true;
        for(let i=2;i<=number/2;i++)
        {
            if(number%i==0)
            {
                document.getElementById("output").innerText = "It is not prime";
                prime = false;
                break;
            }
        }
        if(prime)
        {
            document.getElementById("output").innerText = "It is prime";
        }
    }
})
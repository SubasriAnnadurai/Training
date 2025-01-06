document.getElementById("print").addEventListener("click",()=>{
    let string = "";
    for(let i=1;i<=50;i++)
    {
        if(i%3==0 && i%5==0)
        {
            string += "FizzBuzz "+"<br/>";
        }
        else if(i%3==0)
        {
            string += "Fizz "+"<br/>";
        }
        else if(i%5==0)
        {
            string += "Buzz "+"<br/>";
        }
        else
        {
            string += i+" "+"<br/>";
        }
    }
    document.getElementById("output").innerHTML = string;
})
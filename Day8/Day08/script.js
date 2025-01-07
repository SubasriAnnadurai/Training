document.getElementById("calculate1").addEventListener("click",()=>{
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let output="";
    let sum = num1 + num2+"<br/>";
    let subtract = num1 - num2+"<br/>";
    let mul = num1 * num2+"<br/>";
    let div = num1 / num2+"<br/>";
    document.getElementById("output").innerHTML = "sum "+sum+"subtract "+subtract+"mul "+mul+"div "+div;
})


document.getElementById("calculate2").addEventListener("click",()=>{
    let task2 = Number(document.getElementById("t2-num1").value);
    if(task2>10 && task2%2==0)
    {
        document.getElementById("output2").innerText = true;
    }
    else{
        document.getElementById("output2").innerText = false;
    }
})


document.getElementById("calculate3").addEventListener("click",()=>{
    let task3 = Number(document.getElementById("t3-num1").value);
    let output3 = (task3>0)? "Positive" : "Negative";
    document.getElementById("output3").innerText = output3; 
})


document.getElementById("calculate4").addEventListener("click",()=>{
    let task4 = Number(document.getElementById("t4-num1").value);
    if(task4%2==0)
    {
        document.getElementById("output4").innerText = "Even";
    }
    else
    {
        document.getElementById("output4").innerText = "Odd";
    }
})


document.getElementById("calculate5").addEventListener("click",()=>{
    let task5  = Number(document.getElementById("t5-num1").value);
    let Grade = "";
    switch(task5/10)
    {
        case 10:
        case 9:
            Grade = "A";
            break;
        case 8:
            Grade = "B";
            break;
        case 7:
            Grade = "C";
            break;
        default:
            Grade = "F";
    }
    document.getElementById("output5").innerText = "Grade :"+Grade;
})


document.getElementById("calculate6").addEventListener("click",()=>{
    let task6 = Number(document.getElementById("t6-num1").value);
    let output6 = "";
    for(let i=1;i<=10;i++)
    {
        output6 += " "+task6+"x"+i+"="+task6*i+"<br/>";
    }
    document.getElementById("output6").innerHTML = output6;
})


document.getElementById("calculate7").addEventListener("click",()=>{
    let task7 = Number(document.getElementById("t7-num1").value);
    let count = 0;
    let output7 = "";
    while(task7>0)
    {
        task7 = Math.floor(task7/10);
        count++;
    }
    document.getElementById("output7").innerText = count;
})


document.getElementById("reverse").addEventListener("click",()=>{
    let string = document.getElementById("t8-num2").value;
    let result = string.split('').reverse().join('');
    document.getElementById("result").innerText = "The reversed String : "+result
})


document.getElementById("checkVowel").addEventListener("click",()=>{
    let string = document.getElementById("t9-num2").value;
    let vowels = ['a','e','i','o','u']
    let count = 0;
    for(let i=0;i<string.length;i++)
    {
        if(vowels.includes(string.charAt(i)))
        {
            count++
        }
    }
    document.getElementById("count").innerText = "vowels : "+count ;
})


document.getElementById("checkPalindrome").addEventListener("click",()=>{
    let string = document.getElementById("t10-num2").value;
    let reverse = string.split('').reverse().join('');
    let check = "";
    if(string == reverse)
    {
        check = true;
    }
    else{
        check = false;
    }
    document.getElementById("check").innerText = "The palindrome : "+check;
})
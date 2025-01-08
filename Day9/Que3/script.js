function Even(){
    let sentence = "I am learning JavaScript every day";
    let array = sentence.split(" ");
    for(let i=0;i<array.length;i+=2)
    {
        array[i] = "EVEN";
    }
    let sentencee = array.join(" ");
    console.log(sentencee);
}
Even(); 
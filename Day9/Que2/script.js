function solve(){
    let sentence = "John Mary John Alex Mary";
    let array = sentence.split(" ");
    for(let i=0;i<array.length;i++)
    {
        for(let j=i+1;j<array.length;j++)
        {
            if(array[i]==array[j])
            {
                array[j] = "CHANGED";
            }
        }
    }
    let sentencee = array.join(" ");
    console.log(sentencee);   
}
solve();
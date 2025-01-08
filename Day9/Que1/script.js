function print(){
    let string = "I am Learning javascript daily";
    console.log(findLargestWord(string));
}
function findLargestWord(str){
    let array = str.split(" ");
    let length=0;
    let word = "";
    for(let i=0;i<array.length;i++)
    {
        if(length<array[i].length)
        {
            word = array[i];
            length = array[i].length;
        }
    }
    return word;
}
print();


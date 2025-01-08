function split(){
    let str = "Hello world"
    let orgArray = str.split('');
    let newArray = [];
    for(let i=0;i<orgArray.length;i++)
    {
        if(orgArray[i]==' ')
        {
            newArray.push(' ');
            continue;
        }
        if(newArray.includes(orgArray[i]))
        {
            continue;
        }
        else{
            newArray.push(orgArray[i]);
        }
    }
    console.log(newArray.join(''));
}
split();
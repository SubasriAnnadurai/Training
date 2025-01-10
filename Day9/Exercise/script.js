function Duplicate(){
    let str = "I am learning javascript daily";
    let str1 = str.split('');
    let newstr = [];
    for(let i=0;i<str1.length;i++)
    {
        if(str1[i]==' ')
        {
            newstr.push(' ');
            continue;
        }
        else if(newstr.includes(str1[i]))
        {
            continue;
        }
        else
        {
            newstr.push(str[i]);
        }
    }
    console.log(newstr.join(''));
}
Duplicate();
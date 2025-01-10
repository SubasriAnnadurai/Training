function unique(){
    const obj = { a: 1, b: 2 };
    let arr=[];

    Object.keys(obj).forEach((key)=>{
        let tmp=[key];
        tmp.push(obj[key]);
        arr.push(tmp);
    })

    console.log(arr)
}
unique();
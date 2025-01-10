function unique(){
    const obj = { a: 1, b: 2, a: 3 };
    let map = new Map();

    Object.keys(obj).forEach((key)=>{
        if(!map.has(key)){
            map.set(key,obj[key]);
        }
    })
    console.log(map)
}
unique();
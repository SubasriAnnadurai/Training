function transform(){
    const arr = [ { id: 1, name: 'A' }, { id: 2, name: 'B' }, ];
    const map=new Map();

    for(let i=0;i<arr.length;i++){
        map.set(arr[i].id,arr[i].name);
    }
    console.log(map)
}
transform();


function freq(){
    const map = new Map();
    const arr = [1, 2, 2, 3, 3, 3];
    let max=0;
    let val=0;

    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);
             if(max < map.get(arr[i])){
                val=arr[i];
             }
        }
        else{
            map.set(arr[i],1);
            if(max < map.get(arr[i])){
                val=arr[i];
             }
        }
    }
    
    console.log(val);

}
freq();
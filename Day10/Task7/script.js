function unique(){
    const arr = [1, 2, 2, 3, 4, 4, 5];
    let count=0;
    let unique=[];

    for(let i=0;i<arr.length;i++){
        if(arr[i] == -1){
            continue;
        }
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] == -1){
                continue;
            }
            if(arr[i] == arr[j]){
                count++;
                arr[j]=-1
            }
        }
        if(count==0){
           unique.push(arr[i]);
        }
        count=0;
    }
    console.log(unique)
}
unique();
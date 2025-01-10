function unique(){
    let arr = [1, 2, 3, 5],b = [4, 7],c = 6;
    for(let i=0;i<b.length;i++){
        arr.push(b[i]);
    }
    arr.push(c);


    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] > arr[j]){
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    console.log(arr);
}
unique();
function freq(){
    const arr1=[1,2,3]
    const arr2=[2,3,4];
    const common =[];
    for(let i=0;i<arr2.length;i++){
        if(arr1.includes(arr2[i])){
            common.push(arr2[i]);
        }
    }
    console.log(common);
}
freq();
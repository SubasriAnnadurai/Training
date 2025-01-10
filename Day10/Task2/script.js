let obj ={odd:[],even:[]}

function split(){
    let arr=[1,2,3,4,5,6]
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 == 0){
               obj.even.push(arr[i]);      
        }else{
               obj.odd.push(arr[i]);
        }
    }

    console.log(obj);
}

split();
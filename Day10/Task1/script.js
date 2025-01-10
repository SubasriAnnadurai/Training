const employees = [ 
    { name: 'John', age: 28 }, 
    { name: 'Anna', age: 22 }, 
    { name: 'Mike', age: 32 },
];

function main(){
     console.log(sort(employees));
}

function sort(obj){
    for(let i=0;i<obj.length;i++){
         for(let j=i+1;j<obj.length;j++){
            if(obj[i].age > obj[j].age){
                let tmp =obj[i];
                obj[i]=obj[j];
                obj[j]=tmp;
            }
         }
    } 
    return obj;
}


main();
    
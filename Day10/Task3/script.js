const data = [ { id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'C' }, ];

function removeDuplicate(){
    let track=[];
    let newArr = [];

    for(let i=0;i<data.length;i++){
        if(!(track.includes(data[i].id))){
            newArr.push(data[i]);
            track.push(data[i].id);
        }
    }
    console.log(newArr);
}

removeDuplicate();
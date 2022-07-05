let arCount = 5;
let ar = [1,2,3,5,6];

function simpleArraySum() {
    let i = 0;
    let result = 0;
    
    while (i < arCount) {
        result = result + ar[i];
        
        i++;
    }
    
    return console.log(result);
}

simpleArraySum();
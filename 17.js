let arr1 =  [1, 3, 2, 4, 3, 2];
let ZigZag = false;

for(let i = 1; i < arr1.length; i++){
    let decend = arr1[i] < arr1[i-1] && arr1[i] < arr1[i+1];
    let acend = arr1[i] > arr1[i-1] && arr1[i] > arr1[i+1];

    if(decend || acend){
        ZigZag = true;
    }
}

console.log(ZigZag);
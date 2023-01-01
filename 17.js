let arr1 =  [1, 3, 2, 4, 3, 7];
let zigZag = true;

for(let i = 1; i < arr1.length-1; i++){
    const decend = arr1[i] >= arr1[i+1] && arr1[i] <= arr1[i-1];
    const acend = arr1[i] >= arr1[i-1] && arr1[i] <= arr1[i+1];

    if(decend || acend){
        zigZag = false;
        break;
    }
}

console.log(zigZag);
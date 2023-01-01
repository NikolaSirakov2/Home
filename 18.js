let arr1 = [18, 19, 32, 1, 3, 4, 5, 6, 77, 18];
let arr2 = [1, 2, 3, 4, 5, 16, 17, 18, 27, 11];

let newarr = [];

for(let m = 0; m < arr1.length; m++){
    if(arr1[m] > arr2[m]){
        newarr.push(arr1[m]);
    } else if(arr1[m] < arr2[m]){
        newarr.push(arr2[m]);
    }
}

console.log(newarr);
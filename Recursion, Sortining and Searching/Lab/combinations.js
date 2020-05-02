function generate(set, index, arr, k) {
    if (index === arr.length){
        console.log(arr.join(' '));
    }
    else{
        for (let i = k + 1; i < set.length; i++) {
            arr[index] = set[i];   
            generate(set, index + 1, arr, i);  
        }
 
    }
}
generate([1, 2, 3, 4, 5, 6], 0, Array(3), -1);
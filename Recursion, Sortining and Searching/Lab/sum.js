function Sum(arr, index){

    if(index === arr.length){
        return 0;
    }

    return arr[index] + Sum(arr, index + 1);
}

function Main(){
    let arr = [1, 2, 3, 4, 5];

    let sum = Sum(arr, 0);
    console.log(sum);
}

Main();
function print(n){

    let str = "*";
    let str1 = '#';
    if(n === 0){
        return;
    }

    console.log(str.repeat(n));
    print(n - 1);
    console.log(str1.repeat(n));
}

print(5);
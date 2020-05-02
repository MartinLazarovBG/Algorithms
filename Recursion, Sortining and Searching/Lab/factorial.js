function factorial(number) {
    
    if(number === 0){
        return 1;
    }

    let current = number * factorial(number - 1)
    return current;
}

console.log(factorial(5));
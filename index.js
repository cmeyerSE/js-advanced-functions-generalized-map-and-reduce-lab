function map(array, func) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(func(array[i]));
    }
    return newArray
}

function reduce(array, func, start) {
    let s;

    if(start) {
        s = start;
        for(let i = 0; i < array.length; i++) {
            s = func(array[i], s)
        }
    }
    else{
        s = array[0];
        for(let i = 1; i < array.length; i ++) {
            s = func(array[i], s)
        }
    }
    return s
}

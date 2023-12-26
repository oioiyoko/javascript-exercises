const removeFromArray = function(...args) {
    const argumentQty = args.length;
    const arrayLength = args[0].length;
    const array = args[0];
    console.log("THIS IS THE FULL ARRAY: " + array);
    for (let i = 1; i < argumentQty; i++) {

        for (let j = 0; j < arrayLength; j++) {
            if (array[j] === args[i]) {
                console.log("THIS IS WHAT IM REMOVING " + array[j]);
                array.splice(j, 1);
            }
        }
    }
    console.log("THIS IS THE FINAL ARRAY: " + array);
    return array;

 




    /*    const index = array.indexOf(item);
    console.log("THE INDEX IS: " + index);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
    */


};

// Do not edit below this line
module.exports = removeFromArray;

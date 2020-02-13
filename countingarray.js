let counter = 0;
const array = [];

function addElements() {
    setTimeout(() => {
        array.unshift(counter)
            //Adds one or more elements to the beginning of an array and returns the new length of the array.
        counter++
        //Adds element after element.
        addElements()
    }, 2000);
    if (array.length == 10) {
        //The array never becomes longer than 10.
        array.pop();
        //Removes the last element from an array.
        array.length
    }
    console.log(array);
}

addElements(); //Starts the whole function, runs by itself.
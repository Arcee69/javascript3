var output = [];
function wholeNumbers(output) {
    for (i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        console.log("yu");
    } 
    else if (i % 3 === 0) {
        console.log("gi");
    }
    else if (i % 5 === 0) {
        console.log("oh");
    }
    else {
        console.log(i)
    }     
    }
}
wholeNumbers(100);
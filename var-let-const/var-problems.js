function func1() {
    for (var i = 0; i < 5; i++) {
        /* 
            Problem 1: The for loop is faster than the timeouts so i 
            will be 5 by the time the timeouts execute because var
            doesn't preserve any passed value
        */
        setTimeout(function () {
            console.log(i);
        }, 100);
    }
    // Problem 2: The i defined in the for loop is still accessible outside it
    console.log(i);
}

func1();

// Solve Problem 1 but not 2 while keeping var
function func2() {
    for (var i = 0; i < 5; i++) {
        (function (i) {
            setTimeout(function () {
                console.log(i);
            }, 100);
        })(i);
    }
}

func2();

// Solve Problem 1 & 2 with let
function func3() {
    for (let i = 0; i < 5; i++) {
            setTimeout(function () {
                console.log(i);
            }, 100);
    }
}

func3();
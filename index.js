function receivesAFunction(callback) {
    return callback()
}


function returnsANamedFunction() {
    return function x() {
        return x;
    }
}

function returnsAnAnonymousFunction() {
    return function() {

    }
}
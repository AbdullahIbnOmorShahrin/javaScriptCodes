function maxOfArray(arr) {
    var max = arr[0];
    var i = 1;

    for (i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (element > max) {
            max = element;
        }
    }
    console.log(max);
}

var arr = [5, 8, 4, 10];
maxOfArray(arr);
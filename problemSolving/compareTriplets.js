let a = [5, 6, 7];
let b = [3, 6, 10];

const compareTriplets = () => {
    let result = [0, 0];

    let i = 0;
    while (i < 3) {
        if (a[i] > b[i]) {
            result[0] ++;
        }
        else if (a[i] < b[i]) {
            result[1] ++;
        }

        i ++;
    }

    return console.log(result)
}

compareTriplets();
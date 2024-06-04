function countTrueValues() {
    let booleanArray = [true, false, true, true, false, true, false, false, true];

    let trueCount = booleanArray.filter(value => value === true).length;

    document.getElementById('result').innerHTML = "<p>Number of true values: " + trueCount + "</p>";
}
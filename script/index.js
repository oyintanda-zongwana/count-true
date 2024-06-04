function countTrueValues() {
    let booleanArray = [true, false, true, true, false, true, false, false, true];
    //to check which values are true
    let trueCount = booleanArray.filter(value => value === true).length;
    //so the result will be shown
    document.getElementById('result').innerHTML = "<p>Number of true values: " + trueCount + "</p>";
}
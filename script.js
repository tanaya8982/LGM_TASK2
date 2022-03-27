let outPutScreen = document.getElementById("outputscreen");
function display(num) {
    outPutScreen.value += num;
}
function calculate() {
    try {
        outPutScreen.value = eval(outPutScreen.value);
    }
    catch (err) {
        alert("Invalid Input")
    }
}
function Clear() {
    outPutScreen.value = '';
}
function del() {
    outPutScreen.value = outPutScreen.value.slice(0, -1);
}
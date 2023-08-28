let counter = 0;
const disp = document.querySelector('.display')
function check() {
    if(counter>0){
        disp.style.color = "green"
    }
    else if(counter<0){
        disp.style.color = "red"
    }
    else{
        disp.style.color = "black"
    }
}
function subtract() {
    counter -= 1
    disp.innerHTML = counter
    check()
}
function reset() {
    counter = 0
    disp.innerHTML = counter
    check()
}
function add() {
    counter += 1
    disp.innerHTML = counter
    check()
}
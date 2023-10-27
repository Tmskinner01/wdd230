/* 
a = current date
b = last visit
n = difference in visit
*/
const todayElement = document.querySelector("#today");
const msToDays = 84600000;

let a = new Date();
let b = new Date(localStorage.a);

if (isNaN(b)) {
    n = 0;
    localStorage.a = a
}
else {
    localStorage.a = a;
    localStorage.b = b;

    b = Date.parse(localStorage.b);
    a = Date.parse(localStorage.a);
    n = (a-b) / msToDays;

}

if (n == 0) {
    todayElement.textContent = "Welcome! Let us know if you have any questions.";
}
else if (n < 1) {
    todayElement.textContent = "Back so soon! Awesome!";
}
else {
    n = Math.round(n);
    if (n==1) {
        todayElement.textContent = `You last visited ${n} day ago`;
    }
    else {
        todayElement.textContent = `You last visited ${n} days ago.`;
    }
}


// set last visit to current date
b = a;
localStorage.b = b;


const p1 = document.querySelector("#password");
const p2 = document.querySelector("#confirmedPassword");
const message = document.querySelector("#passwordMessage");

// range variables
const rangevalue = document.querySelector("#rangevalue");
const range = document.querySelector("#r");

//range listeners
range.addEventListener("input", displayRatingValue);
range.addEventListener("change", displayRatingValue);


function checkSame() {
    if (p1.value !== p2.value) {
        message.textContent = "❗Passwords DO NOT MATCH!";
        
        message.style.display;
        p1.style.borderColor = "#E34234";
        p2.style.borderColor = "#E34234"
        p2.style.backgroundColor = "#fff0f3";
        return false;
    } 
    else {
        message.style.display = "none";
        p2.style.backgroundColor = "#fff";
        kp2.style.color = "#000";
    }
    return ok;
}

function displayRatingValue() {
    console.log(range.value)
    rangevalue.innerHTML = range.value;
}

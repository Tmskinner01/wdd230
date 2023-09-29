const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");
const card = document.querySelector(".card");
const a = main.querySelectorAll("a");
const li = card.querySelectorAll("li");
const p = main.querySelectorAll("p");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌃")) {
        body.style.background = "#333";
        
        [].slice.call(li).forEach(function(text) {
            text.style.color = '#fff';
        });
       
        [].slice.call(a).forEach(function(link) {
            link.style.color = '#fff';
        });

        [].slice.call(p).forEach(function(text) {
            text.style.color = '#fff';
        });

        modeButton.textContent = "🏙️";
    }
    else {
        body.style.background = "#eee";
        
        [].slice.call(li).forEach(function(text) {
            text.style.color = '#000';
        });

        [].slice.call(a).forEach(function(link) {
            link.style.color = '#000';
        });

        [].slice.call(p).forEach(function(text) {
            text.style.color = '#000';
        });

        modeButton.textContent = "🌃";
    }
});
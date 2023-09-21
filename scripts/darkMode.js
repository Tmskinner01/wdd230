const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌃")) {
        body.style.background = "#333";
        modeButton.textContent = "🏙️";
    }
    else {
        body.style.background = "#eee";
        modeButton.textContent = "🌃";
    }
});
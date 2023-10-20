const bannerButton = document.querySelector("#banner-button");
const bannerDiv = document.querySelector("#banner")
const bannerText = document.querySelector("#banner-text")
const weekDay = currentDate.getDay()

function showBanner() {
    bannerDiv.classList.add("banner-show")
}
function hideBanner() {
    bannerDiv.classList.add("banner-hide")
    console.log("Banner Hidden")
}
if (weekDay =="3") {
    bannerText.textContent = "This Evening"
}
else {
    bannerText.textContent = "Wednesday"
}
if (weekDay == "1" || weekDay == "2" || weekDay == "3") {
    showBanner();
}
else {
    hideBanner()
}

bannerButton.addEventListener("click", hideBanner);
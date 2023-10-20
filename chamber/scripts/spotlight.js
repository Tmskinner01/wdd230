const api = "https://tmskinner01.github.io/wdd230/chamber/data/members.json";

const spotlight = document.querySelector("#business-images");

async function getMemberData(){
    const response = await fetch(api);
    const data = await response.json();
    console.table(data.members);
    displaySpotlights(data.members);
};

getMemberData();

function filterSpotlights(members) {
    let filteredList = new Array();
    members.forEach(member => {
        let membership = member.membership;
        if (membership == "Gold" || membership == "Silver") {
            filteredList.push(member);
        }
    })
    let top3 = new Array();
    let randomElement = Math.floor(Math.random() * filteredList.length);;
    top3.push(filteredList[randomElement]);
    filteredList.splice(randomElement,1);

    randomElement = Math.floor(Math.random() * filteredList.length);;
    top3.push(filteredList[randomElement]);
    filteredList.splice(randomElement,1);

    randomElement = Math.floor(Math.random() * filteredList.length);;
    top3.push(filteredList[randomElement]);
    filteredList.splice(randomElement,1);

    return top3;
    
};

function displaySpotlights(members) {
    let top3 = filterSpotlights(members)
    top3.forEach(member => {
            let logo = document.createElement("img");

            logo.setAttribute("src", member.logo);
            logo.setAttribute("alt", `${member.name} logo`);
            logo.setAttribute("loading", "lazy");
            logo.setAttribute("width", "100");
            logo.setAttribute("height", "75");
            logo.setAttribute("title", `${member.name}`);

            let card = document.createElement("div");
            card.setAttribute("class","business-card");
            card.appendChild(logo);
            spotlight.appendChild(card);
    });
}
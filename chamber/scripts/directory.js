const url = "https://tmskinner01.github.io/wdd230/chamber/data/members.json";

const directory = document.querySelector("#directory");
const gridButton = document.querySelector("#grid-button");
const listButton = document.querySelector("#list-button");

async function getMemberData(){
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.members);
    displayMembers(data.members);
};

getMemberData();

gridButton.addEventListener("click", displayGrid);
listButton.addEventListener("click", displayList);

function displayGrid() {
    directory.classList.add("directory-grid")
    directory.classList.remove("directory-list")
};

function displayList() {
    directory.classList.remove("directory-grid")
    directory.classList.add("directory-list")
};

function displayMembers(members) {
    members.forEach(member => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let tier = document.createElement("h3")
        let phone = document.createElement("p");
        let address = document.createElement("p");
        let website = document.createElement("a");
        let logo = document.createElement("img")
        

        //set text content
        name.textContent = member.name;
        phone.textContent = member.phone;
        address.textContent = member.address;
        tier.textContent = member.membership;
        
        //set a attributes
        website.setAttribute("href", member.website);
        website.setAttribute("target", "_blank");
        website.setAttribute("title", "Visit Website");
        website.setAttribute("class", "site-link")
        website.textContent = "Visit Site ➔";

        //set img attributes

        logo.setAttribute("src", member.logo);
        logo.setAttribute("alt", `Portrait of ${member.name} `);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "100");
        logo.setAttribute("height", "75");
        logo.setAttribute("class", "directory-logo")

        //append children to card element
        card.appendChild(name);
        card.appendChild(tier)
        card.appendChild(logo)
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(website);

        //append card to directory
        card.setAttribute("class", "directory-card")
        directory.appendChild(card);
    });
}
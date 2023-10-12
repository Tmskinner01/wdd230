const baseURL = "https://tmskinner01.github.io/wdd230/";
const linksURL = "https://tmskinner01.github.io/wdd230/data/links.json";
const linkList = document.querySelector("#link-list");

async function getData() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);

};
function displayLinks(data) {
    data.weeks.forEach(week => {
        const weekText = document.createElement("li");
        

        weekText.innerText = `${week.week}: `;
        const frontLinks = week.links.slice(1);

        week.links.forEach(link => {
            const a = document.createElement("a");
            a.setAttribute("href", link.url);
            a.setAttribute("target", "_blank");
            a.textContent = link.title;
           
            if (frontLinks.includes(link)) {
                let spacer = document.createElement("span")
                spacer.textContent = ` | `;
                weekText.appendChild(spacer);
            }

            weekText.appendChild(a);
            
        });

        linkList.appendChild(weekText);
    });
};

getData();
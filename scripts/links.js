const baseURL = "https://tmskinner01.github.io/wdd230/";
const linksURL = "https://tmskinner01.github.io/wdd230/data/links.json";

async function getData() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);

};
function displayLinks(data) {
    weeks.links.forEach(element => {
        
    });
};

getData();
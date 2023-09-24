const currentDate = new Date(); 
const year = currentDate.getFullYear();
let lastModified = new Date(document.lastModified);

document.querySelector("#year").textContent = year;
document.querySelector("#lastModified").textContent = `Last Modififed: ${lastModified}`;
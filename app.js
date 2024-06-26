"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  const projects = await getProjects();
  console.log(projects);
  displayProjects(projects);
  displayProjectsGrid(projects);
}

//Fucntion to fetch Projects
async function getProjects() {
  const response = await fetch("https://portfolio.faveroconsuelo.com/wp-json/wp/v2/projects?acf_format=standard");
  const data = await response.json();
  return data;
}

//Function to display Projects
function displayProjects(projects) {

  console.log(projects);

  const projectsList = document.querySelector("#projects-list");

  projectsList.insertAdjacentHTML(
    "beforeend", "<h2>Projects</h2>");

  for (const project of projects) {
    console.log(projects);
    projectsList.insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <li>
        ${project.acf.title}
      </li>
      `
    );
  }  
}

//Function to display dynamic grid of fetched Projects
function displayProjectsGrid(projects) {
  const projectsGrid = document.querySelector("#projects-grid");

for (const project of projects) {
  projectsGrid.insertAdjacentHTML(
    "beforeend",
    /*html*/ `
    <article class="grid-item">
      <img src="${project.acf.image}" alt="${project.acf.title}" />
      <h2>${project.acf.title}</h2>
      <p>${project.acf.description}</p>
      <a href="linkto:${project.acf.link}">${project.acf.link}</a>
    </article>
  `
  );
}
}
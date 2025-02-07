// 1) DECLARE/INITIALIZE GLOBAL VARIABLES AND CONSTANTS

// Constructor functions

function Person(name, height, mass, gender, birth_year, appearances) {
  this.name = name;
  this.height = height;
  this.mass = mass;
  this.gender = gender;
  this.birth = birth_year;
  this.appearances = appearances;
}

function Starships(name, model, manufacturer, cost, peopleCapacity, shipClass) {
  this.name = name;
  this.model = model;
  this.manufacturer = manufacturer;
  this.cost = cost;
  this.peopleCapacity = peopleCapacity;
  this.shipClass = shipClass;
}

const BASE_API_URL = "https://swapi.dev/api/";
const swapiResource = {
  people: "people",
  starships: "starships",
};

// // 2) SELECTING ELEMENTS
// const peopleBtn = document.getElementById("peopleBtn");
// const shipsBtn = document.getElementById("shipsBtn");
// const loader = document.getElementById("loader");
// const resultDiv = document.getElementById("result");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");

const elements = {
  peopleBtn: document.getElementById("peopleBtn"),
  shipsBtn: document.getElementById("shipsBtn"),
  loader: document.getElementById("loader"),
  resultDiv: document.getElementById("result"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
};

const tableHeadears = {
  people: ["Name", "Height", "Age", "Gender", "Birth", "Appearance"],
  starships: [
    "Name",
    "Model",
    "Manufacturer",
    "Cost",
    "People Capacity",
    "Class",
  ],
};

// 3) FUNCTION DEFINITIONS

async function getDataAsync(resource) {
  try {
    const url = `${BASE_API_URL}${resource}?page=1`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ERROR ${response.status}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
    elements.resultDiv.innerHTML = `<p class= "text-danger text-center"> An error occured. Please try again later. </p>`;
  }
}

function getTableHtml(headears, dataRows) {
  return `      <table class="table table-dark table">
        <thead>
            <tr>
                ${headears}
            </tr>
        </thead>
        <tbody>
            ${dataRows}
        </tbody>
      </table>`;
}

function renderPeopleTable(data) {
  // 1) Map to Person objects
  const people = data.results.map(
    (p) =>
      new Person(
        p.name,
        p.height,
        p.mass,
        p.gender,
        p.birth_year,
        p.appearances
      )
  );

  // generate headers html
  //   let headersHtml = "";
  //   tableHeadears.people.forEach((header) => {
  //     headersHtml += `<th>${header}</th>`;
  //   });

  let headersHtml = tableHeadears.people
    .map((header) => `<th>${header}</th>`)
    .join("");
  console.log(headersHtml);

  // generate data rows
  let rowsDataHtml = data.results
    .map(
      (person) => `<tr>
    <td>${person.name}</td>
    <td>${person.height}</td>
    <td>${person.mass}</td>
    <td>${person.gender}</td>
    <td>${person.birth_year}</td>
    <td>${person.films.length}</td>
    </tr>`
    )
    .join("");

  elements.resultDiv.innerHTML = getTableHtml(headersHtml, rowsDataHtml);
}

function renderShipTable(data) {
  const ships = data.results.map(
    (ship) =>
      new Starship(
        ship.name,
        ship.model,
        ship.manufacturer,
        ship.cost,
        ship.peopleCapacity,
        ship.ship_Class
      )
  );
  const headersHtml = tableHeaders.starships
    .map(
      (h) => `
      <th>${h}</th>`
    )
    .join();
  const shipRowHtml = ships
    .map(
      (ship) => `
      <tr>
      <td>${ship.name}</td>
      <td>${ship.model}</td>
      <td>${ship.manufacturer}</td>
      <td>${ship.cost}</td>
      <td>${ship.peopleCapacity}</td>
      <td>${ship.shipClass}</td>
      </tr>
      `
    )
    .join("");
  elements.resultDiv.innerHTML = generateTableHtml(headersHtml, shipRowHtml);
}

// 4) HANDLING EVENTS

elements.peopleBtn.addEventListener("click", async () => {
  //   const people = getDataAsync("people");
  const people = await getDataAsync(swapiResource.people);
  console.log(people);
  renderPeopleTable(people);
});

elements.shipsBtn.addEventListener("click", async () => {
  //   const starships = getDataAsync("starships");
  const starships = await getDataAsync(swapiResource.starships);
});

let currentPage = 1; // Track which page of planets is displayed

// Function to fetch planet data from API
function fetchPlanets(page) {
  const apiUrl = `https://swapi.py4e.com/api/planets/?page=${page}`;
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch planets data");
      }
      return response.json();
    })
    .then((data) => {
      printPlanets(data.results); // Pass planet data to the print function
      handleNavigationButtons(page, data.next, data.previous); // Handle button visibility
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to fetch planets.");
    });
}

// Function to print planets into table
function printPlanets(planets) {
  const tableBody = document.querySelector("#planetsTable tbody");
  tableBody.innerHTML = ""; // Clear

  planets.forEach((planet) => {
    const row = `
      <tr>
        <td>${planet.name}</td>
        <td>${planet.population}</td>
        <td>${planet.climate}</td>
        <td>${planet.gravity}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// Function to handle button visibility
function handleNavigationButtons(currentPage, nextPage, previousPage) {
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  if (nextPage) {
    nextBtn.style.display = "inline-block";
  } else {
    nextBtn.style.display = "none";
  }

  if (previousPage) {
    prevBtn.style.display = "inline-block";
  } else {
    prevBtn.style.display = "none";
  }
}

// Event listener for fetching the first page of planets
document.getElementById("fetchPlanetsBtn").addEventListener("click", () => {
  currentPage = 1; // Reset to the first page
  fetchPlanets(currentPage);
});

// Event listener for the Next 10 button
document.getElementById("nextBtn").addEventListener("click", () => {
  currentPage++;
  fetchPlanets(currentPage);
});

// Event listener for the Previous 10 button
document.getElementById("prevBtn").addEventListener("click", () => {
  currentPage--;
  fetchPlanets(currentPage);
});

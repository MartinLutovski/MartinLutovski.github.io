document.addEventListener("DOMContentLoaded", function () {
  const fetchCharacterBtn = document.getElementById("fetchCharacterBtn");
  const characterName = document.getElementById("characterName");
  const characterStats = document.getElementById("characterStats");
  const height = document.getElementById("height");
  const weight = document.getElementById("weight");
  const eyeColor = document.getElementById("eyeColor");
  const hairColor = document.getElementById("hairColor");

  fetchCharacterBtn.addEventListener("click", () => {
    fetch("https://swapi.dev/api/people/4")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json(); // Parse JSON data
      })
      .then((data) => {
        // Display character name
        characterName.textContent = data.name;

        // Fill in stats
        height.textContent = data.height;
        weight.textContent = data.mass;
        eyeColor.textContent = data.eye_color;
        hairColor.textContent = data.hair_color;

        // Display table
        characterStats.style.display = "table";
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        characterName.textContent = "Error fetching data.";
        characterStats.style.display = "none";
      });
  });
});

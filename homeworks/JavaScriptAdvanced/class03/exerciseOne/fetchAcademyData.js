document.addEventListener("DOMContentLoaded", function () {
    const fetchDataBtn = document.getElementById("fetchDataBtn");
    const academyName = document.getElementById("academyName");
    const studentList = document.getElementById("studentList");
  
    fetchDataBtn.addEventListener("click", () => {
      fetch(
        "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json"
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json(); // Parse JSON data
        })
        .then((data) => {
          // Display academy name
          academyName.textContent = data.academy;
  
          // Clear existing student list
          studentList.innerHTML = "";
  
          // Loop through students and create list items
          data.students.forEach((student) => {
            const li = document.createElement("li");
            li.textContent = student;
            studentList.appendChild(li);
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          academyName.textContent = "Error fetching data.";
        });
    });
  });
  
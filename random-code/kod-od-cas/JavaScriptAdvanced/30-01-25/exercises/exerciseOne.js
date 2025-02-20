console.log("Exercise One");

let students = [];

fetch(
  "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G2/Class07/students.json"
)
  .then((response) => response.json())
  .then((data) => {
    students = data;

    // 1. All students with an average grade higher than 3
    const studentsAbove3 = students.filter(
      (student) => student.averageGrade > 3
    );
    console.log(studentsAbove3);

    // 2. All female student names with an average grade of 5
    const femaleStudentsWithGrade5 = students
      .filter(
        (student) => student.gender === "female" && student.averageGrade === 5
      )
      .map((student) => student.name);
    console.log(femaleStudentsWithGrade5);

    // 3. All male student full names who live in Skopje and are over 18 years old
    const maleStudentsSkopjeOver18 = students
      .filter(
        (student) =>
          student.gender === "male" &&
          student.city === "Skopje" &&
          student.age > 18
      )
      .map((student) => `${student.firstName} ${student.lastName}`);
    console.log(maleStudentsSkopjeOver18);

    // 4. The average grades of all female students over the age of 24
    const femaleStudentsOver24 = students.filter(
      (student) => student.gender === "female" && student.age > 24
    );
    const averageGrade =
      femaleStudentsOver24.reduce(
        (sum, student) => sum + student.averageGrade,
        0
      ) / femaleStudentsOver24.length;
    console.log(averageGrade);

    // 5. All male students with a name starting with B and average grade over 2
    const maleStudentsB = students.filter(student => student.gender === "male" && student.firstName.startsWith("B") && student.averageGrade > 2 )
    console.log(maleStudentsB);
    
  })
  .catch((error) => console.error("Error fetching data:", error));

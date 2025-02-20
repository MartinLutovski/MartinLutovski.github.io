function renderDataFromApi(url, renderFunc) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        renderFunc(data);
      });
  }


  function displayUser(user) {
    let h3 = document.createElement("h3");
    h3.textContent = `${user.name} ${user.hair_color}`;
    let allData = document.createElement("td")
    allData.textContent= `${user.name} ${user.gender} ${user.birth_year} ${user.vehicles}`
    document.body.appendChild(h3);
    document.body.appendChild(allData);
  }

  renderDataFromApi("https://swapi.py4e.com/api/people/1/", displayUser);
console.log(" ================= ASYINC / AWAIT ===============");

// =======> Example with Promises

function getDataPromise() {
  return new Promise((resolve, reject) => {
    // throw new Error("Something wrong happend!")
    let response = {
      message: "Data fetched successfully",
      statusCode: 200,
    };
    if (response.statusCode >= 400) {
      reject("Fetch data unsuccessfull");
    }
    resolve(response);
  });
}

getDataPromise()
  .then((data) => console.log("Response object: ", data))
  .catch((error) => console.log("Error!", error));

async function getData() {
  let response = {
    message: "Data fetched successfully",
    statusCode: 200,
  };
  return response;
}

async function processAsyncTask() {
  debugger;
  console.log("Fetching data started");
  let data = await getData();
  console.log("Fetching data finished");
  console.log("Here is the data", data);
}

// processAsyncTask();

let apiUrl = "https://fakestoreapi.com/products/1";

// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((product) => console.log(product))
//   .catch((error) => console.log("Error!", error))
//   .finally(() =>
//     console.log(`Everthing is completed ${new Date().toLocaleString()}`)
//   );

let fetchProduct = async () => {
  try {
    let response = await fetch(apiUrl);
    console.log(response);
    let product = await response.json();
    console.log(product);
  } catch (error) {
    console.log("ERROR!", error);
  }
  finally {
    console.log(`Everyhing is completed at ${new Date().toLocaleString()}`);
    
  }
};

(async () => {
  let product = await fetchProduct();
  console.log(product);
  
})

let getJokeAsync = async () => "Some joke"

document.querySelector("button").addEventListener("click", async () => {
  let product = await fetchProduct();
  console.log(product);
  let joke = await getJokeAsync();
  console.log(joke);
  
  
})
fetchProduct();

async function  runSteps() {
  
}


console.log("===== END OF SCRIPT ========");

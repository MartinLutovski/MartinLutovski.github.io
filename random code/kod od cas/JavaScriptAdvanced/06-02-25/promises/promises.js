console.log("===========Promises==========");

// States of propmises:
// 1) Pending
// 2) Fullfiled
// 3) Rejected

console.log("");
console.log("Creating a promise");

let apiUrl = "https://fakestoreapi.com/products/1";

// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((product) => console.log(product))
//   .catch((error) => console.log("Error!", error))
//   .finally(() =>
//     console.log(`Everthing is completed ${new Date().toLocaleString()}`)
//   );

//  ====> Example function returnig Promise
// 1) Pending
// 2) Fullfiled
// 3) Rejected
function simplePromise() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve();
      reject();
    }, 2000);
  });
  return promise;
}

simplePromise()
  .then(() => console.log("The promise is FULLFILED!"))
  .catch(() => console.log("The promise is REJECTED"))
  .finally(() => console.log("This is executed anyway :)"));

//   ====> Example functions

function simulateAsyncTask(succes) {
  return new Promise((resolve, reject) => {
    console.log("Operation started...");
    setTimeout(() => {
      if (succes) {
        resolve("Task is completed succesfully");
      } else {
        reject("Task failed");
      }
    }, 4000);
  });
}

simulateAsyncTask(true)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

// ?

function step1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve();
    }, 3000);
  });
}
function step2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 2 completed");
      resolve();
    }, 2000);
  });
}
function step3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 3 completed");
      resolve();
    }, 1000);
  });
}

function step4() {
  return new Promise((resolve) => {
    resolve("Final Step Completed");
  });
}
step1()
  .then(() => step2())
  .then(() => step3())
  .then(() => step4())
  .then((message) => console.log(message))
  .catch((error) => console.log(error))
  .finally(() =>
    console.log(`Everything is completed at ${new Date().toLocaleTimeString()}`)
  );

console.log("");

console.log("================ Promise All =============");

function taskA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task A is completed");
        }, 1000)
    })
    
}

function taskB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task B is completed");
        }, 2000)
    })
    
}

function taskC() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task C is completed");
        }, 3000)
    })
    
}


let taskPromise = taskC();
console.log(taskPromise);

Promise.all([taskA(), taskB(), taskC()])
.then(resultArray => {
    console.log("All tasks completed");
    console.log(resultArray);
    
    
})
.catch(error => console.log("ERROR!", error)
)
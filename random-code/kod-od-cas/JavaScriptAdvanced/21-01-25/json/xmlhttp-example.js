console.log("");
console.log("============== Using XMLHTTPrequest=============");


// 1)

let xhr = new XMLHttpRequest();

// 2)

xhr.open("GET", "https://github.com/qa-codecademy/mkwd13-04-ajs/blob/main/shared_data/students.json");

// 3) 

xhr.onload = function() {
    console.log(xhr.response);
    if (xhr.status >= 200 && xhr.status <= 200) {
        console.log("The request succeded");
        console.log(xhr.response);
        
        let parsedResponse = JSON.parse(xhr.response);
        console.log(parsedResponse);
        
        
    } else {
        console.log("The response failed");
        console.log(xhr.response);
        console.log(xhr.responseText);
        
        
        
    }
    
}

// 4 )

xhr.send();
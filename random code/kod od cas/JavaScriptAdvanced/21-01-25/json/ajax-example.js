console.log("");
console.log("==============Using jQuery ajax================");

$(document).ready(function()
{
    const getJokesBtn = $("#get-joke-btn");
    const jokesContainer = $("#jokes-container")
    getJokesBtn.click(function()
{
    $.ajax({
        url: "https://api.chucknorris.io/jokes/random",
        method: "GET",
        dataType: "json",
        success: function(response){
           console.log(response);
           jokesContainer.html(`
            <p>${response.value}</p>
            `
            
           )
            
        },
        error: function(error){
            console.log("Error occured");
            

        }

    })
   
})
})


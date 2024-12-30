$(document).ready(function () {
  $("#colorPicker").minicolors({
    position: "right",
    inline: false,
  }); // initialize color picker

  $("#generateHeader").on("click", function () {
    let textInput = $("#textInput").val().trim(); // text input
    let colorInput = $("#colorPicker").val().trim(); // color picker value
    let errorMessage = $("#errorMessage");
    errorMessage.text(""); // clear error message

    // regular expression (regex for short) allow developers to match strings against a pattern, extract submatch information, or simply test if the string conforms to that pattern
    let isValidColor = /^#([0-9A-Fa-f]{3}){1,2}$/.test(colorInput);

    // validate
    if (!textInput) {
      errorMessage.text("Error: Header text cannot be empty.");
      return;
    }
    if (!colorInput || !isValidColor) {
      errorMessage.text(
        "Error: Invalid color. Please enter a valid color hex code."
      );
      return;
    }

    let newHeader = $("<h1></h1>")
      .text(textInput)
      .css("background-color", colorInput);

    $("#headersContainer").append(newHeader);

    $("#textInput").val(""); // clear value at click
    $("#colorPicker").val(""); // clear value at click
  });
});

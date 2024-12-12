function tellStory() {
  let inputString = prompt(
    "Please enter name, mood, and activity, separated by spaces (e.g., 'Bob happy coding'):"
  );

  if (inputString === null) {
    return "Prompt canceled please refresh.";
  }

  let inputArray = inputString.split(" ");
  if (inputArray.length !== 3) {
    return "Invalid input. Please provide 3 words separated by spaces (name, mood, activity).";
  }

  let name = inputArray[0];
  let mood = inputArray[1];
  let activity = inputArray[2];

  let story = `This person's name is ${name}. ${name} is a cool person. Today they are feeling ${mood}. They are having ${activity} all day long.`;

  return story;
}

alert(tellStory());

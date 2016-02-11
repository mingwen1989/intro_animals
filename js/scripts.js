$(document).ready(function() {
  var age = prompt("Which animal shall we learn about? (Teenage Mutant Ninja Turtles, Snakes, or Insects)");

  if (age === "Teenage Mutant Ninja Turtles") {
    $('#turtles').show();
  }
    else if (age === "Snakes") {
    $('#snakes').show();
  }

  else if (age === "Insects") {
  $('#insects').show();
}

  else {
    $('#other').show();
  }
});

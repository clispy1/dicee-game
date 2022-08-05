const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let started = false;

let level = 0;

// Starting the game
$(document).on("keypress", function () {
	if (!started) {
		$("h1").text("Level " + level);
		nextSequence();
		started = true;
	}
});

$(".btn").click(function (e) {
	// Getting the color clicked
	let userChosenColour = $(this).attr("id");

	// Saving the clicked color
	userClickedPattern.push(userChosenColour);

	animatePress(this);

	playSound(userChosenColour);

	// Calling checkAnswer Function after last index clicked
	checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
	userClickedPattern = [];

   level++;
   
		$("h1").text("Level " + level);


	let randomNumber = Math.floor(Math.random() * 4);

	const randomChosenColour = buttonColours[randomNumber];

	gamePattern.push(randomChosenColour);

	$("#" + randomChosenColour)
		.fadeOut(100)
		.fadeIn(100)
		.fadeOut(100)
		.fadeIn(100);

	playSound(randomChosenColour);
	console.log(gamePattern);
}

function checkAnswer(currentLevel) {

   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      // console.log("success");

      if (userClickedPattern.length === gamePattern.length) {
         // Wait 1 sec before playing the next level
         setTimeout(function () {
            nextSequence();
         }, 1000);
         
		
      }
   }  else {
   playSound("wrong");

      $("body").addClass("game-over");

      $("h1").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
         $("body").removeClass("game-over");
      }, 200);

      startOver();
   }
}

function playSound(name) {
	let audio = new Audio("./sounds/" + name + ".mp3");
	// console.log(audio);
	audio.play();
}

function animatePress(currentColour) {
	$(currentColour).addClass("pressed");

	setTimeout(function () {
		$(currentColour).removeClass("pressed");
	}, 100);
}

function startOver(param) {
	level = 0;
	gamePattern = [];
	started = false;

	// nextSequence();
}


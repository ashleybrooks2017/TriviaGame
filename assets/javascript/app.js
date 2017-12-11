$(document).ready(function(){

	var gamePlay = $("#gamePlay");

	var question1 = {
		q : "What is JQuery?",
		a1 : "a div",
		a2 : "a method",
		a3 : "an element",
		a4 : "a Javascript library",
		correct : "answer4",
		key : "a Javascript library"
	}

	var question2 = {
		q : "What sign does JQuery use as a shortcut?",
		a1 : "#",
		a2 : "%",
		a3 : "$",
		a4 : "@",
		correct : "answer3",
		key : "$"
	}

	var question3 = {
		q : "Is JQuery a library used for client scripting or server scripting?",
		a1 : "client scripting",
		a2 : "server scripting",
		correct : "answer1",
		key : "client scripting"
	}

	var question4 = {
		q : "Which jQuery function is used to prevent code from running, before the document is finished loading?",
		a1 : "$(document).onload()",
		a2 : "$(document).ready()",
		a3 : "$(document).load()",
		a4 : "$(document).load()",
		correct : "answer2",
		key : "$(document).ready()"
	}

	var question5 = {
		q : "What tag do you use to reference the JQuery library?",
		a1 : "< link >",
		a2 : "< jQuery >",
		a3 : "< script >",
		a4 : "< Javascript >",
		correct : "answer3",
		key : "< script >"
	}

	var question6 = {
		q : "The script tag should be inside of what section?",
		a1 : "< body >",
		a2 : "< header >",
		a3 : "< head >",
		a4 : "< link >",
		correct : "answer3",
		key : "< head >"
	}

	var clockRunning = false;

	var questionArray = [question1, question2, question3, question4, question5, question6];
	
	var count = 0;

		var gameDiv = $("#gamePlay");
		var answerDiv = $("<div>", {id: "displayAnswer", class:"answerDisplay"});
		var startButton = $("<button>", {id: "startButton"});
		gameDiv.append(startButton);
		startButton.prop("value", "Start Game");
		startButton.html("Start Game");
		$(gamePlay).append(startButton);

		var wins = 0;
		var losses = 0;
		var unanswered = 0;

	$("#startButton").on("click", function newQuestion(){

		

		var clock = {
		time : 15,
		intervalId : "",

		setTime : function(){
			if(!clockRunning)
			{
			timer.html(clock.time);
			}
		},

		start : function(){
			if (!clockRunning) {			
            intervalId = setInterval(clock.count , 1000);
            clockRunning = true;
      		}		
		},

		count : function() {			
			clock.time--;
			console.log(clock.time);
			timer.html(clock.time);
			if(clock.time === -1)
			{
				clock.stop();
				answerScreen();
				unanswered++;
			}	
			
		},

		stop : function(){
			clearInterval(intervalId);
			clockRunning = false;
		}
	}
				
					$(".answer").remove();
					$(".question").remove();
					$(".timer").remove();
					$(".answerDisplay").remove();

						clock.start();
						
					 startButton.remove();
					 var timerLbl = $("<div>", {id: "timerLbl", class: "timer"});
					 timerLbl.html("<h2>Time Remaining: </h2>");
					 gameDiv.append(timerLbl);
					 var timer = $("<div>", {id:"clock", class: "timer"});
					 gameDiv.append(timer);
	 
					 var question = $("<div>", {id: "question1", class:"question"});
					 question.html("<h2>" + questionArray[count].q +"</h2>");
					 gameDiv.append(question);

					 var answer1 = $("<button>", {id: "answer1", class:"answer"});
					 gameDiv.append(answer1);
					 answer1.html(questionArray[count].a1);
					 var answer2 = $("<button>", {id: "answer2", class:"answer"});
					 gameDiv.append(answer2);
					 answer2.html(questionArray[count].a2);
					 var answer3 = $("<button>", {id: "answer3", class:"answer"});
					 gameDiv.append(answer3);
					 answer3.html(questionArray[count].a3);
					 var answer4 = $("<button>", {id: "answer4", class:"answer"});
					 gameDiv.append(answer4);
					 answer4.html(questionArray[count].a4);

					 $(".answer").on("click", function guess(){

			 		var userGuess = this.id;

							if (userGuess == questionArray[count].correct) {
								
								wins++;
								answerScreen();
								clock.stop();
								// clearInterval(timerVal);
							}
							else
							{
								console.log(questionArray[count].correct);
								
								losses++;
								answerScreen();
								clock.stop();
								// clearInterval(timerVal);
							}
						}); 

					 function answerScreen(){	
					 	console.log("question answered");
					 answerDiv.html(questionArray[count].key);
					 	gameDiv.append(answerDiv);	
					 var secondTimerVal = setTimeout(newQuestion, 1000);			 		
					 count++;



					 	clock.stop();

					 	if(count == 6)
						{
							clearTimeout(secondTimerVal);
							console.log(count);
							setTimeout(gameOverScreen, 1000);
							clock.stop();
						
						
						}
						else{
							
					 	$(".answer").remove();
					 	$(".question").remove();
					 	$(".timer").remove();
					 	 	
					 	
					 	// gameCheck();

					 	}

					 }

					 function gameCheck(){

					}

					 function gameOverScreen(){

					 	$(".answer").remove();
					 	$(".question").remove();
					 	$(".timer").remove();

					 	

					 	answerDiv.html("Wins: " + wins + "<br>Losses: " + losses + "<br>Unanswered: " + unanswered);
					 	var restartDiv = $("<div>", {id: "restartDiv"});
					 	$("#restartDiv").html("<button id='restartButton'>Restart</button>");
					 	answerDiv.append(restartDiv);

					 	console.log("gameOver");



					 }

					
				})
	

})

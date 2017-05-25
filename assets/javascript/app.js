$(document).ready(function() {

    newGame();

    var gladiator = new Audio("assets/sounds/intro.mp3")
    var indianaJones = new Audio("assets/sounds/indianaJones.mp3");
    var bond = new Audio("assets/sounds/bond.mp3");
    var missionImpossible = new Audio("assets/sounds/missionImpossible.mp3")
    var yoda = new Audio("assets/sounds/yoda.wav");
    var genie = new Audio("assets/sounds/genie.mp3");
    var mutation = new Audio("assets/sounds/mutation.mp3");
    var jennifer = new Audio("assets/sounds/jennifer.mp3");
    var ventura = new Audio("assets/sounds/ventura.mp3");
    var bride = new Audio("assets/sounds/bride.mp3");
    var indianaJonesFull = new Audio("assets/sounds/indianaJonesFull.mp3");
    var cheering = new Audio("assets/sounds/cheering.mp3");
    var boo = new Audio("assets/sounds/boo.mp3")
    var boohiss = new Audio("assets/sounds/boohiss.mp3")
    var interval;
    var number;
    var correctAnswers = 0;
    var wrongAnswers = 0;
    gladiator.play();

    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
    }, 2500);

    function newGame() {

        $("#startGameButton2").hide();
        $("#startGameButton").on("click", function() {
        gladiator.pause();
        $("#slideshow").hide();
        $("#startGameButton").hide();
        $("#triviaTitle").hide()
        $(".jumbotron").hide();
        $("#countdown").show();
        $("#countdown").get(0).play();
        });

        $("#startGameButton2").on("click", function() {
            $("#startGameButton").hide();
            $("#triviaTitle").hide()
            $(".jumbotron").hide();
            $("#countdown").show();
            $("#countdown").get(0).play();
        });

        $("#countdown").on("ended", function() {           
            $("#countdown").hide();
            $(".jumbotron").show();
            question1();
        });

        function question1() {
            number = 30;
            $('#answer1, #answer2, #answer3, #answer4, #startGameButton').unbind("click");
            $("#secondsLeft").html(number + " seconds");
            interval = setInterval(decrement, 1000);
            $("#textTimeRemaining").html("Time Remaining: ");

            $("#currentQuestion").html("Which of these Indiana Jones films was the 3rd in the series?");
            $("#answer1").html("<button>" + "The Last Crusade" + "</button>");
            $("#answer2").html("<button>" + "Raiders of the Lost Ark" + "</button>");
            $("#answer3").html("<button>" + "Kingdom of the Crystal Skull" + "</button>");
            $("#answer4").html("<button>" + "The Temple of Doom" + "</button>");

            $("#answer1").click(function() {
                indianaJones.play();
                correctAnswers++;
                $("#answer1").html("<button style=background:limegreen>" + "<span>&#10004 </span>" + "The Last Crusade" + "</button>");
                $("#resultPage").html("CORRECT!" + "<div>" + "FUN FACT:  Indiana Jones and The Temple of Doom created the PG-13 rating." + "</div>");

                stop();
                setTimeout(question2, 9000);

            });
            $("#answer2").click(function() {
                $("#answer2").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Raiders of the Lost Ark" + "</button>");
                boo.play();
                wrongAnswers++;
                $("#resultPage").html("INCORRECT! The answer was The Last Crusade." + "<div>" + "FUN FACT:  Indiana Jones and The Temple of Doom created the PG-13 rating." + "</div>");
                stop();
                setTimeout(question2, 8000);
            });
            $("#answer3").click(function() {
                boo.play();
                wrongAnswers++;
                $("#answer3").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Kingdom of the Crystal Skull" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was The Last Crusade." + "<div>" + "FUN FACT:  Indiana Jones and The Temple of Doom created the PG-13 rating." + "</div>");
                stop();
                setTimeout(question2, 8000);
            });
            $("#answer4").click(function() {
                wrongAnswers++;
                boo.play();
                $("#answer4").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "The Temple of Doom" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was The Last Crusade." + "<div>" + "FUN FACT:  Indiana Jones and The Temple of Doom created the PG-13 rating." + "</div>");
                stop();
                setTimeout(question2, 8000);
            });

            function decrement() {
                number--;
                $("#secondsLeft").html(number + " seconds");

                if (number == 0) {
                    stop();
                    wrongAnswers++;
                    boo.play();
                    $("#resultPage").html("OUT OF TIME! The answer was The Last Crusade." + "<div>" + "FUN FACT:  Indiana Jones and The Temple of Doom created the PG-13 rating." + "</div>");
                    setTimeout(question2, 8000);
                }
            }
        }

        function question2() {
            number = 30;
            $('#answer1, #answer2, #answer3, #answer4').unbind("click");
            $("#resultPage").html("");
            interval = setInterval(decrement, 1000);
            $("#secondsLeft").html(number + " seconds");
            $("#textTimeRemaining").html("Time Remaining: ");

            $("#currentQuestion").html("What is the highest grossing film of all time?")
            $("#answer1").html("<button>" + "Jurassic Park" + "</button>")
            $("#answer2").html("<button>" + "Frozen" + "</button>")
            $("#answer3").html("<button>" + "Avatar" + "</button>")
            $("#answer4").html("<button>" + "Titanic" + "</button>")

            $("#answer1").click(function() {
                wrongAnswers++;
                boohiss.play();
                $("#answer1").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Jurassic Park" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Avatar." + "<div>" + "FUN FACT: Avatar surpassed Titanic in 2009, pulling in $2.78 billion dollars at the box office." + "</div>");
                stop();
                setTimeout(question3, 9000);
            });
            $("#answer2").click(function() {
                wrongAnswers++;
                boohiss.play();
                $("#answer2").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Frozen" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Avatar." + "<div>" + "FUN FACT: Avatar surpassed Titanic in 2009, pulling in $2.78 billion dollars at the box office." + "</div>");
                stop();
                setTimeout(question3, 9000);
            });
            $("#answer3").click(function() {
                correctAnswers++;
                cheering.play();
                $("#answer3").html("<button style=background:limegreen>" + "<span>&#10004 </span>" + "Avatar" + "</button>");
                $("#resultPage").html("CORRECT!" + "<div>" + "FUN FACT: Avatar surpassed Titanic in 2009, pulling in $2.78 billion dollars at the box office." + "</div>");
                stop();
                setTimeout(question3, 9000);
            });
            $("#answer4").click(function() {
                boohiss.play();
                wrongAnswers++;
                $("#answer4").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Titanic" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Avatar." + "<div>" + "FUN FACT: Avatar surpassed Titanic in 2009, pulling in $2.78 billion dollars at the box office." + "</div>");
                stop();
                setTimeout(question3, 9000);
            });

            function decrement() {
                number--;
                $("#secondsLeft").html(number + " seconds");

                if (number == 0) {
                    boohiss.play();
                    wrongAnswers++;
                    stop();
                    $("#resultPage").html("OUT OF TIME! The answer was Avatar." + "<div>" + "FUN FACT: Avatar surpassed Titanic in 2009, pulling in $2.78 billion dollars at the box office." + "</div>");
                    setTimeout(question3, 9000);
                }
            }
        }

        function question3() {
            number = 30;
            $('#answer1, #answer2, #answer3, #answer4').unbind("click");
            $("#resultPage").html("");
            $("#secondsLeft").html(number + " seconds");
            interval = setInterval(decrement, 1000);
            $("#textTimeRemaining").html("Time Remaining: ");

            $("#currentQuestion").html("Which of these James Bond films did NOT star Daniel Craig?")
            $("#answer1").html("<button>" + "Casino Royale" + "</button>")
            $("#answer2").html("<button>" + "Skyfall" + "</button>")
            $("#answer3").html("<button>" + "Golden Eye" + "</button>")
            $("#answer4").html("<button>" + "Quantum of Solace" + "</button>")

            $("#answer1").click(function() {
                wrongAnswers++;
                boo.play();
                $("#answer1").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Casino Royale" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Golden Eye." + "<div>" + "FUN FACT: Ian Fleming wanted Bond's name to be as mundane as possible so he named him after ornithologist Dr. James Bond - lifted from a birdwatching book he had handy." + "</div>");
                stop();
                setTimeout(question4, 12000);
            });
            $("#answer2").click(function() {
                wrongAnswers++;
                boo.play();
                $("#answer2").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Skyfall" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Golden Eye." + "<div>" + "FUN FACT: Creator Ian Fleming wanted Bond's name to be as mundane as possible so he named him after ornithologist Dr. James Bond - lifted from a birdwatching book he had handy." + "</div>");
                stop();
                setTimeout(question4, 12000);
            });
            $("#answer3").click(function() {
                correctAnswers++;
                bond.play();
                $("#answer3").html("<button style=background:limegreen>" + "<span>&#10004 </span>" + "Golden Eye" + "</button>");
                $("#resultPage").html("CORRECT!" + "<div>" + "FUN FACT: Ian Fleming wanted Bond's name to be as mundane as possible so he named him after ornithologist Dr. James Bond - lifted from a birdwatching book he had handy." + "</div>");
                stop();
                setTimeout(question4, 13000);
            });
            $("#answer4").click(function() {
                wrongAnswers++;
                boo.play();
                $("#answer4").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Quantum of Solace" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Golden Eye." + "<div>" + "FUN FACT: Ian Fleming wanted Bond's name to be as mundane as possible so he named him after ornithologist Dr. James Bond - lifted from a birdwatching book he had handy." + "</div>");
                stop();
                setTimeout(question4, 12000);
            });

            function decrement() {
                number--;
                $("#secondsLeft").html(number + " seconds");

                if (number == 0) {
                    boo.play();
                    wrongAnswers++;
                    stop();
                    $("#resultPage").html("OUT OF TIME! The answer was Golden Eye" + "<div>" + "FUN FACT: Ian Fleming wanted Bond's name to be mundane so he named him after ornithologist Dr. James Bond - lifted from a birdwatching book he had handy." + "</div>");
                    setTimeout(question4, 12000);
                }
            }
        }

        function question4() {
            number = 30;
            $('#answer1, #answer2, #answer3, #answer4').unbind("click");
            $("#resultPage").html("");
            $("#secondsLeft").html(number + " seconds");
            interval = setInterval(decrement, 1000);
            $("#textTimeRemaining").html("Time Remaining: ");

            $("#currentQuestion").html("In which of these Tom Cruise movies does he play the character Ethan Hunt?")
            $("#answer1").html("<button>" + "Top Gun" + "</button>")
            $("#answer2").html("<button>" + "Jerry McGuire" + "</button>")
            $("#answer3").html("<button>" + "Edge of Tomorrow" + "</button>")
            $("#answer4").html("<button>" + "Mission: Impossible" + "</button>")

            $("#answer1").click(function() {
                wrongAnswers++;
                boohiss.play();
                $("#answer1").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Top Gun" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Mission: Impossible." + "<div>" + 'FUN FACT: Tom Cruise once failed an audition for the movie "Fame" because he was not pretty enough.' + "</div>");
                stop();
                setTimeout(question5, 9000);
            });
            $("#answer2").click(function() {
                wrongAnswers++;
                boohiss.play();
                $("#answer2").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Jerry McGuire" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Mission: Impossible." + "<div>" + 'FUN FACT: Tom Cruise once failed an audition for the movie "Fame" because he was not pretty enough.' + "</div>");
                stop();
                setTimeout(question5, 9000);
            });
            $("#answer3").click(function() {
                wrongAnswers++;
                boohiss.play();
                $("#answer3").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Edge of Tomorrow" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Mission: Impossible." + "<div>" + 'FUN FACT: Tom Cruise once failed an audition for the movie "Fame" because he was not pretty enough.' + "</div>");
                stop();
                setTimeout(question5, 9000);
            });
            $("#answer4").click(function() {
                correctAnswers++;
                missionImpossible.play();
                stop();
                $("#answer4").html("<button style=background:limegreen>" + "<span>&#10004 </span>" + "Mission: Impossible" + "</button>");
                $("#resultPage").html("CORRECT!" + "<div>" + 'FUN FACT: Tom Cruise once failed an audition for the movie "Fame" because he was not pretty enough.' + "</div>");
                setTimeout(question5, 11000);
            });

            function decrement() {
                number--;
                $("#secondsLeft").html(number + " seconds");

                if (number == 0) {
                    stop();
                    wrongAnswers++;
                    boohiss.play();
                    $("#resultPage").html("OUT OF TIME! The answer was Mission: Impossible." + "<div>" + 'FUN FACT: Tom Cruise once failed an audition for the movie "Fame" because he was not pretty enough.' + "</div>");
                    setTimeout(question5, 10000);
                }
            }
        }

        function question5() {
            number = 30;
            $('#answer1, #answer2, #answer3, #answer4').unbind("click");
            $("#resultPage").html("");
            $("#secondsLeft").html(number + " seconds");
            interval = setInterval(decrement, 1000);
            $("#textTimeRemaining").html("Time Remaining: ");

            $("#currentQuestion").html("Which of these in NOT a droid in Star Wars?")
            $("#answer1").html("<button>" + "R2-D2" + "</button>")
            $("#answer2").html("<button>" + "IR-98" + "</button>")
            $("#answer3").html("<button>" + "BB-8" + "</button>")
            $("#answer4").html("<button>" + "C-3P0" + "</button>")

            $("#answer1").click(function() {
                wrongAnswers++;
                boo.play();
                $("#answer1").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "R2-D2" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was IR-98" + "<div>" + "FUN FACT: Steven Spielberg made a bet with George Lucas for a percentage of the Star Wars films, which has earned him millions of dollars since the wager." + "</div>");
                stop();
                setTimeout(question6, 10000);
            });
            $("#answer2").click(function() {
                correctAnswers++;
                yoda.play();
                $("#answer2").html("<button style=background:limegreen>" + "<span>&#10004 </span>" + "IR-98" + "</button>");
                $("#resultPage").html("INCORRECT!" + "<div>" + "FUN FACT: Steven Spielberg made a bet with George Lucas for a percentage of the Star Wars films, which has earned him millions of dollars since the wager." + "</div>");
                stop();
                setTimeout(question6, 11000);
            });
            $("#answer3").click(function() {
                wrongAnswers++;
                boo.play();
                $("#answer3").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "BB-8" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was IR-98" + "<div>" + "FUN FACT: Steven Spielberg made a bet with George Lucas for a percentage of the Star Wars films, which has earned him millions of dollars since the wager." + "</div>");
                stop();
                setTimeout(question6, 10000);
            });
            $("#answer4").click(function() {
                wrongAnswers++;
                boo.play();
                $("#answer4").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "C-3P0" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was IR-98" + "<div>" + "FUN FACT: Steven Spielberg made a bet with George Lucas for a percentage of the Star Wars films, which has earned him millions of dollars since the wager." + "</div>");
                stop();
                setTimeout(question7, 10000);
            });

            function decrement() {
                number--;
                $("#secondsLeft").html(number + " seconds");

                if (number == 0) {
                    stop();
                    boo.play();
                    wrongAnswers++;
                    $("#resultPage").html("OUT OF TIME! The answer was IR-98" + "<div>" + "FUN FACT: Steven Spielberg made a bet with George Lucas for a percentage of the Star Wars films, which has earned him millions of dollars since the wager." + "</div>");
                    setTimeout(question6, 10000);
                }
            }
        }

        function question6() {
            number = 30;
            $('#answer1, #answer2, #answer3, #answer4').unbind("click");
            $("#resultPage").html("");
            $("#secondsLeft").html(number + " seconds");
            interval = setInterval(decrement, 1000);
            $("#textTimeRemaining").html("Time Remaining: ");

            $("#currentQuestion").html("In the Disney movie Aladdin, what do Aladdin and Abu give the poor children to eat?")
            $("#answer1").html("<button>" + "Apple" + "</button>")
            $("#answer2").html("<button>" + "Bread" + "</button>")
            $("#answer3").html("<button>" + "Cheese" + "</button>")
            $("#answer4").html("<button>" + "Banana" + "</button>")

            $("#answer1").click(function() {
                wrongAnswers++;
                boohiss.play();
                $("#answer1").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Apple" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Bread" + "<div>" + "FUN FACT: Animators orginally modeled Aladdin after Michael J. Fox, but found the end result to be too cutesy and changed it." + "</div>");
                stop();
                setTimeout(question7, 9000);
            });
            $("#answer2").click(function() {
                correctAnswers++;
                genie.play();
                $("#resultPage").html("CORRECT!" + "<div>" + "FUN FACT: Animators orginally modeled Aladdin after Michael J. Fox, but found the end result to be too cutesy and changed it." + "</div>");
                $("#answer2").html("<button style=background:limegreen>" + "<span>&#10004 </span>" + "Bread" + "</button>");
                stop();
                setTimeout(question7, 11000);
            });
            $("#answer3").click(function() {
                wrongAnswers++;
                boohiss.play();
                $("#answer3").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Cheese" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Bread" + "<div>" + "FUN FACT: Animators orginally modeled Aladdin after Michael J. Fox, but found the end result to be too cutesy and changed it." + "</div>");
                stop();
                setTimeout(question7, 9000);
            });
            $("#answer4").click(function() {
                wrongAnswers++;
                boohiss.play();
                $("#answer4").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Banana" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Bread" + "<div>" + "FUN FACT: Animators orginally modeled Aladdin after Michael J. Fox, but found the end result to be too cutesy and changed it." + "</div>");
                stop();
                setTimeout(question7, 9000);
            });

            function decrement() {
                number--;
                $("#secondsLeft").html(number + " seconds");

                if (number == 0) {
                    boohiss.play();
                    wrongAnswers++;
                    stop();
                    $("#resultPage").html("OUT OF TIME! The answer was Bread" + "<div>" + "INCORRECT! The answer was Bread" + "<div>" + "FUN FACT: Animators orginally modeled Aladdin after Michael J. Fox, but found the end result to be too cutesy and changed it." + "</div>");
                    setTimeout(question7, 9000);
                }
            }
        }

        function question7() {
            number = 30;
            $('#answer1, #answer2, #answer3, #answer4').unbind("click");
            $("#resultPage").html("");
            $("#secondsLeft").html(number + " seconds");
            interval = setInterval(decrement, 1000);
            $("#textTimeRemaining").html("Time Remaining: ");

            $("#currentQuestion").html("Which actor has starred in both X-Men and Star Trek films?")
            $("#answer1").html("<button>" + "Ian McKellan" + "</button>")
            $("#answer2").html("<button>" + "Zoe Saldana" + "</button>")
            $("#answer3").html("<button>" + "Michael Fassbender" + "</button>")
            $("#answer4").html("<button>" + "Patrick Stewart" + "</button>")

            $("#answer1").click(function() {
                wrongAnswers++;
                boo.play();
                $("#answer1").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Ian McKellan" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Patrick Stewart" + "<div>" + "FUN FACT: Ian McKellen is Patrick Stewart's best friend and performed Stewart's wedding ceremony." + "</div>");
                stop();
                setTimeout(question8, 9000);
            });
            $("#answer2").click(function() {
                wrongAnswers++;
                boo.play();
                $("#answer2").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Zoe Saldana" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Patrick Stewart" + "<div>" + "FUN FACT: Ian McKellen is Patrick Stewart's best friend and performed Stewart's wedding ceremony." + "</div>");
                stop();
                setTimeout(question8, 9000);
            });
            $("#answer3").click(function() {
                wrongAnswers++;
                boo.play();
                $("#answer3").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Michael Fassbender" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Patrick Stewart" + "<div>" + "FUN FACT: Ian McKellen is Patrick Stewart's best friend and performed Stewart's wedding ceremony." + "</div>");
                stop();
                setTimeout(question8, 9000);
            });
            $("#answer4").click(function() {
                correctAnswers++;
                mutation.play();
                $("#answer4").html("<button style=background:limegreen>" + "<span>&#10004 </span>" + "Patrick Stewart" + "</button>");
                $("#resultPage").html("CORRECT!" + "<div>" + "FUN FACT: Ian McKellen is Patrick Stewart's best friend and performed Stewart's wedding ceremony." + "</div>");
                stop();
                setTimeout(question8, 11000);
            });

            function decrement() {
                number--;
                $("#secondsLeft").html(number + " seconds");

                if (number == 0) {
                    boo.play();
                    wrongAnswers++;
                    stop();
                    $("#resultPage").html("OUT OF TIME! The answer was Patrick Stewart" + "<div>" + "FUN FACT: Ian McKellen is Patrick Stewart's best friend and performed Stewart's wedding ceremony." + "</div>");
                    setTimeout(question8, 9000);
                }
            }
        }

        function question8() {
            number = 30;
            $('#answer1, #answer2, #answer3, #answer4').unbind("click");
            $("#resultPage").html("");
            $("#secondsLeft").html(number + " seconds");
            interval = setInterval(decrement, 1000);
            $("#textTimeRemaining").html("Time Remaining: ");

            $("#currentQuestion").html("Who was the highest paid actress in both 2015 and 2016?")
            $("#answer1").html("<button>" + "Jennifer Lawrence" + "</button>")
            $("#answer2").html("<button>" + "Amy Adams" + "</button>")
            $("#answer3").html("<button>" + "Kristen Bell" + "</button>")
            $("#answer4").html("<button>" + "Charlize Theron" + "</button>")

            $("#answer1").click(function() {
                correctAnswers++;
                jennifer.play();
                $("#resultPage").html("CORRECT!" + "<div>" + "FUN FACT: Jennifer Lawrence made $46 million in 2016, which was more than these other 3 actresses combined." + "</div>");
                $("#answer1").html("<button style=background:limegreen>" + "<span>&#10004 </span>" + "Jennifer Lawrence" + "</button>");
                stop();
                setTimeout(question9, 12000);
            });
            $("#answer2").click(function() {
                wrongAnswers++;
                boohiss.play();
                $("#answer2").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Amy Adams" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Jennifer Lawrence" + "<div>" + "FUN FACT: Jennifer Lawrence made $46 million in 2016, which was more than these other 3 actresses combined." + "</div>");
                stop();
                setTimeout(question9, 10000);
            });
            $("#answer3").click(function() {
                wrongAnswers++;
                boohiss.play();
                $("#answer3").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Kristen Bell" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Jennifer Lawrence" + "<div>" + "FUN FACT: Jennifer Lawrence made $46 million in 2016, which was more than these other 3 actresses combined." + "</div>");
                stop();
                setTimeout(question9, 10000);
            });
            $("#answer4").click(function() {
                wrongAnswers++;
                boohiss.play();
                $("#answer4").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Charlize Theron" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Jennifer Lawrence" + "<div>" + "FUN FACT: Jennifer Lawrence made $46 million in 2016, which was more than these other 3 actresses combined." + "</div>");
                stop();
                setTimeout(question9, 10000);
            });

            function decrement() {
                number--;
                $("#secondsLeft").html(number + " seconds");

                if (number == 0) {
                    boohiss.play();
                    wrongAnswers++;
                    stop();
                    $("#resultPage").html("OUT OF TIME! The answer was Jennifer Lawrence" + "<div>" + "FUN FACT: Jennifer Lawrence made $46 million in 2016, which was more than these other 3 actresses combined." + "</div>");
                    setTimeout(question9, 10000);
                }
            }
        }

        function question9() {
            number = 30;
            $('#answer1, #answer2, #answer3, #answer4').unbind("click");
            $("#resultPage").html("");
            $("#secondsLeft").html(number + " seconds");
            interval = setInterval(decrement, 1000);
            $("#textTimeRemaining").html("Time Remaining: ");

            $("#currentQuestion").html('This quote comes from what movie?: "If I\'m not back in five minutes... just wait longer."')
            $("#answer1").html("<button>" + "Dumb and Dumber" + "</button>")
            $("#answer2").html("<button>" + "Bill and Ted's Excellent Adventure" + "</button>")
            $("#answer3").html("<button>" + "Ace Ventura: Pet Detective" + "</button>")
            $("#answer4").html("<button>" + "There's Something About Mary" + "</button>")

            $("#answer1").click(function() {
                wrongAnswers++;
                boo.play();
                $("#answer1").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Dumb and Dumber" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Ace Ventura: Pet Detective" + "<div>" + "FUN FACT: Jim Carrey wrote letters to Tupac Shakur when Tupac was in prison to help the rapper laugh and smile while behind bars." + "</div>");
                stop();
                setTimeout(question10, 11000);
            });
            $("#answer2").click(function() {
                wrongAnswers++;
                boo.play();
                $("#answer2").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Bill and Ted's Excellent Adventure" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Ace Ventura: Pet Detective" + "<div>" + "FUN FACT: Jim Carrey wrote letters to Tupac Shakur when Tupac was in prison to help the rapper laugh and smile while behind bars." + "</div>");
                stop();
                setTimeout(question10, 11000);
            });
            $("#answer3").click(function() {
                correctAnswers++;
                ventura.play();
                $("#resultPage").html("CORRECT!" + "<div>" + "FUN FACT: Jim Carrey wrote letters to Tupac Shakur when Tupac was in prison to help the rapper laugh and smile while behind bars." + "</div>");
                $("#answer3").html("<button style=background:limegreen>" + "<span>&#10004 </span>" + "Ace Ventura: Pet Detective" + "</button>");
                stop();
                setTimeout(question10, 12000);
            });
            $("#answer4").click(function() {
                wrongAnswers++;
                boo.play();
                $("#answer4").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "There's Something About Mary" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was Ace Ventura: Pet Detective" + "<div>" + "FUN FACT: Jim Carrey wrote letters to Tupac Shakur when Tupac was in prison to help the rapper laugh and smile while behind bars." + "</div>");
                stop();
                setTimeout(question10, 11000);
            });

            function decrement() {
                number--;
                $("#secondsLeft").html(number + " seconds");

                if (number == 0) {
                    boo.play();
                    wrongAnswers++;
                    stop();
                    $("#resultPage").html("OUT OF TIME! The answer was Ace Ventura: Pet Detective" + "<div>" + "FUN FACT: Jim Carrey wrote letters to Tupac Shakur when Tupac was in prison to help the rapper laugh and smile while behind bars." + "</div>");
                    setTimeout(question10, 11000);
                }
            }
        }

        function question10() {
            number = 30;
            $('#answer1, #answer2, #answer3, #answer4').unbind("click");
            $("#resultPage").html("");
            $("#secondsLeft").html(number + " seconds");
            interval = setInterval(decrement, 1000);
            $("#textTimeRemaining").html("Time Remaining: ");

            $("#currentQuestion").html("Fill in the blank from the movie The Princess Bride: HELLO! MY NAME IS INIGO MONTOYA! YOU KILLED MY " + "<span id=underline>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>" + " , PREPARE TO DIE!")
            $("#answer1").html("<button>" + "MOTHER" + "</button>")
            $("#answer2").html("<button>" + "FATHER" + "</button>")
            $("#answer3").html("<button>" + "WIFE" + "</button>")
            $("#answer4").html("<button>" + "PUPPY" + "</button>")

            $("#answer1").click(function() {
                wrongAnswers++;
                boohiss.play();
                $("#answer1").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "Mother" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was FATHER" + "<div>" + "FUN FACT: Over 500 women tried out for the role of Buttercup, including Courtney Cox, Meg Ryan, and Whoopie Goldberg." + "</div>");
                stop();
                setTimeout(endPage, 11000);
            });
            $("#answer2").click(function() {
                correctAnswers++;
                bride.play();
                $("#resultPage").html("CORRECT!" + "<div>" + "FUN FACT: Over 500 women tried out for the role of Buttercup, including Courtney Cox, Meg Ryan, and Whoopie Goldberg." + "</div>");
                $("#answer2").html("<button style=background:limegreen>" + "<span>&#10004 </span>" + "FATHER" + "</button>");
                stop();
                setTimeout(endPage, 12000);
            });
            $("#answer3").click(function() {
                wrongAnswers++;
                boohiss.play();
                $("#answer3").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "WIFE" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was FATHER" + "<div>" + "FUN FACT: Over 500 women tried out for the role of Buttercup, including Courtney Cox, Meg Ryan, and Whoopie Goldberg." + "</div>");
                stop();
                setTimeout(endPage, 11000);
            });
            $("#answer4").click(function() {
                wrongAnswers++;
                boohiss.play();
                $("#answer4").html("<button style=background:crimson>" + "<span>&#10008 </span>" + "PUPPY" + "</button>");
                $("#resultPage").html("INCORRECT! The answer was FATHER" + "<div>" + "FUN FACT: Over 500 women tried out for the role of Buttercup, including Courtney Cox, Meg Ryan, and Whoopie Goldberg." + "</div>");
                stop();
                setTimeout(endPage, 11000);
            });

            function decrement() {

                number--;
                $("#secondsLeft").html(number + " seconds");

                if (number == 0) {
                    boohiss.play();
                    wrongAnswers++;
                    stop();
                    $("#resultPage").html("OUT OF TIME! The answer was FATHER" + "<div>" + "FUN FACT: Over 500 women tried out for the role of Buttercup, including Courtney Cox, Meg Ryan, and Whoopie Goldberg." + "</div>");
                    setTimeout(endPage, 12000);
                }
            }
        }
    }

    function endPage() {
        indianaJonesFull.play();
        $("#textTimeRemaining").hide();
        $("#secondsLeft").hide();
        $("#triviaTitle").show();
        $("#currentQuestion").html("RESULTS:")
        $("#answer1").html("Correct Answers: " + correctAnswers)
        $("#answer2").html("Incorrect Answers: " + wrongAnswers)
        $("#answer3").hide();
        $("#answer4").hide();
        $("#resultPage").hide();
        $("#startGameButton2").show();
        $("#startGameButton2").click(function() {
        indianaJonesFull.pause();
        correctAnswers = 0
        wrongAnswers = 0
        $("#textTimeRemaining").show();
        $("#secondsLeft").show();
        $("#triviaTitle").hide();
        $("#answer3").show();
        $("#answer4").show();
        $("#resultPage").show();
        $("#resultPage").html("");
        $("#startGameButton2").hide();
        $('#answer1, #answer2, #answer3, #answer4').unbind("click");
        })
    }

    function stop() {
        clearInterval(interval);
    }

});

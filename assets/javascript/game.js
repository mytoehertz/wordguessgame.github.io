//Array holding a bunch of objects

const celestial_bodies = [
    {
      Name: "Mercury",
      Type: "Planet",
      Size: "Mass: 5.5% Earth",
      Orbital_Period: "87.97 days",
      Discovered: "265 BC",
      RandomFact: [
        "Mercury does not have any moons or rings.",
        "Your weight on Mercury would be 38% of your weight on Earth.",
        "A day on the surface of Mercury lasts 176 Earth days.",
        "A year on Mercury takes 88 Earth days.",
        "Mercury has a diameter of 4,879 km, making it the smallest planet.",
        "It’s not known who discovered Mercury."
      ],
      WikiLink: "https://en.wikipedia.org/wiki/Mercury_(planet)"
    },
    {
      Name: "Venus",
      Type: "Planet",
      Size: "Mass: 81.5% Earth",
      Orbital_Period: "225 days",
      Discovered: "17th century BC",
      RandomFact: [
        "Venus does not have any moons or rings.",
        "Venus is nearly as big as the Earth with a diameter of 12,104 km.",
        "Venus is thought to be made up of a central iron core, rocky mantle and silicate crust.",
        "A day on the surface of Venus (solar day) would appear to take 117 Earth days.",
        "A year on Venus takes 225 Earth days.",
        "The surface temperature on Venus can reach 471 °C."
      ],
      WikiLink: "https://en.wikipedia.org/wiki/Venus"
    },
    {
      Name: "Earth",
      Type: "Planet",
      Size: "Mass: 5.97 x 10^24 kg",
      Orbital_Period: "365.24 days",
      Discovered: "Who knows",
      RandomFact: [
        "The Earth’s rotation is gradually slowing.",
        "Earth has a powerful magnetic field.",
        "There is only one natural satellite of the planet Earth.",
        "Earth is the only planet not named after a god.",
        "The Earth is the densest planet in the Solar System."
      ],
      WikiLink: "https://en.wikipedia.org/wiki/Earth"
    },
    {
      Name: "Mars",
      Type: "Planet",
      Size: "Mass: 10.7% Earth",
      Orbital_Period: "687 days (1.9 years)",
      Discovered: "2nd millennium BC",
      RandomFact: [
        "Mars and Earth have approximately the same landmass.",
        "Mars is home to the tallest mountain in the solar system.",
        "Mars has the largest dust storms in the solar system.",
        "Pieces of Mars have fallen to Earth.",
        "One day Mars will have a ring."
      ],
      WikiLink: "https://en.wikipedia.org/wiki/Mars"
    },
    {
      Name: "Jupiter",
      Type: "Planet",
      Size: "Mass: 318 Earths",
      Orbital_Period: "4,333 days (11.9 years)",
      Discovered: "7th or 8th century BC",
      RandomFact: [
        "Jupiter is the fourth brightest object in the solar system.",
        "Jupiter has the shortest day of all the planets.",
        "Jupiter orbits the Sun once every 11.8 Earth years.",
        "The Great Red Spot is a huge storm on Jupiter.",
        "Jupiter’s interior is made of rock, metal, and hydrogen compounds.",
        "Jupiter’s moon Ganymede is the largest moon in the solar system.",
        "Jupiter has a thin ring system."
      ],
      WikiLink: "https://en.wikipedia.org/wiki/Jupiter"
    },
    {
      Name: "Saturn",
      Type: "Planet",
      Size: "Mass: 95 Earths",
      Orbital_Period: "10,756 days (29.5 years)",
      Discovered: "8th century BC",
      RandomFact: [
        "Saturn can be seen with the naked eye.",
        "Saturn is the flattest planet.",
        "aturn’s upper atmosphere is divided into bands of clouds.",
        "Saturn has oval-shaped storms similar to Jupiter’s.",
        "Titan is a moon with complex and dense nitrogen-rich atmosphere."
      ],
      WikiLink: "https://en.wikipedia.org/wiki/Saturn"
    },
    {
      Name: "Uranus",
      Type: "Planet",
      Size: "Mass: 15 Earths",
      Orbital_Period: "30,687 days (84.0 years)",
      Discovered: "March 13th 1781",
      RandomFact: [
        "Uranus was officially discovered by Sir William Herschel in 1781.",
        "Uranus turns on its axis once every 17 hours, 14 minutes.",
        "Uranus is often referred to as an “ice giant” planet.",
        "Uranus hits the coldest temperatures of any planet.",
        "Uranus’ moons are named after characters created by William Shakespeare and Alexander Pope."
      ],
      WikiLink: "https://en.wikipedia.org/wiki/Uranus"
    },
    {
      Name: "Neptun",
      Type: "Planet",
      Size: "Mass: 17 Earths",
      Orbital_Period: "60,190 days (164.8 years)",
      Discovered: "September 23rd 1846",
      RandomFact: [
        "Neptune was not known to the ancients.",
        "The atmosphere of Neptune is made of hydrogen and helium, with some methane.",
        "Neptune has a very thin collection of rings.",
        "Neptune has 14 moons."
      ],
      WikiLink: "https://en.wikipedia.org/wiki/Neptune"
    }
  ];


  //Global Variables
  //___________________________________________________________________________________________

  const wordBank = celestial_bodies;
  let wins = 0;
  let loss = 0;
  let wrongLettter = [];
  let guessesLeft = 6;
  let underScore = [];
  let userGuesses = [];
  let randWord;
  let winCounter = 0;
  let randName = [];
  let hint = [];


  //Functions
  //___________________________________________________________________________________________

  function startGame(){
      //pick random object from array
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        // console.log(randWord); 
        //Assign the Name key from random object to randName
    randName = randWord.Name;
        //Random Facts return
    // hint = randWord[Math.floor(Math.random() *randWord.length)];
    // hint = randWord.RandomFact;
    // console.log(hint);
    // return hint;
        // console.log(randName);
    for(var i = 0; i < randName.length; i ++) {
        // console.log(i); \
        //go through the name length and replace with underscores
        underScore.push(" _ ");
    }
    // console.log(underScore);
    //DOM Manipulation to print underscores to ID blank-words
    document.getElementById("blank-words").textContent = underScore.join(" ");
    //reset the game
    wrongLettter = [];
    guessesLeft = 6;
    //HTML
    document.getElementById("guesses-left").textContent = guessesLeft;
  } 
  

  //Function for winning or losing, lives in the onkeyup function
  function winLose() {
      if(winCounter === randName.length){
          alert("Winner!!!!!!")
          startGame();
          wins++;
          underScore = [];
      } else if (guessesLeft < 1){
          alert("You lose!")
          startGame();
          loss--;
          
      }
  }

  //Event listener, onkeyup function
  //________________________________________________________________________________________________
  document.onkeyup = function(event) {
      userGuesses = event.key;
    //   console.log(userGuesses);
    // Check to see if letter belongs to word
      if (randName.indexOf(userGuesses) > -1) {
        //   console.log("Yes");
        // print into blank-words at the correct index position
        for(var i = 0; i < randName.length; i ++){
            if(randName[i] === userGuesses){
                underScore[i] = userGuesses;
                document.getElementById("blank-words").textContent = underScore.join(" ");
                console.log(underScore);
                winCounter++;
                winLose();
            }
        }
      } else { //Checks if guess is already in wrongAnswer, pushes the wrong letter choices in the wrongLetter array
        // for(var i = 0; i < randName.length; i ++){
          // if(userGuesses.indexOf(wrongLettter) > -1)
          {
            wrongLettter.push(userGuesses);
            document.getElementById("wrong-letters").textContent = wrongLettter.join(" ");
            guessesLeft--;
            winLose();
          }    
          //  console.log(wrongLettter);
      // }
    }
  }
  // console.log("Guesses left: " + guessesLeft);
  //Main
  //___________________________________________________________________________________________

  // startGame();
  // object.onclick = startGame();
  document.getElementById("wins").textContent = wins;
  document.getElementById("loses").textContent = loss;
  document.getElementById("guesses-left").textContent = guessesLeft;

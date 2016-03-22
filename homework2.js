// Declare the animals array

var myArray = ["Cat", "Dog", "Polar Bear", "Grizzly Bear", "Antelope", "Kangaroo", "Bear"];

// Find all three letter animals

var threeLetterAnimals = myArray.filter(function (animal) {
  return animal.length < 4;
});

console.log("Three letter animals ",threeLetterAnimals);

// Find all animanls that have two word names

var twoWordAnimals = myArray.filter(function (animal) {
  var pattern = /[A-z]+ [A-z]+/;
  return pattern.exec(animal);
});

console.log("Two word animals", twoWordAnimals);

// Find all animals that do not start with the letter 'K'

var notKAnimals = myArray.filter(function (animal) {
  var pattern = /^(?!K)/;
  return pattern.exec(animal);
});

console.log("Animals not starting with a 'K' ", notKAnimals);

// Change all instances of 'bear' to 'Teddy Bear'

var teddyBears = myArray.map(function(currentValue) {
  return currentValue.replace(/bear/i,'Teddy Bear');
});

console.log("Teddy Bears ",teddyBears);

// Change all instances of 'cat' to 'Kitty Cat' and 'dog' to 'Puppy'

var catDog = myArray.map(function(currentValue) {
  if (currentValue.search(/cat/i) != -1) {
    return currentValue.replace(/cat/i,'Kitty Cat');
  }
    else if (currentValue.search(/dog/i) != -1) {
      return currentValue.replace(/dog/i,'Puppy');
    }
    else {
      return currentValue;
    }
});

console.log("Puppy and Kitty Cat ",catDog);

// The object orientated way of doing it

function Animals(animalArray) {
  this.animals = animalArray;
}

// Define a method to return only the three letter animals

Animals.prototype.threeLetters = function() {
  var threeLetterAnimals = this.animals.filter(function (animal) {
    return animal.length < 4;
  });
  return threeLetterAnimals;
};

// Define a method to return only the animals with two-word names

Animals.prototype.twoWords = function() {
  var twoWordAnimals = this.animals.filter(function (animal) {
    var pattern = /[A-z]+ [A-z]+/;
    return pattern.exec(animal);
  });
  return twoWordAnimals;
};

// Define a method to find all animals that do not start with the letter 'K'

Animals.prototype.notK = function() {
  var notKAnimals = this.animals.filter(function (animal) {
    var pattern = /^(?!K)/;
    return pattern.exec(animal);
  });
  return notKAnimals;
};

// Change all instances of 'bear' to 'Teddy Bear'

Animals.prototype.teddyBear = function() {
  var teddyBears = this.animals.map(function(currentValue) {
    return currentValue.replace(/bear/i,'Teddy Bear');
  });
  return teddyBears;
};

// Change all instances of 'cat' to 'Kitty Cat' and 'dog' to 'Puppy'

Animals.prototype.kittyPuppy = function() {
  var catDog = this.animals.map(function(currentValue) {
    if (currentValue.search(/cat/i) != -1) {
      return currentValue.replace(/cat/i,'Kitty Cat');
      }
      else if (currentValue.search(/dog/i) != -1) {
        return currentValue.replace(/dog/i,'Puppy');
      }
      else {
        return currentValue;
      }
    });
    return catDog;
  };

// Create the initial instance of the object

var myAnimals = new Animals(["Cat", "Dog", "Polar Bear", "Grizzly Bear", "Antelope", "Kangaroo", "Bear"]);

// Display the basic object

console.log("The basic object ",myAnimals);

// Display only the three letter animals

console.log("Three letter animals",myAnimals.threeLetters());

// Display only the two-word named animals

console.log("Two word animals",myAnimals.twoWords());

// Display only the two-word named animals

console.log("Not 'K' animals",myAnimals.notK());

// Display only the two-word named animals

console.log("Teddy Bears",myAnimals.teddyBear());

// Change all instances of 'cat' to 'Kitty Cat' and 'dog' to 'Puppy'

console.log("Kitty/Puppy",myAnimals.kittyPuppy());

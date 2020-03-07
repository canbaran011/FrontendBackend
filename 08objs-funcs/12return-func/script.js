// FUNCTIONS THAT RETURN FUNCTIONS

function Question(hobby){
  switch (hobby) {
    case "car":
      return function(name) {
        console.log(name + " do u have a car? ");
      };

      break;

    case "book":
      return function(name) {
        console.log(name + " what is your favorite book?");
      };
      break;

    case "software":
      return function(name,type) {
     console.log(name + " Are u interested "+ type+"? ");
      };
      break;

    default:
  }
}

var carQuestion = Question('car');
carQuestion('canbaran');

var bookQuestion = Question('book');
bookQuestion('Melih');
bookQuestion('Ada');

var softwareQuestion = Question('software');
softwareQuestion('can','javascript/ nodejs');



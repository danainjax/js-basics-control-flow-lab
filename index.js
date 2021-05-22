function scuberGreetingForFeet(feet){
  if (feet<= 400) {
    return 'This one is on me!';
  } else if (feet < 2500 && feet > 1999) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
  // Write your code here!
}

function ternaryCheckCity(city){
  if (city != 'NYC') {
    return 'No go.';
  } else {
    return 'Ok, sounds good.';
  }
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
    return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.';
      default:
        return 'Bye.';
  }
    
  
  // Write your code here!
}
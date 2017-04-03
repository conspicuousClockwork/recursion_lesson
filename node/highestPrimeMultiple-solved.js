// // Get Variables
var input = parseInt(process.argv[2]);


function returnHighestPrime(number) {
  console.log('New Recursion!');
  //Start our search at 2
  var i = 2;
  console.log("We are searching through" + number);
  //Search through the whole number for multiples
  while (i <= number) {
    //If our search reaches the original number, we have a prime number, and by default the highest prime multiple
    if (i === number) {
      console.log(i + 'is the highest prime!');
      //Return this number to the previous recursive function and end this call of returnHighestPrime
      return number;
    //If our search finds a multiple of the original number, perform another recursion of returnHighestPrime
    } else if (!(number % i)) {
      console.log(number + ' is divisible by ' + i + ', we must go deeper');
      //Start another recursion! We are making the problem simpler
      return returnHighestPrime(number / i);
    }
    //If none of those happen, we move on to the next number in the search
    console.log(i + "Wasnt a multiple of " + number);
    i += 1;
  }
}

console.log(returnHighestPrime(input));

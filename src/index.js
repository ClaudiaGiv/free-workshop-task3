/*
    Diego wants his images to change depending on the time of day.
  
    Using the variables below, dynamically update `imageOne` and `imageTwo` according to the value of `timeOfDay`:
    1. If it is before noon (12), show the morning photos.
    2. If it is after noon (12) but before 6pm (18), show the day photos.
    3. Otherwise, show the night photos.
  */
import "./run";
import "./setup";
// These variables store image URLs.
const morning1 =
  "https://justcodeit.s3.eu-central-1.amazonaws.com/morning1.jpg";
const morning2 =
  "https://justcodeit.s3.eu-central-1.amazonaws.com/morning2.jpg";
const day1 = "https://justcodeit.s3.eu-central-1.amazonaws.com/day1.jpg";
const day2 = "https://justcodeit.s3.eu-central-1.amazonaws.com/day2.jpg";
const night1 = "https://justcodeit.s3.eu-central-1.amazonaws.com/night1.jpg";
const night2 = "https://justcodeit.s3.eu-central-1.amazonaws.com/night2.jpg";
//////////////////////////////////////////////////////
// Do not change anything above here.
//////////////////////////////////////////////////////

// Returns a value between 0 and 23. Change the value of timeOfDay from getHours() to a number to test your code. Make sure to change it back before running the candidate or submission tests.
let timeOfDay = window.getHours();

let imageOne;
let imageTwo;

// Write your code here to use if statement to update imageOne and imageTwo based on timeOfDay
if (timeOfDay < 12) {
  imageOne = morning1;
  imageTwo = morning2;
} else if (timeOfDay < 18) {
  imageOne = day1;
  imageTwo = day2;
} else {
  imageOne = night1;
  imageTwo = night2;
}

setup();
run(imageOne, imageTwo);

//////////////////////////////////////////////////////
// Do not change anything below here.
//////////////////////////////////////////////////////

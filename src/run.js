// You do not need to edit this file.
window.run = (imageOne, imageTwo) => {
  let timeImage1 = document.getElementById("picture-one");
  let timeImage2 = document.getElementById("picture-two");
  timeImage1.src = imageOne;
  timeImage2.src = imageTwo;
};

window.run();

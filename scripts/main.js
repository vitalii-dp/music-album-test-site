var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cover.jpg') {
      myImage.setAttribute ('src','images/cover_2.jpg');
    } else {
      myImage.setAttribute ('src','images/cover.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Thank you for listening this EP, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Thank you for listening this EP, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

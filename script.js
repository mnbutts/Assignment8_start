//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;
	
//This function accepts one parameter that identifies the array position 	
function getAuthorAndYearString (objectName) {
	"use strict";
	//arrayIndex gets the array position
	var arrayIndex = speechesArray.indexOf(objectName);
	document.getElementById('ConsoleDisplay').innerHTML = 'This speech was written by ' + speechesArray[arrayIndex].author + ' in ' + speechesArray[arrayIndex].year + '<br>';
}
function displayBCEString (objectName) {
	"use strict";
	//arrayIndex gets the array position
	var arrayIndex = speechesArray.indexOf(objectName);
	
	  if( speechesArray[arrayIndex].yearIsBCE === true){
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place before the common era.<br>';
  }else{
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place during the common era.<br>';
}
}

function getOldestOrYoungestString (objectName) {
	"use strict";
	//arrayIndex gets the array position
	var arrayIndex = speechesArray.indexOf(objectName);
	
	var oldest = speechesArray[arrayIndex].year,
      newest = speechesArray[arrayIndex].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[arrayIndex].year === oldest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the oldest speech on the page.<br>';
  }
  if(speechesArray[arrayIndex].year === newest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the most recent speech on the page.<br>';
  }
	
}
document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  "use strict";
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  "use strict";
  
  //calls the function using the appropriate array object
  getAuthorAndYearString(churchillSpeech);
  
  //calls the function using the appropriate array object
  displayBCEString(churchillSpeech);
  
  //calls the function using the appropriate array object
  getOldestOrYoungestString(churchillSpeech);
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  "use strict";
  //calls the function using the appropriate array object
  getAuthorAndYearString(ghandiSpeech);
  
  //calls the function using the appropriate array object
  displayBCEString(ghandiSpeech);

  //calls the function using the appropriate array object
  getOldestOrYoungestString(ghandiSpeech);
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  "use strict";
  //calls the function using the appropriate array object
  getAuthorAndYearString(demosthenesSpeech);
  
  //calls the function using the appropriate array object
  displayBCEString(demosthenesSpeech);

  //calls the function using the appropriate array object	
  getOldestOrYoungestString(demosthenesSpeech);
  
});
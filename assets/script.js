// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


  


$(function() {
  var rightNow = dayjs().hour();
  console.log(rightNow);

  $('.time-block').each(function() {
    var timeBlockHour = parseInt($(this).attr('data-hour'));

    if (timeBlockHour < rightNow) {
      $(this).addClass('past');
    } else if (timeBlockHour === rightNow) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });

  function saveInput() {
    var descriptions = document.querySelectorAll('.description');
    var userInput = [];
    console.log(descriptions);
    descriptions.forEach(function(description) {
      userInput.push(description.value);
    });
    console.log(userInput);
    localStorage.setItem('userInput', JSON.stringify(userInput));
  }
  
  function displayStoredData() {
    var descriptions = document.querySelectorAll('.description');
    var storedData = localStorage.getItem('userInput');
    if (storedData) {
      var userInput = JSON.parse(storedData);
      descriptions.forEach(function(description, index) {
        description.value = userInput[index];
      });
    }
  }
  
  var saveButton = document.querySelectorAll('[aria-label="save"]');
  saveButton.forEach(function(button) {
    button.addEventListener('click', saveInput);
  });
  
  displayStoredData();

})
  
  
  
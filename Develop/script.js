// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
    var buttons = $(".saveBtn")
     for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click",saveNote)
      
     }

    
    function saveNote(){
      var currentDiv = this.parentElement
      var key =currentDiv.id
      var text = currentDiv.querySelector(".description").value
      window.localStorage.setItem(key,text)
    }
    var timeBlocks = $(".time-block")
      for (let i = 0; i < timeBlocks.length; i++) {
        var blockId = timeBlocks[i].id
       
        var storedItem = window.localStorage.getItem(blockId)
      
        var currentBlock = $("#"+blockId)[0]
        var currentText = currentBlock.querySelector(".description")
        currentText.textContent=storedItem
      }


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //var advancedFormat = require('dayjs/plugin/advancedFormat')
  //dayjs.extend(advancedFormat)

      $("#currentDay")[0].textContent = dayjs().format("dddd, MMMM Do")
      var currentHour = dayjs().format("H")
    
    for (let i = 0; i < timeBlocks.length; i++) {
      var blockId = timeBlocks[i].id
      var blockHour = Number(blockId.slice(5))

      if (blockHour < currentHour) {
        timeBlocks[i].classList.add("past")
        timeBlocks[i].classList.remove("present")
        timeBlocks[i].classList.remove("future")
      } else if (blockHour == currentHour) {
        timeBlocks[i].classList.remove("past")
        timeBlocks[i].classList.add("present")
        timeBlocks[i].classList.remove("future")
      } else {
        timeBlocks[i].classList.remove("past")
        timeBlocks[i].classList.remove("present")
        timeBlocks[i].classList.add("future")
      }
      
    }



  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

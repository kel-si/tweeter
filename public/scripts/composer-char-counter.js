$(document).ready(function () {
  console.log("DOM has loaded");

  $('#tweet-text').on('input', function(event) {
    let charCount = $(this).val().length;
    let currentCount = $(this).siblings('div').children('.counter').text(140 - charCount);
    
  })

});



  // console.log("this.length", $(this).val().length); //length of the input (minus one because it starts at zero)
  // console.log("this", this) //line of html triggering the event
  // console.log("charCounter", charCount);
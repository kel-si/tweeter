$(document).ready(function () {
  console.log("DOM has loaded");

  $('#tweet-text').on('input', function(event) {
    let charCount = $(this).val().length;
    let currentCount = $(this).siblings('div').children('.counter').text(140 - charCount);
    console.log("currentCount", currentCount);

    if (charCount > 140) {
      currentCount.addClass('over-count')
    }
  });
});
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//function that generates the DOM structure for a tweet, given a tweet object (from the form)

$(document).ready(function () {

  const createTweetElement = function(tweetObj) {
    console.log("tweetObj", tweetObj);
    const $tweet = $(`<article class="tweet">
    <header>
      <div class="tweet-user">
      <img src=${tweetObj.user.avatars}>
      <p>${tweetObj.user.name}</p>
    </div>
      <p>${tweetObj.user.handle}</p>
    </header>
    ${tweetObj.content.text}
    <footer>
      <p>10 days ago</p>
      <div class="fa-solid-icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
    </footer>
  </article>`);  
  return $tweet; // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  }
  
  const $tweet = createTweetElement(tweetData);
  $('.tweet-container').append($tweet);
  console.log("$tweet", $tweet);
});


const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227,
}
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  //adds an article with the tweet info to the DOM
  const createTweetElement = function(tweetObj) {
    const date = new Date(tweetObj.created_at);
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
      <span class="timeago">${timeago.format(date)}</span>
      <div class="fa-solid-icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
    </footer>
  </article>`);  
  return $tweet;
  }
  
  const $tweet = createTweetElement(tweetData);
  $('.tweet-container').append($tweet);
  
  //takes an array of tweet objects
  const renderTweets = function(tweets) {
    for(let tweet in tweets) {
      createTweetElement(tweet);
      // $('.timeago').append(timeago.format(new Date()));
    }
    

  }

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
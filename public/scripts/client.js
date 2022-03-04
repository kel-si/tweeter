$(document).ready(function () {
  //updates array of tweet objects
  $('.tweet-form').on('submit', function(event){
    event.preventDefault();
    const serializedData = $(this).serialize();
    const tweetInput = $('#tweet-text').val();
    if (tweetInput.length === 0) {
      return alert("Please write a tweet to post.");
    }
    
    if (tweetInput.length > 140) {
      return alert("Too many characters!!");
    }
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: serializedData
    })
  });

  //receive array of tweets as JSON
  const loadTweets = function() {
    $('.tweet-form').on('submit', function() {
      $.ajax('/tweets', {
        method: 'GET'
      })
      .then(function(data) {
        renderTweets(data)
      });
    });
  };

  loadTweets();

  const renderTweets = function(tweets) {
    $('.tweet-container').empty();
    for (let tweet of tweets) {
      const $returnValue = createTweetElement(tweet);
      $('.tweet-container').prepend($returnValue);
    }
  }

  //Prevent XSS
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


  //adds an article with the tweet info to the DOM
  const createTweetElement = function(tweetObj) {
    const safeHTML = `<p>${escape(tweetObj.content.text)}</p>`;
    const date = new Date(tweetObj.created_at);
    const $tweet = `<article class="tweet">
    <header>
      <div class="tweet-user">
      <img src=${tweetObj.user.avatars}>
      <p>${tweetObj.user.name}</p>
    </div>
      <p>${tweetObj.user.handle}</p>
    </header>
    ${safeHTML}
    <footer>
      <span class="timeago">${timeago.format(date)}</span>
      <div class="fa-solid-icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
    </footer>
  </article>`;  
  return $tweet;
  }
});




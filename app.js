//selectors
const tweetInput = document.querySelector('.tweet-input');
const tweetBtn = document.querySelector('.tweet-btn');
const tweetList = document.querySelector('.tweet-list');
let count = 0;
//event listeners
tweetBtn.addEventListener('click', addTweet);
tweetList.addEventListener('click', deleteLike);

//functions
function addTweet(e){
    //prevent form from submitting
    e.preventDefault();
    //tweet div
    const tweetDiv = document.createElement('div');
    tweetDiv.classList.add("tweet");
    // create li
    const newTweet = document.createElement('li');
    newTweet.innerText = tweetInput.value;
    newTweet.classList.add('new-tweet');
    tweetDiv.appendChild(newTweet);
    //like button
    const likeBtn = document.createElement('button');
    likeBtn.innerHTML = '<i class="far fa-heart"></i>';
    likeBtn.classList.add('like-btn');
    tweetDiv.appendChild(likeBtn);
    //delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add('delete-btn');
    tweetDiv.appendChild(deleteBtn);
    //append to tweet list
    tweetList.appendChild(tweetDiv);
    //clear tweet input
    tweetInput.value = '';
    // post counter
    count += 1;
    document.getElementById('tweet-count').innerHTML = "Posts: " + count;
}

function deleteLike(e) {
    const item = e.target;
    //delete tweet
    if(item.classList[0] === 'delete-btn'){
        const tweet = item.parentElement;
        //animation
        tweet.classList.add('delete-animation');
        tweet.addEventListener('transitionend', function(){
            tweet.remove();
        })
        //post deletion count
        count -= 1;
        document.getElementById('tweet-count').innerHTML = "Posts: " + count;
    }

    //like tweet
    if(item.classList[0] === 'like-btn'){
        item.classList.toggle('liked');
    }
}

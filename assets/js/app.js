//variable

const tweetList=document.getElementById("tweet-list")


eventlistener();

function eventlistener(){
  document.querySelector("#form").addEventListener("submit",newevent);

  tweetList.addEventListener("click",removetweet);
   document.addEventListener("DOMContentLoaded", onLoadlocalStorage)

}
function newevent(e){
     e.preventDefault()


      const tweet=document.getElementById('tweet').value
     // remove the append child button
     const removeBtn=document.createElement("a");
     removeBtn.classList="remove-tweet";
              removeBtn.textContent="X"



      const li=document.createElement("li");
      li.textContent=tweet;


    li.appendChild(removeBtn)


      tweetList.appendChild(li);
      addtweetLocalStorage(tweet);

      alert("tweet added");
      this.reset;


}

function removetweet(e){
  if(e.target.classList.contains("remove-tweet")){
    e.target.parentElement.remove()

  }
  
 

     removeTweetfrom(e.target.parentElement.textContent)
}

function addtweetLocalStorage(tweet){
   let tweets=getTweetfromStorage();
  tweets.push(tweet);

  localStorage.setItem("tweets",JSON.stringify(tweets))

}


function getTweetfromStorage(){
      let tweets;
      const tweetLs=localStorage.getItem('tweets')
      if(tweetLs===null){
           tweets=[];

      }else{
        tweets=JSON.parse(tweetLs)

      }
     return tweets

}


function onLoadlocalStorage(){
let tweets=getTweetfromStorage();

tweets.forEach(function(tweet){
     const removeBtn = document.createElement("a");
     removeBtn.classList = "remove-tweet";
     removeBtn.textContent = "X"



     const li = document.createElement("li");
     li.textContent = tweet;


     li.appendChild(removeBtn)


     tweetList.appendChild(li)

})

}

function removeTweetfrom(tweet){
   let tweets=getTweetfromStorage();

   const tweetDelete=tweet.substring(0,tweet.length-1)
  
    tweets.forEach(function(tweetLs,index){
     if(tweetDelete===tweetLs){
        tweets.splice(index,1)
     }
     
    });

   localStorage.setItem("tweets",JSON.stringify(tweets))

}


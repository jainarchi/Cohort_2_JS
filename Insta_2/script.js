const feedReels = [
  {
    img_url: '../assets/waterfall.mp4',
    username: "traveler_joe",
    isFollowed: true,
    caption: "Sunrise over the mountains! Absolutely breathtaking. ⛰️",
    isLiked: false,
    likeCount: 1950,
    commentCount: 85,
    shareCount: 20,

  },
  {
    img_url: '../assets/coding.mp4',
    username: "coding_queen",
    isFollowed: false,
    caption:
      "Just finished debugging the latest feature! Time for coffee. ☕ #devlife",
    isLiked: false,
    likeCount: 820,
    commentCount: 45,
    shareCount: 10,
  },
  // {
  //   img_url: "https://www.pexels.com/download/video/34906437/",
  //   username: "foodie_ella",
  //   isFollowed: true,
  //   caption: "Homemade pasta night! Nothing beats fresh ingredients. 🍝",
  //   isLiked: false,
  //   likeCount: 3300,
  //   commentCount: 120,
  //   shareCount: 35,
  // },
  {
    img_url: '../assets/pet.mp4',
    username: "pet_lover_sam",
    isFollowed: true,
    caption: "My dog Max enjoying his new toy! Look at that happy face! 🐕",
    isLiked: false,
    likeCount: 1480,
    commentCount: 75,
    shareCount: 15,
  },
  {
    img_url: '../assets/coding.mp4',
    username: "design_master",
    isFollowed: false,
    caption: "Minimalist UI concept for a new mobile app. Thoughts? #uidesign",
    isLiked: false,
    likeCount: 1050,
    commentCount: 95,
    shareCount: 25,

  },
];

let allReels = document.querySelector("#allReels");


function addData() {

  let sum = "";
  feedReels.forEach((r, idx) => {

    sum += `<div class="reel">
                <video id="reel-vid" loop muted autoplay src=${r.img_url}></video>
                <div class="bottom">
                    <div>
                        <span>${r.username}</span>
                        <button>${r.isFollowed ? "Unfollow" : "Follow"}</button>
                    </div>
                    <p>${r.caption ? r.caption : ""}</p>
                </div>
                <div class="right">
                    <div id=${idx} class='like'>
                        <i class="ri-heart-3-line"></i>
                        <span>${r.likeCount}</span>
                    </div>
                     <div >
                       <i class="ri-chat-1-line"></i>
                        <span>${r.commentCount}</span>
                    </div>
                     <div id=${idx} class='share'>
                       <i class="ri-send-plane-fill"></i>
                        <span>${r.shareCount}</span>
                    </div>
                    <div >
                        <i class="ri-bookmark-line"></i> 
                    </div>
                </div>
              </div> 
            `;

  });


  allReels.innerHTML = sum;

}

addData();
let reels = document.querySelectorAll(".reel")






reels.forEach((reel, idx) => {
  reel.addEventListener("click", (e) => {

     console.log(feedReels[e.target.id]);
     
    if(e.target.className === 'like'){
       let reelObj = feedReels[e.target.id]

      if(!reelObj.isLiked){
        reelObj.likeCount++ 
        reelObj.isLiked = true 
      }
      else {
        reelObj.likeCount--;
        reelObj.isLiked = false
      }
      addData()
    }

    if(e.target.className === 'share'){
      console.log('sared');
      
        feedReels[e.target.id].shareCount++ ; 
        addData()  
    }

  })

})


reels.forEach((reel, idx) => {
  reel.addEventListener("dblclick" , (e) =>{

    if(! feedReels[idx].isLiked){
      feedReels[idx].likeCount++ 
      feedReels[idx].isLiked = true
      addData()
    }
  })
})
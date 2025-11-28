const feedReels = [
  {
    url: '../assets/nature_short.mp4',
    isMuted : true,
    username: "traveler_joe",
    isFollowed: true,
    caption: "spending time in mountains! Absolutely breathtaking. ⛰️",
    isLiked: false,
    likeCount: 1950,
    commentCount: 85,
    shareCount: 20,

  },
  {
    url: '../assets/coding_shorts.mp4',
    isMuted : true,
    username: "coding_queen",
    isFollowed: false,
    caption:
      "Just finished debugging the latest feature! #devlife",
    isLiked: false,
    likeCount: 820,
    commentCount: 45,
    shareCount: 10,
  },
  // {
  //   url: "https://www.pexels.com/download/video/34906437/",
  //   username: "foodie_ella",
  // isMuted : true,
  //   isFollowed: true,
  //   caption: "Homemade pasta night! Nothing beats fresh ingredients. 🍝",
  //   isLiked: false,
  //   likeCount: 3300,
  //   commentCount: 120,
  //   shareCount: 35,
  // },
  {
    url: '../assets/pet.mp4',
    isMuted : true,
    username: "pet_lover_sam",
    isFollowed: true,
    caption: "My dog Max enjoying his new toy! Look at that happy face! 🐕",
    isLiked: false,
    likeCount: 1480,
    commentCount: 75,
    shareCount: 15,
  },
  {
    url: '../assets/coffee_short.mp4',
    isMuted : true,
    username: "food_master",
    isFollowed: false,
    caption: "Fueling my day one sip at a time! ☕😴",
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

                <video id=${idx} class="reel-vid" loop autoplay ${r.isMuted ? 'muted' : ''} src=${r.url}></video>

                <div class ='mute-btn' id=${idx} >    
                
                 ${r.isMuted ? ' <i class= "ri-volume-mute-line"></i>' : '<i class= "ri-volume-up-line" ></i>' }
                  
                </div>         

                <div class="bottom">
                    <div>
                        <span>${r.username}</span>
                        <button id=${idx} class='follow-btn'>${r.isFollowed ? "Unfollow" : "Follow" }</button>
                    </div>
                    <p>${r.caption ? r.caption : ""}</p>
                </div>
                <div class="right">
                    <div id=${idx} class='like'>
                        <i class=${r.isLiked ? 'ri-heart-3-fill': 'ri-heart-3-line'}></i>
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
                       
                    </div>
                </div>


                <i id='like-effect' class="ri-heart-3-fill"></i>
              </div> 
            `;

  });


  allReels.innerHTML = sum;
}

addData();



  allReels.addEventListener("click", (e) => {

    //  console.log(feedReels[e.target.id]);
     
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
        feedReels[e.target.id].shareCount++ ; 
        addData()  
    }

    if(e.target.className === 'follow-btn'){ 
       feedReels[e.target.id].isFollowed = !feedReels[e.target.id].isFollowed ;
       addData()
    }

    if(e.target.className === 'mute-btn'){
    
      
       feedReels[e.target.id].isMuted = !feedReels[e.target.id].isMuted
         console.log(feedReels[e.target.id]);

      // addData();  not rerender because broweser will created all new video tag , and pause the vid with sound 
      
    }

  })



allReels.addEventListener("dblclick" , (e) =>{

   if(e.target.className === 'reel-vid'){
    
    if(!feedReels[e.target.id].isLiked ) {
     feedReels[e.target.id].likeCount++ ;
     feedReels[e.target.id].isLiked = true 
     addData()
   }

    let likeIcon = document.getElementById("like-effect")
    likeIcon.style.opacity = 1
    likeIcon.style.transform = 'translate(-50% , -50%) scale(1)';

    setTimeout(() => {
      likeIcon.style.opacity = 0
      likeIcon.style.transform = 'translate(-50% , -50%) scale(0.3)'

    }, 800);
  
  }
})




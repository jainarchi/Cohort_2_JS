let feedReels = [
  {
    img_url: "https://example.com/images/post1.jpg",
    username: "traveler_joe",
    isFollowed: true,
    caption: "Sunrise over the mountains! Absolutely breathtaking. ⛰️",
    isLiked: true,
    likeCount: 1950,
    commentCount: 85,
    shareCount: 20,
    saveCount: 112,
  },
  {
    img_url: "https://example.com/images/post2.png",
    username: "coding_queen",
    isFollowed: false,
    caption:
      "Just finished debugging the latest feature! Time for coffee. ☕ #devlife",
    isLiked: false,
    likeCount: 820,
    commentCount: 45,
    shareCount: 10,
    saveCount: 60,
  },
  {
    img_url: "https://example.com/images/post3.gif",
    username: "foodie_ella",
    isFollowed: true,
    caption: "Homemade pasta night! Nothing beats fresh ingredients. 🍝",
    isLiked: true,
    likeCount: 3300,
    commentCount: 120,
    shareCount: 35,
    saveCount: 450,
  },
  {
    img_url: "https://example.com/images/post4.jpeg",
    username: "pet_lover_sam",
    isFollowed: true,
    caption: "My dog Max enjoying his new toy! Look at that happy face! 🐕",
    isLiked: true,
    likeCount: 1480,
    commentCount: 75,
    shareCount: 15,
    saveCount: 90,
  },
  {
    img_url: "https://example.com/images/post5.webp",
    username: "design_master",
    isFollowed: false,
    caption: "Minimalist UI concept for a new mobile app. Thoughts? #uidesign",
    isLiked: false,
    likeCount: 1050,
    commentCount: 95,
    shareCount: 25,
    saveCount: 210,
  },
];

let allReels = document.querySelector("#allReels");

console.log(allReels);

feedReels.forEach((r) => {
  console.log(r.index);

  let reel = document.createElement("div");
  reel.classList.add("reel");

  reel.innerHTML = ` 
                 
                <div class="bottom">
                    <div>
                          <img src="" alt="">
                          <span>${r.username}</span>
                          <button>${
                            r.isFollowed ? "Unfollow" : "Follow"
                          }</button>
                    </div>
                    <p>${r.caption ? r.caption : ""}</p>
                </div>
                <div class="right">
                    <div>
                        <i class="ri-heart-3-line"></i>
                        <span>${r.likeCount}</span>
                    </div>
                     <div>
                       <i class="ri-chat-1-line"></i>
                        <span>${r.commentCount}</span>
                    </div>
                     <div>
                       <i class="ri-send-plane-fill"></i>
                        <span>${r.shareCount}</span>
                    </div>
                    <div>
                        <i class="ri-bookmark-line"></i>
                        <span>${r.saveCount}</span>
                    </div>
                </div>
            `;

  allReels.appendChild(reel);
});

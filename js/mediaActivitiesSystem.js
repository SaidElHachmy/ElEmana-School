// 🎉 MEDIA ACTIVITIES SYSTEM (FULL JS: DATA + STYLE + UI)
let currentPlayingVideo = null;

function loadMediaActivities() {
  const section = document.getElementById("activities");
  if (!section) return;

  const lang = window.currentLang || "en";

  // 🧠 DATA (ADD YOUR POSTS HERE)
  const mediaData = [
{
  type: "image",
  src: "assets/images/activity1.jpg",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},




    {
      type: "video",
      src: "assets/videos/video1.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    






{
  type: "image",
  src: "assets/images/activity2.jpg",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},




    



    {
      type: "video",
      src: "assets/videos/video2.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    
    




{
  type: "image",
  src: "assets/images/activity3.jpg",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},





    {
      type: "video",
      src: "assets/videos/video3.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    
    




{
  type: "image",
  src: "assets/images/activity4.jpg",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},





    {
      type: "video",
      src: "assets/videos/video4.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    
    
    





{
  type: "image",
  src: "assets/images/activity5.jpg",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},




    {
      type: "video",
      src: "assets/videos/video5.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    




{
  type: "image",
  src: "assets/images/activity6.jpg",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},





    {
      type: "video",
      src: "assets/videos/video6.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    
    




{
  type: "image",
  src: "assets/images/activity7.jpg",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},




    {
      type: "video",
      src: "assets/videos/video7.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    
    



{
  type: "image",
  src: "assets/images/activity8.jpg",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},





    {
      type: "video",
      src: "assets/videos/video8.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    
    



{
  type: "image",
  src: "assets/images/activity9.jpg",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},







    {
      type: "video",
      src: "assets/videos/video9.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    



{
  type: "image",
  src: "assets/images/activity10.jpg",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},






    {
      type: "video",
      src: "assets/videos/video10.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    
    




{
  type: "image",
  src: "assets/images/activity11.jpg",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},



    


    {
      type: "video",
      src: "assets/videos/video11.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    

{
  type: "image",
  src: "assets/images/activity12.jpg",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},


    



    {
      type: "video",
      src: "assets/videos/video12.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    


{
  type: "image",
  src: "assets/images/activity13.jpg",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},




{
  type: "image",
  src: "assets/images/activity14.jpg",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},





    
    
    
    
    
    
    
    
    
    
  ];

  // 🧱 CREATE CONTAINER
  let container = document.getElementById("mediaContainer");

  if (!container) {
    container = document.createElement("div");
    container.id = "mediaContainer";
    section.appendChild(container);
  }

  container.innerHTML = "";

  // 🎨 STYLE (INJECTED BY JS)
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
  container.style.gap = "20px";
  container.style.marginTop = "20px";

  // 🎴 CREATE CARDS
  mediaData.forEach(item => {
    const card = document.createElement("div");

    // card style
    card.style.background = "#fff";
    card.style.borderRadius = "15px";
    card.style.overflow = "hidden";
    card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    card.style.transition = "0.3s";
    card.style.cursor = "pointer";

    // hover effect
    card.onmouseenter = () => {
      card.style.transform = "scale(1.03)";
    };
    card.onmouseleave = () => {
      card.style.transform = "scale(1)";
    };

    // 📸 MEDIA ELEMENT
// 📸 MEDIA ELEMENT
let mediaEl;

if (item.type === "image") {
  mediaEl = document.createElement("img");
  mediaEl.src = item.src;

  // ❌ if image not found → fallback
  mediaEl.onerror = function () {
    this.onerror = null;
    this.src = "assets/images/pic_error.gif";
    this.style.objectFit = "cover";// ✅ fixed extension
  };

  mediaEl.style.width = "100%";
  mediaEl.style.height = "200px";
  mediaEl.style.objectFit = "contain";
mediaEl.style.background = "#f5f5f5";
}
if (item.type === "video") {
  mediaEl = document.createElement("video");
  mediaEl.src = item.src;
  mediaEl.controls = true;

  mediaEl.style.width = "100%";
  mediaEl.style.height = "200px";
  mediaEl.style.objectFit = "contain";
  mediaEl.style.background = "#f5f5f5";

  // 🎯 ONLY ONE VIDEO AT A TIME
  mediaEl.addEventListener("play", () => {
    if (currentPlayingVideo && currentPlayingVideo !== mediaEl) {
      currentPlayingVideo.pause();
    }
    currentPlayingVideo = mediaEl;
  });

  // 🧹 cleanup when paused/ended
  mediaEl.addEventListener("pause", () => {
    if (currentPlayingVideo === mediaEl) {
      currentPlayingVideo = null;
    }
  });

  mediaEl.addEventListener("ended", () => {
    if (currentPlayingVideo === mediaEl) {
      currentPlayingVideo = null;
    }
  });

  // ❌ fallback error
  mediaEl.onerror = function () {
    const img = document.createElement("img");
    img.src = "assets/images/tv_error.gif";
    img.style.width = "100%";
    img.style.height = "200px";
    img.style.objectFit = "cover";
    this.replaceWith(img);
  };
}
    // 📝 TEXT
    const text = document.createElement("p");
    text.textContent = item.text[lang];
    text.style.padding = "10px";
    text.style.fontWeight = "500";

    // 📦 APPEND
    card.appendChild(mediaEl);
    card.appendChild(text);
    container.prepend(card);
  });
}

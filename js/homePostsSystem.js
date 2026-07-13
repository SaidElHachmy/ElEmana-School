// 🏠 HOME POSTS SYSTEM (News Feed)
let currentHomePlayingVideo = null;
function loadHomePosts() {
  const container = document.getElementById("postsContainer");
  if (!container) return;

  const lang = window.currentLang || "en";

  // 🧠 POSTS DATA (ADD HERE)
  const posts = [
  {
  type: "image",
  src: "assets/images/activity13.jpg",
  text: {
    en: "",
    ar: "",
    fr: ""
  },
  date: "",
},

  {
    type: "video",
    src: "assets/videos/video10.mp4",
    text: {
    en: "",
    ar: "",
    fr: ""
  },
  date: "",
},

    {
      type: "video",
      src: "assets/videos/video18.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    
        {
      type: "video",
      src: "assets/videos/video19.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    
        {
      type: "video",
      src: "assets/videos/video25.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    
    
    
    {
      type: "video",
      src: "assets/videos/video27.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    
    
    {
      type: "video",
      src: "assets/videos/video30.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    
    
    {
      type: "video",
      src: "assets/videos/video45.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    
    
    
    {
      type: "video",
      src: "assets/videos/video52.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    
    
    
    {
      type: "video",
      src: "assets/videos/video58.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    
    
    
    
    {
      type: "video",
      src: "assets/videos/video89.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    
    
    
    
    
    
    










];

  container.innerHTML = "";

  // 🎨 CONTAINER STYLE
  container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
container.style.gap = "20px";
container.style.marginTop = "20px";
  // 🎴 CREATE POSTS
  posts.forEach(post => {
    const card = document.createElement("div");

    // 🎨 CARD STYLE
    card.style.background = "#fff";
card.style.borderRadius = "15px";
card.style.overflow = "hidden";
card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
card.style.transition = "0.3s";
card.style.cursor = "pointer";

card.onmouseenter = () => {
  card.style.transform = "scale(1.03)";
};

card.onmouseleave = () => {
  card.style.transform = "scale(1)";
};

    // 📸 / 🎬 MEDIA
    let media;

    if (post.type === "image") {
      media = document.createElement("img");
      media.src = post.src;
      
      

      // ❌ fallback image
      media.onerror = function () {
        this.onerror = null;
        this.src = "assets/images/pic_error.gif";
        this.style.objectFit = "cover";// ✅ fixed extension
      };

      media.style.width = "100%";
      media.style.height = "200px";
      media.style.objectFit = "contain";
media.style.background = "#f5f5f5";
    }

if (post.type === "video") {
  media = document.createElement("video");
  media.src = post.src;
  media.controls = true;

  media.style.width = "100%";
  media.style.height = "200px";
  media.style.objectFit = "contain";
  media.style.background = "#f5f5f5";

  // 🎯 ONLY ONE HOME VIDEO AT A TIME
  media.addEventListener("play", () => {
    if (currentHomePlayingVideo && currentHomePlayingVideo !== media) {
      currentHomePlayingVideo.pause();
    }
    currentHomePlayingVideo = media;
  });

  media.addEventListener("pause", () => {
    if (currentHomePlayingVideo === media) {
      currentHomePlayingVideo = null;
    }
  });

  media.addEventListener("ended", () => {
    if (currentHomePlayingVideo === media) {
      currentHomePlayingVideo = null;
    }
  });

  // 🎬 poster fallback
 // media.poster = "assets/images/tv_error.gif";

  // ❌ fallback
  media.onerror = function () {
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
    text.textContent = post.text[lang];
    text.style.padding = "10px";
    text.style.fontWeight = "500";

    // 📅 DATE
    const date = document.createElement("span");
    date.textContent = post.date;
    date.style.display = "block";
    date.style.padding = "0 10px 10px";
    date.style.fontSize = "12px";
    date.style.opacity = "0.6";

    // 📦 APPEND
    card.appendChild(media);
    card.appendChild(text);
    card.appendChild(date);

    container.prepend(card);
  });
}

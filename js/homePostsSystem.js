// 🏠 HOME POSTS SYSTEM (News Feed)

function loadHomePosts() {
  const container = document.getElementById("postsContainer");
  if (!container) return;

  const lang = window.currentLang || "en";

  // 🧠 POSTS DATA (ADD HERE)
  const posts = [
  {
    type: "image",
    src: "assets/images/postImage1.jpg",
    text: {
      en: "Welcome back to school! 🎉",
      ar: "مرحباً بعودتكم إلى المدرسة 🎉",
      fr: "Bon retour à l’école 🎉"
    },
    date: "2026-04-26"
  },
  {
    type: "video",
    src: "assets/videos/postVideo1.mp4",
    text: {
      en: "Highlights from school activities.",
      ar: "أهم لحظات الأنشطة المدرسية",
      fr: "Moments forts des activités scolaires"
    },
    date: "2026-04-25"
  }
];

  container.innerHTML = "";

  // 🎨 CONTAINER STYLE
  container.style.display = "flex";
  container.style.flexDirection = "column";
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

    card.onmouseenter = () => card.style.transform = "scale(1.01)";
    card.onmouseleave = () => card.style.transform = "scale(1)";

    // 📸 / 🎬 MEDIA
    let media;

    if (post.type === "image") {
      media = document.createElement("img");
      media.src = post.src;

      // ❌ fallback image
      media.onerror = function () {
        this.onerror = null;
        this.src = "assets/images/pic_error.gif";
      };

      media.style.width = "100%";
      media.style.height = "250px";
      media.style.objectFit = "cover";
    }

    if (post.type === "video") {
      media = document.createElement("video");
      media.src = post.src;
      media.controls = true;

      // default poster
      media.poster = "assets/images/tv_error.gif";

      // ❌ fallback → replace with image
      media.onerror = function () {
        const img = document.createElement("img");
        img.src = "assets/images/tv_error.gif";

        img.style.width = "100%";
        img.style.height = "250px";
        img.style.objectFit = "cover";

        this.replaceWith(img);
      };

      media.style.width = "100%";
      media.style.height = "250px";
      media.style.objectFit = "cover";
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

    container.appendChild(card);
  });
}
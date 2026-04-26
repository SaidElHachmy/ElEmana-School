// 🎉 MEDIA ACTIVITIES SYSTEM (FULL JS: DATA + STYLE + UI)

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
        en: "Students enjoying a fun classroom activity.",
        ar: "الطلاب يستمتعون بنشاط داخل الفصل.",
        fr: "Les élèves profitent d'une activité en classe."
      }
    },
    {
      type: "video",
      src: "assets/videos/video1.mp4",
      text: {
        en: "A short video from our school event.",
        ar: "فيديو قصير من نشاط مدرسي.",
        fr: "Une courte vidéo d’un événement scolaire."
      }
    },
    
        {
      type: "image",
      src: "assets/images/activity1.jpg",
      text: {
        en: "Students enjoying a fun classroom activity.",
        ar: "الطلاب يستمتعون بنشاط داخل الفصل.",
        fr: "Les élèves profitent d'une activité en classe."
      }
    },
    {
      type: "video",
      src: "assets/videos/video1.mp4",
      text: {
        en: "A short video from our school event.",
        ar: "فيديو قصير من نشاط مدرسي.",
        fr: "Une courte vidéo d’un événement scolaire."
      }
    }
    
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
    this.src = "assets/images/pic_error.gif"; // ✅ fixed extension
  };

  mediaEl.style.width = "100%";
  mediaEl.style.height = "200px";
  mediaEl.style.objectFit = "cover";
}

if (item.type === "video") {
  mediaEl = document.createElement("video");
  mediaEl.src = item.src;
  mediaEl.controls = true;

  // 🎬 Default poster
  mediaEl.poster = "assets/images/pic_error.gif";

  // ❌ If video not found → remove video behavior
  mediaEl.onerror = function () {
    const img = document.createElement("img");
    img.src = "assets/images/tv_error.gif";
    img.style.width = "100%";
    img.style.height = "200px";
    img.style.objectFit = "cover";

    // replace video with image
    this.replaceWith(img);
  };

  mediaEl.style.width = "100%";
  mediaEl.style.height = "200px";
  mediaEl.style.objectFit = "cover";
}
    // 📝 TEXT
    const text = document.createElement("p");
    text.textContent = item.text[lang];
    text.style.padding = "10px";
    text.style.fontWeight = "500";

    // 📦 APPEND
    card.appendChild(mediaEl);
    card.appendChild(text);
    container.appendChild(card);
  });
}
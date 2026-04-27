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
    en: "Today in the schoolyard, conversations turned into small stories, and silence transformed into lively movement. Every corner held a story, and every glance searched for a new meaning of learning beyond books. It looked like an ordinary day on the surface, but inside it carried a warmth that is not easily forgotten.",
    ar: "في ساحة المدرسة اليوم تبدلت الأحاديث إلى حكاياتٍ صغيرة، وتحوّل الصمت إلى حركةٍ مليئة بالحياة. كل ركنٍ كان يحمل قصة، وكل نظرةٍ كانت تبحث عن معنى جديد للتعلّم خارج الكتب. كان يومًا عاديًا في ظاهره لكنه حمل في داخله شيئًا من الدفء الذي لا يُنسى.",
    fr: "Aujourd’hui dans la cour de l’école, les discussions se sont transformées en petites histoires, et le silence en mouvement plein de vie. Chaque coin portait une histoire, et chaque regard cherchait un nouveau sens de l’apprentissage au-delà des livres. C’était un jour ordinaire en apparence, mais il contenait une chaleur qui ne s’oublie pas."
  },
  date: "2026-04-27",
},
{
  type: "image",
  src: "assets/images/postImage1.jpg",
  text: {
    en: "Today at our school, the younger students gathered around a simple idea that turned into a different kind of day. Soft laughter moved through the classrooms, and a spirit of cooperation brought hearts together before hands. It was a brief moment in time, but it left a long-lasting mark in memory.",
    ar: "اليوم في مدرستنا اجتمع الصغار حول فكرةٍ بسيطة، لكنها صنعت يومًا مختلفًا. ضحكات خفيفة مرّت بين الصفوف، وروح تعاونٍ جمعت القلوب قبل الأيادي. كانت لحظةً قصيرة في الزمن لكنها تركت أثرًا طويلًا في الذاكرة.",
    fr: "Aujourd’hui dans notre école, les plus jeunes se sont réunis autour d’une idée simple qui a transformé la journée. Des rires légers ont traversé les classes, et un esprit de coopération a uni les cœurs avant les mains. Ce fut un moment bref dans le temps, mais il a laissé une trace durable dans la mémoire."
  },
  date: "2026-04-27",
},
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

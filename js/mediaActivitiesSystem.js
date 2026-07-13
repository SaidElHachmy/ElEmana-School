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


      {
  type: "video",
  src: "assets/videos/video13.mp4",
  text: {
    en: "\"After months of hard work and perseverance, we have reached the end of our journey with the sixth-grade students whom I had the honor of teaching. They were exemplary students in both character and ambition. It was an experience marked by mutual respect and appreciation. My dear students, may God bless you and grant you success in your next stage, and may all your hopes and aspirations come true. 😍\" — Teacher: Nebughouha Cheikh Achbieh",

    ar: "\"بعد أشهرٍ من الجدِّ والمثابرة، ها نحن نصل إلى ختام رحلتنا مع تلاميذ القسم السادس الذين تشرفتُ بتدريسهم، فكانوا نعمَ الطلاب خُلُقًا وطموحًا. كانت تجربةً طغى عليها التقدير والاحترام. دمتم أعزائي التلاميذ، ووفَّقكم الله في مسيرتكم القادمة، وحقق لكم آمالكم وطموحاتكم. 😍\" — الأستاذة: نبغوها الشيخ أشبيه",

    fr: "\"Après des mois de travail acharné et de persévérance, nous arrivons aujourd'hui à la fin de notre parcours avec les élèves de la sixième année que j'ai eu l'honneur d'enseigner. Ils ont été des élèves exemplaires, tant par leur comportement que par leur ambition. Cette expérience a été marquée par l'estime et le respect mutuels. Je vous souhaite, chers élèves, beaucoup de réussite dans votre prochaine étape et l'accomplissement de tous vos rêves. 😍\" — Professeure : Nebughouha Cheikh Achbieh"
  }
},
      
      
      
          {
      type: "video",
      src: "assets/videos/video14.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
      
          {
      type: "video",
      src: "assets/videos/video15.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    
    
    
        {
      type: "video",
      src: "assets/videos/video16.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
      
          {
      type: "video",
      src: "assets/videos/video17.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
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
      src: "assets/videos/video20.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
    
    
    {
      type: "video",
      src: "assets/videos/video21.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
      
      
      
      {
      type: "video",
      src: "assets/videos/video22.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
      
      {
      type: "video",
      src: "assets/videos/video23.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
      
      
      {
      type: "video",
      src: "assets/videos/video24.mp4",
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
      src: "assets/videos/video28.mp4",
      text: {
        en: "",
    ar: "",
    fr: ""
      }
    },
      
      {
  type: "video",
  src: "assets/videos/video29.mp4",
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
  src: "assets/videos/video31.mp4",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},
{
  type: "video",
  src: "assets/videos/video32.mp4",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},
{
  type: "video",
  src: "assets/videos/video33.mp4",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},
{
  type: "video",
  src: "assets/videos/video34.mp4",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},
{
  type: "video",
  src: "assets/videos/video35.mp4",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},
{
  type: "video",
  src: "assets/videos/video36.mp4",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},
{
  type: "video",
  src: "assets/videos/video37.mp4",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},
{
  type: "video",
  src: "assets/videos/video38.mp4",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},
{
  type: "video",
  src: "assets/videos/video39.mp4",
  text: {
    en: "",
    ar: "",
    fr: ""
  }
},
{
  type: "video",
  src: "assets/videos/video40.mp4",
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

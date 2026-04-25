function sendMessage() {
  const nameInput = document.querySelector("[data-key='contact_name']");
  const emailInput = document.querySelector("[data-key='contact_email_input']");
  const messageInput = document.querySelector("[data-key='contact_message']");

  const name = nameInput ? nameInput.value : "";
  const email = emailInput ? emailInput.value : "";
  const message = messageInput ? messageInput.value : "";

  if (!name || !message) {
    alert("Please fill in your name and message");
    return;
  }

  const phone = "22247324534";
  const lang = window.currentLang || "en";

  // 🌍 LANGUAGE-BASED LABELS
  const labels = {
    en: {
      title: "📩 New Message from School Website",
      name: "Name",
      email: "Email",
      message: "Message"
    },
    ar: {
      title: "📩 رسالة جديدة من موقع المدرسة",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة"
    },
    fr: {
      title: "📩 Nouveau message du site scolaire",
      name: "Nom",
      email: "Email",
      message: "Message"
    }
  };

  const t = labels[lang];

  const text =
    `${t.title}%0A` +
    `👤 ${t.name}: ${name}%0A` +
    `📧 ${t.email}: ${email}%0A` +
    `💬 ${t.message}: ${message}`;

  const url = `https://wa.me/${phone}?text=${text}`;

  window.open(url, "_blank");
}
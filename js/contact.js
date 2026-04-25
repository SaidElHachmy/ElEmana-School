// 📞 Contact Section Dynamic Content

function loadContact() {
  const lang = window.currentLang || "en";

  const content = {
    en: {
      title: "Contact",
      info_title: "Contact Information",
      email: "Email:",
      phone: "Phone:",
      address: "Address:",
      address_value: "Nouakchott, Mauritania",
      hours: "🕒 Working Hours: 8:00 - 16:00",
      form_title: "Send us a message",
      name: "Your Name",
      email_input: "Your Email",
      message: "Your Message",
      send: "Send Message"
    },

    ar: {
      title: "اتصل بنا",
      info_title: "معلومات الاتصال",
      email: "البريد الإلكتروني:",
      phone: "الهاتف:",
      address: "العنوان:",
      address_value: "نواكشوط، موريتانيا",
      hours: "🕒 أوقات العمل: 8:00 - 16:00",
      form_title: "أرسل لنا رسالة",
      name: "اسمك",
      email_input: "بريدك الإلكتروني",
      message: "رسالتك",
      send: "إرسال"
    },

    fr: {
      title: "Contact",
      info_title: "Informations de contact",
      email: "Email:",
      phone: "Téléphone:",
      address: "Adresse:",
      address_value: "Nouakchott, Mauritanie",
      hours: "🕒 Heures de travail: 8:00 - 16:00",
      form_title: "Envoyez-nous un message",
      name: "Votre nom",
      email_input: "Votre email",
      message: "Votre message",
      send: "Envoyer"
    }
  };

  const t = content[lang];

  // Titles
  document.querySelector("[data-key='contact_title']").textContent = t.title;
  document.querySelector("[data-key='contact_info_title']").textContent = t.info_title;

  // Labels
  document.querySelector("[data-key='contact_email']").textContent = t.email;
  document.querySelector("[data-key='contact_phone']").textContent = t.phone;
  document.querySelector("[data-key='contact_address']").textContent = t.address;
  document.querySelector("[data-key='contact_hours']").textContent = t.hours;

  // Address value (text node after label)
  const addressLine = document.querySelector("[data-key='contact_address']").parentNode;
  addressLine.childNodes[1].nodeValue = " " + t.address_value;

  // Form
  document.querySelector("[data-key='contact_form_title']").textContent = t.form_title;

  document.querySelector("[data-key='contact_name']").placeholder = t.name;
  document.querySelector("[data-key='contact_email_input']").placeholder = t.email_input;
  document.querySelector("[data-key='contact_message']").placeholder = t.message;

  document.querySelector("[data-key='contact_send']").textContent = t.send;
}

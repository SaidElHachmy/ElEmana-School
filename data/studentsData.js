window.students = [
{
  id: 1,
  classId: 1,
  image: "assets/images/student1.jpg",

  name: {
    en: "Ahmed Salem Ould Mohamed",
    fr: "Ahmed Salem Ould Mohamed",
    ar: "أحمد سالم ولد محمد"
  },

  birthDate: "2012-11-01",
  nationalId: "2704759350",
  schoolNumber: "RIM2234884",
  phone: "47324534",
  address: {
    en: "Nouakchott, Mauritania",
    fr: "Nouakchott, Mauritanie",
    ar: "نواكشوط، موريتانيا"
  },

  level: "1AS",

  cycle: {
    en: "COLLEGE",
    fr: "COLLÈGE",
    ar: "إعدادي"
  },
},

{
  id: 2,
  classId: 1,
  image: "assets/images/student2.jpg",

  name: {
    en: "Moussa Cheikh Abdallahi",
    fr: "Moussa Cheikh Abdallahi",
    ar: "موسى الشيخ عبد الله"
  },

  birthDate: "2011-05-14",
  nationalId: "2704759351",
  schoolNumber: "RIM2234885",
  phone: "47324535",
  address: {
    en: "Nouakchott, Mauritania",
    fr: "Nouakchott, Mauritanie",
    ar: "نواكشوط، موريتانيا"
  },

  level: "1AS",

  cycle: {
    en: "COLLEGE",
    fr: "COLLÈGE",
    ar: "إعدادي"
  },
},

{
  id: 3,
  classId: 1,
  image: "assets/images/student3.jpg",

  name: {
    en: "Yahya Ould Sidi",
    fr: "Yahya Ould Sidi",
    ar: "يحيى ولد سيدي"
  },

  birthDate: "2012-02-20",
  nationalId: "2704759352",
  schoolNumber: "RIM2234886",
  phone: "47324536",
  address: {
    en: "Nouakchott, Mauritania",
    fr: "Nouakchott, Mauritanie",
    ar: "نواكشوط، موريتانيا"
  },

  level: "1AS",

  cycle: {
    en: "COLLEGE",
    fr: "COLLÈGE",
    ar: "إعدادي"
  },
},

{
  id: 4,
  classId: 1,
  image: "assets/images/student4.jpg",

  name: {
    en: "Abdoul Aziz Mohamed Lemine",
    fr: "Abdoul Aziz Mohamed Lemine",
    ar: "عبد العزيز محمد لمين"
  },

  birthDate: "2011-09-10",
  nationalId: "2704759353",
  schoolNumber: "RIM2234887",
  phone: "47324537",
  address: {
    en: "Nouakchott, Mauritania",
    fr: "Nouakchott, Mauritanie",
    ar: "نواكشوط، موريتانيا"
  },

  level: "1AS",

  cycle: {
    en: "COLLEGE",
    fr: "COLLÈGE",
    ar: "إعدادي"
  },
},

{
  id: 5,
  classId: 1,
  image: "assets/images/student5.jpg",

  name: {
    en: "Sidi Mohamed El Mokhtar",
    fr: "Sidi Mohamed El Mokhtar",
    ar: "سيدي محمد المختار"
  },

  birthDate: "2012-06-03",
  nationalId: "2704759354",
  schoolNumber: "RIM2234888",
  phone: "47324538",
  address: {
    en: "Nouakchott, Mauritania",
    fr: "Nouakchott, Mauritanie",
    ar: "نواكشوط، موريتانيا"
  },

  level: "1AS",

  cycle: {
    en: "COLLEGE",
    fr: "COLLÈGE",
    ar: "إعدادي"
  },
}

];

function safe(value) {
  return value && value.trim && value.trim() !== "" ? value : "N/A";
  }

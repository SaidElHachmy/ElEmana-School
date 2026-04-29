window.students = [
{
  id: 1,
  classId: 1,
  image: "assets/images/student1.jpg",

  name: {
    en: "Amima Sidi Mohamed Ahmida",
    fr: "Amima Sidi Mohamed Ahmida",
    ar: "أميمة سيد محمد أحميده"
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
  classId: 2,
  image: "assets/images/student2.jpg",

  name: {
    en: "Khadija Mohamed Mahmoud",
    fr: "Khadija Mohamed Mahmoud",
    ar: "خديجة محمد محمود"
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

  level: "2AS",

  cycle: {
    en: "COLLEGE",
    fr: "COLLÈGE",
    ar: "إعدادي"
  },
},

{
  id: 3,
  classId: 3,
  image: "assets/images/student3.jpg",

  name: {
    en: "Ahmed Mohamed Salem",
    fr: "Ahmed Mohamed Salem",
    ar: "أحمد محمد سالم"
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

  level: "3AS",

  cycle: {
    en: "COLLEGE",
    fr: "COLLÈGE",
    ar: "إعدادي"
  },
},


{
  id: 4,
  classId: 4,
  image: "assets/images/student4.jpg",

  name: {
    en: "Sakina Mohamed Salek",
    fr: "Sakina Mohamed Salek",
    ar: "سكينة محمد السالك"
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

  level: "4AS",

  cycle: {
    en: "COLLEGE",
    fr: "COLLÈGE",
    ar: "إعدادي"
  },
},


{
  id: 5,
  classId: 5,
  image: "assets/images/student5.jpg",

  name: {
    en: "Maimouna Hamed Sidat",
    fr: "Maimouna Hamed Sidat",
    ar: "ميمونه حمد سيدات"
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

  level: "5C",

  cycle: {
    en: "COLLEGE",
    fr: "COLLÈGE",
    ar: "إعدادي"
  },
},






















];

function safe(value) {
  return value && value.trim && value.trim() !== "" ? value : "N/A";
}

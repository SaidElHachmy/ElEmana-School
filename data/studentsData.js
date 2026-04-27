window.students = [
  {
    id: 1,
    classId: 1,
    image: "assets/images/student1.jpg",

    name: {
      en: "Mohamed Lemin Mohamed Mahmoud",
      fr: "Mohamed Lemin Mohamed Mahmoud",
      ar: "محمد لمين محمد محمود"
    },

    birthDate: "2012-11-01",
    nationalId: "2704759350",
    schoolNumber: "RIM2234884",
    phone: "47324534",
    address: "Mauritania",

    level: {
      en: "1AS",
      fr: "1AS",
      ar: "1AS"
    },

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
      en: "Med Said Md El Hachmy",
      fr: "Mohamed Salem Ely Haddi",
      ar: "محمد سعيد محمد الهاشمي"
    },

    birthDate: "1996-07-29",
    nationalId: "2704759350",
    schoolNumber: "RIM2234884",
    phone: "47324534",
    address: "Mauritania",

    level: {
      en: "1AS",
      fr: "1AS",
      ar: "1AS"
    },

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
      en: "Mohamed",
      fr: "Mohamed",
      ar: "محمد"
    },

    birthDate: "2012-11-01",
    nationalId: "2704759350",
    schoolNumber: "RIM2234884",
    phone: "47324534",
    address: "Mauritania",

    level: {
      en: "1AS",
      fr: "1AS",
      ar: "1AS"
    },

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
      en: "Said",
      fr: "Said",
      ar: "سعيد"
    },

    birthDate: "1996-07-29",
    nationalId: "2704759350",
    schoolNumber: "RIM2234884",
    phone: "47324534",
    address: "Mauritania",

    level: {
      en: "1AS",
      fr: "1AS",
      ar: "1AS"
    },

    cycle: {
      en: "COLLEGE",
      fr: "COLLÈGE",
      ar: "إعدادي"
    },

    
  },
   {
    id: 4,
    classId: 1,
    image: "assets/images/student2.jpg",

    name: {
      en: "Med Said Md El Hachmy",
      fr: "Mohamed Salem Ely Haddi",
      ar: "محمد سعيد محمد الهاشمي"
    },

    birthDate: "1996-07-29",
    nationalId: "2704759350",
    schoolNumber: "RIM2234884",
    phone: "47324534",
    address: "Mauritania",

    level: {
      en: "1AS",
      fr: "1AS",
      ar: "1AS"
    },

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

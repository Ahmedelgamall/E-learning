import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
const resources = {
  en: {
    translation: {
      "st-homeBanner": "Take great online courses from any where in the world",
      "sec-homeBanner": "Learn the skills you need to take the next step — and every step after. Courses from E£249.99 through Sept 24.",    
      "third-homeBanner": "View Courses",
      "welcome": "Welcome",
      "description": "This is an example of language change in React.",
          "navbar": {
              "home": "Home",
              "features": "Features",
              "services": "Services",
              "courses": "courses",
              "teachers": "Teachers",
              "Pricing": "Pricing",
              "Contact": "Contact",
              "FAQs": "FAQs"
            },
            "cart": {
              "title": "Your Cart",
              "pr-1": "Product 1",
              "pr-2": "Product 2",
              "pr-3": "Product 3",
              "total": "Total",
              "checkout": "Checkout",
              "empty": "Your cart is empty !"
            },
            "homeForm": {
              "title": "Become a membere",
              "small-title": "Get instant access to +1000 video courses",
              "first": "First Name",
              "last": "Last Name ",
              "email": "Email Adress",
              "program": "Program",
              "details": "Details",
              "btn": "Request To Join",
            },
            "courses": {
              "head-title": "All Courses of ",
              "head-search": "Search your course ",
              "tab-1": "All",
              "tab-2": "Programming",
              "tab-3": "Design",
              "tab-4": "Business",
            },
            "features": {
              "h1": "Memper Ship",
              "h2": "Start your Learning Journey Today!",
              "h3": "with a free 7-day trial, then $14.99/month.",
              "btn": "Sign Up now",
              "box1": "Educator help",
              "box1s": "Always get answers.",
              "box2": "Offline mode",
              "box2s": "Download classes.",
              "box3": "Flexible classes",
              "box3s": "You pick the schedule",
              "box4": "Call Center",
              "box4s": "Technical support",
            },
            
            "how": {
              "h1": "How It",
              "h1span": "Work",
              "box1": "Find Your Course",
              "box1s": "It has survived not only centurie also leap into electronic.",
              "box2": "Book A Seat",
              "box2s": "It has survived not only centurie also leap into electronic.",
              "box3": "Get Certificate",
              "box3s": "It has survived not only centurie also leap into electronic.",
            },
            "contact": {
              "h1": "Have",
              "h1span": "Question",
              "p": "Send Your Question For The Courses or Payment Methods to find quick answers to your questions.",
              "name": "Full Name",
              "mail": "Your Mail",
              "message": "Your Message",
              "btn": "Send Message",
            },
            "teachers": {
              "h1": "Awesome",
              "h1span": "Teachers",
              "p": "Find The Experts From Practical Not Academic, All of these here come from thier industry, we are a big no for the theory mentor",
              },

    },
  },
  ar: {
    translation: {
      "st-homeBanner": "احصل على دورات من اي مكان فالعالم",
      "sec-homeBanner": "تعلم المهارات اللازمة لاتخاذ الخطوة التالية - وكل خطوة بعدها. تبدأ الدورات من 249.99 جنيهًا إسترلينيًا حتى 24 سبتمبر.",  
      "third-homeBanner": "عرض دورات",
      "welcome": "مرحبا",
      "description": "هذا مثال لتغيير اللغة في ريأكت.",
          "navbar": {
              "home": "الصفحة الرئيسية",
              "features": "المميزات",
              "services": "الخدمات",
              "courses": "دورات",
              "teachers": "المدرسين",
              "Pricing": "الاسعار",
              "Contact": "تواصل معنا",
              "FAQs": "اسألة شائعة"
            },
            "cart": {
              "title": "العربة",
              "pr-1": "منتج 1",
              "pr-2": "منتج 2",
              "pr-3": "منتج 3",
              "total": "الاجمالي",
              "checkout": "الدفع",
              "empty": "سلة التسوق الخاصة بك فارغة !"
            },
            "homeForm": {
              "title": "كن عضوا",
              "small-title": "احصل على إمكانية الوصول الفوري إلى +1000 دورة فيديو",
              "first": "الاسم الاول",
              "last": "الاسم الاخير ",
              "email": "البريد الالكتروني",
              "program": "البرنامج",
              "details": "معلومات اضافية",
              "btn": "طلب الانضمام",
            },
            "courses": {
              "head-title": "جميع كورسات",
              "head-search": "ابحث عن دورة",
              "tab-1": "جميع الكورسات",
              "tab-2": "برمجة",
              "tab-3": "تصميم",
              "tab-4": "تجارة",
            },
            "features": {
              "h1": "العضوية",
              "h2": "ابدأ رحلة التعلم اليوم!",
              "h3": "مع إصدار تجريبي مجاني لمدة 7 أيام، ثم 14.99 دولارًا أمريكيًا/الشهر.",
              "btn": "سجّل الآن",
              "box1": "مساعدة فالتعلم",
              "box1s": "احصل على إجابات دائمًا.",
              "box2": " وضع عدم الاتصال بالانترنت",
              "box2s": "تنزيل الدروس .",
              "box3": "فصول دراسية مرنة",
              "box3s": "اختر الجدول الزمني بنفسك",
              "box4": "دعم فني",
              "box4s": "احصل على إجابات دائمًا.",
            },
            
            "how": {
              "h1": "كيف ",
              "h1span": "يعمل",
              "box1": "ابحث عن الدورة التدريبية",
              "box1s": "لقد نجا ليس فقط لقرون بل قفز أيضًا إلى الإلكترونيات.",
              "box2": "احجز الدورة المناسبة",
              "box2s": "لقد نجا ليس فقط لقرون بل قفز أيضًا إلى الإلكترونيات.",
              "box3": "الحصول على الشهادة",
              "box3s": "لقد نجا ليس فقط لقرون بل قفز أيضًا إلى الإلكترونيات.",
              },
            "contact": {
              "h1": "لديك",
              "h1span": "سؤال",
              "p": "أرسل سؤالك عن الدورات أو طرق الدفع للعثور على إجابات سريعة لأسئلتك.",
              "name": "الاسم الكامل",
              "mail": "بريدك",
              "message": "رسالتك",
              "btn": "أرسل الرسالة",
              },
              "teachers": {
                "h1": "haben",
                "h1span": "sie fragen",
                "p": "schicken deine fragen von Kurs oder möglich zahlen für schnelle finden Ihre Antwort.",
                "name": "vollständige name",
                "mail": "deine email",
                "message": "deine Nachricht",
                "btn": "Senden einer Nachricht",
                },


    },
  },
ger: {
    translation: {
      "st-homeBanner": "Erhalten Sie großartige Online-Trainingskurse von überall auf der Welt.",
      "sec-homeBanner": "Erlernen Sie die Fähigkeiten, die Sie für den nächsten Schritt – und alle weiteren – benötigen. Kurse ab 249,99 E£ bis 24. September.",  
      "third-homeBanner": "Kurse anzeigen",
      "welcome": "Herz lich Willkommen",
      "description": "Dies ist ein Beispiel für eine Sprachänderung in React.",
          "navbar": {
              "home": "heim",
              "features": "Merkmale",
              "services": "Dienstleistungen",
              "courses": "Kurse",
              "teachers": "Lehrer",
              "Pricing": "Preise ",
              "Contact": "kontakt",
              "FAQs": "FAQs"
            },
            "cart": {
              "title": "warenkorb",
              "total": "total",
              "checkout": "bezahlen "
            },
            "homeForm": {
              "title": "Werden sie Mitglied",
              "small-title": "erhalten sie sofortigen zugriff +1000 Kurs Videos",
              "first": "vorname",
              "last": "nachname",
              "email": "email",
              "Programm ": "programm",
              "details": "weitere angaben ",
              "btn": "Eintritt",
            },
            "courses": {
              "head-title": "All Courses of ",
              "head-search": "Search your course ",
              "tab-1": "All",
              "tab-2": "Programming",
              "tab-3": "Design",
              "tab-4": "Business",
            },
            "features": {
              "h1": "MemperShip",
              "h2": " Beginnen sie heute Ihre leherreise!",
              "h3": "Mit 7-tägiger kostenloser Testversion, dann 14,99 $/Monat.",
              "btn": "jetzt Eintritt",
              "box1": "leherhhilfe",
              "box1s": "immer Antworten erhalten",
              "box2": "Offline-moud",
              "box2s": "Klassenzimmer -herunterladen .",
              "box3": "flexibeles Klassenzimmer",
              "box3s": "Wählen Sie Ihren eigenen Zeitplan",
              "box4": "leherhilfe",
              "box4s": "immer Antworten erhalten .",
            },
            "how": {
            "h1": "wie",
            "h1span": "arbeitet ",
            "box1": "suchen sie von kurs für dich",
            "box1s": "Es hat nicht nur Jahrhunderte überdauert, sondern ist auch in die Elektronik übergegangen.",
            "box2": "Buchen Sie den richtigen Kurs",
            "box2s": "Es hat nicht nur Jahrhunderte überdauert, sondern ist auch in die Elektronik übergegangen.",
            "box3": "erhalten sie ein Zertifikat",
            "box3s": "Es hat nicht nur Jahrhunderte überdauert, sondern ist auch in die Elektronik übergegangen.",
            },
            "contact": {
              "h1": "haben",
              "h1span": "sie fragen",
              "p": "schicken deine fragen von Kurs oder möglich zahlen für schnelle finden Ihre Antwort.",
              "name": "vollständige name",
              "mail": "deine email",
              "message": "deine Nachricht",
              "btn": "Senden einer Nachricht",
              },
            "teachers": {
              "h1": "haben",
              "h1span": "sie fragen",
              "p": "schicken deine fragen von Kurs oder möglich zahlen für schnelle finden Ihre Antwort.",
              "name": "vollständige name",
              "mail": "deine email",
              "message": "deine Nachricht",
              "btn": "Senden einer Nachricht",
              },


    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;


export interface Nakath {
  id: string;
  titleEn: string;
  titleSi: string;
  titleTa: string;
  date: string;
  time: string;
  ritualEn: string;
  ritualSi: string;
  ritualTa: string;
  colorEn?: string;
  colorSi?: string;
  directionEn?: string;
  directionSi?: string;
  icon: string;
}

export const nakathData: Nakath[] = [
  {
    id: "old-year-bath",
    titleEn: "Old Year Bath",
    titleSi: "පරණ අවුරුද්ද සඳහා ස්නානය",
    titleTa: "பழைய ஆண்டிற்கான ஸ்நானம்",
    date: "April 13, 2026",
    time: "Anytime",
    ritualEn: "Bath with herbal essences (Nanu).",
    ritualSi: "නුග පත් යුෂ මිශ්‍ර නානු ගා ස්නානය කිරීම මැනවි.",
    ritualTa: "மூலிகை எண்ணெய் தேய்த்து குளித்தல்.",
    icon: "Bath",
  },
  {
    id: "new-year-dawn",
    titleEn: "New Year Dawn",
    titleSi: "අලුත් අවුරුදු උදාව",
    titleTa: "புத்தாண்டு பிறப்பு",
    date: "April 14, 2026",
    time: "09:32 AM",
    ritualEn: "The dawn of the Sinhala & Tamil New Year.",
    ritualSi: "සිංහල හා හින්දු අලුත් අවුරුදු උදාව.",
    ritualTa: "சிங்கள மற்றும் தமிழ் புத்தாண்டு பிறப்பு.",
    icon: "Sun",
  },
  {
    id: "punya-kalaya",
    titleEn: "Punya Kalaya",
    titleSi: "පුණ්‍ය කාලය",
    titleTa: "புண்ணிய காலம்",
    date: "April 14, 2026",
    time: "03:08 AM to 03:56 PM",
    ritualEn: "Cease all work and engage in religious activities.",
    ritualSi: "වැඩ අත්හැර ආගමික වතාවත්වල යෙදීම මැනවි.",
    ritualTa: "சகல கருமங்களையும் நிறுத்தி வழிபாடுகளில் ஈடுபடுதல்.",
    icon: "Pray",
  },
  {
    id: "cooking",
    titleEn: "Preparing Meals",
    titleSi: "ආහාර පිසීම",
    titleTa: "உணவு தயாரித்தல்",
    date: "April 14, 2026",
    time: "10:41 AM",
    ritualEn: "Prepare milk rice (Kiribath) with jaggery and sweets.",
    ritualSi: "රතු වර්ණ වස්ත්‍රයෙන් සැරසී දකුණු දිශාව බලා ලිප් බැඳ කිරි මිශ්‍ර බතක් පිසීම මැනවි.",
    ritualTa: "சிவப்பு நிற ஆடை அணிந்து தெற்கு திசையை நோக்கி பால் சோறு தயாரித்தல்.",
    colorEn: "Red",
    colorSi: "රතු",
    directionEn: "South",
    directionSi: "දකුණු",
    icon: "Flame",
  },
  {
    id: "work-meals",
    titleEn: "Work, Transactions & Meals",
    titleSi: "වැඩ ඇල්ලීම, ගනුදෙනු කිරීම හා ආහාර අනුභවය",
    titleTa: "வேலை, பரிமாற்றம் மற்றும் உணவு",
    date: "April 14, 2026",
    time: "12:05 PM",
    ritualEn: "Start work, perform transactions and eat the first meal.",
    ritualSi: "රතු වර්ණ වස්ත්‍රයෙන් සැරසී දකුණු දිශාව බලා වැඩ අල්ලා ගනුදෙනු කොට ආහාර අනුභවය මැනවි.",
    ritualTa: "சிவப்பு நிற ஆடை அணிந்து தெற்கு திசையை நோக்கி வேலை தொடங்கி உணவு அருந்துதல்.",
    colorEn: "Red",
    colorSi: "රතු",
    directionEn: "South",
    directionSi: "දකුණු",
    icon: "Utensils",
  },
  {
    id: "oil-anointing",
    titleEn: "Anointing Oil",
    titleSi: "හිසතෙල් ගෑම",
    titleTa: "தலைக்கு எண்ணெய் வைத்தல்",
    date: "April 15, 2026",
    time: "06:54 AM",
    ritualEn: "Anoint oil on head with herbal leaves.",
    ritualSi: "පස් වර්ණ වස්ත්‍රයෙන් සැරසී නැගෙනහිර දිශාව බලා කොහොඹ පත් හිසටත්, ඉඹුල් පත් පයටත් තබා හිසතෙල් ගෑම මැනවි.",
    ritualTa: "ஐந்து நிற ஆடை அணிந்து கிழக்கு திசையை நோக்கி தலைக்கு எண்ணெய் வைத்தல்.",
    colorEn: "Five Colors (Pacha-varga)",
    colorSi: "පස් වර්ණ",
    directionEn: "East",
    directionSi: "නැගෙනහිර",
    icon: "Droplets",
  },
  {
    id: "depart-work",
    titleEn: "Leaving for Work",
    titleSi: "රැකී රක්ෂා සඳහා පිටත්ව යෑම",
    titleTa: "வேலைக்கு புறப்படுதல்",
    date: "April 20, 2026",
    time: "06:27 AM",
    ritualEn: "Leaving for professional duties after the new year.",
    ritualSi: "සුදු වර්ණ වස්ත්‍රයෙන් සැරසී කිරි බතක් හා කැවිලි අනුභව කර දකුණු දිශාව බලා පිටත්ව යෑම මැනවි.",
    ritualTa: "வெள்ளை நிற ஆடை அணிந்து தெற்கு திசையை நோக்கி வேலைக்கு புறப்படுதல்.",
    colorEn: "White",
    colorSi: "සුදු",
    directionEn: "South",
    directionSi: "දකුණු",
    icon: "Briefcase",
  },
];

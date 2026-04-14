import { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Share2, 
  Flame, 
  Utensils, 
  Briefcase, 
  Heart, 
  ArrowRight,
  Sun,
  Moon,
  Wind
} from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

// --- Data ---
const NAKATH_DATA = [
  {
    id: 'dawn',
    title_en: 'Dawn of the New Year',
    title_si: 'අලුත් අවුරුදු උදාව',
    title_ta: 'புத்தாண்டு பிறப்பு',
    date: 'April 14, 2026',
    time: '09:32 AM',
    icon: <Sun className="w-6 h-6 text-orange-500" />,
    color: 'bg-orange-50 border-orange-200 text-orange-800'
  },
  {
    id: 'punya',
    title_en: 'Punya Kalaya',
    title_si: 'පුණ්‍ය කාලය',
    title_ta: 'புண்ணிய காலம்',
    date: 'April 14, 2026',
    time: '03:08 AM to 03:56 PM',
    icon: <Moon className="w-6 h-6 text-indigo-500" />,
    color: 'bg-indigo-50 border-indigo-200 text-indigo-800'
  },
  {
    id: 'cooking',
    title_en: 'Preparing Meals',
    title_si: 'ආහාර පිසීම',
    title_ta: 'உணவு சமைத்தல்',
    date: 'April 14, 2026',
    time: '10:21 AM',
    details: 'Face North, wear Gold or Cream colored clothes.',
    icon: <Flame className="w-6 h-6 text-red-500" />,
    color: 'bg-red-50 border-red-200 text-red-800'
  },
  {
    id: 'eating',
    title_en: 'Eating & Transactions',
    title_si: 'වැඩ ඇල්ලීම, ගනුදෙනු කිරීම හා ආහාර අනුභවය',
    title_ta: 'வேலை ஆரம்பித்தல் மற்றும் உணவு உட்கொள்ளல்',
    date: 'April 14, 2026',
    time: '11:45 AM',
    details: 'Face North.',
    icon: <Utensils className="w-6 h-6 text-amber-500" />,
    color: 'bg-amber-50 border-amber-200 text-amber-800'
  },
  {
    id: 'oil',
    title_en: 'Anointing Oil',
    title_si: 'හිසතෙල් ගෑම',
    title_ta: 'மருந்து நீர் வைத்தல்',
    date: 'April 15, 2026',
    time: '09:06 AM',
    details: 'Face South, wear Green colored clothes.',
    icon: <Wind className="w-6 h-6 text-emerald-500" />,
    color: 'bg-emerald-50 border-emerald-200 text-emerald-800'
  },
  {
    id: 'work',
    title_en: 'Leaving for Work',
    title_si: 'රැකී රක්ෂා සඳහා පිටත්ව යාම',
    title_ta: 'தொழிலுக்குச் செல்லுதல்',
    date: 'April 17, 2026',
    time: '06:12 AM',
    details: 'Face North, wear Light Blue colored clothes.',
    icon: <Briefcase className="w-6 h-6 text-blue-500" />,
    color: 'bg-blue-50 border-blue-200 text-blue-800'
  }
];

const TARGET_DATE = new Date('2026-04-14T09:32:00').getTime();

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleShare = () => {
    const message = `🌸 Sinhala & Tamil New Year 2026 Nakath 🌸\n\n🕒 Dawn: April 14, 09:32 AM\n🔥 Cooking: April 14, 10:21 AM\n🍽️ Eating: April 14, 11:45 AM\n\nCheck all auspicious times here: ${window.location.href}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="min-h-screen bg-orange-50 font-['Abhaya_Libre']">
      {/* Hero Section */}
      <header className="relative h-[400px] flex items-center justify-center text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("/festive-bg.jpg")' }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            🌸 2026 අලුත් අවුරුදු සුභ පැතුම් 🌸
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 drop-shadow-md font-['Noto_Sans_Tamil']">
            இனிய புத்தாண்டு வாழ்த்துக்கள்
          </h2>
          <p className="text-xl md:text-2xl font-semibold bg-white/20 backdrop-blur-md rounded-full px-8 py-2 inline-block">
            April 14, 2026
          </p>
        </motion.div>
      </header>

      <main className="max-w-4xl mx-auto px-4 -mt-16 relative z-20 pb-20">
        
        {/* Countdown Timer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-orange-100 text-center"
        >
          <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center justify-center gap-2">
            <Clock className="w-6 h-6" /> Countdown to New Year
          </h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Mins', value: timeLeft.minutes },
              { label: 'Secs', value: timeLeft.seconds }
            ].map((unit, idx) => (
              <div key={idx} className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
                <div className="text-3xl md:text-5xl font-extrabold text-orange-600 tabular-nums">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-wider text-orange-800 font-bold mt-1">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Share Button */}
        <div className="text-center mb-12">
          <button 
            onClick={handleShare}
            className="group relative inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg transition-all active:scale-95"
          >
            <Share2 className="w-6 h-6" />
            Share via WhatsApp
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded-full animate-bounce">
              LIVE
            </span>
          </button>
        </div>

        {/* Nakath Grid */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-2 bg-orange-500 rounded-full"></div>
            <h2 className="text-3xl font-extrabold text-orange-900">Auspicious Times (Nakath)</h2>
          </div>

          <div className="grid gap-6">
            {NAKATH_DATA.map((nakath, index) => (
              <motion.div
                key={nakath.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border-l-8 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4 ${nakath.color}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    {nakath.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{nakath.title_en}</h3>
                    <p className="text-lg font-['Noto_Sans_Sinhala'] leading-relaxed">{nakath.title_si}</p>
                    <p className="text-base font-['Noto_Sans_Tamil'] opacity-90">{nakath.title_ta}</p>
                    {nakath.details && (
                      <p className="mt-2 text-sm italic font-semibold opacity-80">
                        ✨ {nakath.details}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="md:text-right border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-6 border-current border-opacity-20">
                  <div className="flex items-center md:justify-end gap-2 text-sm uppercase tracking-widest font-bold opacity-70">
                    <Calendar className="w-4 h-4" /> {nakath.date}
                  </div>
                  <div className="text-2xl font-black mt-1">
                    {nakath.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Traditions & Rituals */}
        <section className="mt-20">
           <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-2 bg-orange-500 rounded-full"></div>
            <h2 className="text-3xl font-extrabold text-orange-900">Traditional Customs</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100">
              <h3 className="text-2xl font-bold text-orange-800 mb-4 flex items-center gap-2">
                <Utensils className="w-6 h-6" /> Traditional Food
              </h3>
              <ul className="space-y-3 text-orange-900/80 font-semibold">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-orange-400" /> Kiribath (Milk Rice)</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-orange-400" /> Kavum (Oil Cakes)</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-orange-400" /> Kokis</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-orange-400" /> Mun Kevum</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-orange-400" /> Asmi</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100">
              <h3 className="text-2xl font-bold text-orange-800 mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-500" /> Values & Rituals
              </h3>
              <ul className="space-y-3 text-orange-900/80 font-semibold">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-orange-400" /> Visiting Elders</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-orange-400" /> Offering Betel Leaves</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-orange-400" /> Playing Traditional Games</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-orange-400" /> Forgiving Past Disputes</li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-orange-900 text-orange-50 py-12 px-4 text-center mt-auto">
        <p className="text-lg font-bold mb-2">Wishing you a Prosperous New Year!</p>
        <p className="opacity-60 text-sm">© 2026 Sinhala & Tamil New Year Celebration</p>
      </footer>
    </div>
  );
}

export default App;

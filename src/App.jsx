import React from "react";

function App() {
  return (
    <div style={{ 
      textAlign: "center",
      paddingTop: "100px",
      fontFamily: "sans-serif"
    }}>
      <h1>🍽️ Welcome to AI Group QR Menu</h1>
      <p>This is your first deployed React app on Vercel 🎉</p>
      <p>Everything is working perfectly!</p>
    </div>
  );
}

export default App;function Hero() {
  return (
    <section className="pt-10 pb-6">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-blue-50 to-white p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
              خوش آمدید! پس از اسکن QR، از اینجا سرویس مورد نظرتان را انتخاب کنید
            </h2>
            <p className="mt-3 text-slate-600 leading-7">
              سه بخش اصلی داریم: <strong>خدمات مهندسی و طراحی و نظارت ساختمان</strong>،
              <strong> خدمات هوش مصنوعی</strong> و <strong>هوش مصنوعی و کودک</strong>.
              هر بخش شامل منو و قابلیت گفت‌وگو با دستیار هوشمند است.
            </p>
            <ul className="mt-4 text-slate-600 text-sm list-disc pr-5 space-y-1">
              <li>طراحی مینیمال با رنگ‌های سفید، آبی و سورمه‌ای</li>
              <li>بهینه برای موبایل (اسکرول کم، لمس راحت)</li>
              <li>آماده اتصال به دیتابیس و API هوش مصنوعی</li>
            </ul>
          </div>
          <div className="w-full md:w-[360px]">
            <DemoPhone />
          </div>
        </div>
      </div>
    </section>
  )
}

function DemoPhone() {
  return (
    <div className="relative mx-auto w-full aspect-[9/19] rounded-[36px] border-8 border-slate-900 shadow-2xl bg-white p-4">
      <div className="w-full h-full rounded-2xl bg-gradient-to-b from-white to-blue-50 grid place-items-center">
        <div className="text-center">
          <div className="text-5xl">📱</div>
          <div className="mt-2 text-sm text-slate-600">پیش‌نمایش موبایل</div>
        </div>
      </div>
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-24 rounded-b-2xl bg-slate-900" />
    </div>
  )
}

function SectionGrid() {
  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mt-6">
      <SectionCard
        emoji="👷‍♂️"
        tint="from-blue-600/10"
        title="خدمات مهندسی، طراحی و نظارت ساختمان"
        subtitle="طراحی، نظارت، آزمایشگاه و نقشه‌برداری"
      >
        <EngineeringContent />
      </SectionCard>

      <SectionCard
        emoji="🤖"
        tint="from-blue-700/10"
        title="خدمات هوش مصنوعی (AI)"
        subtitle="ترجمه، تصویر، ویدئو، آواتار و تولید محتوا"
      >
        <AIContent />
      </SectionCard>

      <SectionCard
        emoji="👶🎥"
        tint="from-indigo-900/10"
        title="هوش مصنوعی و کودک"
        subtitle="عکاسی، انیمه و فیلم کوتاه/بلند"
      >
        <KidsAIContent />
      </SectionCard>
    </section>
  )
}

function SectionCard({ emoji, title, subtitle, tint, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-right p-5 md:p-6 flex items-center justify-between gap-4 rounded-3xl bg-gradient-to-b ${tint}`}
      >
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 md:h-14 md:w-14 grid place-items-center rounded-2xl bg-blue-600 text-white text-2xl md:text-3xl shadow-sm">
            {emoji}
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-extrabold text-slate-900">{title}</h3>
            <p className="text-xs md:text-sm text-slate-500">{subtitle}</p>
          </div>
        </div>
        <svg
          className={`h-6 w-6 text-slate-500 transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}
          fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`px-5 md:px-6 pb-6 transition-[max-height,opacity] duration-300 ease-out ${open ? 'opacity-100' : 'opacity-0'}`}
           style={{ maxHeight: open ? '1200px' : 0, overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  )
}

function EngineeringContent() {
  const services = [
    'طراحی معماری',
    'طراحی سازه',
    'طراحی مکانیک',
    'طراحی برق',
    'نظارت چهار گرایش',
    'آزمایشگاه خاک',
    'نقشه UTM و نقشه‌برداری',
    'طراحی نمای ساختمان',
    'طراحی ویلا',
    'طراحی داخلی',
  ];

  return (
    <div className="grid md:grid-cols-2 gap-5">
      <ServiceList title="گزینه‌های مهندسی" items={services} accent="engineering" />
      <div className="space-y-5">
        <SpecialOffer />
        <AIChat placeholder="سؤال خود را درباره خدمات مهندسی بپرسید..." scopeTag="مهندسی" />
      </div>
    </div>
  )
}

function SpecialOffer() {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-sm font-bold text-blue-900">طراحی نمای رایگان با هوش مصنوعی</div>
          <div className="text-xs text-slate-600 mt-1">ارسال عکس نما + دریافت ۳ پیشنهاد طرح اولیه</div>
        </div>
        <button onClick={() => setOpen(true)} className="px-3 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700">
          شروع کنید
        </button>
      </div>
      {open && <FreeFacadeModal onClose={() => setOpen(false)} />}
    </div>
  )
}

function FreeFacadeModal({ onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm grid place-items-center p-4">
      <div className="w-full max-w-lg rounded-3xl bg-white border border-slate-200 shadow-xl p-6">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-extrabold text-slate-900">درخواست طراحی نمای رایگان</h4>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">✖</button>
        </div>
        {!submitted ? (
          <form className="mt-4 space-y-4" onSubmit={(e)=>{e.preventDefault(); setSubmitted(true);}}>
            <div>
              <label className="text-sm text-slate-600">نام و نام خانوادگی</label>
              <input value={name} onChange={(e)=>setName(e.target.value)}
                     className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-blue-100" placeholder="مثلاً علی رضایی"/>
            </div>
            <div>
              <label className="text-sm text-slate-600">شماره تماس</label>
              <input value={phone} onChange={(e)=>setPhone(e.target.value)}
                     className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-blue-100" placeholder="09xxxxxxxxx"/>
            </div>
            <div>
              <label className="text-sm text-slate-600">توضیحات (اختیاری)</label>
              <textarea value={notes} onChange={(e)=>setNotes(e.target.value)} rows={3}
                        className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-blue-100" placeholder="ابعاد، سبک مورد علاقه، محدودیت‌ها"/>
            </div>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700">بستن</button>
              <button type="submit" className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700">ثبت درخواست</button>
            </div>
          </form>
        ) : (
          <div className="mt-6 text-center">
            <div className="text-5xl">🎉</div>
            <p className="mt-3 text-slate-700">درخواست شما ثبت شد. تا ساعاتی دیگر با شما تماس می‌گیریم.</p>
            <button onClick={onClose} className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white font-bold">باشه</button>
          </div>
        )}
      </div>
    </div>
  )
}

function ServiceList({ title, items, accent }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-extrabold text-slate-900">{title}</h4>
        <span className={`text-[10px] px-2 py-1 rounded-full ${accent === 'engineering' ? 'bg-blue-100 text-blue-700' : accent === 'ai' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-700'}`}>منو</span>
      </div>
      <ul className="mt-3 divide-y divide-slate-100">
        {items.map((it, idx) => (
          <li key={idx} className="py-2.5 flex items-center justify-between">
            <span className="text-sm text-slate-700">{it}</span>
            <button className="text-xs px-3 py-1.5 rounded-lg border border-slate-200 hover:border-blue-300 hover:text-blue-700">انتخاب</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function AIChat({ placeholder = 'پیامتان را بنویسید...', scopeTag = 'AI' }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: `سلام! من دستیار ${scopeTag} هستم. چطور کمک‌تان کنم؟` },
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTimeout(() => {
      const reply = {
        role: 'assistant',
        content:
          `پرسش شما دریافت شد: "${userMsg.content}". \n` +
          `برای شروع، لطفاً جزئیات بیشتری (ابعاد، بودجه، شهر/کاربری) را بفرمایید تا پیشنهاد دقیق ارائه کنم.`,
      };
      setMessages((m) => [...m, reply]);
    }, 400);
  };

  const onKeyDown = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } };

  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-4 py-2 text-xs text-slate-600">چت با دستیار {scopeTag}</div>
      <div className="h-56 overflow-y-auto p-4 space-y-3 bg-white">
        {messages.map((m, i) => (
          <div key={i} className={`max-w-[85%] ${m.role === 'user' ? 'ml-auto' : 'mr-auto'}`}>
            <div className={`px-3 py-2 rounded-2xl text-sm leading-6 shadow-sm border ${m.role === 'user' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-800 border-slate-200'}`}>
              {m.content}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <div className="p-3 flex items-center gap-2 border-t border-slate-200">
        <textarea value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={onKeyDown} rows={1}
                  placeholder={placeholder}
                  className="flex-1 resize-none rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-blue-100" />
        <button onClick={send} className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700">ارسال</button>
      </div>
    </div>
  )
}

function AIContent() {
  const items = [
    'ترجمه متون به تمامی زبان‌ها',
    'ساخت تصاویر با هوش مصنوعی',
    'ساخت ویدئو و تیزر',
    'ساخت کلیپ‌های تبلیغاتی',
    'ساخت آواتار',
    'تولید محتوا',
    'تدوین',
  ];
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <ServiceList title="لیست خدمات AI" items={items} accent="ai" />
      <AIChat placeholder="سؤال یا شرح پروژه AI را بنویسید..." scopeTag="هوش مصنوعی" />
    </div>
  )
}

function KidsAIContent() {
  const items = [
    'عکاسی و ساخت تصاویر بسیار پیچیده و هنری',
    'ساخت انیمه از کودک شما',
    'ساخت فیلم کوتاه و بلند از کودک شما',
  ];
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <ServiceList title="خدمات کودک و AI" items={items} accent="kids" />
      <AIChat placeholder="ایده یا شرح پروژه کودک را بنویسید..." scopeTag="کودک و هوش مصنوعی" />
    </div>
  )
}

function FooterCTA() {
  return (
    <section className="mt-10">
      <div className="rounded-3xl border border-slate-200 p-6 md:p-8 bg-gradient-to-r from-indigo-950 to-blue-700 text-white shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-extrabold">نیاز به راهنمایی سریع دارید؟</h3>
            <p className="text-sm md:text-base opacity-90 mt-2">شماره تماس‌تان را بگذارید تا کارشناسان با شما تماس بگیرند.</p>
          </div>
          <QuickContactForm />
        </div>
      </div>
    </section>
  )
}

function QuickContactForm() {
  const [phone, setPhone] = useState('');
  const [ok, setOk] = useState(false);
  return (
    <form onSubmit={(e)=>{e.preventDefault(); setOk(true);}}
          className="w-full md:w-[420px] bg-white text-slate-900 rounded-2xl p-2 flex items-center gap-2 shadow-md">
      <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="09xxxxxxxxx"
             className="flex-1 px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-4 focus:ring-blue-100" />
      <button className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700">ارسال</button>
      {ok && <span className="text-xs text-white ml-2"> ثبت شد ✅</span>}
    </form>
  )
}

"use client";
import { MailIcon, PhoneOutgoingIcon, LocationMarkerIcon, ClockIcon, ChatAlt2Icon } from "@heroicons/react/solid";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import { useState } from "react";

// Quick action buttons & FAQ are inline to avoid extra files

const quickActions = [
  {
    label: "Call Now",
    icon: PhoneOutgoingIcon,
  href: "tel:+919363291001",
    desc: "Speak with our team",
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    label: "Email Us",
    icon: MailIcon,
  href: "mailto:info@mibindustries.in",
    desc: "General inquiries",
    gradient: "from-primary-500 to-primary-600"
  },
  {
  label: "WhatsApp",
  icon: ChatAlt2Icon,
  href: "https://wa.me/919363291001",
    desc: "Fast messaging",
    gradient: "from-green-500 to-green-600"
  },
  {
    label: "Schedule Call",
    icon: ClockIcon,
    href: "https://calendly.com/mibindustriesindia/30min",
    desc: "Pick a time",
    gradient: "from-indigo-500 to-indigo-600"
  }
];

const faqs = [
  { q: "What industries do you specialize in?", a: "We operate across FMCG, consumer goods, industrial supplies and emerging sustainable products with vetted global partners." },
  { q: "What is your average response time?", a: "Within 24 business hours. Priority partners receive dedicated SLA-based support." },
  { q: "Can you assist with custom product sourcing?", a: "Yes. Provide basic specs or target outcome and our sourcing desk will evaluate feasibility, MOQs and lead times." },
  { q: "Do you support international logistics?", a: "We manage multimodal logistics, documentation, compliance and last‑mile through trusted carriers and 3PL networks." }
];


const Contactus = () => {
  return (
    <Layout>
      {/* Hero */}
  <section className="relative overflow-hidden pt-24 pb-12 md:pt-28 md:pb-20 bg-gradient-to-br from-primary-400 via-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none" aria-hidden>
          <div className="absolute -top-32 -left-20 w-[40rem] h-[40rem] bg-white/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-10 w-[30rem] h-[30rem] bg-indigo-200/40 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs md:text-sm font-medium tracking-wide mb-5 ring-1 ring-white/25">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" /> We respond within 24h
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
              Let’s build something <span className="bg-gradient-to-r from-white via-white to-primary-100 bg-clip-text text-transparent">great together</span>
            </h1>
            <p className="text-base md:text-lg text-primary-50/90 leading-relaxed">
              Reach out to MIB Industries — your trusted partner in global trade, product sourcing and innovation.
              We’re here to collaborate, consult and accelerate your growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://calendly.com/mibindustriesindia/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white text-primary-700 hover:text-primary-800 px-6 py-3 text-sm font-semibold shadow hover:shadow-md transition">
                Schedule a Call
                <svg className="w-4 h-4 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="6" width="18" height="14" rx="2" ry="2"/><path d="M16 10h-4v4"/><path d="M8 10h.01"/></svg>
              </a>
              <a href="tel:+919363291001" className="inline-flex items-center gap-2 rounded-xl bg-primary-700/40 hover:bg-primary-700/55 ring-1 ring-white/30 px-6 py-3 text-sm font-semibold transition">
                <PhoneOutgoingIcon className="w-4 h-4" /> Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* <div className="bg-gradient-to-br from-primary-300 via-primary-500 to-primary-800 py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Get in touch with MIB Industries - Your trusted partner in global trade and innovation
          </p>
        </div>
      </div> */}

      {/* Aurora Background Content Section */}
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60 relative">
        {/* Background Aurora Glows */}
        <div className="absolute top-20 -left-40 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-gradient-to-r from-primary-100/40 to-primary-200/30 rounded-full blur-3xl opacity-50"></div>
        
  <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 relative z-10">
          
          {/* Hero Section */}
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 bg-clip-text text-transparent">Get in Touch</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">We’d love to hear from you. Choose the channel that works best, or send us a direct message below.</p>
          </div>

          {/* Mobile channel tabs (desktop uses card grid) */}
          <div className="mb-12 md:hidden" id="channels">
            <ChannelTabs showHours={false} />
          </div>
          {/* Desktop contact info cards (restored) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-16 auto-rows-[1fr]" style={{contentVisibility:'auto'}}>
            <div className="group relative overflow-hidden bg-white/95 md:bg-white/80 md:backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow transition-all duration-300 border border-white/60 md:border-white/30 flex flex-col items-center text-center h-full min-h-[300px]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 flex items-center justify-center mb-6"><LocationMarkerIcon className="h-8 w-8 text-white"/></div>
              <h3 className="text-title-8 font-semibold text-gray-800 mb-3">Our Location</h3>
              <div className="text-body-1 text-gray-600 leading-relaxed mb-4">37/17, Reddy St,<br/> Periyar Nagar, Korattur,<br/>Chennai-600080</div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=37%2F17%2C+Reddy+Street%2C+Periyar+Nagar%2C+Korattur%2C+Chennai+600080"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e)=>{ // remove focus after opening new tab
                  requestAnimationFrame(()=> (e.currentTarget as HTMLAnchorElement).blur());
                }}
                className="mt-auto inline-flex items-center gap-1 text-primary-600 text-xs font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500/40 rounded-full px-3 py-1 bg-primary-50/60 hover:bg-primary-100/70 transition"
              >
                View Map
                <svg width='12' height='12' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' fill='none'><path d='M5 12h14M13 5l7 7-7 7'/></svg>
              </a>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/0 to-primary-100/40 transition" />
            </div>
            <div className="group relative overflow-hidden bg-white/95 md:bg-white/80 md:backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow transition-all duration-300 border border-white/60 md:border-white/30 flex flex-col items-center text-center h-full min-h-[300px]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 flex items-center justify-center mb-6"><PhoneOutgoingIcon className="h-8 w-8 text-white"/></div>
              <h3 className="text-title-8 font-semibold text-gray-800 mb-3">Call Us</h3>
              <div className="space-y-3 text-body-1 text-gray-600">
                <p><span className="font-medium">Main:</span><br/><a href="tel:+919363291001" className="text-primary-600 hover:text-primary-800">+919363291001</a></p>
                <p><span className="font-medium">Support:</span><br/><a href="tel:+917200710002" className="text-primary-600 hover:text-primary-800">+91 91 7200710002</a></p>
              </div>
              <div className="mt-auto" />
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/0 to-primary-100/40 transition" />
            </div>
            <div className="group relative overflow-hidden bg-white/95 md:bg-white/80 md:backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow transition-all duration-300 border border-white/60 md:border-white/30 flex flex-col items-center text-center h-full min-h-[300px]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 flex items-center justify-center mb-6"><MailIcon className="h-8 w-8 text-white"/></div>
              <h3 className="text-title-8 font-semibold text-gray-800 mb-3">Email Us</h3>
              <div className="space-y-3 text-body-1 text-gray-600">
                <p><span className="font-medium">General:</span><br/><a href="mailto:info@mibindustries.in" className="text-primary-600 hover:text-primary-800">info@mibindustries.in</a></p>
                <p><span className="font-medium">Support:</span><br/><a href="mailto:mibindustriesindia@gmail.com" className="text-primary-600 hover:text-primary-800">mibindustriesindia@gmail.com</a></p>
              </div>
              <div className="mt-auto" />
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/0 to-primary-100/40 transition" />
            </div>
            <div className="group relative overflow-hidden bg-white/95 md:bg-white/80 md:backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow transition-all duration-300 border border-white/60 md:border-white/30 flex flex-col items-center text-center h-full min-h-[300px]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 flex items-center justify-center mb-6"><ClockIcon className="h-8 w-8 text-white"/></div>
              <h3 className="text-title-8 font-semibold text-gray-800 mb-3">Business Hours</h3>
              <div className="space-y-3 text-gray-600">
                <p className="text-body-1"><span className="font-medium">Mon - Sat:</span><br/>9:00 AM - 9:00 PM</p>
                {/* <p className="text-body-1"><span className="font-medium">Saturday:</span><br/>10:00 AM - 4:00 PM</p> */}
                <p className="text-body-1"><span className="font-medium">Sunday:</span>Closed</p>
              </div>
              <div className="mt-auto" />
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/0 to-primary-100/40 transition" />
            </div>
          </div>

          {/* Company Description */}
          {/* Quick Connect: mobile (reverted rectangular cards) */}
          <div id="connect" className="mb-16 md:hidden space-y-5">
            <h3 className="text-lg font-semibold tracking-wide text-primary-700 flex items-center gap-2"><span className="w-8 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"/> Connect Instantly</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map(a => (
                <motion.a
                  key={a.label}
                  href={a.href}
                  target={a.href.startsWith('http') ? '_blank' : undefined}
                  rel={a.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileTap={{scale:0.96}}
                  className="group flex flex-col items-start gap-2 rounded-xl px-3.5 py-3 text-[11px] font-medium bg-white shadow border border-white/60 hover:shadow-md transition"
                >
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center bg-gradient-to-br ${a.gradient} text-white shadow-inner`}>
                    <a.icon className="w-4 h-4"/>
                  </span>
                  <span className="text-gray-700 flex items-center gap-1">{a.label}<svg className="w-3 h-3 text-primary-600 group-hover:translate-x-0.5 transition" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
                </motion.a>
              ))}
            </div>
            {/* Direct Contacts (mobile) */}
            <CopyStrip />
          </div>
          {/* Quick Connect: desktop (reverted rectangular cards) */}
          <div id="connect" className="hidden md:block mb-20">
            <h3 className="text-lg font-semibold tracking-wide text-primary-700 mb-4 flex items-center gap-2"><span className="w-8 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"/> Connect Instantly</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10" style={{contentVisibility:'auto'}}>
                {quickActions.map(a => (
                <motion.a
                  key={a.label}
                  href={a.href}
                  target={a.href.startsWith('http') ? '_blank' : undefined}
                  rel={a.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale:1.02 }}
                  whileTap={{ scale:0.97 }}
                  transition={{ type:'tween', duration:0.22 }}
                  className="group relative overflow-hidden rounded-2xl bg-white/95 md:bg-white/80 md:backdrop-blur shadow border border-white/60 md:border-white/40 p-5 flex flex-col gap-4 transition hover:shadow-lg"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${a.gradient} shadow-inner`}>
                    <a.icon className="w-6 h-6 text-white"/>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">{a.label}</h4>
                    <p className="text-xs text-gray-500">{a.desc}</p>
                  </div>
                  <span className="text-[11px] font-medium text-primary-600 group-hover:translate-x-1 transition flex items-center gap-1">Open <svg width='10' height='10' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' fill='none'><path d='M5 12h14M13 5l7 7-7 7'/></svg></span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-primary-100/30 opacity-0 group-hover:opacity-100 transition" />
                </motion.a>
              ))}
            </div>
            <CopyStrip />
          </div>

          {/* FAQ */}
          <div className="mb-24">
            <h3 className="text-lg font-semibold tracking-wide text-primary-700 mb-4 flex items-center gap-2"><span className="w-8 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"/> Frequently Asked Questions</h3>
            <FAQ />
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-white/30">
              <div className="absolute inset-0 pointer-events-none opacity-60" aria-hidden>
                <svg className="absolute -right-10 -top-10 w-72 h-72 text-primary-100" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="90" stroke="currentColor" strokeDasharray="6 10" strokeWidth="2" /></svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 bg-clip-text text-transparent">Ready to Get Started?</h3>
              <p className="text-sm md:text-base text-gray-600 mb-7 max-w-2xl mx-auto">
                Let’s plan your next market expansion, product line or sourcing strategy. Our specialist team will guide you from first call to successful deployment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:info@mibindustries.in" className="inline-flex justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white px-8 py-3 text-sm font-semibold shadow">
                  <MailIcon className="w-4 h-4" /> Email Us
                </a>
                <a href="tel:+919363291001" className="inline-flex justify-center items-center gap-2 rounded-xl ring-1 ring-primary-600/30 bg-primary-50 hover:bg-primary-100 text-primary-700 px-8 py-3 text-sm font-semibold">
                  <PhoneOutgoingIcon className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contactus;

  // Client components below
  const CopyStrip = () => {
    const [copied, setCopied] = useState(false);
  const email = 'info@mibindustries.in';
  const phone = '+919363291001';
    const handleCopy = (text: string) => {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(()=>setCopied(false),1800);
      });
    };
    return (
  <div className="relative overflow-hidden rounded-2xl bg-white/95 md:bg-white/85 md:backdrop-blur shadow border border-white/60 md:border-white/40 p-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h4 className="font-semibold text-gray-800 mb-1 text-sm">Direct Contacts</h4>
          <p className="text-xs text-gray-500">Tap to copy details instantly.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button onClick={()=>handleCopy(email)} className="px-4 py-2 text-xs rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium shadow hover:from-primary-500 hover:to-primary-600">Copy Email</button>
          <button onClick={()=>handleCopy(phone)} className="px-4 py-2 text-xs rounded-xl bg-primary-50 text-primary-700 font-medium ring-1 ring-primary-600/20 hover:bg-primary-100">Copy Phone</button>
        </div>
        <AnimatePresence>
          {copied && (
            <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} className="absolute top-2 right-3 text-[11px] px-2 py-1 rounded-full bg-emerald-500 text-white shadow">
              Copied!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const FAQ = () => {
    const [open, setOpen] = useState<number | null>(0);
    return (
  <div className="divide-y divide-gray-200 rounded-2xl bg-white/95 md:bg-white/80 md:backdrop-blur border border-white/60 md:border-white/40 shadow" style={{contentVisibility:'auto'}}>
        {faqs.map((f,i)=>(
          <div key={f.q}>
            <button onClick={()=>setOpen(o=> o===i? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
              <span className="text-sm font-medium text-gray-800">{f.q}</span>
              <motion.span animate={{rotate: open===i? 90:0}} className="text-primary-600">
                <svg width='16' height='16' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' fill='none'><path d='M8 5l8 7-8 7'/></svg>
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open===i && (
                <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:0.3}} className="px-6 pb-6 -mt-2 text-xs text-gray-600 leading-relaxed">
                  {f.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    );
  };

  // Compact tabbed channel info replacing multiple cards
  const ChannelTabs = ({showHours=true}:{showHours?:boolean}) => {
    const baseTabs = [
      { key: 'location', label: 'Location', icon: LocationMarkerIcon },
      { key: 'call', label: 'Call', icon: PhoneOutgoingIcon },
      { key: 'email', label: 'Email', icon: MailIcon }
    ];
    const tabs = showHours ? [...baseTabs, { key: 'hours', label: 'Hours', icon: ClockIcon }] : baseTabs;
  const [active, setActive] = useState('location');
    return (
      <div className="relative">
        <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Contact channels">
          {tabs.map(t => (
            <button
              key={t.key}
              role="tab"
              aria-selected={active===t.key}
              onClick={()=>setActive(t.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition border ${active===t.key? 'bg-primary-600 text-white border-primary-600 shadow': 'bg-white/80 backdrop-blur text-gray-700 border-white/60 hover:bg-white'} whitespace-nowrap`}
            >
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center"><t.icon className="w-4 h-4" /></span>
              {t.label}
            </button>
          ))}
        </div>
  <div className="mt-6 relative rounded-2xl bg-white/95 md:bg-white/80 md:backdrop-blur shadow border border-white/60 md:border-white/40 p-6 min-h-[200px]" role="tabpanel">
          <AnimatePresence mode="wait">
            {active==='location' && (
              <motion.div key='loc' initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:0.25}} className="space-y-2 text-sm text-gray-600">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-2.5 py-1 text-[11px] font-medium text-primary-700 ring-1 ring-primary-600/10">
                  <LocationMarkerIcon className="w-3.5 h-3.5" />
                  <span>Our Location</span>
                </div>
                <address className="not-italic leading-relaxed">37/17, Reddy St,<br/> Periyar Nagar, Korattur,<br/>Chennai-600080</address>
                <div className="pt-2">
                  <motion.a
                    href="https://www.google.com/maps/search/?api=1&query=37%2F17%2C+Reddy+Street%2C+Periyar+Nagar%2C+Korattur%2C+Chennai+600080"
                    target="_blank"
                    rel="noopener"
                    whileTap={{ scale: 0.9 }}
                    onClick={(e)=>{requestAnimationFrame(()=> (e.currentTarget as HTMLAnchorElement).blur());}}
                    className="relative inline-flex items-center gap-1 text-primary-600 text-xs font-medium rounded-full px-2 py-1 bg-primary-50/50 hover:bg-primary-100/70 active:bg-primary-100 transition focus:outline-none focus:ring-2 focus:ring-primary-500/40"
                  >
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 rounded-full"
                      animate={{ scale:[1,1.08,1], opacity:[0.55,0.75,0.55] }}
                      transition={{ duration:2.2, repeat:Infinity, ease:"easeInOut" }}
                      style={{ background: 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.35), rgba(59,130,246,0))' }}
                    />
                    <span className="relative flex items-center gap-1">
                      View on Map <svg width='12' height='12' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' fill='none'><path d='M5 12h14M13 5l7 7-7 7'/></svg>
                    </span>
                  </motion.a>
                </div>
              </motion.div>
            )}
            {active==='call' && (
              <motion.div key='call' initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:0.25}} className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="sm:col-span-2 -mb-1">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-2.5 py-1 text-[11px] font-medium text-primary-700 ring-1 ring-primary-600/10">
                    <PhoneOutgoingIcon className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">Main Line</p>
                  <a className="text-primary-600 text-sm" href="tel:+919363291001">+919363291001</a>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">Support</p>
                  <a className="text-primary-600 text-sm" href="tel:+917200710002">+91 7200710002</a>
                </div>
                <div className="sm:col-span-2 pt-1">
                  <p className="text-xs text-gray-500">We route priority partner calls automatically. Outside hours, leave a voicemail.</p>
                </div>
              </motion.div>
            )}
            {active==='email' && (
              <motion.div key='email' initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:0.25}} className="space-y-3 text-sm text-gray-600">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-2.5 py-1 text-[11px] font-medium text-primary-700 ring-1 ring-primary-600/10">
                    <MailIcon className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">General</p>
                  <a className="text-primary-600" href="mailto:info@mibindustries.in">info@mibindustries.in</a>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">Support</p>
                  <a className="text-primary-600" href="mailto:mibindustriesindia@gmail.com">mibindustriesindia@gmail.com</a>
                </div>
                <p className="text-xs text-gray-500">Use clear subject lines. We triage by function for faster replies.</p>
              </motion.div>
            )}
            {active==='hours' && (
              <motion.div key='hours' initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:0.25}} className="grid sm:grid-cols-3 gap-4 text-sm text-gray-600">
                <div>
                  <p className="font-medium text-gray-800 mb-1">Mon–Fri</p>
                  <p>9:00 – 18:00</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">Saturday</p>
                  <p>10:00 – 16:00</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">Sunday</p>
                  <p>Closed</p>
                </div>
                <div className="sm:col-span-3 pt-1 text-xs text-gray-500">All times Eastern Time (ET). Adjust responses for regional holidays.</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  };

  // (Removed legacy card components after redesign)
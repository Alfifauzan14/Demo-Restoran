import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  ChevronDown,
  Star,
  Heart,
  MessageSquare,
  Utensils,
  Award,
  Users,
  Calendar,
} from "lucide-react";
import { Navbar } from "./components/Navbar";
import { ScrollingMenu } from "./components/ScrollingMenu";
import { FloatingHub } from "./components/FloatingHub";
import { AnimateReveal } from "./components/AnimateReveal";

// ─── Section Label Component ───────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 justify-center mb-4">
      <div style={{ width: 40, height: 1, background: "rgba(197,160,89,0.5)" }} />
      <span className="section-label">{children}</span>
      <div style={{ width: 40, height: 1, background: "rgba(197,160,89,0.5)" }} />
    </div>
  );
}

// ─── Instagram Gallery Data ────────────────────────────────────
const galleryItems = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/35420084/pexels-photo-35420084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    likes: "2.4k",
    comments: "128",
    tall: true,
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/9552120/pexels-photo-9552120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    likes: "1.8k",
    comments: "94",
    tall: false,
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/6897412/pexels-photo-6897412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    likes: "3.1k",
    comments: "201",
    tall: false,
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/9271569/pexels-photo-9271569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    likes: "987",
    comments: "56",
    tall: true,
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/35420072/pexels-photo-35420072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    likes: "4.2k",
    comments: "315",
    tall: false,
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/29259651/pexels-photo-29259651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    likes: "1.5k",
    comments: "87",
    tall: false,
  },
];

// ─── Delivery Partners ─────────────────────────────────────────
const deliveryPartners = [
  {
    name: "GrabFood",
    tagline: "Delivered in 30 min",
    brandColor: "#00B14F",
    href: "#",
  },
  {
    name: "ShopeeFood",
    tagline: "Best deals guaranteed",
    brandColor: "#EE4D2D",
    href: "#",
  },
  {
    name: "GoFood",
    tagline: "Fresh & fast delivery",
    brandColor: "#43B02A",
    href: "#",
  },
];

// ─── Statistics ────────────────────────────────────────────────
const stats = [
  { value: "4.8", label: "Rating Bintang", icon: Star },
  { value: "177+", label: "Ulasan Pengunjung", icon: Users },
  { value: "Luas", label: "Varian Menu", icon: Utensils },
  { value: "Lengkap", label: "Fasilitas (Playground, dll)", icon: Award },
];

const testimonials = [
  {
    name: "Pengunjung",
    role: "Ulasan Suasana",
    review: "Restoran rasa kota di dalam gang. Tempatnya luas dan ga nyangka ada fasilitas selengkap ini.",
    rating: 5,
    avatar: "S",
  },
  {
    name: "Pengunjung",
    role: "Ulasan Layanan",
    review: "Tante pemiliknya sangat ramah, memberikan pelayanan penuh (full service) kepada pengunjung.",
    rating: 5,
    avatar: "L",
  },
  {
    name: "Pengunjung",
    role: "Ulasan Kenyamanan",
    review: "Sudah jadi basecamp kumpul karena tempatnya senyaman dan seenak itu.",
    rating: 5,
    avatar: "K",
  },
];

// ─── Delivery Card ─────────────────────────────────────────────
function DeliveryCard({ partner }: { partner: (typeof deliveryPartners)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative overflow-hidden cursor-pointer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      style={{
        background: hovered ? "rgba(26,26,26,0.95)" : "rgba(245,245,247,0.03)",
        border: `1px solid ${hovered ? partner.brandColor + "60" : "rgba(245,245,247,0.08)"}`,
        padding: "2.5rem 2rem",
        transition: "all 0.4s ease",
      }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `radial-gradient(ellipse at top left, ${partner.brandColor}15, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        {/* Logo Text */}
        <motion.div
          animate={{ color: hovered ? partner.brandColor : "rgba(245,245,247,0.2)" }}
          transition={{ duration: 0.4 }}
          className="mb-6"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.8rem",
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          {partner.name}
        </motion.div>

        <p
          className="text-sm mb-6"
          style={{
            fontFamily: "var(--font-sans)",
            color: hovered ? "rgba(245,245,247,0.7)" : "rgba(245,245,247,0.3)",
            transition: "color 0.4s ease",
            fontSize: "0.8rem",
          }}
        >
          {partner.tagline}
        </p>

        <motion.div
          className="flex items-center gap-2 text-xs tracking-widest uppercase"
          animate={{ color: hovered ? partner.brandColor : "rgba(245,245,247,0.25)", x: hovered ? 4 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em" }}
        >
          <span>Order Now</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </motion.a>
  );
}

// ─── Gallery Item ──────────────────────────────────────────────
function GalleryItem({ item }: { item: (typeof galleryItems)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="instagram-item relative overflow-hidden cursor-pointer masonry-item"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <img
        src={item.image}
        alt={`Gallery ${item.id}`}
        className="w-full object-cover block"
        style={{
          height: item.tall ? "360px" : "220px",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
      />
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ background: "rgba(26,26,26,0.7)", backdropFilter: "blur(4px)" }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Heart size={14} style={{ color: "#fff" }} fill="white" />
            <span style={{ fontFamily: "var(--font-sans)", color: "white", fontSize: "0.75rem", fontWeight: 500 }}>
              {item.likes}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageSquare size={14} style={{ color: "#fff" }} />
            <span style={{ fontFamily: "var(--font-sans)", color: "white", fontSize: "0.75rem", fontWeight: 500 }}>
              {item.comments}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main App ──────────────────────────────────────────────────
export default function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    date: "",
    guests: "2",
    notes: "",
    submitted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, submitted: true }));
    setTimeout(() => setFormState((prev) => ({ ...prev, submitted: false })), 4000);
  };

  return (
    <div style={{ background: "var(--charcoal)", color: "var(--cream)", minHeight: "100vh", fontFamily: "var(--font-sans)" }}>
      <Navbar />
      <FloatingHub />

      {/* ═══ HERO SECTION ════════════════════════════════════════ */}
      <section id="hero" className="hero-grain relative w-full overflow-hidden" style={{ height: "100svh", minHeight: "700px" }}>
        <div className="absolute inset-0 z-0">
          <video
            autoPlay muted loop playsInline
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.5)" }}
            poster="https://images.pexels.com/photos/26729398/pexels-photo-26729398.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
          >
            <source src="https://videos.pexels.com/video-files/3195394/3195394-hd_1280_720_25fps.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/857251/857251-hd_1280_720_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to bottom, rgba(26,26,26,0.4) 0%, rgba(26,26,26,0.1) 40%, rgba(26,26,26,0.6) 80%, rgba(26,26,26,0.97) 100%)",
          }} />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}>
            <SectionLabel>Hidden Gem · Cianjur</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-center leading-none mb-6"
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3.5rem, 10vw, 9rem)", fontWeight: 300, color: "var(--cream)", letterSpacing: "-0.01em" }}
          >
            Volcano <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Resto</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-center max-w-lg mx-auto mb-10"
            style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(0.85rem, 2vw, 1rem)", color: "rgba(245,245,247,0.6)", fontWeight: 300, lineHeight: 1.8, letterSpacing: "0.03em" }}
          >
            Restoran dengan konsep "Hidden Gem" yang menawarkan suasana rasa kota di tengah area pemukiman. Tempat nyaman untuk makan dan nongkrong.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex items-center gap-4 flex-wrap justify-center"
          >
            <a href="#reservasi" className="btn-gold px-10 py-4 text-sm"><span>Reservasi Sekarang</span></a>
            <a href="#menu" className="flex items-center gap-2"
              style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.5)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
            >
              <span>Lihat Menu</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.8 }}
        >
          <span style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.3)", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown size={16} style={{ color: "rgba(197,160,89,0.6)" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ STATS BAR ═══════════════════════════════════════════ */}
      <section className="py-14 relative" style={{
        background: "linear-gradient(180deg, rgba(26,26,26,0) 0%, rgba(197,160,89,0.04) 50%, rgba(26,26,26,0) 100%)",
        borderTop: "1px solid rgba(197,160,89,0.07)",
        borderBottom: "1px solid rgba(197,160,89,0.07)",
      }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <AnimateReveal key={i} delay={i * 0.1} className="text-center">
                <Icon size={20} style={{ color: "rgba(197,160,89,0.5)", margin: "0 auto 12px" }} />
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem,4vw,2.5rem)", color: "#C5A059", fontWeight: 300 }}>{stat.value}</div>
                <div style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.4)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>{stat.label}</div>
              </AnimateReveal>
            );
          })}
        </div>
      </section>

      {/* ═══ MENU SECTION ════════════════════════════════════════ */}
      <section id="menu" className="py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <AnimateReveal>
            <SectionLabel>Our Signature</SectionLabel>
            <h2 className="mt-4" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem,5vw,4.5rem)", fontWeight: 300, color: "var(--cream)", lineHeight: 1.1 }}>
              Menu <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Pilihan</em>
            </h2>
            <p className="max-w-xl mx-auto mt-6" style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.45)", fontSize: "0.9rem", lineHeight: 1.8, fontWeight: 300 }}>
              Setiap hidangan dirancang dengan bahan-bahan pilihan premium, menghadirkan harmoni rasa yang memukau seluruh indera Anda.
            </p>
          </AnimateReveal>
        </div>
        <ScrollingMenu />
        <div className="text-center mt-14 px-6">
          <AnimateReveal delay={0.2}>
            <a href="#" className="btn-gold px-10 py-4 inline-block"><span>Lihat Semua Menu</span></a>
          </AnimateReveal>
        </div>
      </section>

      {/* ═══ STORY SECTION ═══════════════════════════════════════ */}
      <section id="story" className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(197,160,89,0.03) 0%, transparent 50%)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left Image Collage */}
          <AnimateReveal fadeOnly>
            <div className="relative" style={{ height: "560px" }}>
              <div className="absolute overflow-hidden" style={{ top: 0, left: 0, width: "75%", height: "75%", border: "1px solid rgba(197,160,89,0.1)" }}>
                <img src="https://images.pexels.com/photos/30119014/pexels-photo-30119014.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Restaurant interior" className="w-full h-full object-cover hover-scale-img" />
              </div>
              <div className="absolute overflow-hidden" style={{ bottom: 0, right: 0, width: "55%", height: "55%", border: "1px solid rgba(197,160,89,0.1)" }}>
                <img src="https://images.pexels.com/photos/34989159/pexels-photo-34989159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Fine dining dish" className="w-full h-full object-cover hover-scale-img" />
              </div>
              <div className="absolute" style={{ bottom: "55%", right: "55%", width: "1px", height: "80px", background: "linear-gradient(to bottom, transparent, rgba(197,160,89,0.5), transparent)" }} />
              <div className="absolute z-10" style={{ bottom: "48%", left: "68%", background: "rgba(26,26,26,0.95)", border: "1px solid rgba(197,160,89,0.3)", padding: "1rem 1.25rem", backdropFilter: "blur(8px)" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "#C5A059", fontWeight: 300, lineHeight: 1 }}>4.8</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", color: "rgba(245,245,247,0.5)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 4 }}>Rating Pengunjung</div>
              </div>
            </div>
          </AnimateReveal>

          {/* Right Text */}
          <AnimateReveal delay={0.15}>
            <SectionLabel>Tentang Kami</SectionLabel>
            <h2 className="mt-6 mb-8" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, color: "var(--cream)", lineHeight: 1.15 }}>
              Hidden Gem di Tengah <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Cianjur</em>
            </h2>
            <p className="mb-6 leading-relaxed" style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.5)", fontSize: "0.9rem", lineHeight: 1.9, fontWeight: 300 }}>
              Volcano Resto adalah restoran keluarga & tempat nongkrong yang memadukan kelezatan masakan Internasional (Jepang, Korea, Western) dan masakan lokal Indonesia. Kami menawarkan pengalaman kuliner tak terlupakan.
            </p>
            <p className="mb-10 leading-relaxed" style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.5)", fontSize: "0.9rem", lineHeight: 1.9, fontWeight: 300 }}>
              Fasilitas kami dirancang untuk kenyamanan Anda. Mulai dari area Indoor & Outdoor yang luas, Private Room, hingga Playground untuk anak-anak dan Mushola yang bersih.
            </p>
            <div className="divider-gold mb-10" style={{ margin: "0 0 2.5rem 0" }} />
            <div className="flex items-center gap-8 flex-wrap">
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "#C5A059", fontWeight: 300, lineHeight: 1 }}>Volcano Resto</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", color: "rgba(245,245,247,0.35)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 6 }}>Restoran Keluarga</div>
              </div>
              <a href="#reservasi" className="btn-gold px-8 py-3.5"><span>Reservasi</span></a>
            </div>
          </AnimateReveal>
        </div>
      </section>

      {/* ═══ DELIVERY SECTION ════════════════════════════════════ */}
      <section className="py-28" style={{ borderTop: "1px solid rgba(245,245,247,0.04)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <AnimateReveal className="text-center mb-16">
            <SectionLabel>Delivery Partners</SectionLabel>
            <h2 className="mt-4" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 300, color: "var(--cream)", lineHeight: 1.1 }}>
              Nikmati di Mana <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Saja</em>
            </h2>
            <p className="mt-5 max-w-md mx-auto" style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.4)", fontSize: "0.85rem", lineHeight: 1.8, fontWeight: 300 }}>
              Kami hadir di semua platform pengiriman favorit Anda. Kualitas restoran, langsung ke pintu rumah Anda.
            </p>
          </AnimateReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {deliveryPartners.map((partner, i) => (
              <AnimateReveal key={partner.name} delay={i * 0.12}>
                <DeliveryCard partner={partner} />
              </AnimateReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INSTAGRAM GALLERY ═══════════════════════════════════ */}
      <section id="gallery" className="py-28" style={{ borderTop: "1px solid rgba(245,245,247,0.04)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimateReveal className="text-center mb-16">
            <SectionLabel>@volcano_resto</SectionLabel>
            <h2 className="mt-4" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 300, color: "var(--cream)", lineHeight: 1.1 }}>
              Momen yang <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Membekas</em>
            </h2>
          </AnimateReveal>

          <AnimateReveal fadeOnly delay={0.2}>
            <div className="masonry-grid">
              {galleryItems.map((item) => (
                <GalleryItem key={item.id} item={item} />
              ))}
            </div>
          </AnimateReveal>

          <div className="text-center mt-12">
            <AnimateReveal delay={0.2}>
              <a href="https://instagram.com/volcano_resto" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
                style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.4)", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", padding: "12px 0", borderBottom: "1px solid rgba(197,160,89,0.2)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Follow kami di Instagram</span>
              </a>
            </AnimateReveal>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ════════════════════════════════════════ */}
      <section className="py-28" style={{ background: "linear-gradient(180deg, rgba(197,160,89,0.03) 0%, transparent 100%)", borderTop: "1px solid rgba(245,245,247,0.04)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <AnimateReveal className="text-center mb-16">
            <SectionLabel>Ulasan Pelanggan</SectionLabel>
            <h2 className="mt-4" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 300, color: "var(--cream)", lineHeight: 1.1 }}>
              Kata Mereka tentang <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Kami</em>
            </h2>
          </AnimateReveal>

          <AnimateReveal delay={0.2}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center" style={{ padding: "3rem 2rem" }}
              >
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={16} style={{ color: "#C5A059" }} fill="#C5A059" />
                  ))}
                </div>
                <blockquote className="max-w-2xl mx-auto mb-10" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.2rem,2.5vw,1.6rem)", color: "rgba(245,245,247,0.85)", fontWeight: 300, lineHeight: 1.7, fontStyle: "italic" }}>
                  "{testimonials[activeTestimonial].review}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(197,160,89,0.1)", border: "1px solid rgba(197,160,89,0.3)", color: "#C5A059", fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.75rem" }}>
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.85)", fontSize: "0.85rem", fontWeight: 500 }}>{testimonials[activeTestimonial].name}</div>
                    <div style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.35)", fontSize: "0.7rem", marginTop: 2 }}>{testimonials[activeTestimonial].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-3 mt-6">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)}
                  style={{ width: activeTestimonial === i ? 28 : 6, height: 6, borderRadius: activeTestimonial === i ? 3 : "50%", background: activeTestimonial === i ? "#C5A059" : "rgba(245,245,247,0.2)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s ease" }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </AnimateReveal>
        </div>
      </section>

      {/* ═══ RESERVATION SECTION ═════════════════════════════════ */}
      <section id="reservasi" className="py-28 relative overflow-hidden" style={{ borderTop: "1px solid rgba(245,245,247,0.04)" }}>
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, rgba(197,160,89,0.06), transparent 60%)" }} />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Info */}
            <AnimateReveal>
              <SectionLabel>Reservasi</SectionLabel>
              <h2 className="mt-6 mb-8" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem,4vw,3.8rem)", fontWeight: 300, color: "var(--cream)", lineHeight: 1.1 }}>
                Pesan Meja <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Anda</em>
              </h2>
              <p className="mb-12" style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.45)", fontSize: "0.9rem", lineHeight: 1.8, fontWeight: 300 }}>
                Kami siap menyambut Anda dengan pelayanan terbaik. Reservasi lebih dari 24 jam sebelumnya untuk memastikan meja favorit Anda tersedia.
              </p>
              <div className="flex flex-col gap-5">
                {[
                  { icon: Clock, label: "Jam Operasional", value: "11:00 – 22:30 WIB" },
                  { icon: Phone, label: "Telepon Reservasi", value: "0813-9988-8998" },
                  { icon: MapPin, label: "Lokasi", value: "Jl. Mangunsarkoro Gg. Melati No.6, Pamoyanan, Cianjur" },
                  { icon: Calendar, label: "Reservasi", value: "Hubungi via telepon atau WhatsApp" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(197,160,89,0.08)", border: "1px solid rgba(197,160,89,0.2)" }}>
                        <Icon size={16} style={{ color: "#C5A059" }} />
                      </div>
                      <div>
                        <div style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.3)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4, fontWeight: 500 }}>{item.label}</div>
                        <div style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.7)", fontSize: "0.85rem", fontWeight: 300 }}>{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimateReveal>

            {/* Right Form */}
            <AnimateReveal delay={0.2}>
              <div style={{ background: "rgba(245,245,247,0.02)", border: "1px solid rgba(245,245,247,0.06)", padding: "2.5rem" }}>
                <AnimatePresence mode="wait">
                  {formState.submitted ? (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center text-center py-16 gap-5">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(197,160,89,0.1)", border: "1px solid rgba(197,160,89,0.3)" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                      </div>
                      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "var(--cream)", fontWeight: 300 }}>Reservasi Diterima!</h3>
                      <p style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.5)", fontSize: "0.85rem", lineHeight: 1.7 }}>Tim kami akan menghubungi Anda dalam 30 menit untuk konfirmasi.</p>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <h3 className="mb-2" style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", color: "var(--cream)", fontWeight: 300 }}>Form Reservasi</h3>

                      {[
                        { label: "Nama Lengkap", type: "text", key: "name", placeholder: "Masukkan nama Anda" },
                        { label: "Email", type: "email", key: "email", placeholder: "email@domain.com" },
                      ].map((field) => (
                        <div key={field.key}>
                          <label className="block mb-2" style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.4)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>{field.label}</label>
                          <input type={field.type} required placeholder={field.placeholder}
                            value={formState[field.key as keyof typeof formState] as string}
                            onChange={(e) => setFormState((prev) => ({ ...prev, [field.key]: e.target.value }))}
                            style={{ width: "100%", background: "rgba(245,245,247,0.03)", border: "1px solid rgba(245,245,247,0.08)", color: "var(--cream)", fontFamily: "var(--font-sans)", fontSize: "0.85rem", fontWeight: 300, padding: "0.875rem 1rem", outline: "none" }}
                            onFocus={(e) => { e.target.style.borderColor = "rgba(197,160,89,0.4)"; }}
                            onBlur={(e) => { e.target.style.borderColor = "rgba(245,245,247,0.08)"; }}
                          />
                        </div>
                      ))}

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-2" style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.4)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>Tanggal</label>
                          <input type="date" required value={formState.date}
                            onChange={(e) => setFormState((prev) => ({ ...prev, date: e.target.value }))}
                            style={{ width: "100%", background: "rgba(245,245,247,0.03)", border: "1px solid rgba(245,245,247,0.08)", color: "var(--cream)", fontFamily: "var(--font-sans)", fontSize: "0.85rem", padding: "0.875rem 1rem", outline: "none", colorScheme: "dark" }}
                            onFocus={(e) => { e.target.style.borderColor = "rgba(197,160,89,0.4)"; }}
                            onBlur={(e) => { e.target.style.borderColor = "rgba(245,245,247,0.08)"; }}
                          />
                        </div>
                        <div>
                          <label className="block mb-2" style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.4)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>Jumlah Tamu</label>
                          <select value={formState.guests} onChange={(e) => setFormState((prev) => ({ ...prev, guests: e.target.value }))}
                            style={{ width: "100%", background: "rgba(26,26,26,0.98)", border: "1px solid rgba(245,245,247,0.08)", color: "var(--cream)", fontFamily: "var(--font-sans)", fontSize: "0.85rem", padding: "0.875rem 1rem", outline: "none", appearance: "none" }}
                            onFocus={(e) => { e.target.style.borderColor = "rgba(197,160,89,0.4)"; }}
                            onBlur={(e) => { e.target.style.borderColor = "rgba(245,245,247,0.08)"; }}
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((n) => (
                              <option key={n} value={n}>{n} Orang</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2" style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.4)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>Permintaan Khusus (Opsional)</label>
                        <textarea placeholder="Mis: allergy, perayaan ulang tahun, kursi tertentu..." rows={3} value={formState.notes}
                          onChange={(e) => setFormState((prev) => ({ ...prev, notes: e.target.value }))}
                          style={{ width: "100%", background: "rgba(245,245,247,0.03)", border: "1px solid rgba(245,245,247,0.08)", color: "var(--cream)", fontFamily: "var(--font-sans)", fontSize: "0.85rem", fontWeight: 300, padding: "0.875rem 1rem", outline: "none", resize: "none" }}
                          onFocus={(e) => { e.target.style.borderColor = "rgba(197,160,89,0.4)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "rgba(245,245,247,0.08)"; }}
                        />
                      </div>

                      <motion.button type="submit" className="btn-gold w-full py-4 mt-2" whileTap={{ scale: 0.98 }}>
                        <span>Konfirmasi Reservasi</span>
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </AnimateReveal>
          </div>
        </div>
      </section>

      {/* ═══ MAP SECTION ══════════════════════════════════════════ */}
      <section className="relative" style={{ height: "400px", borderTop: "1px solid rgba(245,245,247,0.04)" }}>
        <div className="grayscale-map w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.4287515082496!2d107.13543997573887!3d-6.839126193158402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6852f86134b2bb%3A0xc6cfb99de241e33c!2sJl.%20Mangunsarkoro%20Gg.%20Melati%20No.6%2C%20Pamoyanan%2C%20Kec.%20Cianjur%2C%20Kabupaten%20Cianjur%2C%20Jawa%20Barat%2043211!5e0!3m2!1sid!2sid!4v1715000000000!5m2!1sid!2sid"
            width="100%" height="100%" style={{ border: 0, display: "block" }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Volcano Resto Location"
          />
        </div>
        <div className="absolute top-1/2 left-8 md:left-16 -translate-y-1/2 z-10" style={{ background: "rgba(26,26,26,0.92)", border: "1px solid rgba(197,160,89,0.2)", padding: "1.75rem 2rem", backdropFilter: "blur(12px)", maxWidth: "280px" }}>
          <div className="flex items-center gap-2 mb-3" style={{ color: "#C5A059" }}>
            <MapPin size={14} />
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 500 }}>Temukan Kami</span>
          </div>
          <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--cream)", fontWeight: 300, marginBottom: 6 }}>Volcano Resto</h4>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.45)", fontSize: "0.8rem", lineHeight: 1.6, fontWeight: 300 }}>
            Jl. Mangunsarkoro Gg. Melati No.6,<br />Pamoyanan, Kec. Cianjur,<br />Kabupaten Cianjur, Jawa Barat 43211
          </p>
          <a href="https://maps.app.goo.gl/3XnB" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", marginTop: 12, fontFamily: "var(--font-sans)", color: "#C5A059", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500, borderBottom: "1px solid rgba(197,160,89,0.3)", paddingBottom: 2 }}>
            Buka di Maps
          </a>
        </div>
      </section>

      {/* ═══ FOOTER ═══════════════════════════════════════════════ */}
      <footer style={{ background: "#111111", borderTop: "1px solid rgba(197,160,89,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="grid md:grid-cols-4 gap-12 md:gap-8">
            <AnimateReveal className="md:col-span-1">
              <div className="mb-6">
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "#C5A059", fontWeight: 400, letterSpacing: "0.2em", lineHeight: 1 }}>VOLCANO</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.5rem", color: "rgba(245,245,247,0.25)", letterSpacing: "0.5em", textTransform: "uppercase", marginTop: 4, fontWeight: 400 }}>RESTO</div>
              </div>
              <p style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.3)", fontSize: "0.8rem", lineHeight: 1.8, fontWeight: 300 }}>
                Hidden gem di Cianjur dengan pilihan menu beragam dan suasana nyaman.
              </p>
            </AnimateReveal>

            {[
              { title: "Navigation", links: ["Menu", "Story", "Gallery", "Reservasi", "Event Privat"] },
              { title: "Info", links: ["Jam Operasional", "Kebijakan Reservasi", "Gift Card", "Karir", "Press"] },
              { title: "Connect", links: ["Instagram", "WhatsApp", "TripAdvisor", "Zomato", "Google Maps"] },
            ].map((col, i) => (
              <AnimateReveal key={col.title} delay={(i + 1) * 0.1}>
                <h5 className="mb-6" style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.3)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 500 }}>{col.title}</h5>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.35)", fontSize: "0.8rem", fontWeight: 300, textDecoration: "none", transition: "color 0.3s ease" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#C5A059"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(245,245,247,0.35)"; }}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </AnimateReveal>
            ))}
          </div>

          <AnimateReveal delay={0.3}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-8" style={{ borderTop: "1px solid rgba(245,245,247,0.05)" }}>
              <p style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.18)", fontSize: "0.7rem", fontWeight: 300 }}>
                © 2024 Volcano Resto. All rights reserved.
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} style={{ color: "#C5A059" }} fill="#C5A059" />
                ))}
                <span className="ml-2" style={{ fontFamily: "var(--font-sans)", color: "rgba(245,245,247,0.18)", fontSize: "0.65rem", fontWeight: 300 }}>4.8 / 5.0 Rating</span>
              </div>
            </div>
          </AnimateReveal>
        </div>
      </footer>
    </div>
  );
}

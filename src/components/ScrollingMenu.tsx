import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  badge?: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Korean BBQ Beef",
    category: "Korean",
    price: "Rp 185.000",
    image: "/menu/Cuplikan layar 2026-05-06 093256.png",
    description: "Premium beef slice dengan bumbu BBQ khas Korea",
    badge: "Chef's Pick",
  },
  {
    id: 2,
    name: "Sushi Roll Platter",
    category: "Jepang",
    price: "Rp 145.000",
    image: "/menu/Cuplikan layar 2026-05-06 093301.png",
    description: "Kombinasi salmon, tuna, dan udang segar",
    badge: "Seasonal",
  },
  {
    id: 3,
    name: "Beef Steak",
    category: "Western",
    price: "Rp 210.000",
    image: "/menu/Cuplikan layar 2026-05-06 093306.png",
    description: "Daging sirloin pilihan dengan saus mushroom",
  },
  {
    id: 4,
    name: "Nasi Campur Bali",
    category: "Indonesia",
    price: "Rp 85.000",
    image: "/menu/Cuplikan layar 2026-05-06 093311.png",
    description: "Ayam betutu, sate lilit, lawar, dan sambal matah",
    badge: "Best Seller",
  },
  {
    id: 5,
    name: "Tteokbokki",
    category: "Korean",
    price: "Rp 65.000",
    image: "/menu/Cuplikan layar 2026-05-06 093316.png",
    description: "Kue beras kenyal pedas manis khas Korea",
  },
  {
    id: 6,
    name: "Ramen Miso",
    category: "Jepang",
    price: "Rp 75.000",
    image: "/menu/Cuplikan layar 2026-05-06 093321.png",
    description: "Ramen dengan kuah miso gurih dan ayam chashu",
  },
  {
    id: 7,
    name: "Chicken Cordon Bleu",
    category: "Western",
    price: "Rp 95.000",
    image: "/menu/Cuplikan layar 2026-05-06 093336.png",
    description: "Dada ayam isi smoked beef dan keju mozzarella",
    badge: "New",
  },
  {
    id: 8,
    name: "Nasi Goreng Spesial",
    category: "Indonesia",
    price: "Rp 55.000",
    image: "/menu/Cuplikan layar 2026-05-06 093341.png",
    description: "Nasi goreng dengan telur, ayam, dan kerupuk",
  },
];

// Duplicate items for infinite loop
const allItems = [...menuItems, ...menuItems, ...menuItems];

const CARD_WIDTH = 320;
const CARD_GAP = 24;
const TOTAL_WIDTH = menuItems.length * (CARD_WIDTH + CARD_GAP);

interface MenuCardProps {
  item: MenuItem;
}

function MenuCard({ item }: MenuCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex-shrink-0 cursor-pointer group"
      style={{ width: CARD_WIDTH }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-sm" style={{ height: 420 }}>
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(to top, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.3) 50%, transparent 100%)",
            opacity: hovered ? 1 : 0.7,
          }}
        />

        {/* Badge */}
        {item.badge && (
          <div
            className="absolute top-4 left-4 px-3 py-1 text-xs font-medium tracking-widest uppercase"
            style={{
              background: "rgba(197, 160, 89, 0.15)",
              border: "1px solid rgba(197, 160, 89, 0.6)",
              color: "#C5A059",
              fontFamily: "var(--font-sans)",
              fontSize: "0.6rem",
            }}
          >
            {item.badge}
          </div>
        )}

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p
            className="text-xs tracking-widest uppercase mb-2"
            style={{ color: "#C5A059", fontFamily: "var(--font-sans)", fontWeight: 500 }}
          >
            {item.category}
          </p>
          <h3
            className="text-2xl text-white mb-2 leading-tight"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
          >
            {item.name}
          </h3>

          <motion.div
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p
              className="text-sm mb-4 leading-relaxed"
              style={{ color: "rgba(245,245,247,0.6)", fontFamily: "var(--font-sans)" }}
            >
              {item.description}
            </p>
          </motion.div>

          <div className="flex items-center justify-between">
            <span
              className="text-lg font-light"
              style={{ color: "#C5A059", fontFamily: "var(--font-serif)" }}
            >
              {item.price}
            </span>
            <motion.div
              animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 8 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-1 text-xs tracking-widest uppercase"
              style={{ color: "rgba(245,245,247,0.5)", fontFamily: "var(--font-sans)" }}
            >
              <span>Order</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ScrollingMenu() {
  const x = useMotionValue(0);
  const isHovered = useRef(false);
  const currentX = useRef(0);
  const animationRef = useRef<number | null>(null);
  const speed = 0.6; // px per frame
  const slowSpeed = 0.15;

  useEffect(() => {
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      const currentSpeed = isHovered.current ? slowSpeed : speed;
      currentX.current -= currentSpeed * (delta / 16.67);

      // Reset for infinite loop
      if (Math.abs(currentX.current) >= TOTAL_WIDTH) {
        currentX.current = 0;
      }

      x.set(currentX.current);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #1A1A1A, transparent)",
        }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, #1A1A1A, transparent)",
        }}
      />

      <motion.div
        className="flex"
        style={{ x, gap: `${CARD_GAP}px`, paddingLeft: `${CARD_GAP}px` }}
        onHoverStart={() => { isHovered.current = true; }}
        onHoverEnd={() => { isHovered.current = false; }}
      >
        {allItems.map((item, index) => (
          <MenuCard key={`${item.id}-${index}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

export default ScrollingMenu;

import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, MapPin, Plus, X } from "lucide-react";

const InstaIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

interface HubItem {
  label: string;
  href: string;
  color: string;
  bg: string;
  border: string;
  renderIcon: () => React.ReactElement;
}

const hubItems: HubItem[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/6281399888998?text=Halo%2C%20saya%20ingin%20melakukan%20reservasi",
    color: "#25D366",
    bg: "rgba(37, 211, 102, 0.12)",
    border: "rgba(37, 211, 102, 0.3)",
    renderIcon: () => <MessageCircle size={18} />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/volcano_resto",
    color: "#E1306C",
    bg: "rgba(225, 48, 108, 0.12)",
    border: "rgba(225, 48, 108, 0.3)",
    renderIcon: () => <InstaIcon />,
  },
  {
    label: "Lokasi",
    href: "https://maps.google.com/?q=Pamoyanan,Cianjur",
    color: "#C5A059",
    bg: "rgba(197, 160, 89, 0.12)",
    border: "rgba(197, 160, 89, 0.3)",
    renderIcon: () => <MapPin size={18} />,
  },
];

export function FloatingHub() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      {/* Sub Items */}
      <AnimatePresence>
        {open &&
          hubItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.8 }}
              transition={{
                duration: 0.35,
                delay: (hubItems.length - 1 - i) * 0.06,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="flex items-center gap-3"
            >
              {/* Label */}
              <motion.span
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ delay: 0.1 + (hubItems.length - 1 - i) * 0.06 }}
                className="text-xs tracking-widest uppercase px-3 py-1.5"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "rgba(245,245,247,0.7)",
                  background: "rgba(26,26,26,0.9)",
                  border: "1px solid rgba(245,245,247,0.08)",
                  backdropFilter: "blur(8px)",
                  fontSize: "0.6rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
              </motion.span>

              {/* Icon Button */}
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-110 active:scale-95"
                style={{
                  background: item.bg,
                  border: `1px solid ${item.border}`,
                  color: item.color,
                  backdropFilter: "blur(8px)",
                }}
                aria-label={item.label}
              >
                {item.renderIcon()}
              </a>
            </motion.div>
          ))}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="w-14 h-14 flex items-center justify-center rounded-full relative overflow-hidden"
        style={{
          background: "rgba(197, 160, 89, 0.15)",
          border: "1px solid rgba(197, 160, 89, 0.5)",
          backdropFilter: "blur(12px)",
          color: "#C5A059",
        }}
        aria-label="Open action hub"
      >
        {/* Pulse Ring */}
        {!open && (
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ border: "1px solid rgba(197, 160, 89, 0.4)" }}
          />
        )}

        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <X size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Plus size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

export default FloatingHub;

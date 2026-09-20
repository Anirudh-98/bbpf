"use client";

import { useEffect, useState } from "react";
import { contactInfo } from "@/data/site";

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.464 3.484 1.346 4.997L2 22l5.144-1.35a9.958 9.958 0 0 0 4.86 1.24h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.671-1.04-5.182-2.929-7.071a9.935 9.935 0 0 0-7.072-2.926zm0 18.187h-.003a8.216 8.216 0 0 1-4.187-1.147l-.3-.178-3.05.8.815-2.976-.196-.306a8.207 8.207 0 0 1-1.263-4.383c0-4.535 3.69-8.223 8.229-8.223 2.198 0 4.263.857 5.818 2.413a8.169 8.169 0 0 1 2.408 5.815c-.002 4.535-3.691 8.185-8.271 8.185z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Guard against a mistyped number: don't render a button that opens somebody else's chat.
  if (!/^\d{10,15}$/.test(contactInfo.whatsappNumber)) return null;

  const message = encodeURIComponent(
    "Hi BPPF, I'd like to know more about your village adoption program."
  );

  return (
    <a
      href={`https://wa.me/${contactInfo.whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with BPPF on WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lifted transition-all duration-300 ease-out hover:scale-105 hover:bg-[#20BD5C] sm:bottom-6 sm:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

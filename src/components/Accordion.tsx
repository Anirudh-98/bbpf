"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type AccordionItem = {
  number?: string;
  title: string;
  body: string;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3.5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.number || index}
            className={`rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "border-stone-300 bg-white shadow-soft ring-1 ring-stone-900/5"
                : "border-stone-200/80 bg-stone-50/90 hover:border-stone-300 hover:bg-stone-100/60"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
            >
              <div className="flex items-center gap-3.5">
                {item.number && (
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-stone-200/70 text-xs font-bold text-stone-600">
                    {item.number}
                  </span>
                )}
                <span className="text-base font-semibold text-charcoal md:text-lg">
                  {item.title}
                </span>
              </div>

              {/* Toggle indicator: transforms into green pill when active (Frame 00:26) */}
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen
                    ? "bg-lime text-forest-deep shadow-sm scale-105"
                    : "bg-stone-200/80 text-stone-500 hover:bg-stone-300"
                }`}
              >
                {isOpen ? (
                  <Minus className="h-4 w-4 stroke-[2.5]" />
                ) : (
                  <Plus className="h-4 w-4 stroke-[2.5]" />
                )}
              </div>
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-6 pt-1 text-sm md:text-base leading-relaxed text-stone-600 border-t border-stone-100">
                  {item.body}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

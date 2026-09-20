"use client";

import { useEffect, useRef, useState } from "react";
import { Copy, Check } from "lucide-react";
import { bankDetails } from "@/data/site";

const fields = [
  { label: "Bank Name", value: bankDetails.bankName },
  { label: "Account Holder", value: bankDetails.accountHolder },
  { label: "Account Number", value: bankDetails.accountNumber, mono: true },
  { label: "IFSC", value: bankDetails.ifsc, mono: true },
  { label: "MICR", value: bankDetails.micr, mono: true },
];

// navigator.clipboard is missing or blocked on insecure origins and inside many in-app
// browsers (WhatsApp, Instagram), so fall back to a temporary selection + execCommand.
async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, text.length);
    try {
      return document.execCommand("copy");
    } catch {
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
}

function CopyRow({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const valueRef = useRef<HTMLSpanElement>(null);
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  async function handleCopy() {
    const copied = await copyText(value);

    if (!copied && valueRef.current) {
      // Last resort: highlight the value so it can be copied by hand.
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(valueRef.current);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }

    setStatus(copied ? "copied" : "failed");
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setStatus("idle"), 1800);
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-stone-400">{label}</dt>
      <dd className="flex items-center gap-2">
        <span
          ref={valueRef}
          className={`text-right font-medium text-stone-800 ${mono ? "font-mono" : ""}`}
        >
          {value}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy ${label}`}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-stone-400 transition-colors hover:bg-lime/20 hover:text-forest-deep"
        >
          {status === "copied" ? (
            <Check className="h-3.5 w-3.5 text-lime-dark" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
        <span role="status" className="sr-only">
          {status === "copied" && `${label} copied`}
          {status === "failed" && `Could not copy automatically. ${label} is selected, press copy on your device.`}
        </span>
      </dd>
    </div>
  );
}

export default function BankDetailsCard({
  title = "Bank Transfer Details",
  className = "",
}: {
  title?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {title && <h3 className="text-lg font-bold text-forest">{title}</h3>}
      <dl className="mt-5 space-y-2.5 text-sm text-stone-700">
        {fields.map((field) => (
          <CopyRow key={field.label} {...field} />
        ))}
      </dl>
    </div>
  );
}

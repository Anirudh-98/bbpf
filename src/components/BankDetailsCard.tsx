"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { bankDetails } from "@/data/site";

const fields = [
  { label: "Bank Name", value: bankDetails.bankName },
  { label: "Account Holder", value: bankDetails.accountHolder },
  { label: "Account Number", value: bankDetails.accountNumber, mono: true },
  { label: "IFSC", value: bankDetails.ifsc, mono: true },
  { label: "MICR", value: bankDetails.micr, mono: true },
];

function CopyRow({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — silently ignore.
    }
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-stone-400">{label}</dt>
      <dd className="flex items-center gap-2">
        <span className={`text-right font-medium text-stone-800 ${mono ? "font-mono" : ""}`}>
          {value}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy ${label}`}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-stone-400 transition-colors hover:bg-lime/20 hover:text-forest-deep"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-lime-dark" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
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

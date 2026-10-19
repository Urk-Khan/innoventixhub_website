"use client";

import { useState } from "react";
import { site } from "@/config/site";

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="floating-actions fixed z-40 flex flex-col items-end gap-3">
      {chatOpen ? (
        <div className="glass-strong w-[min(360px,calc(100vw-2rem))] rounded-3xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.35)]" role="dialog" aria-label="Chat">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-bold">Chat with AI</p>
            <button type="button" className="text-sm text-mist" onClick={() => setChatOpen(false)}>Close</button>
          </div>
          <div id="chatbot-embed" className="min-h-40 rounded-2xl border border-dashed border-amber/40 bg-[rgba(255,181,71,0.06)] p-4 text-sm text-mist">
            {site.chatbotEmbedHtml ? (
              <div dangerouslySetInnerHTML={{ __html: site.chatbotEmbedHtml }} />
            ) : (
              <p>
                Coming soon. Message us on <a className="text-amber underline" href={site.whatsappUrl}>WhatsApp</a> or email{" "}
                <a className="text-amber underline" href={`mailto:${site.emailGeneral}`}>{site.emailGeneral}</a>.
              </p>
            )}
          </div>
        </div>
      ) : null}
      <button
        type="button"
        className="fab-chatbot inline-flex h-[60px] w-[60px] items-center justify-center rounded-full bg-amber text-navy shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
        aria-expanded={chatOpen}
        aria-controls="chatbot-embed"
        onClick={() => setChatOpen((value) => !value)}
      >
        <span className="sr-only">{chatOpen ? "Close chat" : "Open chat"}</span>
        <ChatIcon />
      </button>
      <a
        href={site.whatsappUrl}
        className="fab-whatsapp inline-flex h-[60px] w-[60px] items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
        aria-label="WhatsApp Innoventix Hub"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 14.15c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.13.1-1.82-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.28.64-.41 1.02-.41.12 0 .23 0 .33.01.3.01.45.03.65.5.24.57.82 1.98.89 2.12.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.37-.42.49-.14.14-.28.29-.12.56.16.28.72 1.18 1.54 1.91 1.06.94 1.95 1.24 2.23 1.38.28.14.44.12.6-.07.16-.19.7-.81.88-1.09.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.46.21.53.33.07.12.07.68-.17 1.36z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 16.5V7.8A2.8 2.8 0 0 1 7.8 5h8.4A2.8 2.8 0 0 1 19 7.8v5.4a2.8 2.8 0 0 1-2.8 2.8H9l-4 3.3z" />
    </svg>
  );
}

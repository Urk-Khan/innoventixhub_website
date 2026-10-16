"use client";

import { useEffect, useState } from "react";

const KEY = "ih-cookie-choice";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem(KEY)) setVisible(true);
    const open = () => {
      const saved = window.localStorage.getItem(KEY);
      setAnalytics(saved === "all");
      setSettings(true);
      setVisible(true);
    };
    window.addEventListener("open-cookie-settings", open);
    return () => window.removeEventListener("open-cookie-settings", open);
  }, []);

  function save(value: "all" | "essential") {
    window.localStorage.setItem(KEY, value);
    setVisible(false);
    setSettings(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4" role="dialog" aria-label="Cookie consent">
      <div className="glass mx-auto max-w-3xl rounded-3xl p-5 shadow-2xl">
        <p className="text-sm leading-6 text-cream">
          We use essential cookies to run this site and, with your OK, analytics cookies to improve it.
        </p>
        {settings ? (
          <label className="mt-3 flex items-center gap-2 text-sm">
            <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} />
            Analytics cookies
          </label>
        ) : null}
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" className="rounded-full bg-amber px-4 py-2 text-sm font-bold text-ink" onClick={() => save("all")}>
            Accept all
          </button>
          <button type="button" className="rounded-full border border-white/20 px-4 py-2 text-sm" onClick={() => save("essential")}>
            Reject non-essential
          </button>
          {settings ? (
            <button type="button" className="rounded-full border border-white/20 px-4 py-2 text-sm" onClick={() => save(analytics ? "all" : "essential")}>
              Save settings
            </button>
          ) : (
            <button type="button" className="rounded-full border border-white/20 px-4 py-2 text-sm" onClick={() => setSettings(true)}>
              Settings
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

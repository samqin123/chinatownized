"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function ContactWidget() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className="fixed right-0 bottom-12 z-50 flex items-stretch rounded-l-3xl border border-r-0 border-[var(--color-divider)] bg-[var(--color-parchment)]/95 shadow-[-8px_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={collapsed ? { transform: "translateX(calc(100% - 2rem))" } : undefined}
    >
      {/* Toggle button */}
      <button
        type="button"
        onClick={() => {
          trackEvent("contact_widget_toggle", {
            state: collapsed ? "expanded" : "collapsed",
          });
          setCollapsed(!collapsed);
        }}
        aria-expanded={!collapsed}
        aria-label={collapsed ? "Expand contact widget" : "Collapse contact widget"}
        className="flex w-8 cursor-pointer items-center justify-center rounded-l-3xl border-0 border-r border-r-[var(--color-divider)] bg-transparent text-[var(--color-ink-faint)] transition-colors hover:text-[var(--color-ink)]"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 transition-transform duration-300"
          style={collapsed ? { transform: "rotate(180deg)" } : undefined}
          aria-hidden="true"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Panel */}
      <div className="flex flex-col items-center px-4 py-3">
        <span className="mb-2 font-[family-name:var(--font-mono)] text-[10px] font-medium tracking-widest text-[var(--color-ink-faint)] uppercase">
          contact us
        </span>
        <div className="flex items-center gap-3">
          {/* WhatsApp */}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            title="Join WhatsApp Group"
            data-analytics-event="contact_click"
            data-analytics-channel="whatsapp"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(37,211,102,0.1)] text-[#25d366] shadow-sm transition-transform hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="sr-only">WhatsApp</span>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/medinsh01"
            target="_blank"
            rel="noopener noreferrer"
            title="Join Telegram Group"
            data-analytics-event="contact_click"
            data-analytics-channel="telegram"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(0,136,204,0.1)] text-[#0088cc] shadow-sm transition-transform hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <span className="sr-only">Telegram</span>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/medinsh"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow us on X"
            data-analytics-event="contact_click"
            data-analytics-channel="x"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/[0.08] text-slate-900 shadow-sm transition-transform hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="sr-only">X</span>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow us on Facebook"
            data-analytics-event="contact_click"
            data-analytics-channel="facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(24,119,242,0.1)] text-[#1877f2] shadow-sm transition-transform hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="sr-only">Facebook</span>
          </a>

          {/* WeChat */}
          <div className="group relative">
            <button
              type="button"
              title="WeChat Work Group"
              onClick={() =>
                trackEvent("contact_click", {
                  channel: "wechat",
                  source: "widget",
                })
              }
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-0 bg-[rgba(7,193,96,0.1)] text-[#07c160] shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-2.18 2.768c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982z" />
              </svg>
              <span className="sr-only">WeChat</span>
            </button>
            {/* QR Popover */}
            <div className="pointer-events-none absolute right-0 bottom-[calc(100%+1rem)] w-36 origin-bottom-right scale-95 rounded-2xl border border-[var(--color-divider)] bg-[var(--color-parchment)] p-2 opacity-0 shadow-[0_20px_40px_rgba(15,23,42,0.18)] transition-all group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:scale-100 group-focus-within:opacity-100">
              <img
                src="/qr_medinsh.png"
                alt="Scan to join WeChat group"
                className="block w-full rounded-lg border border-[var(--color-divider)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <p className="dateline mb-1">CHARMING DESTINATIONS &raquo; PRIVACY</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed">
          This site may collect limited information when you interact with forms, subscribe to
          updates, or use embedded tools. We use that information only to operate the site,
          improve the reader experience, and respond to requests.
        </p>
        <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed">
          We may use standard analytics, email delivery, and affiliate tracking tools. For
          analytics, this site may use Google Analytics 4 and Microsoft Clarity to understand
          page traffic and improve the reader experience. These services may collect technical
          information such as browser type, pages visited, or basic referral data. We do not
          intend to collect more personal data than necessary.
        </p>
        <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed">
          If you subscribe or contact us, your information will only be used for the purpose you
          provided it. You can ask us to update or remove your contact information by reaching out
          through the Contact page.
        </p>
      </main>
      <Footer />
    </>
  );
}

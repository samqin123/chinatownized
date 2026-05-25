import type { FAQ } from "@/types";
interface FaqSectionProps { faqs: FAQ[] }
export default function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section className="my-8">
      <hr className="section-divider mb-6" />
      <h2 className="font-heading text-xl font-bold text-ink mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <details key={i} className="group border border-divider bg-parchment">
            <summary className="cursor-pointer px-5 py-3 font-heading text-sm font-bold text-ink hover:text-primary">
              {faq.question}
            </summary>
            <div className="border-t border-divider px-5 py-3 text-sm text-ink-muted leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

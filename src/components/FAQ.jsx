import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Are your supplements vet-formulated?",
    a: "Yes. Every product is developed with veterinary input and reviewed for safety and efficacy, using research-backed ingredients at effective doses.",
  },
  {
    q: "What ingredients do you use?",
    a: "We prioritize natural, human‑grade ingredients with no artificial colors or fillers. Each product page lists full ingredient decks and sourcing notes.",
  },
  {
    q: "How fast is shipping?",
    a: "Most orders ship within 24 hours and arrive in 2–4 business days within the continental US.",
  },
  {
    q: "How should I dose chews?",
    a: "Follow weight‑based guidelines on each product label. When in doubt, consult your veterinarian.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative bg-white py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-slate-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-slate-600">
            Everything you want to know about ingredients, shipping, and usage.
          </p>
        </div>

        <div className="mt-8 divide-y divide-slate-200 rounded-[24px] bg-emerald-50/40 p-2 ring-1 ring-emerald-100">
          {faqs.map((item, idx) => (
            <div key={item.q} className="rounded-[20px] bg-white p-4 sm:p-6">
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() => setOpen(open === idx ? -1 : idx)}
              >
                <span className="font-medium text-slate-900">{item.q}</span>
                <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  {open === idx ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === idx && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden pt-3 text-slate-600"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Email capture */}
        <div className="mt-12 rounded-[28px] bg-gradient-to-tr from-emerald-100 via-amber-100 to-white p-8 text-center shadow-sm">
          <h3 className="font-display text-2xl font-semibold text-slate-900">
            Join our pack
          </h3>
          <p className="mt-2 text-slate-600">
            Get expert tips and 10% off your first order.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-5 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-3xl border border-emerald-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 shadow-sm focus:border-emerald-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-3xl bg-emerald-600 px-6 py-3 font-medium text-white shadow-sm transition-transform duration-200 hover:scale-[1.02] hover:bg-emerald-700 active:scale-[0.98]"
            >
              Get 10% Off
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

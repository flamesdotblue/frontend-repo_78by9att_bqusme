import { CheckCircle2, Leaf, Truck, Star } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: CheckCircle2,
    title: "Vet Approved",
    desc: "Formulas developed with veterinary expertise for real results.",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    desc: "Clean ingredients, no nasties — just what pets need.",
  },
  {
    icon: Star,
    title: "Tasty Chews",
    desc: "Chewables pets love, so routines are easy and fun.",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    desc: "Quick, reliable delivery straight to your door.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-slate-900 md:text-4xl">
            Built for Better Pet Days
          </h2>
          <p className="mt-3 text-slate-600">
            Clean, science-backed nutrition with a taste pets wag for.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="rounded-[24px] bg-emerald-50/60 p-6 shadow-sm ring-1 ring-emerald-100"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="font-medium text-slate-900">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

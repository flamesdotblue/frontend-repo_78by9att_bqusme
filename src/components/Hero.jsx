import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-amber-50 to-white">
      {/* Organic background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col items-start justify-center text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-emerald-700 shadow-sm backdrop-blur"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Vet-Formulated • Tasty Chews
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-tight text-slate-900 md:text-5xl"
          >
            Wellness in Every Bite for Happier Dogs & Cats
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 max-w-xl text-base text-slate-600 md:text-lg"
          >
            Premium supplements and grooming essentials backed by science and loved for taste. Real results in as little as 30 days.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex w-full flex-col items-center gap-3 md:w-auto md:flex-row"
          >
            <a
              href="#shop"
              className="rounded-3xl bg-emerald-600 px-8 py-3 text-white shadow-sm transition-transform duration-200 hover:scale-[1.02] hover:bg-emerald-700 active:scale-[0.98]"
            >
              Shop Now
            </a>
            <a
              href="#benefits"
              className="rounded-3xl bg-white/70 px-8 py-3 text-emerald-700 shadow-sm backdrop-blur transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Discover Healthier Pets
            </a>
          </motion.div>
        </div>

        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-[28px] bg-gradient-to-tr from-emerald-100 to-amber-100 shadow-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1760&auto=format&fit=crop"
              alt="Happy dog with supplements"
              className="h-full w-full object-cover"
              loading="eager"
            />
            {/* Floating shapes */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="pointer-events-none absolute -left-4 -top-4 h-24 w-24 rounded-full bg-white/70 shadow-sm backdrop-blur"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="pointer-events-none absolute -right-6 bottom-6 h-16 w-16 rounded-3xl bg-white/70 shadow-sm backdrop-blur"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

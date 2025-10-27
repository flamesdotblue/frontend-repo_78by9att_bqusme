import { Star } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Hip & Joint Chews",
    price: "$29",
    rating: 4.8,
    img:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1200&auto=format&fit=crop",
    color: "from-emerald-100 to-emerald-50",
  },
  {
    id: 2,
    title: "Multivitamin Bites",
    price: "$26",
    rating: 4.9,
    img:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop",
    color: "from-amber-100 to-amber-50",
  },
  {
    id: 3,
    title: "Skin & Coat Omega",
    price: "$32",
    rating: 4.7,
    img:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
    color: "from-emerald-100 to-amber-50",
  },
  {
    id: 4,
    title: "Grooming Essentials Kit",
    price: "$39",
    rating: 4.8,
    img:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
    color: "from-amber-100 to-emerald-50",
  },
];

export default function BestSellers() {
  return (
    <section id="shop" className="bg-gradient-to-b from-white to-emerald-50/40 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold text-slate-900 md:text-4xl">
              Best Sellers
            </h2>
            <p className="mt-2 text-slate-600">Loved by thousands of pet parents.</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <a
              href="#"
              className="rounded-3xl bg-white px-4 py-2 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
            >
              View All
            </a>
          </div>
        </div>

        {/* Carousel-like scroll area */}
        <div className="mt-8 overflow-x-auto pb-4">
          <div className="grid auto-cols-[80%] grid-flow-col gap-5 sm:auto-cols-[45%] lg:auto-cols-[25%]">
            {products.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * idx }}
                className="group rounded-[28px] bg-white p-2 shadow-sm ring-1 ring-slate-100"
              >
                <div className={`relative overflow-hidden rounded-[24px] bg-gradient-to-br ${p.color}`}>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-slate-900">{p.title}</h3>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
                      {p.price}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.round(p.rating) ? "fill-amber-400" : "fill-transparent"}`}
                      />
                    ))}
                    <span className="ml-2 text-xs text-slate-500">{p.rating}</span>
                  </div>
                  <button className="mt-4 w-full rounded-3xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-transform duration-200 hover:scale-[1.02] hover:bg-emerald-700 active:scale-[0.98]">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

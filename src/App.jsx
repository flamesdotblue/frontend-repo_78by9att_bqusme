import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import BestSellers from "./components/BestSellers";
import FAQ from "./components/FAQ";
import { Home, ShoppingBag, User } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Benefits />
      <BestSellers />
      <FAQ />

      {/* Footer */}
      <footer className="bg-gradient-to-t from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h4 className="font-display text-lg font-semibold">About</h4>
              <p className="mt-2 text-sm text-slate-600">
                Premium pet nutrition and wellness with clean ingredients and a
                friendly, science-backed approach.
              </p>
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold">Support</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                <li>Shipping & Returns</li>
                <li>Ingredients</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold">Follow</h4>
              <p className="mt-2 text-sm text-slate-600">Instagram • TikTok • YouTube</p>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6 text-sm text-slate-500">
            <span>© {new Date().getFullYear()} PetWell Co.</span>
            <span>Made with love for happier pets</span>
          </div>
        </div>
      </footer>

      {/* Sticky mobile nav */}
      <nav className="fixed inset-x-0 bottom-3 z-50 mx-auto w-[92%] max-w-md rounded-3xl bg-white/90 p-2 shadow-lg ring-1 ring-slate-200 backdrop-blur sm:hidden">
        <ul className="flex items-center justify-around">
          <li>
            <a href="#" className="flex flex-col items-center gap-1 rounded-2xl px-3 py-2 text-emerald-700">
              <Home className="h-5 w-5" />
              <span className="text-xs">Home</span>
            </a>
          </li>
          <li>
            <a href="#shop" className="flex flex-col items-center gap-1 rounded-2xl px-3 py-2 text-slate-700">
              <ShoppingBag className="h-5 w-5" />
              <span className="text-xs">Shop</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col items-center gap-1 rounded-2xl px-3 py-2 text-slate-700">
              <User className="h-5 w-5" />
              <span className="text-xs">Account</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;

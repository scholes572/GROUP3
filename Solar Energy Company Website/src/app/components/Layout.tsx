import { Outlet, Link, useLocation } from "react-router";
import { Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { StarField } from "./StarField";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/solutions", label: "Solutions" },
    { path: "/locations", label: "Locations" },
    { path: "/team", label: "Team" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white relative overflow-hidden">
      <StarField />
      
      {/* Navigation */}
      <nav className="relative z-50 bg-gray-950/80 backdrop-blur-md border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Sun className="w-10 h-10 text-amber-500 group-hover:rotate-180 transition-transform duration-500" />
                <div className="absolute inset-0 bg-amber-500/30 blur-xl rounded-full group-hover:bg-amber-500/50 transition-all"></div>
              </div>
              <div>
                <div className="font-bold text-2xl bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  SolaraForge
                </div>
                <div className="text-xs text-amber-500/70">Smart Solar Solutions</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    isActive(link.path)
                      ? "bg-amber-500/20 text-amber-400"
                      : "text-gray-300 hover:bg-amber-500/10 hover:text-amber-300"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-amber-500/10 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-amber-400" />
              ) : (
                <Menu className="w-6 h-6 text-amber-400" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    isActive(link.path)
                      ? "bg-amber-500/20 text-amber-400"
                      : "text-gray-300 hover:bg-amber-500/10 hover:text-amber-300"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-950/90 border-t border-amber-500/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Sun className="w-8 h-8 text-amber-500" />
                <span className="font-bold text-xl bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  SolaraForge
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering South Africa with smart solar solutions. Addressing load shedding
                and power challenges through innovative renewable energy technology.
              </p>
              <p className="text-sm text-gray-500">© 2025 SolaraForge. All rights reserved.</p>
            </div>

            <div>
              <h3 className="font-semibold text-amber-400 mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navLinks.slice(0, 4).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-amber-400 mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Johannesburg HQ</p>
                <p>Gauteng, South Africa</p>
                <p className="mt-4">Upington Manufacturing</p>
                <p>Northern Cape, South Africa</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

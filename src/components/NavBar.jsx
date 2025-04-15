import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { label: "Problem", id: "problem" },
    { label: "Product", id: "product" },
    { label: "Tech", id: "tech" },
    { label: "Join", id: "cta" },
  ];

  // Scroll to section
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  // ScrollSpy using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      {
        rootMargin: "-50% 0px -30% 0px", // adjust for trigger sensitivity
        threshold: 0.1,
      }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navButtonStyle = (id) =>
    `hover:text-indigo-700 ${
      activeSection === id ? "text-indigo-700 font-semibold" : "text-gray-700"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-indigo-700 cursor-pointer"
          onClick={() => scrollTo("hero")}
        >
          MemoTag
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={navButtonStyle(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX className="h-6 w-6 text-gray-800" />
            ) : (
              <HiMenu className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={navButtonStyle(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

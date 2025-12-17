import { useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Product", path: "/product" },
    { name: "Contact", path: "/contact" }
  ]

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <h2 className="text-xl font-semibold tracking-wide text-white">
          Radha Krishna<span className="text-amber-400">.</span>
        </h2>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {links.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-amber-400"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 bg-slate-900">
          <nav className="flex flex-col gap-4">
            {links.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive
                      ? "text-amber-400"
                      : "text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar

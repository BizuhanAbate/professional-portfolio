
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  // { label: "Home", to: "/" },
  { label: "/", to: "/about" },
  { label: "Teaching", to: "/teaching" },
  { label: "Research", to: "/research" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? "text-teal-700"
        : "text-slate-600 hover:text-teal-700"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 text-lg font-bold text-white">
            B
          </span>
          <span className="text-sm font-bold tracking-tight text-slate-950 sm:text-base">
            Bizuhan Abate Tayu
          </span>
        </Link>

        <div className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={linkClass}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800 xl:inline-flex"
        >
          Let's connect
          <ArrowUpRight size={16} />
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 xl:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-lg xl:hidden sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-teal-50 text-teal-800"
                      : "text-slate-600 hover:bg-slate-50 hover:text-teal-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}




// import { NavLink } from "react-router-dom";

// const navItems = [
//   { label: "About", to: "/" },
//   { label: "Teaching", to: "/teaching" },
//   { label: "Research", to: "/research" },
//   { label: "Projects", to: "/projects" },
//   { label: "Experience", to: "/experience" },
//   { label: "Contact", to: "/contact" },
// ];

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
//       <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-10">
//         <NavLink to="/" className="flex items-center gap-2">
//           <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-white">
//             <span className="text-sm font-bold">B</span>
//           </span>
//           <span className="font-bold tracking-tight text-slate-950">
//             Bizuhan Abate Tayu
//           </span>
//         </NavLink>

//         <div className="hidden items-center gap-6 lg:flex">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.to}
//               to={item.to}
//               end={item.to === "/"}
//               className={({ isActive }) =>
//                 `text-sm font-medium transition ${
//                   isActive
//                     ? "text-teal-700"
//                     : "text-slate-600 hover:text-teal-700"
//                 }`
//               }
//             >
//               {item.label}
//             </NavLink>
//           ))}
//         </div>
//       </nav>
//     </header>
//   );
// }



// // import { useState } from "react";
// // import { BrainCircuit, Menu, X, ArrowUpRight } from "lucide-react";

// // const links = [
// //   { label: "Home", href: "#home" },
// //   { label: "Teaching", href: "#teaching" },
// //   { label: "Research", href: "#research" },
// //   { label: "Projects", href: "#projects" },
// //   { label: "Experience", href: "#experience" },
// // ];

// // export default function Navbar() {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const closeMenu = () => setMenuOpen(false);

// //   return (
// //     <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
// //       <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
// //         <a
// //           href="#home"
// //           onClick={closeMenu}
// //           className="group flex items-center gap-3"
// //           aria-label="Bizuhan Abate Tayu home"
// //         >
// //           <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-700 text-white shadow-sm transition group-hover:bg-teal-800">
// //             <BrainCircuit size={24} />
// //           </span>

// //           <span>
// //             <span className="block text-sm font-bold tracking-tight text-slate-900 sm:text-base">
// //               Bizuhan Abate Tayu
// //             </span>
// //             <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
// //               Academic & Professional Portfolio
// //             </span>
// //           </span>
// //         </a>

// //         <div className="hidden items-center gap-7 lg:flex">
// //           {links.map((link) => (
// //             <a
// //               key={link.href}
// //               href={link.href}
// //               className="text-sm font-medium text-slate-600 transition hover:text-teal-700"
// //             >
// //               {link.label}
// //             </a>
// //           ))}

// //           <a
// //             href="#contact"
// //             className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
// //           >
// //             Let's connect <ArrowUpRight size={16} />
// //           </a>
// //         </div>

// //         <button
// //           type="button"
// //           onClick={() => setMenuOpen(!menuOpen)}
// //           className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden"
// //           aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
// //           aria-expanded={menuOpen}
// //         >
// //           {menuOpen ? <X size={22} /> : <Menu size={22} />}
// //         </button>
// //       </nav>

// //       {menuOpen && (
// //         <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
// //           <div className="mx-auto flex max-w-7xl flex-col gap-1">
// //             {links.map((link) => (
// //               <a
// //                 key={link.href}
// //                 href={link.href}
// //                 onClick={closeMenu}
// //                 className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-800"
// //               >
// //                 {link.label}
// //               </a>
// //             ))}
// //             <a
// //               href="#contact"
// //               onClick={closeMenu}
// //               className="mt-2 rounded-xl bg-teal-700 px-4 py-3 text-center text-sm font-semibold text-white"
// //             >
// //               Let's connect
// //             </a>
// //           </div>
// //         </div>
// //       )}
// //     </header>
// //   );
// // }


import { ArrowUpRight, Mail } from "lucide-react";

// import { Link } from "react-router-dom";

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.53.23 2.67.11 2.95.72.78 1.15 1.78 1.15 3.01 0 4.29-2.62 5.23-5.11 5.51.4.35.75 1.02.75 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.34H4.96V9.01h2.97v9.33ZM6.45 7.74a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm11.89 10.6h-2.96v-4.54c0-1.08-.02-2.47-1.51-2.47-1.51 0-1.74 1.18-1.74 2.39v4.62H9.17V9.01h2.84v1.27h.04c.4-.73 1.36-1.5 2.8-1.5 3 0 3.56 1.97 3.56 4.54v5.02h-.07Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-slate-200 bg-white"
      // className="scroll-mt-24 border-t border-slate-200 bg-slate-950"
     
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              Let's connect
            </p>

            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Good ideas grow through collaboration.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              I welcome opportunities to collaborate on research, teaching,
              software development, and meaningful technology projects.
            </p>

            <a
              href="mailto:YOUR_EMAIL@example.com"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              Get in touch <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="https://github.com/BizuhanAbate"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/bizuhan06abate/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
            >
              <LinkedInIcon />
            </a>

            <a
              href="mailto:bizuhan06@gmail.com"
              aria-label="Send email"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-100 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Bizuhan Abate Tayu. All rights reserved.
          </p>

          <a
            href="/"
            className="font-medium text-teal-700 hover:text-teal-900"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}








// // Use this for the contact CTA:
// <Link to="/contact">
//   Get in touch
// </Link>

// // Use this for the back-to-top / home link:
// <Link to="/">
//   Back to About ↑
// </Link>







// import {
//   ArrowUpRight,
//   Github,
//   LinkedinIcon,
//   Mail,
// } from "lucide-react";
// import './App.css'


// export default function Footer() {
//   return (
//     <footer
//       id="contact"
//       className="scroll-mt-24 border-t border-slate-200 bg-white"
//     >
//       <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
//         <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-end">
//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
//               Let's connect
//             </p>

//             <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
//               Good ideas grow through collaboration.
//             </h2>

//             <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
//               I welcome opportunities to collaborate on research, teaching,
//               software development, and meaningful technology projects.
//             </p>

//             <a
//               href="mailto:YOUR_EMAIL@example.com"
//               className="mt-6 inline-flex items-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
//             >
//               Get in touch <ArrowUpRight size={16} />
//             </a>
//           </div>

//           <div className="flex flex-wrap gap-3 md:justify-end">


//             <a
//               href="https://github.com/YOUR_USERNAME"
//               target="_blank"
//               rel="noreferrer"
//               aria-label="GitHub profile"
//               className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
//             >
//               <Github size={20} />
//             </a>


//           <a
//               href="https://www.linkedin.com/in/YOUR_USERNAME/"
//               target="_blank"
//               rel="noreferrer"
//               aria-label="LinkedIn profile"
//               className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
//             >
//               <Linkedin size={20} />
//             </a>



//            <a 
//               href="https://github.com/vitejs/vite" 
//               target="_blank">
//                <svg
//                   className="button-icon"
//                    role="presentation"
//                    aria-hidden="true"
//                  >
//                    <use href="/icons.svg#github-icon"></use>
//                  </svg>
//                  GitHub
//                </a>

//            <a 
//               href="https://github.com/vitejs/vite" 
//               target="_blank">
//                <svg
//                   className="button-icon"
//                    role="presentation"
//                    aria-hidden="true"
//                  >
//                    <use href="/icons.svg#github-icon"></use>
//                  </svg>
//                  Linkedin
//                </a>
 


         
//             <a
//               href="mailto:YOUR_EMAIL@example.com"
//               aria-label="Send email"
//               className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
//             >
//               <Mail size={20} />
//             </a>
//           </div>
//         </div>

//         <div className="mt-12 flex flex-col gap-3 border-t border-slate-100 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
//           <p>
//             © {new Date().getFullYear()} Bizuhan Abate Tayu. All rights reserved.
//           </p>
//           <a
//             href="#home"
//             className="font-medium text-teal-700 hover:text-teal-900"
//           >
//             Back to top ↑
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

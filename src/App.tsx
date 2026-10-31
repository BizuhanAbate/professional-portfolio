import {HashRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// BrowserRouter

import Home from "./pages/Home";
import About from "./pages/About";
import Teaching from "./pages/Teaching";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<About />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}


// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import FocusCards from "./components/FocusCards";
// import FeaturedResearch from "./components/FeaturedResearch";
// import ProjectCards from "./components/ProjectCards";
// import Footer from "./components/Footer";
// import SectionHeading from "./components/SectionHeading";
// import { BriefcaseBusiness, GraduationCap, ArrowUpRight } from "lucide-react";
// import TeachingPortfolio from "./components/TeachingPortfolio";


// function Experience() {
//   return (
//     <section
//       id="experience"
//       className="scroll-mt-24 bg-white py-20 sm:py-24"
//     >
//       <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//         <SectionHeading
//           eyebrow="Background & development"
//           title="Learning, teaching, and building."
//           description="My professional journey connects academic foundations, teaching experience, postgraduate AI research, and practical software development."
//         />

//         <div className="mt-10 grid gap-5 md:grid-cols-2">
//           <article className="rounded-2xl border border-slate-200 p-6 sm:p-8">
//             <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
//               <GraduationCap size={24} />
//             </span>

//             <h3 className="mt-5 text-xl font-bold text-slate-900">
//               Education
//             </h3>

//             <div className="mt-5 border-l-2 border-teal-100 pl-5">
//               <p className="font-semibold text-slate-800">
//                 M.Sc. in Artificial Intelligence
//               </p>
//               <p className="mt-1 text-sm text-slate-500">
//                 Addis Ababa University
//               </p>

//               <p className="mt-5 font-semibold text-slate-800">
//                 B.Sc. in Computer Science and Technology
//               </p>
//               <p className="mt-1 text-sm text-slate-500">
//                 Kotebe University of Education · 2021
//               </p>
//             </div>
//           </article>

//           <article className="rounded-2xl border border-slate-200 p-6 sm:p-8">
//             <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
//               <BriefcaseBusiness size={24} />
//             </span>

//             <h3 className="mt-5 text-xl font-bold text-slate-900">
//               Professional experience
//             </h3>

//             <div className="mt-5 border-l-2 border-teal-100 pl-5">
//               <p className="font-semibold text-slate-800">
//                 Teaching & academic support
//               </p>
//               <p className="mt-1 text-sm leading-6 text-slate-500">
//                 University-level teaching, learning materials, and academic
//                 development.
//               </p>

//               <p className="mt-5 font-semibold text-slate-800">
//                 Software development
//               </p>
//               <p className="mt-1 text-sm leading-6 text-slate-500">
//                 Building web applications, digital workflows, and practical
//                 technology solutions.
//               </p>
//             </div>
//           </article>
//         </div>

//         <div className="mt-7 flex flex-col items-start justify-between gap-4 rounded-2xl bg-slate-50 p-6 sm:flex-row sm:items-center sm:p-8">
//           <div>
//             <h3 className="text-lg font-bold text-slate-900">
//               Want the complete picture?
//             </h3>
//             <p className="mt-2 text-sm leading-6 text-slate-600">
//               View my CV for detailed responsibilities, education, skills,
//               and professional experience.
//             </p>
//           </div>

//           <a
//             href="/cv.pdf"
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-800"
//           >
//             Open CV <ArrowUpRight size={16} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function App() {
//   return (
//     <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
//       <Navbar />

//       <main>
//         <Hero />
//         <FocusCards />
//         <TeachingPortfolio />
//         <FeaturedResearch />
//         <ProjectCards />
//         <Experience />
//       </main>

//       <Footer />
//     </div>
//   );
// }


// // The old App.tsx is kept here for reference, 
// // but it is not used in the current project. 
// // The current App.tsx is located in src/App.tsx and 
// // contains the main application logic and routing.

// // import { useState } from 'react'
// // import heroImg from './assets/hero.png'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from './assets/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <section id="center">
// //         <div className="hero">
// //           <img src={heroImg} className="base" width="170" height="179" alt="" />
// //           <img src={reactLogo} className="framework" alt="React logo" />
// //           <img src={viteLogo} className="vite" alt="Vite logo" />
// //         </div>
// //         <div>
// //           <h1>Get started</h1>
// //           <p>
// //             Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
// //           </p>
// //         </div>
// //         <button
// //           type="button"
// //           className="counter"
// //           onClick={() => setCount((count) => count + 1)}
// //         >
// //           Count is {count}
// //         </button>
// //       </section>

// //       <div className="ticks"></div>

// //       <section id="next-steps">
// //         <div id="docs">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#documentation-icon"></use>
// //           </svg>
// //           <h2>Documentation</h2>
// //           <p>Your questions, answered</p>
// //           <ul>
// //             <li>
// //               <a href="https://vite.dev/" target="_blank">
// //                 <img className="logo" src={viteLogo} alt="" />
// //                 Explore Vite
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://react.dev/" target="_blank">
// //                 <img className="button-icon" src={reactLogo} alt="" />
// //                 Learn more
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //         <div id="social">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#social-icon"></use>
// //           </svg>
// //           <h2>Connect with us</h2>
// //           <p>Join the Vite community</p>
// //           <ul>
// //             <li>
// //               <a href="https://github.com/vitejs/vite" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#github-icon"></use>
// //                 </svg>
// //                 GitHub
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://chat.vite.dev/" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#discord-icon"></use>
// //                 </svg>
// //                 Discord
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://x.com/vite_js" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#x-icon"></use>
// //                 </svg>
// //                 X.com
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://bsky.app/profile/vite.dev" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#bluesky-icon"></use>
// //                 </svg>
// //                 Bluesky
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //       </section>

// //       <div className="ticks"></div>
// //       <section id="spacer"></section>
// //     </>
// //   )
// // }

// // export default App

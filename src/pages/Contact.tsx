import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
const email = "bizuhan06@gmail.com";
const phone = "+251 904 119 893";
const phoneLink = "+251904119893";
const whatsappNumber = "251904119893";
const telegramUsername = "BizuhanAb";

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    description: "For academic, professional, and general inquiries.",
    value: email,
    action: "Send an email",
    link: `mailto:${email}`,
  },
  {
    icon: Phone,
    title: "Phone",
    description: "For direct communication and professional inquiries.",
    value: phone,
    action: "Call me",
    link: `tel:${phoneLink}`,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Reach out for a quick and convenient conversation.",
    value: "Message me on WhatsApp",
    action: "Start a conversation",
    link: `https://wa.me/${whatsappNumber}`,
  },
  {
    icon: FaTelegramPlane,
    title: "Telegram",
    description: "Connect with me directly on Telegram.",
    value: `@${telegramUsername}`,
    action: "Message me on Telegram",
    link: `https://t.me/${telegramUsername}`,
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Based in Addis Ababa, Ethiopia.",
    value: "Addis Ababa, Ethiopia",
    action: "View location",
    link: "https://www.google.com/maps/search/?api=1&query=Addis+Ababa+Ethiopia",
  },
];

  return (
    <main className="bg-white">

{/* CONTACT INFORMATION */}
<section className="relative overflow-hidden bg-gradient-to-b from-[#F0F7F5] via-white to-[#F8FAFC]"> 

  {/* <section className="relative overflow-hidden bg-[#f4f8f7] px-5 py-24 md:px-8 md:py-28"> */}

  {/* Decorative background elements */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-teal-100/50 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 top-80 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">

    {/* INTRODUCTION */}
    <div className="mx-auto max-w-4xl ">

      <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-200/70 bg-white/80 px-5 py-2 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-teal-600" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">
          A Connection Starts Here
        </span>
      </div>

      <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
        Good conversations  
        <span className="block bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
         can lead to extraordinary things.
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
        Behind every meaningful collaboration is a conversation, an exchanged
        idea, or simply the willingness to connect. Whether you are reaching
        out with an opportunity, sharing a thought, exploring a research idea,
        or just stopping by to say hello, I'd genuinely love to hear from you.
      </p>

      <p className="mt-5 text-lg font-medium italic text-teal-800 sm:text-xl">
        "Every connection is an opportunity to learn, grow, and create something meaningful."
      </p>

      <div className="mx-auto mt-9 flex items-center justify-center gap-3">
        <div className="h-px w-12 bg-teal-200" />
        <div className="h-2 w-2 rotate-45 bg-teal-600" />
        <div className="h-px w-12 bg-teal-200" />
      </div>

    </div>

    {/* CONTACT METHODS */}
    <div className="mt-20">

      <div className="mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
          Find Your Way to Me
        </p>

        <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          Let's make that connection.
        </h3>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
          Choose whichever channel feels most convenient.
          I'm always happy to connect and have a meaningful conversation.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.title}
              href={item.link}
              target={
                ["WhatsApp", "Telegram", "Location"].includes(item.title)
                  ? "_blank"
                  : undefined
              }
              rel={
                ["WhatsApp", "Telegram", "Location"].includes(item.title)
                  ? "noreferrer"
                  : undefined
              }
              className="group relative flex min-h-[190px] flex-col overflow-hidden rounded-2xl border border-teal-100/80 bg-white/90 p-7 shadow-sm shadow-teal-950/[0.02] transition-all duration-300 hover:-translate-y-2 hover:border-teal-300 hover:bg-white hover:shadow-xl hover:shadow-teal-900/10"
            >

              {/* Hover decoration */}
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-teal-50 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

              <div className="relative flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-100 text-teal-800 transition-all duration-300 group-hover:from-teal-700 group-hover:to-emerald-600 group-hover:text-white">
                  <Icon size={22} />
                </div>

                <ArrowUpRight
                  size={19}
                  className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-teal-700"
                />

              </div>

              <div className="relative mt-6">
                <h4 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-teal-800">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                <p className="mt-4 break-all text-sm font-semibold text-teal-700">
                  {item.value}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-slate-400 transition-colors group-hover:text-teal-700">
                  {item.action}
                  <ArrowUpRight size={13} />
                </div>
              </div>

            </a>
          );
        })}

      </div>
    </div>
  </div>
</section>

{/* SOCIAL CONNECTIONS */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
      {/* optional background color:
      bg-slate-950  */}
       <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#103C3D] via-[#115E59] to-[#0F766E] px-7 py-12 shadow-xl shadow-teal-900/10 sm:px-12 lg:px-16 lg:py-14"> 
    {/* <div className="mt-20 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#103C3D] via-[#115E59] to-[#0F766E] px-7 py-12 text-center shadow-xl shadow-teal-900/10 sm:px-14 sm:py-16"> */}
          <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full border border-teal-500/20" />
          <div className="absolute -right-8 -top-20 h-52 w-52 rounded-full border border-teal-500/20" />

          <div className="relative flex flex-col justify-between gap-9 md:flex-row md:items-center">

            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
                {/* Beyond the inbox */}
                {/* Let's talk */}
                {/* let’s build something bright. */}
                Let’s sync our minds, let’s share a thought
              </p>

              {/* <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Find me around the web.
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Follow my professional journey, explore my projects,
                and stay connected with my work in technology, research,
                and education.
              </p> */}

        <h3 className="mx-auto mt-7 max-w-2xl justify-center text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
        Sometimes, all it takes is a simple hello.
      </h3>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-teal-50/85 sm:text-base">
        I believe knowledge grows when shared, ideas become stronger through
        discussion, and great things happen when people come together.
        So, if something on this portfolio resonates with you, don't hesitate
        to reach out. I'd be delighted to connect.
      </p>

            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/BizuhanAbate"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all hover:-translate-y-1 hover:border-teal-400 hover:bg-teal-700"
              >
                <FaGithub size={23} />
              </a>

              <a
                href="https://www.linkedin.com/in/bizuhan06abate/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all hover:-translate-y-1 hover:border-teal-400 hover:bg-teal-700"
              >
                <FaLinkedinIn size={23} />
              </a>

              <a
                href={`mailto:${email}`}
                aria-label="Send email"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all hover:-translate-y-1 hover:border-teal-400 hover:bg-teal-700"
              >
                <Mail size={23} />
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;


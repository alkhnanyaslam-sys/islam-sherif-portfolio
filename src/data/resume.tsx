import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Python } from "@/components/ui/svgs/python";
import { Nodejs } from "@/components/ui/svgs/nodejs";

export const DATA = {
  name: "Islam Sherif",
  initials: "IS",

  url: "https://github.com/alkhnanyaslam-sys",

  location: "Egypt",
  locationLink: "https://www.google.com/maps/place/Egypt",

  description:
    "Frontend Developer & AI Enthusiast. I build modern web experiences, useful applications, and intelligent solutions.",

  summary:
    "I’m Islam Sherif, a Computer Science student and aspiring software developer from Egypt. I’m passionate about web development, React, JavaScript, Python, and Artificial Intelligence. I enjoy turning ideas into real projects and continuously improving my development skills.",

  avatarUrl: "/me.png",

  skills: [
    {
      name: "React",
      icon: ReactLight,
    },
    {
      name: "Next.js",
      icon: NextjsIconDark,
    },
    {
      name: "JavaScript",
      icon: ReactLight,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "Node.js",
      icon: Nodejs,
    },
  ],

  navbar: [
    {
      href: "/",
      icon: HomeIcon,
      label: "Home",
    },
    {
      href: "/blog",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],

  contact: {
    email: "",
    tel: "+201016295024",

    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/alkhnanyaslam-sys",
        icon: Icons.github,
        navbar: true,
      },

      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/201016295024",
        icon: Icons.globe,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  /*
   * No professional work experience yet.
   * We don't add fake companies or fake job titles.
   */
  work: [],

  education: [
    {
      school: "Faculty of Computers and Information",
      href: "#",
      degree: "Computer Science",
      logoUrl: "",
      start: "2026",
      end: "Present",
    },
  ],

  projects: [
    {
      title: "Developer Portfolio",
      href: "https://github.com/alkhnanyaslam-sys/islam-sherif-portfolio",
      dates: "2026 - Present",
      active: true,

      description:
        "A modern developer portfolio built with Next.js, React, Tailwind CSS, Shadcn UI and Magic UI. Designed to showcase my skills, projects and journey as a developer.",

      technologies: [
        "Next.js",
        "React",
        "JavaScript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],

      links: [
        {
          type: "Source",
          href: "https://github.com/alkhnanyaslam-sys/islam-sherif-portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "",
      video: "",
    },

    {
      title: "Telegram Bots",
      href: "https://github.com/alkhnanyaslam-sys",
      dates: "2025 - Present",
      active: true,

      description:
        "A collection of Telegram automation projects focused on bots, community management, useful utilities and interactive experiences.",

      technologies: [
        "Python",
        "Telegram API",
        "Pyrogram",
        "Bots",
        "Automation",
      ],

      links: [
        {
          type: "Source",
          href: "https://github.com/alkhnanyaslam-sys",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "",
      video: "",
    },

    {
      title: "Quran Telegram Bot",
      href: "https://github.com/alkhnanyaslam-sys",
      dates: "2025 - Present",
      active: true,

      description:
        "A Telegram-based Quran project focused on delivering Quran content and audio through an automated bot experience.",

      technologies: [
        "Python",
        "Pyrogram",
        "Telegram API",
        "FFmpeg",
        "Automation",
      ],

      links: [
        {
          type: "Source",
          href: "https://github.com/alkhnanyaslam-sys",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "",
      video: "",
    },

    {
      title: "AI & Automation Projects",
      href: "https://github.com/alkhnanyaslam-sys",
      dates: "2026 - Present",
      active: true,

      description:
        "Exploring Artificial Intelligence, automation and developer tools while building practical projects and experimenting with modern technologies.",

      technologies: [
        "Python",
        "AI",
        "Automation",
        "APIs",
        "JavaScript",
      ],

      links: [
        {
          type: "Source",
          href: "https://github.com/alkhnanyaslam-sys",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "",
      video: "",
    },
  ],

  /*
   * No fake hackathons or awards.
   * We'll add real achievements here later.
   */
  hackathons: [],
} as const;

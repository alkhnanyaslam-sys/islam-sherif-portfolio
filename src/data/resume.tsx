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
    "Computer Science Student & Aspiring Software Developer focused on Web Development, AI, and building real-world projects.",

  summary:
    "I'm Islam Sherif, a Computer Science student from Egypt with a strong interest in software development, modern web technologies, and Artificial Intelligence. I enjoy turning ideas into practical projects and learning by building. My current focus is on React, Next.js, JavaScript, Python, Node.js, and API-based applications. I'm continuously improving my programming fundamentals while exploring AI, automation, and scalable digital solutions.",

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

      LinkedIn: {
        name: "LinkedIn",
        url: "https://eg.linkedin.com/in/eslam-sherif-487309409",
        icon: Icons.linkedin,
        navbar: true,
      },

      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/v_es4l/",
        icon: Icons.globe,
        navbar: true,
      },

      Telegram: {
        name: "Telegram",
        url: "https://t.me/v_es4",
        icon: Icons.globe,
        navbar: true,
      },

      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/201016295024",
        icon: Icons.whatsapp,
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
        "A modern personal portfolio built with Next.js, React, Tailwind CSS, Shadcn UI and Magic UI to showcase my development journey, skills and projects.",

      technologies: [
        "Next.js",
        "React",
        "JavaScript",
        "Tailwind CSS",
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
      title: "Telegram Automation Projects",
      href: "https://github.com/alkhnanyaslam-sys",
      dates: "2025 - Present",
      active: true,

      description:
        "A collection of Telegram automation projects focused on bots, community tools, useful utilities and interactive user experiences.",

      technologies: [
        "Python",
        "Pyrogram",
        "Telegram API",
        "Automation",
        "APIs",
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
        "A Telegram project designed to deliver Quran content and audio through an automated bot experience, with a focus on reliability and ease of use.",

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
      title: "AI & Automation Experiments",
      href: "https://github.com/alkhnanyaslam-sys",
      dates: "2026 - Present",
      active: true,

      description:
        "An ongoing collection of experiments and projects exploring Artificial Intelligence, APIs, automation and developer tools.",

      technologies: [
        "Python",
        "Artificial Intelligence",
        "APIs",
        "Automation",
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

  hackathons: [],
} as const;

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
    "Frontend Developer & AI Enthusiast building modern web experiences, intelligent tools, and automation projects.",

  summary:
    "I’m Islam Sherif, a Computer Science student and aspiring software developer from Egypt. I’m passionate about building modern web experiences, exploring Artificial Intelligence, and creating practical automation tools. I work with technologies like React, Next.js, JavaScript, Python, and Node.js, and I enjoy turning ideas into real-world projects while continuously improving my skills.",

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
        url: "https://www.instagram.com/v_es4l",
        icon: Icons.instagram,
        navbar: true,
      },

      Telegram: {
        name: "Telegram",
        url: "https://t.me/v_es4",
        icon: Icons.telegram,
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
      degree: "Computer Science Student",
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
        "A modern personal portfolio built with Next.js, React, Tailwind CSS, Shadcn UI, and Magic UI to showcase my skills, projects, and development journey.",

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
      title: "Telegram Bots & Automation",
      href: "https://github.com/alkhnanyaslam-sys",
      dates: "2025 - Present",
      active: true,

      description:
        "A collection of Telegram automation projects focused on useful bots, community management, interactive features, and automated workflows.",

      technologies: [
        "Python",
        "Telegram API",
        "Pyrogram",
        "Automation",
        "APIs",
      ],

      links: [
        {
          type: "GitHub",
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
        "A Telegram automation project focused on delivering Quran content and audio through an automated and user-friendly bot experience.",

      technologies: [
        "Python",
        "Pyrogram",
        "Telegram API",
        "FFmpeg",
        "Automation",
      ],

      links: [
        {
          type: "GitHub",
          href: "https://github.com/alkhnanyaslam-sys",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "",
      video: "",
    },

    {
      title: "AI & Automation",
      href: "https://github.com/alkhnanyaslam-sys",
      dates: "2026 - Present",
      active: true,

      description:
        "Exploring Artificial Intelligence, APIs, automation, and developer tools while building practical projects and experimenting with modern technologies.",

      technologies: [
        "Python",
        "AI",
        "Automation",
        "APIs",
        "JavaScript",
      ],

      links: [
        {
          type: "GitHub",
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

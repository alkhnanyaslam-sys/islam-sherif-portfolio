import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import {
  Instagram,
  Linkedin,
  Send,
  Github,
  MessageCircle,
} from "lucide-react";

export default function ContactSection() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: DATA.contact.social.LinkedIn.url,
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: DATA.contact.social.GitHub.url,
      icon: Github,
    },
    {
      name: "Instagram",
      href: DATA.contact.social.Instagram.url,
      icon: Instagram,
    },
    {
      name: "Telegram",
      href: DATA.contact.social.Telegram.url,
      icon: Send,
    },
    {
      name: "WhatsApp",
      href: DATA.contact.social.WhatsApp.url,
      icon: MessageCircle,
    },
  ];

  return (
    <div className="border rounded-xl p-8 sm:p-10 relative overflow-hidden">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">
          Contact
        </span>
      </div>

      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage:
              "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-5 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Let&apos;s Connect
        </h2>

        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Have a project, idea, or just want to connect? Feel free to reach
          out through any of my social platforms. I&apos;m always open to
          learning, collaborating, and building something useful.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="inline-flex items-center gap-2 rounded-xl border bg-background/80 px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground hover:-translate-y-0.5"
              >
                <Icon className="size-4" />
                {social.name}
              </Link>
            );
          })}
        </div>

        <Link
          href={DATA.contact.social.WhatsApp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:-translate-y-0.5"
        >
          Message me on WhatsApp
        </Link>
      </div>
    </div>
  );
}

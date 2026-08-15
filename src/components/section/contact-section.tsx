import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative overflow-hidden">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>

      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-5 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Let&apos;s Build Something
        </h2>

        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Have an idea, project, or opportunity? I&apos;m always open to
          connecting, discussing new ideas, and building useful digital
          experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            href={DATA.contact.social.WhatsApp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            WhatsApp
          </Link>

          <Link
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            LinkedIn
          </Link>

          <Link
            href={DATA.contact.social.Instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            Instagram
          </Link>
        </div>

        <p className="text-xs text-muted-foreground pt-2">
          Open to learning, collaboration, and interesting projects.
        </p>
      </div>
    </div>
  );
}

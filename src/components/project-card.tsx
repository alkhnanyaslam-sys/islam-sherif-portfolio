/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div
        className="flex h-48 w-full items-center justify-center bg-muted"
        aria-label={`${alt} preview unavailable`}
      >
        <span className="text-xs text-muted-foreground">
          Project Preview
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const projectHref = href || "#";

  return (
    <div
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300",
        "hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg",
        className
      )}
    >
      <div className="relative shrink-0 overflow-hidden">
        <Link
          href={projectHref}
          target={href ? "_blank" : undefined}
          rel={href ? "noopener noreferrer" : undefined}
          className="block"
          aria-label={`Open ${title}`}
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <ProjectImage
              src={image || ""}
              alt={`${title} preview`}
            />
          )}
        </Link>

        {links && links.length > 0 && (
          <div className="absolute right-2 top-2 flex flex-wrap justify-end gap-2">
            {links.map((item, idx) => (
              <Link
                href={item.href}
                key={`${item.type}-${idx}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  variant="default"
                  className="flex items-center gap-1.5 bg-black/80 text-xs text-white backdrop-blur-sm transition-colors hover:bg-black"
                >
                  {item.icon}
                  {item.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-col gap-1">
            <h3 className="font-semibold tracking-tight">
              {title}
            </h3>

            <time className="text-xs text-muted-foreground">
              {dates}
            </time>
          </div>

          <Link
            href={projectHref}
            target={href ? "_blank" : undefined}
            rel={href ? "noopener noreferrer" : undefined}
            className="shrink-0 rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight
              className="h-4 w-4"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="prose max-w-full flex-1 text-pretty font-sans text-xs leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>

        {tags && tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="h-6 w-fit border-border px-2 text-[11px] font-medium"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
  }

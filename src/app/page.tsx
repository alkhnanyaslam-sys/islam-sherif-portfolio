/* eslint-disable @next/next/no-img-element */

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import { ArrowUpRight, Github, MessageCircle, Code2, Brain, Bot, Globe } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-20 relative">

      {/* HERO */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl">
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8">

            <div className="flex flex-col gap-4">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}.`}
              />

              <BlurFadeText
                delay={BLUR_FADE_DELAY * 2}
                className="text-xl sm:text-2xl font-semibold text-muted-foreground"
                yOffset={8}
                text="Frontend Developer & AI Enthusiast"
              />

              <BlurFadeText
                delay={BLUR_FADE_DELAY * 3}
                className="max-w-[600px] text-muted-foreground md:text-lg leading-relaxed"
                yOffset={8}
                text="I build modern web experiences, useful applications, and intelligent solutions using modern technologies."
              />

              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="flex flex-wrap gap-3 pt-2">

                  <a
                    href="https://github.com/alkhnanyaslam-sys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all hover:scale-105"
                  >
                    <Github className="size-4" />
                    GitHub
                  </a>

                  <a
                    href="https://wa.me/201016295024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all hover:scale-105 hover:bg-muted"
                  >
                    <MessageCircle className="size-4" />
                    Contact Me
                  </a>

                </div>
              </BlurFade>
            </div>

            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 md:size-36 border shadow-lg ring-4 ring-muted">
                <AvatarImage
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                />
                <AvatarFallback className="text-2xl font-bold">
                  {DATA.initials}
                </AvatarFallback>
              </Avatar>
            </BlurFade>

          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section id="about">
        <div className="flex flex-col gap-y-5">

          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-2xl font-bold tracking-tight">
              About Me
            </h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>

        </div>
      </section>


      {/* WHAT I BUILD */}
      <section id="what-i-build">
        <div className="flex flex-col gap-6">

          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-2xl font-bold tracking-tight">
              What I Build
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <div className="rounded-2xl border bg-background p-5 transition-all hover:-translate-y-1 hover:shadow-lg">
                <Code2 className="size-6 mb-4" />
                <h3 className="font-semibold mb-2">
                  Modern Web Apps
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Responsive and modern websites using React, Next.js and
                  modern frontend technologies.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <div className="rounded-2xl border bg-background p-5 transition-all hover:-translate-y-1 hover:shadow-lg">
                <Globe className="size-6 mb-4" />
                <h3 className="font-semibold mb-2">
                  Web Development
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Building clean, interactive and user-friendly digital
                  experiences.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <div className="rounded-2xl border bg-background p-5 transition-all hover:-translate-y-1 hover:shadow-lg">
                <Bot className="size-6 mb-4" />
                <h3 className="font-semibold mb-2">
                  Automation & Bots
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Creating useful automation tools and Telegram bots using
                  Python and APIs.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="rounded-2xl border bg-background p-5 transition-all hover:-translate-y-1 hover:shadow-lg">
                <Brain className="size-6 mb-4" />
                <h3 className="font-semibold mb-2">
                  AI & Intelligent Apps
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Exploring AI and building practical intelligent applications
                  and developer tools.
                </p>
              </div>
            </BlurFade>

          </div>
        </div>
      </section>


      {/* SKILLS */}
      <section id="skills">
        <div className="flex flex-col gap-5">

          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-2xl font-bold tracking-tight">
              Tech Stack
            </h2>
          </BlurFade>

          <div className="flex flex-wrap gap-2">

            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 13 + id * 0.05}
              >
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-10 px-4 flex items-center gap-2 transition-all hover:-translate-y-1 hover:shadow-md">

                  {skill.icon && (
                    <skill.icon className="size-4 rounded overflow-hidden object-contain" />
                  )}

                  <span className="text-foreground text-sm font-medium">
                    {skill.name}
                  </span>

                </div>
              </BlurFade>
            ))}

          </div>
        </div>
      </section>


      {/* PROJECTS */}
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <ProjectsSection />
        </BlurFade>
      </section>


      {/* EDUCATION */}
      <section id="education">
        <div className="flex flex-col gap-y-6">

          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <h2 className="text-2xl font-bold tracking-tight">
              Education
            </h2>
          </BlurFade>

          <div className="flex flex-col gap-6">

            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 16 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-4 justify-between group"
                >

                  <div className="flex items-center gap-x-4 flex-1 min-w-0">

                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-10 border rounded-full shadow ring-2 ring-border bg-muted flex-none flex items-center justify-center">
                        <Code2 className="size-4 text-muted-foreground" />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">

                      <div className="font-semibold flex items-center gap-2">
                        {education.school}

                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                          aria-hidden
                        />
                      </div>

                      <div className="text-sm text-muted-foreground">
                        {education.degree}
                      </div>

                    </div>

                  </div>

                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {education.start} - {education.end}
                  </span>

                </Link>
              </BlurFade>
            ))}

          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <ContactSection />
        </BlurFade>
      </section>

    </main>
  );
          }

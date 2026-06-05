import { ContactCard } from "@/components/contact/contact-card";
import { Projects } from "@/components/projects/projects";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description: "Selected software, real-time systems, and AI projects.",
  path: "/projects",
});

export default function ProjectsPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-32 pb-12 sm:px-10 sm:pt-44 sm:pb-14 lg:pt-48">
        <FadeIn className="flex flex-col items-center gap-5 text-center">
          <h1 className="text-foreground font-serif text-[2.75rem] leading-[1.05] font-medium tracking-tight md:text-[3.25rem] lg:text-[3.75rem]">
            Personal Projects
          </h1>
          <p className="text-foreground/65 max-w-[33ch] text-[18px] leading-[1.45] tracking-tight sm:text-[20px]">
            AI experiments, real-time apps, and developer tools I built to
            explore practical software ideas.
          </p>
        </FadeIn>
      </section>
      <Projects />
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}

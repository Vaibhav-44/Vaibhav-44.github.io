import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "About Vaibhav Patil, software developer and AI systems builder.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56">
        {/* <PolaroidStrip /> */}
      </section>

      <section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="border-foreground/5 bg-foreground/1.5 dark:bg-foreground/3 rounded-4xl border p-8 sm:p-12">
            <h1 className="text-foreground font-serif text-[1.75rem] font-medium tracking-tight sm:text-[2rem]">
              Hello! I&rsquo;m{" "}
              <span className="border-foreground/30 border-b pb-0.5">
                Vaibhav Patil
              </span>
              .
            </h1>
            <div className="text-foreground/75 mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight sm:text-[18px]">
              <p>
                I&rsquo;m a{" "}
                <strong className="text-foreground font-semibold">
                  software developer
                </strong>{" "}
                focused on{" "}
                <strong className="text-foreground font-semibold">
                  real-time systems
                </strong>
                ,{" "}
                <strong className="text-foreground font-semibold">
                  mobile applications
                </strong>
                , and{" "}
                <strong className="text-foreground font-semibold">
                  retrieval-augmented AI pipelines
                </strong>
                .
              </p>
              <p>
                At Astroshrine Pvt Ltd, I built production React Native features
                for live streaming, 1:1 audio/video calls, wallet payments, push
                notifications, and session playback, with an emphasis on
                reliability across changing network conditions.
              </p>
              <p>
                I also enjoy building AI and developer tools, including a{" "}
                <strong className="text-foreground font-semibold">
                  RAG evaluation playground
                </strong>{" "}
                with hybrid FAISS/BM25 retrieval and{" "}
                <strong className="text-foreground font-semibold">
                  ParallelCode
                </strong>
                , a real-time collaborative IDE with WebSocket sync and
                Docker-based execution.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}

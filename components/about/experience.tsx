import { RadioTower } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

const EXPERIENCE = {
  company: "Astroshrine",
  role: "Software Developer",
  period: "Jan 2024 - June 2025",
  title:
    "Production React Native features for live streaming, calls, payments, notifications, and playback.",
  description:
    "Built and optimized a real-time React Native app for live streaming and 1:1 audio/video calls. Integrated Agora, Redux, Razorpay wallet flows, FCM/Notifee notifications, and session recording/playback with focus on stability, payment recovery, responsiveness, and fault tolerance.",
  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Mobile application testing workspace",
};

export function Experience(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Experience
      </h3>
      <ExperienceCard />
    </div>
  );
}

export function ExperienceShowcase(): ReactNode {
  return (
    <section className="w-half relative">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
          <h2 className="text-foreground font-serif text-[2.5rem] leading-[1.05] font-medium tracking-tight md:text-[3rem] lg:text-[3.5rem]">
            Experience
          </h2>
          <p className="text-foreground/65 max-w-[36ch] text-[18px] leading-[1.45] tracking-tight sm:text-[20px]">
            Production work from Astroshrine, focused on real-time mobile
            systems and reliable session flows.
          </p>
        </FadeIn>

        <div className="mx-auto w-full max-w-[40rem]">
          <ExperienceCard />
        </div>
      </div>
    </section>
  );
}

function ExperienceCard(): ReactNode {
  return (
    <FadeIn>
      <article className="project-card border-foreground/8 bg-background flex cursor-pointer flex-col gap-4 rounded-3xl border p-3 sm:flex-row sm:items-stretch sm:p-3.5">
        <div className="flex min-w-0 flex-col gap-3 sm:w-[16rem] sm:shrink-0">
          <header className="flex items-center gap-2.5 px-1 pt-2">
            <span className="border-foreground/10 bg-background inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border">
              <RadioTower
                className="text-foreground h-3.5 w-3.5"
                aria-hidden="true"
              />
            </span>
            <span className="text-foreground text-sm font-medium tracking-tight">
              {EXPERIENCE.company}
            </span>
          </header>

          <div className="project-card__image ring-foreground/5 bg-foreground/5 relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 sm:flex-1">
            <div className="project-card__image-inner">
              <Image
                src={EXPERIENCE.image}
                alt={EXPERIENCE.imageAlt}
                fill
                sizes="(min-width: 1024px) 260px, (min-width: 640px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 px-1 pb-2 sm:px-3 sm:py-3">
          <p className="text-foreground/50 text-[12px] tracking-tight">
            {EXPERIENCE.role}, {EXPERIENCE.period}
          </p>
          <h3 className="text-foreground text-[20px] leading-[1.2] font-medium tracking-tight sm:text-[24px]">
            {EXPERIENCE.title}
          </h3>
          <p className="text-foreground/65 text-[14px] leading-normal tracking-tight sm:text-[15px]">
            {EXPERIENCE.description}
          </p>
        </div>
      </article>
    </FadeIn>
  );
}

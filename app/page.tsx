"use client";

import { Link } from "@heroui/link";
import { useRef } from "react";

export default function Home() {
  const LearnMore = useRef<HTMLDivElement>(null);

  return (
    <div className="h-full">
      <section className="relative z-10 flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-screen">
        <div
          className="absolute top-0 w-full h-full rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, hsl(var(--heroui-gradColor)) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 inline-block max-w-2xl text-center justify-center">
          <h1 className="text-5xl font-bold">
            Bringing Dreams to Life with Passion and Precision.
          </h1>
          <p className="mt-10 text-lg">
            Modern, Beautiful, and Intuitive UI/UX designs tailored for
            efficient shipping applications - helping businesses achieve their
            goals.
          </p>
        </div>

        <div className="flex gap-5 my-10">
          <Link
            href=""
            className="cursor-pointer px-10 py-3 rounded-full bg-blue-500 text-white shadow"
          >
            <span>Get Started</span>
          </Link>
          <Link
            onClick={() =>
              LearnMore.current &&
              LearnMore.current.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="cursor-pointer px-10 py-3 rounded-full border-2 border-foreground text-foreground shadow"
          >
            Learn More
          </Link>
        </div>
      </section>

      <div className="relative z-10 bg-background/50 border-y border-gray-600 w-full h-[10px]" />

      <section
        ref={LearnMore}
        className="relative z-10 flex flex-col max-w-6xl mx-auto gap-40 py-8 md:py-20 h-full"
      >
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold">Custom Designs and Layouts</h1>
            <p className="text-lg">
              We create outstanding designs and layouts, fully customized to
              suit your needs. Our expertise ensures visually stunning and
              functionally seamless results. Let us bring your vision to life
              with precision and creativity.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold">Cheap and Free Options</h1>
            <p className="text-lg">
              We are committed to making design accessible to everyone, offering
              free tiers that empower users to enhance their websites at no
              cost. Our goal is to provide high-quality, intuitive design
              solutions that cater to all, regardless of budget.
            </p>
          </div>
        </div>
      </section>

      <div className="relative z-10 bg-background/50 border-y border-gray-600 w-full h-[10px]" />

      <section className="relative z-10 flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div
          className="absolute top-0 w-full h-full rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, hsl(var(--heroui-gradColor)) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 inline-block max-w-2xl text-center justify-center">
          <h1 className="text-5xl font-bold">Support Us.</h1>
          <p className="mt-10 text-lg">
            We strive to grow and evolve into a better platform for everyone,
            and your support is essential in shaping that journey. With your
            valuable feedback, we can refine our offerings and create one of the
            best design platforms available. Together, we build something truly
            exceptional.
          </p>
        </div>

        <div className="flex gap-5 my-10">
          <Link
            href=""
            className="cursor-pointer px-10 py-3 rounded-full bg-blue-500 text-white shadow"
          >
            <span>Get Started</span>
          </Link>
          <Link
            onClick={() =>
              LearnMore.current &&
              LearnMore.current.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="cursor-pointer px-10 py-3 rounded-full border-2 border-foreground text-foreground shadow"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}

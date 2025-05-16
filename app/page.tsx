"use client";

import Seperator from "@/components/seperator";
import { Link } from "@heroui/link";
import { useRef } from "react";
import { FaApple, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const trustees = [FaGoogle, FaApple, FaFacebook, FaGithub];

export default function Home() {
  const LearnMore = useRef<HTMLDivElement>(null);

  return (
    <div className="h-full">
      <section className="relative flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-screen">
        <div
          className="absolute top-0 w-full h-full rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, hsl(var(--heroui-gradColor)) 0%, transparent 70%)",
          }}
        />

        <div className="inline-block max-w-2xl text-center justify-center px-[10%]">
          <h1 className="text-4xl md:text-5xl font-bold">
            Bringing Dreams to Life with Passion and Precision.
          </h1>
          <p className="mt-10 text-lg">
            Modern, Beautiful, and Intuitive UI/UX designs tailored for
            efficient shipping applications - helping businesses achieve their
            goals.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 my-10 px-[10%]">
          <Link
            href=""
            className="cursor-pointer px-10 py-3 rounded-full bg-blue-500 border-2 border-blue-700 text-white shadow"
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

      <Seperator />

      <section className="flex flex-col gap-5 md:flex-row text-foreground/80 justify-between items-center px-[10%] py-8">
        <h1 className="font-bold text-2xl">Trusted By Many.</h1>
        <div className="flex gap-5">
          {trustees.map((Icon, i) => (
            <div
              key={i}
              className="bg-gray-500/40 border border-scrollColor p-3 rounded-full shadow text-xl md:text-4xl"
            >
              <Icon />
            </div>
          ))}
        </div>
      </section>

      <Seperator />

      <section
        ref={LearnMore}
        className="flex flex-col px-[10%] gap-20 md:gap-40 py-8 md:py-20 h-full"
      >
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col text-center md:text-start gap-3">
            <h1 className="text-4xl font-bold">Custom Designs and Layouts</h1>
            <p className="text-lg">
              We create outstanding designs and layouts, fully customized to
              suit your needs. Our expertise ensures visually stunning and
              functionally seamless results. Let us bring your vision to life
              with precision and creativity.
            </p>
          </div>
          <img
            className="rounded-xl shadow-lg w-[70%] border-2 border-scrollColor mx-auto md:mx-0 md:ms-auto bg-foreground/20 p-10"
            src="/ui.svg"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col text-center md:text-start gap-3">
            <h1 className="text-4xl font-bold">Cheap and Free Options</h1>
            <p className="text-lg">
              We are committed to making design accessible to everyone, offering
              free tiers that empower users to enhance their websites at no
              cost. Our goal is to provide high-quality, intuitive design
              solutions that cater to all, regardless of budget.
            </p>
          </div>
          <img
            className="rounded-xl shadow-lg w-[70%] border-2 border-scrollColor mx-auto md:mx-0 md:ms-auto bg-foreground/20 p-10"
            src="/cheap.svg"
          />
        </div>
      </section>

      <Seperator />

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-20 px-[10%]">
        <div className="inline-block max-w-2xl text-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold">Support Us.</h1>
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
            className="cursor-pointer px-10 py-3 rounded-full bg-blue-600 border-2 border-blue-700 text-white shadow"
          >
            <span>Share your Feeback</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { FaDiscord, FaFacebook, FaTwitter } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="relative py-8 md:py-20 w-full min-h-screen">
      <div
        className="absolute top-0 w-full h-full rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(var(--heroui-gradColor)) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col gap-5 px-[10%]">
        <h1 className="text-5xl font-bold text-center">How can we help?</h1>
        <p className="text-center text-foreground/50">
          Get in touch with our support team for onboarding support or product
          questions.
        </p>
        <div className="grid grid-cols-2 rounded-xl bg-background/50 border border-gray-500 p-10 mt-20 h-[40%] w-full">
          <div className="flex flex-col gap-4 border-r border-gray-500 pe-10">
            <h1 className="text-xl font-bold">Send us an email</h1>
            <Input
              className="border rounded-xl border-borderColor"
              placeholder="Enter your email"
            />
            <Textarea
              className="border rounded-xl border-borderColor"
              placeholder="Elaborate about your issue."
            />
            <Button className="mt-10">Send</Button>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 ps-5">
            <h1 className="text-2xl font-bold">Join the community</h1>

            <div className="flex gap-5">
              <Button className="items-center flex">
                <FaDiscord /> Discord
              </Button>
              <Button>
                <FaTwitter />
                Twitter
              </Button>
              <Button>
                <FaFacebook />
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

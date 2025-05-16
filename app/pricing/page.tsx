import { Button } from "@heroui/button";

export default function PricingPage() {
  return (
    <section className="relative py-8 md:py-20 w-full min-h-screen">
      <div
        className="absolute top-0 w-full h-full rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(var(--heroui-gradColor)) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col gap-5">
        <h1 className="text-5xl font-bold text-center">Pricing</h1>
        <p className="text-center text-foreground/50">
          Checkout the plans we provide for our services. You are not cashed for
          free trials.
        </p>
        <div className="grid grid-cols-3 gap-10 mt-10 px-[10%]">
          <div className="flex flex-col gap-3 border-2 p-4 border-scrollColor rounded-xl">
            <h1 className="font-bold text-xl">Free Plan</h1>
            <p className="text-sm">Access to all essential features.</p>
            <div className="flex gap-2 my-5">
              <p className="text-xs">US</p>
              <h1 className="text-5xl font-bold">$0</h1>
              <p className="my-auto text-foreground/70">per month</p>
            </div>
            <ul className="list-disc px-4">
              <li>No credit card required</li>
              <li>Access to all free designs</li>
              <li>Free trial to AI Designer</li>
              <li>Limited shipments for designer products</li>
            </ul>
            <Button className="bg-scrollColor/50 mt-10">Start Free</Button>
          </div>
          <div className="flex flex-col gap-3 border-2 p-4 border-blue-500 rounded-xl">
            <h1 className="font-bold text-xl">Pro Plan</h1>
            <p className="text-sm">Access to special features.</p>
            <div className="flex gap-2 my-5">
              <p className="text-xs">US</p>
              <h1 className="text-5xl font-bold">$20</h1>
              <p className="my-auto text-foreground/70">per month</p>
            </div>
            <ul className="list-disc px-4">
              <li>Credit card required</li>
              <li>Access to all free and pro designs</li>
              <li>Full access to AI Designer</li>
              <li>25 shipments for designer products</li>
            </ul>
            <Button className="bg-blue-500/50 mt-10">Go Pro</Button>
          </div>
          <div className="flex flex-col gap-3 border-2 p-4 border-orange-500 rounded-xl">
            <h1 className="font-bold text-xl">Commercial Plan</h1>
            <p className="text-sm">Suitable for large scale access.</p>
            <div className="flex gap-2 my-5">
              <p className="text-xs">US</p>
              <h1 className="text-5xl font-bold">$100</h1>
              <p className="my-auto text-foreground/70">per month</p>
            </div>
            <ul className="list-disc px-4">
              <li>Credit card required</li>
              <li>Access to every design</li>
              <li>Full access to AI Designer</li>
              <li>120 shipments for designer products</li>
            </ul>
            <Button className="bg-orange-500/50 mt-10">Go Commerical</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

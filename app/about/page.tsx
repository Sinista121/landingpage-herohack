export default function AboutPage() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-4 py-8 md:py-20 w-full">
      <div
        className="absolute top-0 w-full h-full rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(var(--heroui-gradColor)) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 pb-20">
        <h1 className="text-5xl font-bold text-center">About Us</h1>
        <p className="mt-10 text-xl text-center w-full px-[10%]">
          <span className="font-bold">Founded in 2023</span>, our company is
          dedicated to making high-quality design accessible and effortless for
          individuals and businesses alike. We believe that great design should
          not be a privilege but a powerful tool that enhances creativity,
          efficiency, and business success.{" "}
          <span className="font-bold">
            With a focus on user-friendly solutions
          </span>
          , we offer innovative and customized designs that cater to a variety
          of needs, helping brands and individuals bring their visions to life
          with ease. Whether it is streamlining workflows, improving aesthetics,
          or elevating brand presence, we are committed to providing{" "}
          <span className="font-bold">
            cutting-edge design resources that empower our clients to thrive in
            an increasingly competitive landscape
          </span>
          . As we continue to evolve, we remain passionate about delivering
          value, fostering creativity, and ensuring that design is available to
          everyone, regardless of their experience or budget. Our mission is to
          simplify the design process while maintaining excellence, making it
          more intuitive and accessible for all.
        </p>
      </div>
    </section>
  );
}

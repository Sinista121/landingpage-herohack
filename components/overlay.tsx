"use client";

export default function Overlay() {
  const themeBackgroundColor = "hsl(var(--heroui-background))";
  return (
    <>
      <div
        className={`w-full h-full absolute z-10 opacity-80`}
        style={{
          backgroundColor: themeBackgroundColor,
        }}
      />{" "}
      <div
        className="w-full h-full absolute"
        style={{
          backgroundImage:
            'url("https://png.pngtree.com/thumb_back/fh260/background/20210915/pngtree-noise-texture-black-background-image_880568.jpg")',
        }}
      ></div>
    </>
  );
}

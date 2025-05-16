"use client";

import { semanticColors } from "@heroui/theme";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Overlay() {
  const { theme } = useTheme();
  const [color, setColor] = useState<string>();

  useEffect(() => {
    if (theme) setColor(theme);
  }, [theme]);

  // const themeBackgroundColor = `${
  //   (semanticColors[color === "dark" ? "dark" : "light"].background as any)
  //     .DEFAULT
  // }cd`;

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

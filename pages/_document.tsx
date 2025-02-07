import { Html, Head, Main, NextScript } from "next/document";
import { useEffect, useState } from "react";

export default function Document() {
  const [theme, setTheme] = useState<"light" | "sunset">("light");

  useEffect(() => {
    if (localStorage.getItem("theme") === "sunset") {
      setTheme("sunset");
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <Html lang="en">
      <Head />
      <body className="antialiased" data-theme={theme}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

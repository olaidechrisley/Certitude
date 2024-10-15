import "@/styles/globals.css";
import localFont from "next/font/local";
import { Poppins, Lemon } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const lemon = Lemon({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
});
const segoe = localFont({
  src: [
    {
      path: "../assets/fonts/Segoe UI.ttf",
      weight: "400",
    },
    {
      path: "../assets/fonts/Segoe UI Bold.ttf",
      weight: "700",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --lemon-font: ${lemon.style.fontFamily};
          --poppins-font: ${poppins.style.fontFamily};
          --segoe-font: ${segoe.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

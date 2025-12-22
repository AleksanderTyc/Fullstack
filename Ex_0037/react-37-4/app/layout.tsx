import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";

const albertSans = Albert_Sans({
  subsets:['latin'],
  display:'swap'
});
// swap means that Next.js will initially use a susbstitute font to display the page,
// and then replace with Albert when it loads.

const montserratAlternates = Montserrat_Alternates({
  subsets:['latin'],
  display:'swap',
  weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat-alternates'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <div className="relative">
              {/* Desktop icon */}
              <img
                src="/printforge-logo.svg"
                alt="printforge logo home"
                className="w-[200px] h-auto hidden md:block"
              />
              {/* Mobile icon */}
              <img
                src="/printforge-logo-icon.svg"
                alt="printforge logo icon home"
                className="w-[40px] h-auto hidden md:hidden"
              />
            </div>
            <ul className="flex items-center gap-2.5 uppercase">
              <li>3D models</li>
              <li>about</li>
            </ul>
          </nav>
        </header>
        {children}
        (C) 1410 Urlyk von Jungingen
      </body>
    </html>
  );
}

import "./globals.css";

import PrintforgeLogoIcon from '@/public/printforge-logo-icon.svg';
import PrintforgeLogo from '@/public/printforge-logo.svg';

import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import Image from "next/image";

// Link - client side navigation - no page reload, state is preserved, interactivity is continued
import Link from "next/link";

import { RootLayoutPropsType } from '@/app/types/index';

const albertSans = Albert_Sans({
  subsets: ['latin'],
  display: 'swap'
});
// swap means that Next.js will initially use a susbstitute font to display the page,
// and then replace with Albert when it loads.

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat-alternates'
});

export default function RootLayout({ children }: RootLayoutPropsType) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <Link href="/">
              <div className="relative">
                {/* Desktop icon */}
                <Image
                  src={PrintforgeLogo}
                  alt="printforge logo home"
                  className="w-[200px] h-auto hidden md:block"
                />
                {/* Mobile icon */}
                <Image
                  src={PrintforgeLogoIcon}
                  alt="printforge logo icon home"
                  className="w-[40px] h-auto block md:hidden"
                />
              </div>
            </Link>
            <ul className="flex items-center gap-2.5 uppercase">
              <li><Link href="/3d-models">3D models</Link></li>
              <li><Link href="/about">about</Link></li>
            </ul>
          </nav>
        </header>
        {children}
        (C) 1410 Urlyk von Jungingen
      </body>
    </html>
  );
}

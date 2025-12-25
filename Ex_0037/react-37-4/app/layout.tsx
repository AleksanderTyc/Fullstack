import "./globals.css";

import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import Image from "next/image";

// Link - client side navigation - no page reload, state is preserved, interactivity is continued
import Link from "next/link";

import { RootLayoutPropsType } from '@/app/types/index';
import { Navbar } from '@/app/components/Navbar';

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
        <Navbar />
        {children}
        (C) 1410 Urlyk von Jungingen
      </body>
    </html>
  );
}

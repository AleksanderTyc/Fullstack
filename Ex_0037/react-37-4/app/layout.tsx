import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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

import Link from "next/link";
import Image from "next/image";

import PrintforgeLogoIcon from '@/public/printforge-logo-icon.svg';
import PrintforgeLogo from '@/public/printforge-logo.svg';

import { LinkComponent } from "@/app/components/LinkComponent";

function Navbar() {
    return (
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
                    <li><LinkComponent className='' href="/3d-models" display='3D models' /></li>
                    <li><LinkComponent className='' href="/about" display='about' /></li>
                </ul>
            </nav>
        </header>
    );
}
export { Navbar };

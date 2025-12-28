'use client'

import type { JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { LinkComponentProps } from "@/app/types";

function LinkComponent(props: LinkComponentProps ): JSX.Element {
    const currentPath = usePathname();
    const linkSelected: boolean = currentPath === props.href;
    const actualClassName = props.className + (linkSelected ? " currently-active" : "");
    return (
        <Link className={actualClassName} href={props.href}>
            {props.display}
        </Link>
    );
}

export { LinkComponent };

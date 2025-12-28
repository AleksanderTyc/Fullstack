import type { JSX } from "react";
import Link from "next/link";

import type { Category } from "@/app/types";
import { getAllCategories } from "@/app/lib/categories";

import { LinkComponent } from "@/app/components/LinkComponent";

export default function NavCategories(): JSX.Element {

    const categories: Category[] = getAllCategories();
    const renderedCategories: Array<JSX.Element> = categories.map(
        (category, index) => (<li className="text-sm uppercase" key={`${category.slug}`}>
            <LinkComponent
                className="px-4 py-2 text-gray-700 transition-colors rounded-md cursor-pointer hover:text-orange-accent"
                href={`/3d-models/categories/${category.slug}`}
                display={category.displayName}
            />
        </li>)
    );
    renderedCategories.unshift(
        <li className="text-sm uppercase" key='all'>
            <LinkComponent
                className="px-4 py-2 text-gray-700 transition-colors rounded-md cursor-pointer hover:text-orange-accent"
                href={`/3d-models`}
                display='All'
            />
        </li>
    );
    return (
        <ul className="flex px-4 py-3 whitespace-nowrap md:flex-col md:p-0 md:space-x-0 md:space-y-3">
            {renderedCategories}
        </ul>
    );
}

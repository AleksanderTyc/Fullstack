import type { JSX } from "react";
import Link from "next/link";

import type { Category } from "@/app/types";
import { getAllCategories } from "@/app/lib/categories";

export default function NavCategories(): JSX.Element {

  const categories: Category[] = getAllCategories();
  const renderedCategories: Array<JSX.Element> = categories.map(
    (category, index) => (<li key={`${category.slug}`}>
      <Link href={`/3d-models/categories/${category.slug}`}>
        {category.displayName}
      </Link>
    </li>)
  );
  renderedCategories.unshift(
    <li key='all'>
      <Link href={`/3d-models/categories/all`}>
        All
      </Link>
    </li>
  );
  return (
    <ul>{renderedCategories}</ul>
  );
}

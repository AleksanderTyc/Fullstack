import { Category } from "../types";

const categories: Array<Category> = [
    { "displayName": "3D Printer", "slug": "3d-printer" },
    { "displayName": "Art", "slug": "art" },
    { "displayName": "Education", "slug": "education" },
    { "displayName": "Fashion", "slug": "fashion" },
    { "displayName": "Hobby & DIY", "slug": "hobby-diy" },
    { "displayName": "Household", "slug": "household" },
    { "displayName": "Miniatures", "slug": "miniatures" },
    { "displayName": "Props & Cosplay", "slug": "props-cosplay" },
    { "displayName": "Tools", "slug": "tools" },
    { "displayName": "Toys & Games", "slug": "toys-games" }
];

function getAllCategories(): Category[] {
    return categories;
}

function getCategoryBySlug(slug: string): Category {
    const categoryBySlug: Category | undefined = categories.find((category: Category): boolean => category.slug === slug);
    if (categoryBySlug === undefined) {
        throw new Error(`* E * Category with slug ${slug} does not exist.`);
    }
    return categoryBySlug;
}

function getCategoryNameBySlug(slug: string): string {
    const categoryBySlug: Category = getCategoryBySlug(slug);
    return categoryBySlug.displayName;
}

export { getAllCategories, getCategoryBySlug, getCategoryNameBySlug };

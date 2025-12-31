import type { ReactNode } from "react";

type RootLayoutPropsType = Readonly<{ children: ReactNode }>;

type Model = {
    id: number,
    name: string,
    description: string,
    likes: number,
    image: string,
    category: string,
    dateAdded: string
};

type Category = {
    displayName: string,
    slug: string
};

type PillProps = {
    children: ReactNode
    className?: string
};

type ModelDetailPageProps = {
    params: Promise<{ id: number }>
};

type IndividualCategoryPageProps = {
    params: Promise<{ categoryName: string }>,
    searchParams: Promise<{ query: string }>
};

type ModelsGridProps = {
    title: string,
    models: Array<Model>
};

type LinkComponentProps = {
    className: string,
    href: string,
    display: string | ReactNode
};

export type {
    RootLayoutPropsType,
    Model,
    Category,
    PillProps,
    ModelDetailPageProps,
    IndividualCategoryPageProps,
    ModelsGridProps,
    LinkComponentProps
};

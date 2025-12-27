import type { ReactNode } from "react";

type RootLayoutPropsType = Readonly<{ children: React.ReactNode }>;

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
    params: Promise<{ categoryName: string }>
};

type ModelsGridProps = {
    title: string,
    models: Array<Model>
};

export type {
    RootLayoutPropsType,
    Model,
    Category,
    PillProps,
    ModelDetailPageProps,
    IndividualCategoryPageProps,
    ModelsGridProps
};

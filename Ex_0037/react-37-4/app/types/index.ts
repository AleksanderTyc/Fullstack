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

type PillProps = {
    children: ReactNode
    className?: string
};

type ModelDetailPageProps = {
    params: {id: number}
};

export type { RootLayoutPropsType, Model, PillProps, ModelDetailPageProps };

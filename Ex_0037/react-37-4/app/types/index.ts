type RootLayoutPropsType = Readonly<{ children: React.ReactNode }>;

type Model = {
    id:number,
    name:string,
    description: string,
    likes: number,
    image: string,
    category: string,
    dateAdded: string
};

export type { RootLayoutPropsType, Model };

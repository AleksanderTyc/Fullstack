import { JSX } from 'react';

import { RootLayoutPropsType } from '@/app/types/index';
import NavCategories from '../components/NavCategories';


export default function ModelsLayout({ children }: RootLayoutPropsType): JSX.Element {
    return (
        <>
            <NavCategories />
            {children}
        </>
    );
}
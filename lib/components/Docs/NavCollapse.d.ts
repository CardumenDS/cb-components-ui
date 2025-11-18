import React from 'react';
interface CollapseItem {
    id: string;
    title: string;
    children: React.ReactNode;
}
interface NavCollapseProps {
    items: CollapseItem[];
}
declare const NavCollapse: React.FC<NavCollapseProps>;
export default NavCollapse;

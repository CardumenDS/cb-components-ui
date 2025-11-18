import React from 'react';
interface DocLayoutProps {
    title?: string;
    children?: React.ReactNode;
    sidebar?: React.ReactNode;
    headerRight?: React.ReactNode;
    sidebarWidth?: number;
}
declare const DocLayout: React.FC<DocLayoutProps>;
export default DocLayout;

import React from 'react';
interface DocCardProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
    snippet?: string;
}
declare const DocCard: React.FC<DocCardProps>;
export default DocCard;
